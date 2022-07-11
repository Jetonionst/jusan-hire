package kz.jusan.backend.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPTable;
import kz.jusan.backend.dto.*;
import kz.jusan.backend.entity.AnketaEntity;


public class PdfGenerator {
    public static String FILE = "src/main/resources/templates/output.pdf";
    private static Font catFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,
            Font.BOLD);
    private static Font redFont = new Font(Font.FontFamily.TIMES_ROMAN, 12,
            Font.NORMAL, BaseColor.RED);
    private static Font subFont = new Font(Font.FontFamily.TIMES_ROMAN, 16,
            Font.BOLD);
    private static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12,
            Font.BOLD);
    public static final String TIMES_BOLD = "/static/fonts/TIMCYRB.ttf";
    public static final String TIMES_BOLD_ITALIC = "/static/fonts/TIMCYRBI.ttf";
    public static final String TIMES_ITALIC = "/static/fonts/TIMCYRI.ttf";

    public static void addMetaData(Document document, AnketaEntity anketa) {
        document.addTitle(anketa.getIin());
        document.addSubject("Using iText");
        document.addKeywords("Java, PDF, iText");
        document.addAuthor("Lars Vogel");
        document.addCreator("Lars Vogel");
    }

    public static void addContent(Document document, AnketaEntity anketa) throws DocumentException, IOException {
        BaseFont bf= BaseFont.createFont(TIMES_BOLD, BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
        Font smallBold = new Font(bf,12,Font.NORMAL);
        document.add(new Paragraph("АНКЕТА КАНДИДАТА      "+anketa.getIin(), smallBold));
        document.add(new Paragraph("\n"));
        createTable1(document, anketa, smallBold);
        document.add(new Paragraph("Укажите, пожалуйста, номера телефонов, по которым с Вами можно связаться:", smallBold));
        createTable2(document, anketa, smallBold);
        document.add(new Paragraph("Местожительство:", smallBold));
        createTable3(document, anketa, smallBold);
        document.add(new Paragraph("Образование (в том числе неоконченное):", smallBold));
        createTable4(document, anketa, smallBold);
        document.add(new Paragraph("Специальные курсы, школы, стажировки, семинары:", smallBold));
        List<String> headers = new ArrayList<String>(Arrays.asList(
                "Год окончания",
                "Длительность обучения",
                "Полное наименование курсовя",
                "Специальность",
                "Учёная степень, сертификаты"));
        createTable5(document, anketa, smallBold, headers);
        document.add(new Paragraph("Укажите предшествующие 3 (три) места работы в обратном хронологическом " +
                "порядке, начиная с последнего или действующего места работы:", smallBold));
        headers = new ArrayList<>(Arrays.asList(
                "Период работы (месяц, год)",
                "Полное название организации, вид деятельности, адрес, телефон",
                "Наименование должности",
                "ФИО руководителя, телефон",
                "Причина увольнения"));
        createTable6(document, anketa, smallBold, headers);
        document.add(new Paragraph("Укажите не менее 3 (трёх) лиц, которые могут дать Вам профессиональную " +
                "рекомендацию (бывшие и/или настоящие руководители, коллеги):", smallBold));
        headers = new ArrayList<>(Arrays.asList(
                "ФИО",
                "Место работы, должность",
                "Телефон"
        ));
        createTable7(document, anketa, smallBold, headers);
        document.add(new Paragraph("\n"));
        PdfPTable table = new PdfPTable(2);
        table.setHorizontalAlignment(Element.ALIGN_JUSTIFIED);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("Семейное положение: ", smallBold));
        table.addCell(new Paragraph(anketa.getMarriageStatus(), smallBold));
        document.add(table);
        document.add(new Paragraph("Супруг (-а)", smallBold));
        headers = new ArrayList<>(Arrays.asList(
                "ФИО (полностью), дата рождения",
                "Место работы",
                "Должность",
                "Адрес места жительства",
                "Гражданство",
                "Контакты"));
        createTable8(document, anketa, smallBold, headers);
        document.add(new Paragraph("Дети:", smallBold));
        headers = new ArrayList<>(Arrays.asList(
                "ФИО (полностью)",
                "Дата рождения",
                "Телефон",
                "Место учебы, работы"));
        createTable9(document, anketa, smallBold, headers);
        document.add(new Paragraph("Ближайшие родственники:", smallBold));
        headers = new ArrayList<>(Arrays.asList(
                "Степень родства",
                "ФИО",
                "Дата рождения",
                "Место работы, должность",
                "Домашний адрес, номер телефона / сотового"));
        createTable10(document, anketa, smallBold, headers);
        document.add(new Paragraph("Дополнительная информация:", smallBold));
        headers = new ArrayList<>(Arrays.asList(
                "Являетесь ли Вы руководителем/учредителем (соучредителем), членом совета директоров и/или правления коммерческих организаций (ИП/ТОО)",
                "Наименование, ИНН, адрес, вид деятельности, телефон"));
        createTable11(document, anketa, smallBold, headers);
        document.add(new Paragraph("\n"));
        PdfPTable isRelativeTable = new PdfPTable(2);
        isRelativeTable.setHorizontalAlignment(Element.ALIGN_JUSTIFIED);
        isRelativeTable.setWidthPercentage(100);
        isRelativeTable.addCell(new Paragraph("Имеете ли Вы родственников, членов семьи, работающих в АО \" Jusan Bank\" " +
                "или связанных с деятельностью  АО \"Jusan Bank\"", smallBold));
        String isRelativeJusan = getBoolAsYesOrNo(anketa.isRelativeJusanEmployee());
        isRelativeTable.addCell(new Paragraph(isRelativeJusan, smallBold));
        document.add(isRelativeTable);
        headers = new ArrayList<>(Arrays.asList(
                "Степень родства",
                "ФИО",
                "Подразделение, должность"));
        createTable12(document, anketa, smallBold, headers);
        document.add(new Paragraph("\n"));
        createTable13(document, anketa, smallBold);
        document.add(new Paragraph("\n"));
        createTable14(document, anketa, smallBold);
        document.add(new Paragraph("\n"));
        createTable15(document, anketa, smallBold);
        document.add(new Paragraph("\n"));
        headers = new ArrayList<>(Arrays.asList(
                "Внимательно прочитайте и ответьте, пожалуйста, на следующие вопросы",
                "ДА",
                "НЕТ",
                "Раскрыть"));
        createTable16(document, anketa, smallBold, headers);
        document.add(new Paragraph("\n"));
        createTable17(document, anketa, smallBold);
        document.add(new Paragraph("\nВ соответствии с требованиями Закона Республики Казахстан «О персональных " +
                "данных и их защите» даю  АО \" Jusan Bank\" (далее – «Банк») безусловное согласие на сбор, " +
                "обработку, хранение и распространение Банком информации обо мне [и представляемом мной лице]," +
                " включая мои персональные данные [и персональные данные представляемого мной лица], в том числе" +
                " биометрические, зафиксированные на электронном, бумажном и любом ином носителе, а также происходящие" +
                " в них в будущем изменения и дополнения, в связи с возникновением с Банком, в том числе в будущем," +
                " любых правоотношений, связанных, включая, но не ограничиваясь, с банковским и/или иным обслуживанием.\n" +
                "При этом мои персональные данные [и персональные данные представляемого мной лица] должны " +
                "распространяться Банком с учетом ограничений, установленных законодательством Республики Казахстан," +
                " в том числе, ст. 50 Закона Республики Казахстан «О банках и банковской деятельности в Республике" +
                " Казахстан».", smallBold));
        document.add(new Paragraph("\n" +
                "ФИО___________________________   Подпись _________________________\n" +
                "\n" +
                "Дата  ____ /____________ / 20 __ г.\t", smallBold));
    }

    private static void createTable1(Document document, AnketaEntity anketa, Font font)
            throws DocumentException {
        PdfPTable table = new PdfPTable(2);
        table.setHorizontalAlignment(Element.ALIGN_JUSTIFIED);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("ФИО", font));
        table.addCell(new Paragraph(anketa.getFio()+" ", font));
        table.addCell(new Paragraph("Если Вы сменили фамилию, укажите, пожалуйста, прежнюю", font));
        table.addCell(new Paragraph(anketa.getPreviousName()+" ", font));
        table.addCell(new Paragraph("Число, месяц и год рождения, место рождения", font));
        table.addCell(new Paragraph(anketa.getBirthDate() + ", " + anketa.getBirthPlace(), font));
        table.addCell(new Paragraph("Национальность", font));
        table.addCell(new Paragraph(anketa.getNationality()+" ", font));
        table.addCell(new Paragraph("Гражданство", font));
        table.addCell(new Paragraph(anketa.getCitizenship()+" ", font));
        table.addCell(new Paragraph("Паспорт, удостоверение личности", font));
        PdfPTable passportDetails = new PdfPTable(2);
        passportDetails.addCell(new Paragraph("Серия: "+ anketa.getPassportSerie() + ", " + "Номер: " + anketa.getPassportNumber(), font));
        passportDetails.addCell(new Paragraph("Кем и когда выдан: " + anketa.getPassportIssuedBy() + ", "+ anketa.getPassportIssuedAt(), font));
        table.addCell(passportDetails);
        document.add(table);
    }

    private static void createTable2(Document document, AnketaEntity anketa, Font font) throws DocumentException {
        PdfPTable table = new PdfPTable(2);
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("Телефоны", font));
        PdfPTable phoneTypes = new PdfPTable(2);
        phoneTypes.addCell(new Paragraph("домашний", font));
        phoneTypes.addCell(new Paragraph(anketa.getHomePhone()+" ", font));
        phoneTypes.addCell(new Paragraph("рабочий", font));
        phoneTypes.addCell(new Paragraph(anketa.getWorkPhone()+" ", font));
        phoneTypes.addCell(new Paragraph("мобильный", font));
        phoneTypes.addCell(new Paragraph(anketa.getMobilePhone()+" ", font));
        phoneTypes.addCell(new Paragraph("Контактный, ФИО, степень родства (родственника и/или знакомого)", font));
        phoneTypes.addCell(new Paragraph(anketa.getRelativePhone()+", "+anketa.getRelativeFIO()+", "+anketa.getRelativeLevel(), font));
        phoneTypes.addCell(new Paragraph("e-mail", font));
        phoneTypes.addCell(new Paragraph(anketa.getEmail()+" ", font));
        table.addCell(phoneTypes);
        document.add(table);
    }

    private static void createTable3(Document document, AnketaEntity anketa, Font font) throws DocumentException {
        PdfPTable table = new PdfPTable(2);
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("Адрес постоянной регистрации:", font));
        table.addCell(new Paragraph("Адрес фактического проживания:", font));
        table.addCell(new Paragraph("Город: "+anketa.getPermanentCity(), font));
        table.addCell(new Paragraph("Город: "+anketa.getFactualCity(), font));
        table.addCell(new Paragraph("Область: "+anketa.getPermanentRegion(), font));
        table.addCell(new Paragraph("Область: "+anketa.getFactualRegion(), font));
        table.addCell(new Paragraph("Район: "+anketa.getPermanentDistrict(), font));
        table.addCell(new Paragraph("Район: "+anketa.getFactualDistrict(), font));
        table.addCell(new Paragraph("Улица: "+anketa.getPermanentStreet(), font));
        table.addCell(new Paragraph("Улица: "+anketa.getFactualStreet(), font));
        table.addCell(new Paragraph(String.format("Дом: %s, Корпус: %s, Квартира: %s",
                anketa.getPermanentHouse(), anketa.getPermanentCorpus(), anketa.getPermanentApartment()), font));
        table.addCell(new Paragraph(String.format("Дом: %s, Корпус: %s, Квартира: %s",
                anketa.getFactualHouse(), anketa.getFactualCorpus(), anketa.getFactualApartment()), font));
        document.add(table);
    }

    private static void createTable4(Document document, AnketaEntity anketa, Font font) throws DocumentException {
        PdfPTable table = new PdfPTable(4);
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("Даты начала и окончания обучения", font));
        table.addCell(new Paragraph("Полное название учебного заведения", font));
        table.addCell(new Paragraph("Специальность,\n" + "форма обучения"+anketa.getPermanentCity(), font));
        table.addCell(new Paragraph("Квалификация"+anketa.getFactualCity(), font));
        for (EducationDto educationDto: anketa.getEducationList()) {
            PdfPTable dates = new PdfPTable(2);
            dates.addCell(new Paragraph(educationDto.getStartDate(), font));
            dates.addCell(new Paragraph(educationDto.getEndDate(), font));
            table.addCell(dates);
            table.addCell(new Paragraph(educationDto.getUniversity(), font));
            table.addCell(new Paragraph(educationDto.getSpeciality() + ", " + educationDto.getFormOfStudy(), font));
            table.addCell(new Paragraph(educationDto.getQualification(), font));
        }
        document.add(table);
    }

    public static void createTable5(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        for (ExtracurricularDto extra: anketa.getExtracurricularList()) {
            table.addCell(new Paragraph(extra.getEndDate(), font));
            table.addCell(new Paragraph(extra.getEducationTime(), font));
            table.addCell(new Paragraph(extra.getEducationName(), font));
            table.addCell(new Paragraph(extra.getSpeciality(), font));
            table.addCell(new Paragraph(extra.getDegree(), font));
        }
        document.add(table);
    }

    public static void createTable6(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        for (WorkplaceDto workplace: anketa.getLastThreeWorkplaces()) {
            table.addCell(new Paragraph(workplace.getWorkPeriod(), font));
            table.addCell(new Paragraph(workplace.getOrganizationName()+", "+workplace.getOrganizationType()+", " +
                    workplace.getOrganizationAddress()+", "+workplace.getOrganizationPhone(), font));
            table.addCell(new Paragraph(workplace.getSpeciality(), font));
            table.addCell(new Paragraph(workplace.getEmployerFio()+", "+workplace.getEmployerNumber(), font));
            table.addCell(new Paragraph(workplace.getLeavingReazon(), font));
        }
        document.add(table);
    }

    public static void createTable7(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        for (RecommendationPersonDto recomPerson: anketa.getThreeRecommendationPeople()) {
            table.addCell(new Paragraph(recomPerson.getPeopleFio(), font));
            table.addCell(new Paragraph(recomPerson.getPeopleWorkPlace()+", "+recomPerson.getPeopleMajor(), font));
            table.addCell(new Paragraph(recomPerson.getPeoplePhone(), font));
        }
        document.add(table);
    }

    public static void createTable8(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        for (LifeCompanionDto companion: anketa.getLifeCompanion()) {
            table.addCell(new Paragraph(companion.getFio()+", "+companion.getBirthDate(), font));
            table.addCell(new Paragraph(companion.getWorkPlace(), font));
            table.addCell(new Paragraph(companion.getMajor(), font));
            table.addCell(new Paragraph(companion.getAddress(), font));
            table.addCell(new Paragraph(companion.getCitizenship(), font));
            table.addCell(new Paragraph(companion.getPhone(), font));
        }
        document.add(table);
    }

    public static void createTable9(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        for (ChildDto child: anketa.getChilrenList()) {
            table.addCell(new Paragraph(child.getFio(), font));
            table.addCell(new Paragraph(child.getBirthDate(), font));
            table.addCell(new Paragraph(child.getPhone(), font));
            table.addCell(new Paragraph(child.getStudyOrWork(), font));
        }
        document.add(table);
    }

    public static void createTable10(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        for (RelativeDto relative: anketa.getRelativeList()) {
            table.addCell(new Paragraph(relative.getLevel(), font));
            table.addCell(new Paragraph(relative.getFio(), font));
            table.addCell(new Paragraph(relative.getBirthDate(), font));
            table.addCell(new Paragraph(relative.getWorkPlace() + ", "+ relative.getMajor(), font));
            table.addCell(new Paragraph(relative.getPhone(), font));
        }
        document.add(table);
    }

    public static void createTable11(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        for (CommercialOrganisationDto comm: anketa.getCommercialOrganisationList()) {
            table.addCell(new Paragraph(comm.getAnswer(), font));
            table.addCell(new Paragraph(comm.getOrganizationName()+", "+comm.getIin()+", "+comm.getAddress()+", "
                    + comm.getType() + ", "+comm.getPhone(), font));
        }
        document.add(table);
    }

    public static void createTable12(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        for (RelativeJusanEmployeeDto relative: anketa.getRelativeJusanEmployeeList()) {
            table.addCell(new Paragraph(relative.getLevel(), font));
            table.addCell(new Paragraph(relative.getFio(), font));
            table.addCell(new Paragraph(relative.getDivision()+", "+relative.getMajor(), font));
        }
        document.add(table);
    }

    public static void createTable13(Document document, AnketaEntity anketa, Font font) throws DocumentException {
        PdfPTable table = new PdfPTable(3);
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("Наличие автомобиля", font));
        table.addCell(new Paragraph(getBoolAsYesOrNo(anketa.isCarOwner()), font));
        PdfPTable tableInner = new PdfPTable(3);
        tableInner.addCell(new Paragraph("Модель", font));
        tableInner.addCell(new Paragraph("Год выпуска", font));
        tableInner.addCell(new Paragraph("Гос. номер", font));
        for (CarDto car: anketa.getCarList()) {
            table.addCell(new Paragraph(car.getModel(), font));
            table.addCell(new Paragraph(car.getYear(), font));
            table.addCell(new Paragraph(car.getGovNumber(), font));
        }
        document.add(table);
    }

    public static void createTable14(Document document, AnketaEntity anketa, Font font) throws DocumentException {
        PdfPTable table = new PdfPTable(2);
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("Отношение к воинской службе", font));
        if (anketa.isMilitary()){
            table.addCell(new Paragraph("Военнообязанный", font));
        } else {
            table.addCell(new Paragraph("Невоеннообязанный", font));
        }
        document.add(table);
    }

    public static void createTable15(Document document, AnketaEntity anketa, Font font) throws DocumentException {
        PdfPTable table = new PdfPTable(2);
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("Имеете ли Вы право на льготы согласно действующему законодательству?", font));
        table.addCell(new Paragraph(getBoolAsYesOrNo(anketa.isSVC()), font));
        document.add(table);
    }

    public static void createTable16(Document document, AnketaEntity anketa, Font font, List<String> headers) throws DocumentException {
        PdfPTable table = new PdfPTable(headers.size());
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        for (String header: headers) {
            table.addCell(new Paragraph(header, font));
        }
        table.addCell(new Paragraph("Имеете ли Вы просроченный заем?", font));
        if (anketa.isExpiredLoan()){
            table.addCell(new Paragraph("ДА", font));
            table.addCell(new Paragraph("", font));
        } else {
            table.addCell(new Paragraph("", font));
            table.addCell(new Paragraph("НЕТ", font));
        }
        table.addCell(new Paragraph(anketa.getIsExpiredLoanAnswer(), font));
        table.addCell(new Paragraph("Привлекались ли Вы к уголовной ответственности?", font));
        if (anketa.isCriminal()){
            table.addCell(new Paragraph("ДА", font));
            table.addCell(new Paragraph("", font));
        } else {
            table.addCell(new Paragraph("", font));
            table.addCell(new Paragraph("НЕТ", font));
        }
        table.addCell(new Paragraph(anketa.getIsCriminalAnswer(), font));
        table.addCell(new Paragraph("Привлекались ли Ваши близкие родственники, члены семьи  к уголовной ответственности?", font));
        if (anketa.isRelativeCriminal()){
            table.addCell(new Paragraph("ДА", font));
            table.addCell(new Paragraph("", font));
        } else {
            table.addCell(new Paragraph("", font));
            table.addCell(new Paragraph("НЕТ", font));
        }
        table.addCell(new Paragraph(anketa.getIsRelativeCriminalAnswer(), font));
        table.addCell(new Paragraph("Против Вас когда-либо возбуждалось уголовное дело?", font));
        if (anketa.isCriminalDelo()){
            table.addCell(new Paragraph("ДА", font));
            table.addCell(new Paragraph("", font));
        } else {
            table.addCell(new Paragraph("", font));
            table.addCell(new Paragraph("НЕТ", font));
        }
        table.addCell(new Paragraph(anketa.getIsCriminalDeloAnswer(), font));
        table.addCell(new Paragraph("Выплачиваете ли Вы алименты?", font));
        if (anketa.isAlimentPayer()){
            table.addCell(new Paragraph("ДА", font));
            table.addCell(new Paragraph("", font));
        } else {
            table.addCell(new Paragraph("", font));
            table.addCell(new Paragraph("НЕТ", font));
        }
        table.addCell(new Paragraph(anketa.getIsAlimentPayerAnswer(), font));
        table.addCell(new Paragraph("Привлекались ли Вы к административной ответственности?", font));
        if (anketa.isHooligan()){
            table.addCell(new Paragraph("ДА", font));
            table.addCell(new Paragraph("", font));
        } else {
            table.addCell(new Paragraph("", font));
            table.addCell(new Paragraph("НЕТ", font));
        }
        table.addCell(new Paragraph(anketa.getIsHooliganAnswer(), font));
        document.add(table);
    }

    public static void createTable17(Document document, AnketaEntity anketa, Font font) throws DocumentException {
        PdfPTable table = new PdfPTable(2);
        table.setHorizontalAlignment(Element.ALIGN_LEFT);
        table.setWidthPercentage(100);
        table.addCell(new Paragraph("Дополнительная информация о себе:", font));
        table.addCell(new Paragraph(anketa.getAdditionalInfo(), font));
        table.addCell(new Paragraph("Есть ли у Вас дополнительный доход (работа, дистрибьютерство/представительство в торговых компаниях)", font));
        table.addCell(new Paragraph(getBoolAsYesOrNo(anketa.isExtraIncome()), font));
        document.add(table);
    }

    public static String getBoolAsYesOrNo(boolean bool){
        if (bool) return "ДА";
        else return "НЕТ";
    }
}

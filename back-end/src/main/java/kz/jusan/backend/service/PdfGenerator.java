package kz.jusan.backend.service;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import kz.jusan.backend.dto.*;
import kz.jusan.backend.entity.AnketaEntity;
import org.springframework.security.core.parameters.P;

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


    // iText allows to add metadata to the PDF which can be viewed in your Adobe
    // Reader
    // under File -> Properties
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
}

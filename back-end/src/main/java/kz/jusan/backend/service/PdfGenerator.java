package kz.jusan.backend.service;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
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
    }

    private static void createTable1(Document document, AnketaEntity anketa, Font font)
            throws DocumentException {
        PdfPTable table = new PdfPTable(2);
        table.setHorizontalAlignment(Element.ALIGN_JUSTIFIED);
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
        table.setHorizontalAlignment(Element.ALIGN_BASELINE);
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
        table.setHorizontalAlignment(Element.ALIGN_BASELINE);
        table.addCell(new Paragraph("Адрес постоянной регистрации:", font));
        table.addCell(new Paragraph("Город: "+anketa.getPermanentCity(), font));
        table.addCell(new Paragraph("Область: "+anketa.getPermanentRegion(), font));
        table.addCell(new Paragraph("Район: "+anketa.getPermanentDistrict(), font));
        table.addCell(new Paragraph("Улица: "+anketa.getPermanentStreet(), font));
        table.addCell(new Paragraph(String.format("Дом: %s, Корпус: %s, Квартира: %s",
                anketa.getPermanentHouse(), anketa.getPermanentCorpus(), anketa.getPermanentApartment()), font));
        table.addCell(new Paragraph("Адрес фактического проживания: \n" +
                "\uF0A8 совпадает с адресом постоянной регистрации\n", font));
        table.addCell(new Paragraph("Город: "+anketa.getFactualCity(), font));
        table.addCell(new Paragraph("Область: "+anketa.getFactualRegion(), font));
        table.addCell(new Paragraph("Район: "+anketa.getFactualDistrict(), font));
        table.addCell(new Paragraph("Улица: "+anketa.getFactualStreet(), font));
        table.addCell(new Paragraph(String.format("Дом: %s, Корпус: %s, Квартира: %s",
                anketa.getFactualHouse(), anketa.getFactualCorpus(), anketa.getFactualApartment()), font));
        document.add(table);
    }

    private static void createList(Section subCatPart) {
        List list = new List(true, false, 10);
        list.add(new ListItem("First point"));
        list.add(new ListItem("Second point"));
        list.add(new ListItem("Third point"));
        subCatPart.add(list);
    }

    private static void addEmptyLine(Paragraph paragraph, int number) {
        for (int i = 0; i < number; i++) {
            paragraph.add(new Paragraph(" "));
        }
    }
}

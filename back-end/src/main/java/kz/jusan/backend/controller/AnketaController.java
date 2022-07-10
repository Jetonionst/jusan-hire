package kz.jusan.backend.controller;

import com.itextpdf.text.Document;
import com.itextpdf.text.pdf.PdfWriter;
import kz.jusan.backend.dto.AnketaDto;
import kz.jusan.backend.entity.AnketaEntity;
import kz.jusan.backend.service.AnketaService;
import kz.jusan.backend.service.PdfGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.io.FileOutputStream;
import java.util.List;

@RestController
@RequestMapping("/api/v1/anketa")
public class AnketaController {
    @Autowired
    private AnketaService anketaService;
    @PostMapping("/submit")
    public ResponseEntity<Object> postAnketa(@RequestBody AnketaDto anketaDto) {
        anketaService.createAnketa(anketaDto);
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    @GetMapping("/all")
    public List<AnketaEntity> getAllAnketas() {
        return anketaService.getAllAnketas();
    }

    @GetMapping("/{iin}")
    public AnketaEntity findAnketaByIIN(@PathVariable("iin") String iin) {
        return anketaService.findAnketaByIIN(iin);
    }
    @DeleteMapping("/delete/{iin}")
    @Transactional
    public void deleteAnketaByIIN(@PathVariable("iin") String iin) {
        anketaService.deleteAnketaByIIN(iin);
    }

    @DeleteMapping("/delete/all")
    @Transactional
    public void deleteAllAnketas() {
        anketaService.deleteAllAnketas();
    }

    @GetMapping("/download-pdf/{iin}")
    public void generatePdf(@PathVariable("iin") String iin){
        try {
            PdfGenerator pdfGenerator = new PdfGenerator();
            Document document = new Document();
            AnketaEntity anketa = anketaService.findAnketaByIIN(iin);
            PdfWriter.getInstance(document, new FileOutputStream(pdfGenerator.FILE));
            document.open();
            pdfGenerator.addMetaData(document, anketa);
            pdfGenerator.addContent(document, anketa);
            document.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
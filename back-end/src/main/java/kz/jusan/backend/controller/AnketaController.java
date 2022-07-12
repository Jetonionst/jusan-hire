package kz.jusan.backend.controller;

import com.itextpdf.text.Document;
import com.itextpdf.text.pdf.PdfWriter;
import kz.jusan.backend.dto.AnketaDto;
import kz.jusan.backend.entity.AnketaEntity;
import kz.jusan.backend.entity.Attachment;
import kz.jusan.backend.service.AnketaService;
import kz.jusan.backend.service.AttachmentService;
import kz.jusan.backend.service.PdfGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.transaction.Transactional;
import java.io.FileOutputStream;
import java.util.List;

@RestController
@RequestMapping("/api/v1/anketa")
public class AnketaController {
    @Autowired
    private AnketaService anketaService;
    @Autowired
    private AttachmentService attachmentService;
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
    public ResponseEntity<Resource> generatePdf(@PathVariable("iin") String iin){
        Attachment attachment = attachmentService.createPdfAttachment(iin);
        System.out.println(attachment.getFileName());
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + attachment.getFileName() + "\"")
                .body(new FileSystemResource(attachment.getFilePath()));
    }

}
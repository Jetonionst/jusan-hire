package kz.jusan.backend.controller;

import kz.jusan.backend.dto.ResponseDto;
import kz.jusan.backend.entity.Attachment;
import kz.jusan.backend.service.AttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping(path="/api/v1")
@RequiredArgsConstructor
public class AttachmentController {

    private final AttachmentService attachmentService;

    @PostMapping(value = "/upload/image/{iin}")
    public ResponseDto uploadImage(@PathVariable("iin") String iin, @RequestParam("image") MultipartFile file) throws Exception {
        Attachment attachment = attachmentService.createAttachment(file, iin);
        String downloadURI = "";
        downloadURI = ServletUriComponentsBuilder.fromCurrentContextPath()
                        .path("/api/v1/download/")
                        .path(attachment.getId())
                        .toUriString();

        return new ResponseDto(attachment.getFileName(),
                downloadURI,
                file.getContentType(),
                file.getSize());
    }

    @PostMapping(value = "/upload/file/{iin}")
    public ResponseDto uploadDocument(@PathVariable("iin") String iin, @RequestParam("file") MultipartFile file) throws Exception {
        Attachment attachment = attachmentService.createAttachment(file, iin);
        String downloadURI = "";
        downloadURI = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/v1/download/")
                .path(attachment.getId())
                .toUriString();

        return new ResponseDto(attachment.getFileName(),
                downloadURI,
                file.getContentType(),
                file.getSize());
    }

    @GetMapping("/download/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable("fileId") String fileId) throws Exception {
        Attachment attachment = attachmentService.getAttachment(fileId);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(attachment.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + attachment.getFileName() + "\"")
                .body(new FileSystemResource(attachment.getFilePath()));
    }

    @GetMapping("/attachments/all")
    public List<Attachment> getAllAttachments() {
        return attachmentService.findAllAttachments();
    }

    @GetMapping("/attachments/{iin}")
    public List<Attachment> getAllAttachments(@PathVariable("iin") String iin) {
        return attachmentService.findAttachmentsByIin(iin);
    }
}

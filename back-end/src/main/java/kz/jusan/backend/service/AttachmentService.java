package kz.jusan.backend.service;

import kz.jusan.backend.entity.Attachment;
import kz.jusan.backend.repository.AttachmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AttachmentService {

    private final AttachmentRepository attachmentRepository;
    public Attachment createAttachment(MultipartFile file, String iin) throws Exception {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        String imgPath = "/tmp/"+iin;
        File directory = new File(imgPath);
        if (!directory.exists()){
            directory.mkdirs();
        }

        Path targetPath = Paths.get(imgPath+ File.separator + file.getOriginalFilename());
        Files.copy(file.getInputStream(), targetPath,
                StandardCopyOption.REPLACE_EXISTING);
        Attachment attachment = Attachment.builder()
                .fileName(fileName)
                .iin(iin)
                .fileType(file.getContentType())
                .filePath(targetPath.toString())
                .build();
        return attachmentRepository.save(attachment);
    }

    public Attachment getAttachment(String fileId) throws Exception {
        return attachmentRepository
                .findById(fileId)
                .orElseThrow(() -> new Exception("Attachment " + fileId + " not found"));
    }

    public List<Attachment> findAllAttachments() {
        return attachmentRepository.findAll();
    }

    public List<Attachment> findAttachmentsByIin(String iin) {
        return attachmentRepository.findAttachmentsByIin(iin);
    }
}

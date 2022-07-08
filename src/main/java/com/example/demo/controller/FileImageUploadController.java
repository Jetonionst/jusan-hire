package com.example.demo.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;


@RestController
@RequestMapping(path="/api/v1/upload")
public class FileImageUploadController {

    @PostMapping(value = "/image", produces = {MediaType.IMAGE_JPEG_VALUE, "application/json"})
    public String uploadImage(@RequestParam("file")MultipartFile file) throws Exception {
        System.out.println(file.getOriginalFilename());
        System.out.println(file.getName());
        System.out.println(file.getContentType());
        System.out.println(file.getSize());

        //String imgPath = "/home/makhambet.torezhan/IdeaProjects/demo/src/main/resources/static/image";
        String imgPath = new ClassPathResource("static/image").getFile().getAbsolutePath();
        Files.copy(file.getInputStream(), Paths.get(imgPath+ File.separator + file.getOriginalFilename()),
                StandardCopyOption.REPLACE_EXISTING);
        return "Success";


    }
}

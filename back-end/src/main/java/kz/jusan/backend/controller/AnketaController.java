package kz.jusan.backend.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import javax.servlet.http.HttpServletRequest;

import kz.jusan.backend.dto.AnketaDto;
import kz.jusan.backend.entity.UserEntity;
import kz.jusan.backend.security.JwtProvider;
import kz.jusan.backend.service.AnketaService;
import kz.jusan.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/anketa")
public class AnketaController {
    @Autowired
    private AnketaService anketaService;
    @PostMapping("/submit")
    public int postAnketa(HttpServletRequest request, AnketaDto anketaDto) {
//        anketaService.create(anketaDto);
        return 100;
    }

}
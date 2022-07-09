package kz.jusan.backend.controller;

import kz.jusan.backend.dto.AnketaDto;
import kz.jusan.backend.entity.AnketaEntity;
import kz.jusan.backend.service.AnketaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
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

}
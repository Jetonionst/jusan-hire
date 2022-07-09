package kz.jusan.backend.service;

import kz.jusan.backend.dto.AnketaDto;
import kz.jusan.backend.entity.AnketaEntity;
import kz.jusan.backend.repository.AnketaRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class AnketaService {
    @Autowired
    private AnketaRepository anketaRepository;

    public void createAnketa(AnketaDto anketaDto) {
        ModelMapper modelMapper = new ModelMapper();
        AnketaEntity anketaEntity = modelMapper.map(anketaDto, AnketaEntity.class);
        anketaRepository.save(anketaEntity);
        System.out.println("Success");
    }

    public List<AnketaEntity> getAllAnketas() {
        return anketaRepository.findAll();
    }

    public void deleteAnketaByIIN(String iin) {
        anketaRepository.deleteByIin(iin);
    }

    public AnketaEntity findAnketaByIIN(String iin) {
        return anketaRepository.findAnketaEntityByIin(iin);
    }

    public void deleteAllAnketas() {
        anketaRepository.deleteAll();
    }
}

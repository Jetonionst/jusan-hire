package kz.jusan.backend.service;

import kz.jusan.backend.dto.AnketaDto;
import kz.jusan.backend.entity.AnketaEntity;
import kz.jusan.backend.repository.AnketaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnketaService {
    @Autowired
    private AnketaRepository anketaRepository;

    public void createAnketa(AnketaDto anketaDto) {
        ModelMapper modelMapper = new ModelMapper();
        AnketaEntity anketaEntity = modelMapper.map(anketaDto, AnketaEntity.class);
//        AnketaRepository.create
    }
}

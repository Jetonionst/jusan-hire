package kz.jusan.backend.repository;

import kz.jusan.backend.entity.AnketaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnketaRepository extends JpaRepository<AnketaEntity, String> {
}

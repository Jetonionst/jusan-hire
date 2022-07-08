package kz.jusan.backend.repository;

import kz.jusan.backend.entity.RoleEntity;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<RoleEntity, Integer> {
    @Query("SELECT * FROM roles WHERE name = :name")
    RoleEntity findByName(String name);

    @Query("SELECT * FROM roles WHERE id = :id")
    RoleEntity findById(int id);
}
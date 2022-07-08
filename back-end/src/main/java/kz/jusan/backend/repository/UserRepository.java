package kz.jusan.backend.repository;

import kz.jusan.backend.entity.UserEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
    @Query("SELECT * FROM users WHERE username = :username")
    UserEntity findUserByUsername(String username);
}
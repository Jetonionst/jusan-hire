package kz.jusan.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "anketas")
public class AnketaEntity {
    @Id
    private String iin;
    private String fio;
    private String previousName;
    private Date birthDate;
    private String birthPlace;
    private String nationality;
    private String citizenship;
    private String passportSerie;
    private String passportNumber;
    private String passportIssuedBy;
    private Date passportIssuedAt;
    private String homePhone;
    private String workPhone;
    private String mobilePhone;
    private String relativePhone;
    private String relativeFIO;
    private String relativeLevel;
    private String email;
}

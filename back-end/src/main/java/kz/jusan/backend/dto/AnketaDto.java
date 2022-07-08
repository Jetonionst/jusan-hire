package kz.jusan.backend.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
public class AnketaDto {
    @NotBlank
    private String fio;
    private String previousName;
    @NotBlank
    private Date birthDate;
    @NotBlank
    private String birthPlace;
    @NotBlank
    private String nationality;
    @NotBlank
    private String citizenship;
    @NotBlank
    private String passportSerie;
    @NotBlank
    private String passportNumber;
    @NotBlank
    private String passportIssuedBy;
    @NotBlank
    private Date passportIssuedAt;
    private String homePhone;
    private String workPhone;
    @NotBlank
    private String mobilePhone;
    private String relativePhone;
    private String relativeFIO;
    private String relativeLevel;
    @NotBlank
    private String email;

}

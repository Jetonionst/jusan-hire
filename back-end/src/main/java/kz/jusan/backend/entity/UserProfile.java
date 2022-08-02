package kz.jusan.backend.entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user_profile")
public class UserProfile {
    @Id
    @Column(name = "iin")
    private String iin;
    private String fio;
    private String mobilePhone;
    private String email;
    private String factualCity;
    @OneToOne(mappedBy = "userProfile", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private AnketaEntity anketa;
}
package kz.jusan.backend.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
public class AnketaDto {
    @NotBlank
    private String iin;
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
//    @NotBlank
//    private String permanentCity;
//    @NotBlank
//    private String permanentRegion;
//    @NotBlank
//    private String permanentDistrict;
//    @NotBlank
//    private String permanentStreet;
//    @NotBlank
//    private String permanentHouse;
//    private String permanentCorpus;
//    private String permanentApartment;
//    private boolean isAddressMatches = false;
//    private String factualCity;
//    private String factualRegion;
//    private String factualDistrict;
//    private String factualStreet;
//    private String factualHouse;
//    private String factualCorpus;
//    private String factualApartment;
//    private List<EducationDto> educationList;
//    private List<ExtracurricularDto> extracurricularList;
//    private List<WorkplaceDto> lastThreeWorkplaces;
//    private List<RecommendationPersonDto> threeRecommendationPeople;
//    private String marriageStatus;
//    private List<ChildDto> chilrenList;
//    private List<RelativeDto> relativeList;
//    private List<CommercialOrganisationDto> commercialOrganisationList;
//    private boolean isRelativeJusanEmployee;
//    private List<RelativeJusanEmployeeDto> relativeJusanEmployeeList;
//    private boolean isCarOwner;
//    private List<CarDto> carList;
//    private boolean isMilitary;
//    private boolean isSVC;
//    private String svc;
//    private boolean isExpiredLoan;
//    private boolean isCriminal;
//    private boolean isRelativeCriminal;
//    private boolean isCriminalDelo;
//    private boolean isAlimentPayer;
//    private boolean isHooligan;
//    private String additionalInfo;
//    private boolean isExtraIncome;
}

import { useFormik } from "formik";
import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Anketa() {
  const [page, setPage] = useState(1);

  const fieldsSize = 200;
  const fSize = "14px";
  const formik = useFormik({
    initialValues: {
      iin: "",
      fio: "",
      previousName: "",
      birthDate: "",
      nationality: "",
      citizenship: "",
      birthPlace: "",
      passportSerie: "",
      passportNumber: "",
      passportIssuedAt: "",
      passportIssuedBy: "",
      email: "",
      homePhone: "",
      workPhone: "",
      mobilePhone: "",
      relativePhone: "",
      relativeFIO: "",
      relativeLevel: "",
      permanentCity: "",
      permanentRegion: "",
      permanentDistrict: "",
      permanentStreet: "",
      permanentHouse: "",
      permanentCorpus: "",
      permanentApartment: "",
      isAddressMatches: "",
      factualCity: "",
      factualRegion: "",
      factualDistrict: "",
      factualStreet: "",
      factualHouse: "",
      factualCorpus: "",
      factualApartment: "",
      educationList: [
        {
          qualification: "",
          endDate: "",
          startDate: "",
          speciality: "",
          formOfStudy: "",
          university: "",
        },
        {
          qualification: "",
          endDate: "",
          startDate: "",
          speciality: "",
          formOfStudy: "",
          university: "",
        },
        {
          qualification: "",
          endDate: "",
          startDate: "",
          speciality: "",
          formOfStudy: "",
          university: "",
        },
      ],
      extracurricularList: [
        {
          endDate: "",
          educationTime: "",
          educationName: "",
          speciality: "",
          degree: "",
        },
        {
          endDate: "",
          educationTime: "",
          educationName: "",
          speciality: "",
          degree: "",
        },
      ],
      lastThreeWorkplaces: [
        {
          workPeriod: "",
          organizationName: "",
          organizationType: "",
          organizationAddress: "",
          organizationPhone: "",
          speciality: "",
          employerFio: "",
          employerNumber: "",
          leavingReazon: "",
        },
        {
          workPeriod: "",
          organizationName: "",
          organizationType: "",
          organizationAddress: "",
          organizationPhone: "",
          speciality: "",
          employerFio: "",
          employerNumber: "",
          leavingReazon: "",
        },
        {
          workPeriod: "",
          organizationName: "",
          organizationType: "",
          organizationAddress: "",
          organizationPhone: "",
          speciality: "",
          employerFio: "",
          employerNumber: "",
          leavingReazon: "",
        },
      ],
      threeRecommendationPeople: [
        {
          peopleFio: "",
          peopleWorkPlace: "",
          peopleMajor: "",
          peoplePhone: "",
        },
        {
          peopleFio: "",
          peopleWorkPlace: "",
          peopleMajor: "",
          peoplePhone: "",
        },
        {
          peopleFio: "",
          peopleWorkPlace: "",
          peopleMajor: "",
          peoplePhone: "",
        },
      ],
      marriageStatus: "",
      lifeCompanion: [
        {
          fio: "",
          birthDate: "",
          workPlace: "",
          major: "",
          address: "",
          citizenship: "",
          phone: "",
        },
      ],
      chilrenList: [
        {
          fio: "",
          birthDate: "",
          phone: "",
          studyOrWork: "",
        },
        {
          fio: "",
          birthDate: "",
          phone: "",
          studyOrWork: "",
        },
        {
          fio: "",
          birthDate: "",
          phone: "",
          studyOrWork: "",
        },
      ],
      relativeList: [
        {
          level: "",
          fio: "",
          birthDate: "",
          workPlace: "",
          major: "",
          phone: "",
        },
        {
          level: "",
          fio: "",
          birthDate: "",
          workPlace: "",
          major: "",
          phone: "",
        },
      ],
      commercialOrganisationList: [
        {
          answer: "",
          organizationName: "",
          iin: "",
          address: "",
          type: "",
          phone: "",
        },
        {
          answer: "",
          organizationName: "",
          iin: "",
          address: "",
          type: "",
          phone: "",
        },
      ],
      isRelativeJusanEmployee: "",
      relativeJusanEmployeeList: [
        {
          level: "",
          fio: "",
          division: "",
          major: "",
        },
        {
          level: "",
          fio: "",
          division: "",
          major: "",
        },
      ],
      isCarOwner: "",
      carList: {},
      isMilitary: "",
      isSVC: "",
      svc: "",
      isExpiredLoan: "",
      isCriminal: "",
      isRelativeCriminal: "",
      isCriminalDelo: "",
      isAlimentPayer: "",
      isHooligan: "",
      additionalInfo: "",
      isExtraIncome: "",
    },
    onSubmit: async (values) => {
      try {
        // alert(JSON.stringify(values, null, 2));
        // const req = await fetch("http://localhost:8081/api/v1/anketa/submit", {
        //   method: "POST",
        //   body: JSON.stringify(values, null, 2),
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "*/*",
        //     // "Access-Control-Allow-Origin": "*",
        //   },
        // });
        // console.log(req);
        console.log(values);
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (page === 1) {
    return (
      <ChakraProvider>
        <Flex bg="gray.100" align="center" justify="center" h="80%">
          <Box bg="white" p={6} rounded="md" w={"80%"}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormLabel htmlFor="text">
                  АНКЕТА КАНДИДАТА (<span style={{ color: "red" }}>*</span>
                  обязательные поля)
                </FormLabel>
                <FormControl
                  isRequired
                  display="flex"
                  // justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      ИИН
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={150}
                      id="iin"
                      name="iin"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.iin}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      ФИО
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={150}
                      id="fio"
                      name="fio"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.fio}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Число, месяц и год рождения
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={250}
                      id="birthDate"
                      name="birthDate"
                      type="text"
                      variant="filled"
                      placeholder="Пример: 01.01.1990"
                      onChange={formik.handleChange}
                      value={formik.values.birthDate}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Место рождения
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={250}
                      id="birthPlace"
                      name="birthPlace"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.birthPlace}
                    />
                  </div>

                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Национальность
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={150}
                      id="nationality"
                      name="nationality"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.nationality}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Гражданство
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={150}
                      id="citizenship"
                      name="citizenship"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.citizenship}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Email
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={150}
                      id="email"
                      name="email"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                </FormControl>
                <FormLabel htmlFor="text">
                  Паспорт, удостоверение личности
                </FormLabel>
                <FormControl
                  isRequired
                  display={"flex"}
                  // justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <div className="field">
                    <FormControl isRequired={false}>
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Серия
                      </FormLabel>

                      <Input
                        fontSize={fSize}
                        w={150}
                        id="passportSerie"
                        name="passportSerie"
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.passportSerie}
                      />
                    </FormControl>
                  </div>

                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Номер
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={150}
                      id="passportNumber"
                      name="passportNumber"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.passportNumber}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Кем выдан:
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={150}
                      id="passportIssuedBy"
                      name="passportIssuedBy"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.passportIssuedBy}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Когда выдан:
                    </FormLabel>
                    <Input
                      fontSize={fSize}
                      w={150}
                      id="passportIssuedAt"
                      name="passportIssuedAt"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.passportIssuedAt}
                    />
                  </div>
                </FormControl>
                <FormLabel htmlFor="text">
                  Укажите, пожалуйста, номера телефонов, по которым с Вами можно
                  связаться:
                </FormLabel>
                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <FormControl
                      display="flex"
                      flexWrap="wrap"
                      //   justifyContent="space-between"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Домашний телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="homePhone"
                          name="homePhone"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.homePhone}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Рабочий телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="workPhone"
                          name="workPhone"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.workPhone}
                        />
                      </div>
                      <div className="field">
                        <FormControl isRequired>
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Мобильный телефон:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={150}
                            id="mobilePhone"
                            name="mobilePhone"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.mobilePhone}
                          />
                        </FormControl>
                      </div>
                    </FormControl>
                  </div>
                  <div className="fieldsContext">
                    <FormLabel htmlFor="text">
                      Контактные данные родственника или знакомого:
                    </FormLabel>
                    <FormControl
                      isRequired
                      display="flex"
                      flexWrap="wrap"
                      //   justifyContent="space-between"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Контактный телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="relativePhone"
                          name="relativePhone"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativePhone}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="relativeFIO"
                          name="relativeFIO"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeFIO}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Степень родства:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="relativeDegree"
                          name="relativeLevel"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeLevel}
                        />
                      </div>
                    </FormControl>
                  </div>
                </div>
                <FormLabel htmlFor="text">
                  Адрес постоянной регистрации:
                </FormLabel>
                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <FormControl
                      display="flex"
                      flexWrap="wrap"
                      isRequired
                      //   justifyContent="space-between"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Город:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="permanentCity"
                          name="permanentCity"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.permanentCity}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Область:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="permanentRegion"
                          name="permanentRegion"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.permanentRegion}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Район:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="permanentDistrict"
                          name="permanentDistrict"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.permanentDistrict}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Улица:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={150}
                          id="permanentStreet"
                          name="permanentStreet"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.permanentStreet}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дом:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={70}
                          id="permanentHouse"
                          name="permanentHouse"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.permanentHouse}
                        />
                      </div>
                      <div className="field">
                        <FormControl isRequired={false}>
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Корпус:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={70}
                            id="permanentCorpus"
                            name="permanentCorpus"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.permanentCorpus}
                          />
                        </FormControl>
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Квартира:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={70}
                          id="permanentApartment"
                          name="permanentApartment"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.permanentApartment}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="fieldsContext">
                    <FormLabel htmlFor="text">
                      Адрес фактического проживания:
                    </FormLabel>
                    <Checkbox
                      id="isAddressMatches"
                      name="isAddressMatches"
                      onChange={formik.handleChange}
                      isChecked={formik.values.isAddressMatches}
                      colorScheme="purple"
                    >
                      Cовпадает с адресом постоянной регистрации
                    </Checkbox>
                    {!formik.values.isAddressMatches && (
                      <FormControl
                        display="flex"
                        flexWrap="wrap"

                        //   justifyContent="space-between"
                      >
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Город:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={150}
                            id="factualCity"
                            name="factualCity"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.factualCity}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Область:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={150}
                            id="factualRegion"
                            name="factualRegion"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.factualRegion}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Район:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={150}
                            id="factualDistrict"
                            name="factualDistrict"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.factualDistrict}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Улица:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={150}
                            id="factualStreet"
                            name="factualStreet"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.factualStreet}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Дом:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={70}
                            id="factualHouse"
                            name="factualHouse"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.factualHouse}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Корпус:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={70}
                            id="factualCorpus"
                            name="factualCorpus"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.factualCorpus}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Квартира:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={70}
                            id="factualApartment"
                            name="factualApartment"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.factualApartment}
                          />
                        </div>
                      </FormControl>
                    )}
                  </div>
                </div>
                {/* <Checkbox
                id="rememberMe"
                name="rememberMe"
                onChange={formik.handleChange}
                isChecked={formik.values.rememberMe}
                colorScheme="purple"
              >
                Remember me?
              </Checkbox> */}

                <Button
                  colorScheme="orange"
                  width="30%"
                  // type="submit"
                  marginLeft="50px"
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  Далее
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </ChakraProvider>
    );
  }
  if (page === 2) {
    return (
      <ChakraProvider>
        <Flex bg="gray.100" align="center" justify="center">
          <Box bg="white" p={6} rounded="md" w={"80%"}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormLabel htmlFor="text">
                  АНКЕТА КАНДИДАТА (<span style={{ color: "red" }}>*</span>
                  обязательные поля)
                </FormLabel>

                <FormLabel htmlFor="text">
                  Образование (в том числе неоконченное):
                </FormLabel>
                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <FormControl
                      isRequired
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата начала обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`educationList[0].startDate`}
                          name={`educationList[0].startDate`}
                          type="text"
                          variant="filled"
                          placeholder="01.01.2000"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[0].startDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата окончания обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`educationList[0]].endDate`}
                          name={`educationList[0].endDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[0].endDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Полное название учебного заведения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[0].university"
                          name="educationList[0].university"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[0].university}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Специальность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[0].speciality"
                          name="educationList[0].speciality"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[0].speciality}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Форма обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[0].formOfStudy"
                          name="educationList[0].formOfStudy"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[0].formOfStudy}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Квалификация:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[0].qualification"
                          name="educationList[0].qualification"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[0].qualification}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="fieldsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата начала обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`educationList[1].startDate`}
                          name={`educationList[1].startDate`}
                          type="text"
                          variant="filled"
                          placeholder="01.01.2000"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[1].startDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата окончания обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`educationList[1]].endDate`}
                          name={`educationList[1].endDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[1].endDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Полное название учебного заведения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[1].university"
                          name="educationList[1].university"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[1].university}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Специальность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[1].speciality"
                          name="educationList[1].speciality"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[1].speciality}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Форма обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[1].formOfStudy"
                          name="educationList[1].formOfStudy"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[1].formOfStudy}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Квалификация:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[1].qualification"
                          name="educationList[1].qualification"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[1].qualification}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="fieldsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата начала обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`educationList[2].startDate`}
                          name={`educationList[2].startDate`}
                          type="text"
                          variant="filled"
                          placeholder="01.01.2000"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[2].startDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата окончания обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`educationList[2]].endDate`}
                          name={`educationList[2].endDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[2].endDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Полное название учебного заведения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[2].university"
                          name="educationList[2].university"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[2].university}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Специальность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[2].speciality"
                          name="educationList[2].speciality"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[2].speciality}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Форма обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[2].formOfStudy"
                          name="educationList[2].formOfStudy"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[2].formOfStudy}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Квалификация:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="educationList[2].qualification"
                          name="educationList[2].qualification"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[2].qualification}
                        />
                      </div>
                    </FormControl>
                  </div>
                </div>
                <FormLabel htmlFor="text">
                  Специальные курсы,школы,стажировки
                </FormLabel>
                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Год окончания:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`extracurricularList[0].endDate`}
                          name={`extracurricularList[0].endDate`}
                          type="text"
                          variant="filled"
                          placeholder="01.01.2000"
                          onChange={formik.handleChange}
                          value={formik.values.extracurricularList[0].endDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Длительность обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`extracurricularList[0]].educationTime`}
                          name={`extracurricularList[0].educationTime`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.extracurricularList[0].educationTime
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Полное наименование курсов:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="extracurricularList[0].educationName"
                          name="extracurricularList[0].educationName"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[0].educationName}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Специальность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="extracurricularList[0].speciality"
                          name="extracurricularList[0].speciality"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.extracurricularList[0].speciality
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Учёная степень, сертификаты:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="extracurricularList[0].degree"
                          name="extracurricularList[0].degree"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.extracurricularList[0].degree}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="fieldsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Год окончания:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`extracurricularList[1].endDate`}
                          name={`extracurricularList[1].endDate`}
                          type="text"
                          variant="filled"
                          placeholder="01.01.2000"
                          onChange={formik.handleChange}
                          value={formik.values.extracurricularList[1].endDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Длительность обучения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`extracurricularList[1]].educationTime`}
                          name={`extracurricularList[1].educationTime`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.extracurricularList[1].educationTime
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Полное наименование курсов:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="extracurricularList[1].educationName"
                          name="extracurricularList[1].educationName"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.educationList[1].educationName}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Специальность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="extracurricularList[0].speciality"
                          name="extracurricularList[0].speciality"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.extracurricularList[1].speciality
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Учёная степень, сертификаты:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id="extracurricularList[1].degree"
                          name="extracurricularList[1].degree"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.extracurricularList[1].degree}
                        />
                      </div>
                    </FormControl>
                  </div>
                </div>

                <div className="buttons">
                  <Button
                    colorScheme="orange"
                    width="30%"
                    marginLeft="50px"
                    onClick={() => {
                      setPage(1);
                    }}
                  >
                    Назад
                  </Button>
                  <Button
                    colorScheme="orange"
                    width="30%"
                    marginLeft="50px"
                    onClick={() => {
                      setPage(3);
                    }}
                  >
                    Далее
                  </Button>
                </div>
              </VStack>
            </form>
          </Box>
        </Flex>
      </ChakraProvider>
    );
  }
  if (page === 3) {
    return (
      <ChakraProvider>
        <Flex bg="gray.100" align="center" justify="center">
          <Box bg="white" p={6} rounded="md" w={"80%"}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormLabel htmlFor="text">
                  АНКЕТА КАНДИДАТА (<span style={{ color: "red" }}>*</span>
                  обязательные поля)
                </FormLabel>
                <FormLabel htmlFor="text">
                  Укажите предшествующие 3 (три) места работы в обратном
                  хронологическом порядке, начиная с последнего или действующего
                  места работы:
                </FormLabel>
                <div className="fieldsContainer">
                  <div className="filedsContex">
                    <FormControl
                      isRequired
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Период работы (месяц, год) :
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[0].workPeriod`}
                          name={`lastThreeWorkplaces[0].workPeriod`}
                          type="text"
                          variant="filled"
                          placeholder="01.01.2000"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[0].workPeriod
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Полное название организации:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[0].organizationName`}
                          name={`lastThreeWorkplaces[0].organizationName`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[0]
                              .organizationName
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Вид деятельности:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[0].organizationType`}
                          name={`lastThreeWorkplaces[0].organizationType`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[0]
                              .organizationType
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Адрес:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[0].organizationAddress`}
                          name={`lastThreeWorkplaces[0].organizationAddress`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[0]
                              .organizationAddress
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[0].organizationPhone`}
                          name={`lastThreeWorkplaces[0].organizationPhone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[0]
                              .organizationPhone
                          }
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Период работы (месяц, год) :
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[1].workPeriod`}
                          name={`lastThreeWorkplaces[1].workPeriod`}
                          type="text"
                          variant="filled"
                          placeholder="01.01.2000"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[1].workPeriod
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Полное название организации:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[1].organizationName`}
                          name={`lastThreeWorkplaces[1].organizationName`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[1]
                              .organizationName
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Вид деятельности:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[1].organizationType`}
                          name={`lastThreeWorkplaces[1].organizationType`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[1]
                              .organizationType
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Адрес:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[1].organizationAddress`}
                          name={`lastThreeWorkplaces[1].organizationAddress`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[1]
                              .organizationAddress
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[1].organizationPhone`}
                          name={`lastThreeWorkplaces[1].organizationPhone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[1]
                              .organizationPhone
                          }
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Период работы (месяц, год) :
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[2].workPeriod`}
                          name={`lastThreeWorkplaces[2].workPeriod`}
                          type="text"
                          variant="filled"
                          placeholder="01.01.2000"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[2].workPeriod
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Полное название организации:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[2].organizationName`}
                          name={`lastThreeWorkplaces[2].organizationName`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[2]
                              .organizationName
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Вид деятельности:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[2].organizationType`}
                          name={`lastThreeWorkplaces[2].organizationType`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[2]
                              .organizationType
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Адрес:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[2].organizationAddress`}
                          name={`lastThreeWorkplaces[2].organizationAddress`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[2]
                              .organizationAddress
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lastThreeWorkplaces[2].organizationPhone`}
                          name={`lastThreeWorkplaces[2].organizationPhone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.lastThreeWorkplaces[2]
                              .organizationPhone
                          }
                        />
                      </div>
                    </FormControl>
                  </div>
                </div>
                <FormLabel htmlFor="text">
                  Укажите не менее 3 (трёх) лиц, которые могут дать Вам
                  профессиональную рекомендацию{" "}
                  <i>(бывшие и/или настоящие руководители, коллеги)</i>:
                </FormLabel>
                <div className="filedsContainer">
                  <div className="filedsContex">
                    <FormControl
                      isRequired
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[0].peopleFio`}
                          name={`threeRecommendationPeople[0].peopleFio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[0].peopleFio
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[0].peopleWorkPlace`}
                          name={`threeRecommendationPeople[0].peopleWorkPlace`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[0]
                              .peopleWorkPlace
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Должность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[0].peopleMajor`}
                          name={`threeRecommendationPeople[0].peopleMajor`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[0]
                              .peopleMajor
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[0].peoplePhone`}
                          name={`threeRecommendationPeople[0].peoplePhone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[0]
                              .peoplePhone
                          }
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[1].peopleFio`}
                          name={`threeRecommendationPeople[1].peopleFio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[1].peopleFio
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[1].peopleWorkPlace`}
                          name={`threeRecommendationPeople[1].peopleWorkPlace`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[1]
                              .peopleWorkPlace
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Должность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[1].peopleMajor`}
                          name={`threeRecommendationPeople[1].peopleMajor`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[1]
                              .peopleMajor
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[1].peoplePhone`}
                          name={`threeRecommendationPeople[1].peoplePhone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[1]
                              .peoplePhone
                          }
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[2].peopleFio`}
                          name={`threeRecommendationPeople[2].peopleFio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[2].peopleFio
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[2].peopleWorkPlace`}
                          name={`threeRecommendationPeople[2].peopleWorkPlace`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[2]
                              .peopleWorkPlace
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Должность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[2].peopleMajor`}
                          name={`threeRecommendationPeople[2].peopleMajor`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[2]
                              .peopleMajor
                          }
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`threeRecommendationPeople[2].peoplePhone`}
                          name={`threeRecommendationPeople[2].peoplePhone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={
                            formik.values.threeRecommendationPeople[2]
                              .peoplePhone
                          }
                        />
                      </div>
                    </FormControl>
                  </div>
                </div>
                <div className="buttons">
                  <Button
                    colorScheme="orange"
                    width="30%"
                    marginLeft="50px"
                    onClick={() => {
                      setPage(2);
                    }}
                  >
                    Назад
                  </Button>
                  <Button
                    colorScheme="orange"
                    width="30%"
                    marginLeft="50px"
                    onClick={() => {
                      setPage(4);
                    }}
                  >
                    Далее
                  </Button>
                </div>
              </VStack>
            </form>
          </Box>
        </Flex>
      </ChakraProvider>
    );
  }
  if (page === 4) {
    return (
      <ChakraProvider>
        <Flex bg="gray.100" align="center" justify="center">
          <Box bg="white" p={6} rounded="md" w={"80%"}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormLabel htmlFor="text">
                  АНКЕТА КАНДИДАТА (<span style={{ color: "red" }}>*</span>
                  обязательные поля)
                </FormLabel>
                <FormLabel htmlFor="text">
                  Семейное положение (нужное отметить):
                </FormLabel>
                <div className="field">
                  <Select
                    isRequired
                    id="marriageStatus"
                    name="marriageStatus"
                    onChange={formik.handleChange}
                    placeholder="Семейное положение"
                  >
                    <option value="Зарегистрированный брак">
                      Зарегистрированный брак
                    </option>
                    <option value="Не состою в браке">Не состою в браке</option>
                    <option value="Незарегистрированный брак">
                      Незарегистрированный брак
                    </option>
                    <option value="В разводе">В разводе</option>
                    <option value="Вдова(ец)">Вдова(ец)</option>
                  </Select>
                </div>
                <FormLabel htmlFor="text">Супруг(а):</FormLabel>
                <div className="fieldsContainer">
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО (полностью):
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lifeCompanion[0].fio`}
                          name={`lifeCompanion[0].fio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.lifeCompanion[0].fio}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата Рождения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lifeCompanion[0].birthDate`}
                          name={`lifeCompanion[0].birthDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          placeholder="01.01.1999"
                          value={formik.values.lifeCompanion[0].birthDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место Работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lifeCompanion[0].workPlace`}
                          name={`lifeCompanion[0].workPlace`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.lifeCompanion[0].workPlace}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Должность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lifeCompanion[0].major`}
                          name={`lifeCompanion[0].major`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.lifeCompanion[0].major}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Адрес:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lifeCompanion[0].address`}
                          name={`lifeCompanion[0].address`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.lifeCompanion[0].address}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Гражданство:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lifeCompanion[0].citizenship`}
                          name={`lifeCompanion[0].citizenship`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.lifeCompanion[0].citizenship}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`lifeCompanion[0].phone`}
                          name={`lifeCompanion[0].phone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.lifeCompanion[0].phone}
                        />
                      </div>
                    </FormControl>
                  </div>
                </div>
                <FormLabel htmlFor="text">Дети:</FormLabel>
                <div className="fieldsContainer">
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО (полностью):
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[0].fio`}
                          name={`chilrenList[0].fio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[0].fio}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата Рождения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[0].birthDate`}
                          name={`chilrenList[0].birthDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          placeholder="01.01.1999"
                          value={formik.values.chilrenList[0].birthDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место Учебы/Работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[0].studyOrWork`}
                          name={`chilrenList[0].studyOrWork`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[0].studyOrWork}
                        />
                      </div>

                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[0].phone`}
                          name={`chilrenList[0].phone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[0].phone}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО (полностью):
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[1].fio`}
                          name={`chilrenList[1].fio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[1].fio}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата Рождения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[1].birthDate`}
                          name={`chilrenList[1].birthDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          placeholder="01.01.1999"
                          value={formik.values.chilrenList[1].birthDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место Учебы/Работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[1].studyOrWork`}
                          name={`chilrenList[1].studyOrWork`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[1].studyOrWork}
                        />
                      </div>

                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[1].phone`}
                          name={`chilrenList[1].phone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[1].phone}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО (полностью):
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[2].fio`}
                          name={`chilrenList[2].fio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[2].fio}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата Рождения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[2].birthDate`}
                          name={`chilrenList[2].birthDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          placeholder="01.01.1999"
                          value={formik.values.chilrenList[2].birthDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место Учебы/Работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[2].studyOrWork`}
                          name={`chilrenList[2].studyOrWork`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[2].studyOrWork}
                        />
                      </div>

                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`chilrenList[2].phone`}
                          name={`chilrenList[2].phone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.chilrenList[2].phone}
                        />
                      </div>
                    </FormControl>
                  </div>
                </div>
                <FormLabel htmlFor="text">Ближайшие родственники:</FormLabel>
                <div className="fieldsContainer">
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Степень Родства:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[0].level`}
                          name={`relativeList[0].level`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[0].level}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО (полностью):
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[0].fio`}
                          name={`relativeList[0].fio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[0].fio}
                        />
                      </div>

                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата Рождения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[0].birthDate`}
                          name={`relativeList[0].birthDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          placeholder="01.01.1999"
                          value={formik.values.relativeList[0].birthDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место Работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[0].workPlace`}
                          name={`relativeList[0].workPlace`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[0].workPlace}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Должность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[0].major`}
                          name={`relativeList[0].major`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[0].major}
                        />
                      </div>

                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[0].phone`}
                          name={`relativeList[0].phone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[0].phone}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="filedsContex">
                    <FormControl
                      display="flex"
                      // justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Степень Родства:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[1].level`}
                          name={`relativeList[1].level`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[1].level}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          ФИО (полностью):
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[1].fio`}
                          name={`relativeList[1].fio`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[1].fio}
                        />
                      </div>

                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Дата Рождения:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[1].birthDate`}
                          name={`relativeList[1].birthDate`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          placeholder="01.01.1999"
                          value={formik.values.relativeList[1].birthDate}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Место Работы:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[1].workPlace`}
                          name={`relativeList[1].workPlace`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[1].workPlace}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Должность:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[1].major`}
                          name={`relativeList[1].major`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[1].major}
                        />
                      </div>

                      <div className="field">
                        <FormLabel htmlFor="text" fontSize={fSize}>
                          Телефон:
                        </FormLabel>
                        <Input
                          fontSize={fSize}
                          w={fieldsSize}
                          id={`relativeList[1].phone`}
                          name={`relativeList[1].phone`}
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.relativeList[1].phone}
                        />
                      </div>
                    </FormControl>
                  </div>
                </div>
                <div className="buttons">
                  <Button
                    colorScheme="orange"
                    width="30%"
                    marginLeft="50px"
                    onClick={() => {
                      setPage(3);
                    }}
                  >
                    Назад
                  </Button>
                  <Button
                    colorScheme="orange"
                    width="30%"
                    marginLeft="50px"
                    onClick={() => {
                      setPage(5);
                    }}
                  >
                    Далее
                  </Button>
                </div>
              </VStack>
            </form>
          </Box>
        </Flex>
      </ChakraProvider>
    );
  }
  if (page === 5) {
    return (
      <ChakraProvider>
        <Flex bg="gray.100" align="center" justify="center">
          <Box bg="white" p={6} rounded="md" w={"80%"}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormLabel htmlFor="text">
                  АНКЕТА КАНДИДАТА (<span style={{ color: "red" }}>*</span>
                  обязательные поля)
                </FormLabel>
                <FormLabel htmlFor="text">Дополнительная информация:</FormLabel>
                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Являетесь ли Вы руководителем/учредителем
                        (соучредителем), членом совета директоров и/или
                        правления коммерческих организаций (ИП/ТОО):
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[0].answer`}
                        name={`commercialOrganisationList[0].answer`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={
                          formik.values.commercialOrganisationList[0].answer
                        }
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Наименование:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[0].organizationName`}
                        name={`commercialOrganisationList[0].organizationName`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={
                          formik.values.commercialOrganisationList[0]
                            .organizationName
                        }
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        ИИН Организации:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[0].iin`}
                        name={`commercialOrganisationList[0].iin`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.commercialOrganisationList[0].iin}
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Адрес организации:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[0].address`}
                        name={`commercialOrganisationList[0].address`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={
                          formik.values.commercialOrganisationList[0].address
                        }
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Вид деятельности:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[0].type`}
                        name={`commercialOrganisationList[0].type`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.commercialOrganisationList[0].type}
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Телефон:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[0].phone`}
                        name={`commercialOrganisationList[0].phone`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={
                          formik.values.commercialOrganisationList[0].phone
                        }
                      />
                    </div>
                  </div>
                  <div className="fieldsContex">
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Являетесь ли Вы руководителем/учредителем
                        (соучредителем), членом совета директоров и/или
                        правления коммерческих организаций (ИП/ТОО):
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[1].answer`}
                        name={`commercialOrganisationList[1].answer`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={
                          formik.values.commercialOrganisationList[1].answer
                        }
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Наименование:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[1].organizationName`}
                        name={`commercialOrganisationList[1].organizationName`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={
                          formik.values.commercialOrganisationList[1]
                            .organizationName
                        }
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        ИИН Организации:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[1].iin`}
                        name={`commercialOrganisationList[1].iin`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.commercialOrganisationList[1].iin}
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Адрес организации:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[1].address`}
                        name={`commercialOrganisationList[1].address`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={
                          formik.values.commercialOrganisationList[1].address
                        }
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Вид деятельности:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[1].type`}
                        name={`commercialOrganisationList[1].type`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.commercialOrganisationList[1].type}
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Телефон:
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={fieldsSize}
                        id={`commercialOrganisationList[1].phone`}
                        name={`commercialOrganisationList[1].phone`}
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={
                          formik.values.commercialOrganisationList[1].phone
                        }
                      />
                    </div>
                  </div>
                  <div className="fieldsContex">
                    <FormLabel htmlFor="text">
                      Имеете ли Вы родственников, членов семьи, работающих в АО
                      " Jusan Bank" или связанных с деятельностью АО "Jusan
                      Bank"
                    </FormLabel>

                    <Checkbox
                      id="isRelativeJusanEmployee"
                      name="isRelativeJusanEmployee"
                      onChange={formik.handleChange}
                      isChecked={formik.values.isRelativeJusanEmployee}
                      colorScheme="purple"
                    >
                      Да
                    </Checkbox>

                    {formik.values.isRelativeJusanEmployee && (
                      <div className="fieldsContainer">
                        <div className="fieldsContex">
                          <div className="field">
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              Степень родства:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={fieldsSize}
                              id="relativeJusanEmployeeList[0].level"
                              name="relativeJusanEmployeeList[0].level"
                              type="text"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={
                                formik.values.relativeJusanEmployeeList[0].level
                              }
                            />
                          </div>
                          <div className="field">
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              ФИО:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={fieldsSize}
                              id="relativeJusanEmployeeList[0].fio"
                              name="relativeJusanEmployeeList[0].fio"
                              type="text"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={
                                formik.values.relativeJusanEmployeeList[0].fio
                              }
                            />
                          </div>
                          <div className="field">
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              Подразделение:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={fieldsSize}
                              id="relativeJusanEmployeeList[0].division"
                              name="relativeJusanEmployeeList[0].division"
                              type="text"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={
                                formik.values.relativeJusanEmployeeList[0]
                                  .division
                              }
                            />
                          </div>
                          <div className="field">
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              Должность:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={fieldsSize}
                              id="relativeJusanEmployeeList[0].major"
                              name="relativeJusanEmployeeList[0].major"
                              type="text"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={
                                formik.values.relativeJusanEmployeeList[0].major
                              }
                            />
                          </div>
                        </div>
                        <div className="fieldsContex">
                          <div className="field">
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              Степень родства:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={fieldsSize}
                              id="relativeJusanEmployeeList[1].level"
                              name="relativeJusanEmployeeList[1].level"
                              type="text"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={
                                formik.values.relativeJusanEmployeeList[1].level
                              }
                            />
                          </div>
                          <div className="field">
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              ФИО:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={fieldsSize}
                              id="relativeJusanEmployeeList[1].fio"
                              name="relativeJusanEmployeeList[1].fio"
                              type="text"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={
                                formik.values.relativeJusanEmployeeList[1].fio
                              }
                            />
                          </div>
                          <div className="field">
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              Подразделение:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={fieldsSize}
                              id="relativeJusanEmployeeList[1].division"
                              name="relativeJusanEmployeeList[1].division"
                              type="text"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={
                                formik.values.relativeJusanEmployeeList[1]
                                  .division
                              }
                            />
                          </div>
                          <div className="field">
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              Должность:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={fieldsSize}
                              id="relativeJusanEmployeeList[1].major"
                              name="relativeJusanEmployeeList[1].major"
                              type="text"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={
                                formik.values.relativeJusanEmployeeList[1].major
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="buttons">
                  <Button
                    colorScheme="orange"
                    width="30%"
                    marginLeft="50px"
                    onClick={() => {
                      setPage(4);
                    }}
                  >
                    Назад
                  </Button>
                  <Button
                    colorScheme="orange"
                    width="30%"
                    marginLeft="50px"
                    onClick={() => {
                      setPage(6);
                    }}
                  >
                    Далее
                  </Button>
                </div>
              </VStack>
            </form>
          </Box>
        </Flex>
      </ChakraProvider>
    );
  }
  return <div className="sd">{page}</div>;
}

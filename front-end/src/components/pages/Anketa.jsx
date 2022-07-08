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
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Anketa() {
  const [page, setPage] = useState(1);

  const fieldsSize = 175;
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
      extracurricularList: {},
      lastThreeWorkplaces: {},
      threeRecommendationPeople: {},
      marriageStatus: "",
      chilrenList: {},
      relativeList: {},
      commercialOrganisationList: {},
      isRelativeJusanEmployee: "",
      relativeJusanEmployeeList: {},
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
        values.previousName = "sd";
        // alert(JSON.stringify(values, null, 2));
        const req = await fetch("http://localhost:8081/api/v1/anketa/submit", {
          method: "POST",
          body: JSON.stringify(values, null, 2),
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            // "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(req);
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
                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <FormLabel htmlFor="text">
                      Укажите, пожалуйста, номера телефонов, по которым с Вами
                      можно связаться:
                    </FormLabel>
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

                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <FormLabel htmlFor="text">
                      Адрес постоянной регистрации:
                    </FormLabel>
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
                          name="permanentDistrict"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.permanentDistrict}
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
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
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
  return <div className="sd">{page}</div>;
}

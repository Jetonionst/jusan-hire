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
      email: "",
      // permanentCity: "",
      // permanentRegion: "",
      // permanentDistrict: "",
      // permanentStreet: "",
      // permanentHouse: "",
      // permanentCorpus: "",
      // permanentApartment: "",
      // isAddressMatches: "",
      // factualCity: "",
      // factualRegion: "",
      // factualDistrict: "",
      // factualStreet: "",
      // factualHouse: "",
      // factualCorpus: "",
      // factualApartment: "",
      // educationList: {},
      // extracurricularList: {},
      // lastThreeWorkplaces: {},
      // threeRecommendationPeople: {},
      // marriageStatus: "",
      // chilrenList: {},
      // relativeList: {},
      // commercialOrganisationList: {},
      // isRelativeJusanEmployee: "",
      // relativeJusanEmployeeList: {},
      // isCarOwner: "",
      // carList: {},
      // isMilitary: "",
      // isSVC: "",
      // svc: "",
      // isExpiredLoan: "",
      // isCriminal: "",
      // isRelativeCriminal: "",
      // isCriminalDelo: "",
      // isAlimentPayer: "",
      // isHooligan: "",
      // additionalInfo: "",
      // isExtraIncome: "",
    },
    onSubmit: async (values) => {
      try {
        values.previousName = "sd";
        // alert(JSON.stringify(values, null, 2));
        const req = await fetch("localhost:8081/api/v1/anketa/submit", {
          method: "POST",
          body: JSON.stringify(values, null, 2),
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            // "Access-Control-Allow-Origin": "*",
          },
        });
        // console.log(req);
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
                <FormLabel htmlFor="text">АНКЕТА КАНДИДАТА</FormLabel>
                <FormControl
                  isRequired
                  display="flex"
                  // justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <div className="field">
                    <FormLabel htmlFor="text">ИИН</FormLabel>
                    <Input
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
                    <FormLabel htmlFor="text">ФИО</FormLabel>
                    <Input
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
                    <FormLabel htmlFor="text">
                      Число, месяц и год рождения
                    </FormLabel>
                    <Input
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
                    <FormLabel htmlFor="text">Место рождения</FormLabel>
                    <Input
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
                    <FormLabel htmlFor="text">Национальность</FormLabel>
                    <Input
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
                    <FormLabel htmlFor="text">Гражданство</FormLabel>
                    <Input
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
                    <FormLabel htmlFor="text">Email</FormLabel>
                    <Input
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
                  display={"flex"}
                  // justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <div className="field">
                    <FormLabel htmlFor="text">Серия</FormLabel>

                    <Input
                      w={150}
                      id="passportSerie"
                      name="passportSerie"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.passportSerie}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text">Номер</FormLabel>
                    <Input
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
                    <FormLabel htmlFor="text">Кем выдан:</FormLabel>
                    <Input
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
                    <FormLabel htmlFor="text">Когда выдан:</FormLabel>
                    <Input
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
                        <FormLabel htmlFor="text">Домашний телефон:</FormLabel>
                        <Input
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
                        <FormLabel htmlFor="text">Рабочий телефон:</FormLabel>
                        <Input
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
                        <FormLabel htmlFor="text">Мобильный телефон:</FormLabel>
                        <Input
                          w={150}
                          id="mobilePhone"
                          name="mobilePhone"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.mobilePhone}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className="fieldsContext">
                    <FormLabel htmlFor="text">
                      Контактные данные родственника или знакомого:
                    </FormLabel>
                    <FormControl
                      display="flex"
                      flexWrap="wrap"
                      //   justifyContent="space-between"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text">
                          Контактный телефон:
                        </FormLabel>
                        <Input
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
                        <FormLabel htmlFor="text">ФИО:</FormLabel>
                        <Input
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
                        <FormLabel htmlFor="text">Степень родства:</FormLabel>
                        <Input
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

                      //   justifyContent="space-between"
                    >
                      <div className="field">
                        <FormLabel htmlFor="text">Город:</FormLabel>
                        <Input
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
                        <FormLabel htmlFor="text">Область:</FormLabel>
                        <Input
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
                        <FormLabel htmlFor="text">Улица:</FormLabel>
                        <Input
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
                        <FormLabel htmlFor="text">Дом:</FormLabel>
                        <Input
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
                        <FormLabel htmlFor="text">Корпус:</FormLabel>
                        <Input
                          w={70}
                          id="permanentCorpus"
                          name="permanentCorpus"
                          type="text"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.permanentCorpus}
                        />
                      </div>
                      <div className="field">
                        <FormLabel htmlFor="text">Квартира:</FormLabel>
                        <Input
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
                          <FormLabel htmlFor="text">Город:</FormLabel>
                          <Input
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
                          <FormLabel htmlFor="text">Область:</FormLabel>
                          <Input
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
                          <FormLabel htmlFor="text">Район:</FormLabel>
                          <Input
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
                          <FormLabel htmlFor="text">Улица:</FormLabel>
                          <Input
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
                          <FormLabel htmlFor="text">Дом:</FormLabel>
                          <Input
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
                          <FormLabel htmlFor="text">Корпус:</FormLabel>
                          <Input
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
                          <FormLabel htmlFor="text">Квартира:</FormLabel>
                          <Input
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
                  type="submit"
                  marginLeft="50px"
                  // onClick={() => {
                  //   // setPage(2);
                  // }}
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
                <FormLabel htmlFor="text">АНКЕТА КАНДИДАТА</FormLabel>
                <FormControl
                  isRequired
                  display="flex"
                  // justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <div className="field">
                    <FormLabel htmlFor="text">
                      Образование (в том числе неоконченное):
                    </FormLabel>
                    <Input
                      w={150}
                      id="educationList"
                      name="educationList"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.educationList}
                    />
                  </div>
                </FormControl>
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

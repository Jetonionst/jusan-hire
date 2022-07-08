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

export default function Anketa() {
  const formik = useFormik({
    initialValues: {
      iin: "",
      fio: "",
      dateOfBirth: "",
      nationality: "",
      citizenship: "",
      placeofBirth: "",
      idSerie: "",
      idNumber: "",
      idDateOfIssue: "",
      idDetails: "",
      homePhone: "",
      workPhone: "",
      mobilePhone: "",
      relativePhone: "",
      relativeFio: "",
      relativeDegree: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <ChakraProvider>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={"80%"}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormLabel htmlFor="text">АНКЕТА КАНДИДАТА</FormLabel>
              <FormControl
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
                    value={formik.values.email}
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
                    value={formik.values.email}
                  />
                </div>
                <div className="field">
                  <FormLabel htmlFor="text">
                    Число, месяц и год рождения
                  </FormLabel>
                  <Input
                    w={250}
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="text"
                    variant="filled"
                    placeholder="Пример: 01.01.1990"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="field">
                  <FormLabel htmlFor="text">Место рождения</FormLabel>
                  <Input
                    w={250}
                    id="placeofBirth"
                    name="placeofBirth"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
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
                    value={formik.values.email}
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
                    id="idSerie"
                    name="idSerie"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="field">
                  <FormLabel htmlFor="text">Номер</FormLabel>
                  <Input
                    w={150}
                    id="idNumber"
                    name="idNumber"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="field">
                  <FormLabel htmlFor="text">Кем выдан:</FormLabel>
                  <Input
                    w={150}
                    id="idDetails"
                    name="idDetails"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="field">
                  <FormLabel htmlFor="text">Когда выдан:</FormLabel>
                  <Input
                    idDateOfIssue
                    w={150}
                    id="idDateOfIssue"
                    name="idDateOfIssue"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
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
                    //   justifyContent="space-between"
                  >
                    <div className="field">
                      <FormLabel htmlFor="text">Домашний телефон:</FormLabel>
                      <Input
                        idDateOfIssue
                        w={150}
                        id="idDateOfIssue"
                        name="idDateOfIssue"
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text">Рабочий телефон:</FormLabel>
                      <Input
                        idDateOfIssue
                        w={150}
                        id="workPhone"
                        name="workPhone"
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text">Мобильный телефон:</FormLabel>
                      <Input
                        idDateOfIssue
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
                    //   justifyContent="space-between"
                  >
                    <div className="field">
                      <FormLabel htmlFor="text">Контактный телефон:</FormLabel>
                      <Input
                        idDateOfIssue
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
                        idDateOfIssue
                        w={150}
                        id="relativeFio"
                        name="relativeFio"
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.relativeFio}
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text">Степень родства:</FormLabel>
                      <Input
                        idDateOfIssue
                        w={150}
                        id="relativeDegree"
                        name="relativeDegree"
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.relativeDegree}
                      />
                    </div>
                  </FormControl>
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
              <Button type="submit" colorScheme="purple" width="full">
                Login
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

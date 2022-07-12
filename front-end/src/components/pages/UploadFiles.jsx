import { useFormik, Field } from "formik";
import { useParams } from "react-router-dom";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormLabel,
  Input,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import Service from "../service/service";
export default function UploadFiles() {
  const { iin } = useParams();
  const formik = useFormik({
    initialValues: {
      residentCard: null,
      educationDoc: "",
      laborActivity: "",
      medDoc: "",
      militaryDoc: "",
      form: "",
      image: "",
      invalidDoc: "",
      pensionerDoc: "",
      lgotiDoc: "",
      marriageDoc: "",
      childDoc: "",
    },
    onSubmit: async (values) => {
      // const files = new FormData();
      // files.append("file", values.residentCard);
      // for (const obj of files) {
      //   console.log(obj);
      // }
      Service("uploadFiles", { files: values, iin: iin });
    },
  });

  function OnSubmit(event) {
    event.preventDefault();
    const file = new FormData(event.target);
    Service("uploadFiles", { file: file, iin: iin });
    // console.log(file);
  }
  return (
    <ChakraProvider>
      <div className="bg">
        <Flex bg="gray.100" align="center" justify="center" p="25px">
          <Box bg="white" p={6} rounded="md" w={"80%"}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormLabel htmlFor="text">
                  АНКЕТА КАНДИДАТА (<span style={{ color: "red" }}>*</span>
                  обязательные поля)
                </FormLabel>
                <FormLabel w="100%">
                  Перечень документов, необходимых для заключения трудового
                  договора
                </FormLabel>
                {/* <FormControl></FormControl> */}
                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <FormLabel w="100%">
                      1.Вид на жительство
                      <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <div className="field">
                      <Input
                        isRequired
                        type="file"
                        name="residentCard"
                        id="residentCard"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "residentCard",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <Tooltip
                        label="Вид на жительство иностранца в Республике Казахстан или удостоверение лица без гражданства (для иностранцев и лиц без гражданства, постоянно проживающих на территории Республики Казахстан)"
                        fontSize="md"
                        placement="right-end"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </div>
                  </div>
                  <div className="fieldsContex">
                    <FormLabel w="100%">
                      2.Документ об образовании (с приложением)
                      <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <div className="field">
                      <Input
                        isRequired
                        type="file"
                        name="educationDoc"
                        id="educationDoc"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "educationDoc",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <Tooltip
                        label="Документ об образовании (с приложением), квалификации, наличии специальных знаний или профессиональной подготовки при заключении трудового договора на работу, требующую соответствующих знаний, умений и навыков"
                        fontSize="md"
                        placement="right-end"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </div>
                  </div>
                  <div className="fieldsContex">
                    <FormLabel w="100%">
                      3. Документ, подтверждающий трудовую деятельность (для
                      лиц, имеющих трудовой стаж)
                      <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <div className="field">
                      <Input
                        isRequired
                        type="file"
                        name="laborActivity"
                        id="laborActivity"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "laborActivity",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <Tooltip
                        label="Документ, подтверждающий трудовую деятельность (для лиц, имеющих трудовой стаж)"
                        fontSize="md"
                        placement="right-end"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </div>
                  </div>
                  <div className="fieldsContex">
                    <FormLabel w="100%">
                      4. Документ о прохождении предварительного медицинского
                      освидетельствования (форма 075/у, для водителей 083/у)
                      <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <div className="field">
                      <Input
                        isRequired
                        type="file"
                        name="medDoc"
                        id="medDoc"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "medDoc",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <Tooltip
                        label="Документ о прохождении предварительного медицинского освидетельствования (форма 075/у, для водителей 083/у)"
                        fontSize="md"
                        placement="right-end"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </div>
                  </div>
                  <div className="fieldsContex">
                    <FormLabel w="100%">
                      5. Военный билет/приписное свидетельство (для
                      военнообязанных)<span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <div className="field">
                      <Input
                        isRequired
                        type="file"
                        name="militaryDoc"
                        id="militaryDoc"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "militaryDoc",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <Tooltip
                        label="Военный билет/приписное свидетельство (для военнообязанных)"
                        fontSize="md"
                        placement="right-end"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </div>
                  </div>
                  <div className="fieldsContex">
                    <FormLabel w="100%">
                      6. Анкета (оригинал)
                      <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <div className="field">
                      <Input
                        isRequired
                        type="file"
                        name="formOriginal"
                        id="formOriginal"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "formOriginal",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <Tooltip
                        label="Анкета (оригинал)"
                        fontSize="md"
                        placement="right-end"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </div>
                  </div>
                  <div className="fieldsContex">
                    <FormLabel w="100%">
                      7. Фото 3*4<span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <div className="field">
                      <Input
                        isRequired
                        type="file"
                        name="image"
                        id="image"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "image",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <Tooltip
                        label="Фото 3*4 (1 шт) + электронное в формате Jpeg для оформления служебного пропуска"
                        fontSize="md"
                        placement="right-end"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </div>
                  </div>
                </div>

                <FormLabel htmlFor="text">При наличий предоставить</FormLabel>
                <div className="fieldsContainer">
                  <div className="fieldsContex">
                    <FormLabel w="100%">
                      1. Копия документа, подтверждающего статус инвалида, с
                      указанием группы инвалидности, срока действия (при
                      наличии)
                    </FormLabel>
                    <div className="field">
                      <Input
                        type="file"
                        name="invalidDoc"
                        id="invalidDoc"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "invalidDoc",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <Tooltip
                        label="Копия документа, подтверждающего статус инвалида, с указанием группы инвалидности, срока действия (при наличии)"
                        fontSize="md"
                        placement="right-end"
                      >
                        <InfoIcon />
                      </Tooltip>
                    </div>
                    <div className="fieldsContex">
                      <FormLabel w="100%">
                        2. Копия удостоверения, подтверждающего статус
                        пенсионера
                      </FormLabel>
                      <div className="field">
                        <Input
                          type="file"
                          name="pensionerDoc"
                          id="pensionerDoc"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "pensionerDoc",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <Tooltip
                          label="Копия удостоверения, подтверждающего статус пенсионера"
                          fontSize="md"
                          placement="right-end"
                        >
                          <InfoIcon />
                        </Tooltip>
                      </div>
                    </div>
                    <div className="fieldsContex">
                      <FormLabel w="100%">
                        3. Копия документа, подтверждающего право на льготы для
                        лиц, проживающих в экологически неблагополучных регионах
                        Казахстана
                      </FormLabel>
                      <div className="field">
                        <Input
                          type="file"
                          name="lgotiDoc"
                          id="lgotiDoc"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "lgotiDoc",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <Tooltip
                          label="Копия документа, подтверждающего право на льготы для лиц, проживающих в экологически неблагополучных регионах Казахстана"
                          fontSize="md"
                          placement="right-end"
                        >
                          <InfoIcon />
                        </Tooltip>
                      </div>
                    </div>
                    <div className="fieldsContex">
                      <FormLabel w="100%">
                        4. Копия свидетельства о заключении/о расторжении брака
                      </FormLabel>
                      <div className="field">
                        <Input
                          type="file"
                          name="marriageDoc"
                          id="marriageDoc"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "marriageDoc",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <Tooltip
                          label="Копия свидетельства о заключении/о расторжении брака"
                          fontSize="md"
                          placement="right-end"
                        >
                          <InfoIcon />
                        </Tooltip>
                      </div>
                    </div>
                    <div className="fieldsContex">
                      <FormLabel w="100%">
                        5. Копию свидетельства о рождении ребенка (детей) (до 14
                        лет)
                      </FormLabel>
                      <div className="field">
                        <Input
                          type="file"
                          name="childDoc"
                          id="childDoc"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "childDoc",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <Tooltip
                          label="Копию свидетельства о рождении ребенка (детей) (до 14 лет)"
                          fontSize="md"
                          placement="right-end"
                        >
                          <InfoIcon />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  {/* <Button
                        colorScheme="orange"
                        width="30%"
                        marginLeft="50px"
                        onClick={() => {
                          setPage(6);
                        }}
                      >
                        Назад
                      </Button> */}
                  <Button
                    colorScheme="green"
                    // width="5"
                    // marginLeft="50px"
                    type="submit"
                    // onClick={() => {
                    //  type
                    // }}
                  >
                    Отправить
                  </Button>
                </div>
              </VStack>
            </form>
          </Box>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

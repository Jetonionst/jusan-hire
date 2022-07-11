import { useFormik } from "formik";
import { InfoIcon } from "@chakra-ui/icons";
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
  Textarea,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Anketa() {
  const [page, setPage] = useState(1);
  // const [eduListLength, setEduListLength] = useState(0);

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
          qualification: null,
          endDate: null,
          startDate: null,
          speciality: null,
          formOfStudy: null,
          university: null,
        },
      ],
      extracurricularList: [
        {
          endDate: null,
          educationTime: null,
          educationName: null,
          speciality: null,
          degree: null,
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
          fio: null,
          birthDate: null,
          phone: null,
          studyOrWork: null,
        },
      ],
      relativeList: [
        {
          level: null,
          fio: null,
          birthDate: null,
          workPlace: null,
          major: null,
          phone: null,
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
      ],
      isRelativeJusanEmployee: "",
      relativeJusanEmployeeList: [
        {
          level: null,
          fio: null,
          division: null,
          major: null,
        },
      ],
      isCarOwner: "",
      carList: [
        {
          model: "",
          year: "",
          govNumber: "",
        },
      ],
      isMilitary: "",
      isSVC: "",
      isSVCAnswer: "",
      isExpiredLoan: "",
      isExpiredLoanAnswer: "",
      isCriminal: "",
      isCriminalAnswer: "",
      isRelativeCriminal: "",
      isRelativeCriminalAnswer: "",
      isCriminalDelo: "",
      isCriminalDeloAnswer: "",
      isAlimentPayer: "",
      isAlimentPayerAnswer: "",
      isHooligan: "",
      isHooliganAnswer: "",
      additionalInfo: "",
      isExtraIncome: "",
    },
    onSubmit: async (values) => {
      try {
        alert(JSON.stringify(values, null, 2));
        const req = await fetch("http://localhost:8081/api/v1/anketa/submit", {
          method: "POST",
          body: JSON.stringify(values, null, 2),
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(req);
        console.log(values);
      } catch (err) {
        console.log(err);
      }
    },
  });
  const [eduListlength, setEduListlength] = useState(0);
  const [eduList] = useState([
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
            id={`educationList[${eduListlength}].startDate`}
            name={`educationList[${eduListlength}].startDate`}
            type="datetime-local"
            variant="filled"
            placeholder="01.01.2000"
            onBlur={formik.handleChange}
            value={formik.values.educationList[eduListlength].startDate}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Дата окончания обучения:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`educationList[${eduListlength}].endDate`}
            name={`educationList[${eduListlength}].endDate`}
            type="datetime-local"
            variant="filled"
            onBlur={formik.handleChange}
            value={formik.values.educationList[eduListlength].endDate}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Полное название учебного заведения:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`educationList[${eduListlength}].university`}
            name={`educationList[${eduListlength}].university`}
            type="text"
            variant="filled"
            onBlur={formik.handleChange}
            value={formik.values.educationList[eduListlength].university}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Специальность:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`educationList[${eduListlength}].speciality`}
            name={`educationList[${eduListlength}].speciality`}
            type="text"
            variant="filled"
            onBlur={formik.handleChange}
            value={formik.values.educationList[eduListlength].speciality}
          />
        </div>

        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Форма обучения:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`educationList[${eduListlength}].formOfStudy`}
            name={`educationList[${eduListlength}].formOfStudy`}
            type="text"
            variant="filled"
            onBlur={formik.handleChange}
            value={formik.values.educationList[eduListlength].formOfStudy}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Квалификация:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`educationList[${eduListlength}].qualification`}
            name={`educationList[${eduListlength}].qualification`}
            type="text"
            variant="filled"
            onBlur={formik.handleChange}
            value={formik.values.educationList[eduListlength].qualification}
          />
        </div>
      </FormControl>
    </div>,
  ]);
  const [specialCoursesLength, setSpecialCoursesLength] = useState(0);
  const [specialCourses] = useState([
    <div className="fieldsContex">
      <FormControl
        isRequired
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
            id={`extracurricularList[${specialCoursesLength}].endDate`}
            name={`extracurricularList[${specialCoursesLength}].endDate`}
            type="datetime-local"
            variant="filled"
            placeholder="01.01.2000"
            onChange={formik.handleChange}
            value={
              formik.values.extracurricularList[specialCoursesLength].endDate
            }
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Длительность обучения:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`extracurricularList[${specialCoursesLength}].educationTime`}
            name={`extracurricularList[${specialCoursesLength}].educationTime`}
            type="datetime-local"
            variant="filled"
            onChange={formik.handleChange}
            value={
              formik.values.extracurricularList[specialCoursesLength]
                .educationTime
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
            id={`extracurricularList[${specialCoursesLength}].educationName`}
            name={`extracurricularList[${specialCoursesLength}].educationName`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={
              formik.values.extracurricularList[specialCoursesLength]
                .educationName
            }
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Специальность:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`extracurricularList[${specialCoursesLength}].speciality`}
            name={`extracurricularList[${specialCoursesLength}].speciality`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={
              formik.values.extracurricularList[specialCoursesLength].speciality
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
            id={`extracurricularList[${specialCoursesLength}].degree`}
            name={`extracurricularList[${specialCoursesLength}].degree`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={
              formik.values.extracurricularList[specialCoursesLength].degree
            }
          />
        </div>
      </FormControl>
    </div>,
  ]);
  const [childrenListLength, setchildrenListLength] = useState(0);
  const [childrenList] = useState([
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
            id={`chilrenList[${childrenListLength}].fio`}
            name={`chilrenList[${childrenListLength}].fio`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.chilrenList[childrenListLength].fio}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Дата Рождения:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`chilrenList[${childrenListLength}].birthDate`}
            name={`chilrenList[${childrenListLength}].birthDate`}
            type="datetime-local"
            variant="filled"
            onChange={formik.handleChange}
            placeholder="01.01.1999"
            value={formik.values.chilrenList[childrenListLength].birthDate}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Место Учебы/Работы:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`chilrenList[${childrenListLength}].studyOrWork`}
            name={`chilrenList[${childrenListLength}].studyOrWork`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.chilrenList[childrenListLength].studyOrWork}
          />
        </div>

        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Телефон:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`chilrenList[${childrenListLength}].studyOrWork`}
            name={`chilrenList[${childrenListLength}].studyOrWork`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.chilrenList[childrenListLength].studyOrWork}
          />
        </div>
      </FormControl>
    </div>,
  ]);
  const [relativeListLength, setRelativeListLength] = useState(0);
  const [relativeList] = useState([
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
            id={`relativeList[${relativeListLength}].level`}
            name={`relativeList[${relativeListLength}].level`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.relativeList[relativeListLength].level}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            ФИО (полностью):
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`relativeList[${relativeListLength}].fio`}
            name={`relativeList[${relativeListLength}].fio`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.relativeList[relativeListLength].fio}
          />
        </div>

        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Дата Рождения:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`relativeList[${relativeListLength}].birthDate`}
            name={`relativeList[${relativeListLength}].birthDate`}
            type="datetime-local"
            variant="filled"
            onChange={formik.handleChange}
            placeholder="01.01.1999"
            value={formik.values.relativeList[relativeListLength].birthDate}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Место Работы:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`relativeList[${relativeListLength}].workPlace`}
            name={`relativeList[${relativeListLength}].workPlace`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.relativeList[relativeListLength].workPlace}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Должность:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`relativeList[${relativeListLength}].major`}
            name={`relativeList[${relativeListLength}].major`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.relativeList[relativeListLength].major}
          />
        </div>

        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Телефон:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`relativeList[${relativeListLength}].phone`}
            name={`relativeList[${relativeListLength}].phone`}
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.relativeList[relativeListLength].phone}
          />
        </div>
      </FormControl>
    </div>,
  ]);
  const [jusanRelativeListLength, setJusanRelativeListLength] = useState(0);
  const [jusanRelative] = useState([
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
              value={formik.values.relativeJusanEmployeeList[0].level}
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
              value={formik.values.relativeJusanEmployeeList[0].fio}
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
              value={formik.values.relativeJusanEmployeeList[0].division}
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
              value={formik.values.relativeJusanEmployeeList[0].major}
            />
          </div>
        </FormControl>
      </div>
    </div>,
  ]);
  function addBtn(formLabel) {
    if (formLabel === "specCourses") {
      formik.values.extracurricularList.push({
        endDate: null,
        educationTime: null,
        educationName: null,
        speciality: null,
        degree: null,
      });
      const tempExtraCourse = specialCoursesLength + 1;

      setSpecialCoursesLength(tempExtraCourse);

      specialCourses.push(
        <div className="fieldsContex">
          <FormControl
            isRequired
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
                id={`extracurricularList[${tempExtraCourse}].endDate`}
                name={`extracurricularList[${tempExtraCourse}].endDate`}
                type="datetime-local"
                variant="filled"
                placeholder="01.01.2000"
                onChange={formik.handleChange}
                value={
                  formik.values.extracurricularList[tempExtraCourse].endDate
                }
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Длительность обучения:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`extracurricularList[${tempExtraCourse}].educationTime`}
                name={`extracurricularList[${tempExtraCourse}].educationTime`}
                type="datetime-local"
                variant="filled"
                onChange={formik.handleChange}
                value={
                  formik.values.extracurricularList[tempExtraCourse]
                    .educationTime
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
                id={`extracurricularList[${tempExtraCourse}].educationName`}
                name={`extracurricularList[${tempExtraCourse}].educationName`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={
                  formik.values.extracurricularList[tempExtraCourse]
                    .educationName
                }
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Специальность:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`extracurricularList[${tempExtraCourse}].speciality`}
                name={`extracurricularList[${tempExtraCourse}].speciality`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={
                  formik.values.extracurricularList[tempExtraCourse].speciality
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
                id={`extracurricularList[${tempExtraCourse}].degree`}
                name={`extracurricularList[${tempExtraCourse}].degree`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={
                  formik.values.extracurricularList[tempExtraCourse].degree
                }
              />
            </div>
          </FormControl>
        </div>
      );
    }
    if (formLabel === "education") {
      formik.values.educationList.push({
        startDate: null,
        endDate: null,
        university: null,
        speciality: null,
        qualification: null,
        formOfStudy: null,
      });
      const tempEdu = eduListlength + 1;
      setEduListlength(tempEdu);
      eduList.push(
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
                id={`educationList[${tempEdu}].startDate`}
                name={`educationList[${tempEdu}].startDate`}
                type="datetime-local"
                variant="filled"
                placeholder="01.01.2000"
                onChange={formik.handleChange}
                value={formik.values.educationList[tempEdu].startDate}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Дата окончания обучения:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`educationList[${tempEdu}].endDate`}
                name={`educationList[${tempEdu}].endDate`}
                type="datetime-local"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.educationList[tempEdu].endDate}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Полное название учебного заведения:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`educationList[${tempEdu}].university`}
                name={`educationList[${tempEdu}].university`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.educationList[tempEdu].university}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Специальность:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`educationList[${tempEdu}].speciality`}
                name={`educationList[${tempEdu}].speciality`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.educationList[tempEdu].speciality}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Форма обучения:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`educationList[${tempEdu}].formOfStudy`}
                name={`educationList[${tempEdu}].formOfStudy`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.educationList[tempEdu].formOfStudy}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Квалификация:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`educationList[${tempEdu}].qualification`}
                name={`educationList[${tempEdu}].qualification`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.educationList[tempEdu].qualification}
              />
            </div>
          </FormControl>
        </div>
      );
    }
    if (formLabel === "children") {
      formik.values.chilrenList.push({
        fio: null,
        birthDate: null,
        phone: null,
        studyOrWork: null,
      });
      const tempChildren = childrenListLength + 1;
      setchildrenListLength(tempChildren);

      childrenList.push(
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
                id={`chilrenList[${tempChildren}].fio`}
                name={`chilrenList[${tempChildren}].fio`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.chilrenList[tempChildren].fio}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Дата Рождения:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`chilrenList[${tempChildren}].birthDate`}
                name={`chilrenList[${tempChildren}].birthDate`}
                type="datetime-local"
                variant="filled"
                onChange={formik.handleChange}
                placeholder="01.01.1999"
                value={formik.values.chilrenList[tempChildren].birthDate}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Место Учебы/Работы:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`chilrenList[${tempChildren}].studyOrWork`}
                name={`chilrenList[${tempChildren}].studyOrWork`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.chilrenList[tempChildren].studyOrWork}
              />
            </div>

            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Телефон:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`chilrenList[${tempChildren}].studyOrWork`}
                name={`chilrenList[${tempChildren}].studyOrWork`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.chilrenList[tempChildren].studyOrWork}
              />
            </div>
          </FormControl>
        </div>
      );
    }
    if (formLabel === "relative") {
      formik.values.relativeList.push({
        level: null,
        fio: null,
        birthDate: null,
        workPlace: null,
        major: null,
        phone: null,
      });
      const tempRelative = relativeListLength + 1;
      setRelativeListLength(tempRelative);
      relativeList.push(
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
                id={`relativeList[${tempRelative}].level`}
                name={`relativeList[${tempRelative}].level`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.relativeList[tempRelative].level}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                ФИО (полностью):
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`relativeList[${tempRelative}].fio`}
                name={`relativeList[${tempRelative}].fio`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.relativeList[tempRelative].fio}
              />
            </div>

            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Дата Рождения:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`relativeList[${tempRelative}].birthDate`}
                name={`relativeList[${tempRelative}].birthDate`}
                type="datetime-local"
                variant="filled"
                onChange={formik.handleChange}
                placeholder="01.01.1999"
                value={formik.values.relativeList[tempRelative].birthDate}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Место Работы:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`relativeList[${tempRelative}].workPlace`}
                name={`relativeList[${tempRelative}].workPlace`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.relativeList[tempRelative].workPlace}
              />
            </div>
            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Должность:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`relativeList[${tempRelative}].major`}
                name={`relativeList[${tempRelative}].major`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.relativeList[tempRelative].major}
              />
            </div>

            <div className="field">
              <FormLabel htmlFor="text" fontSize={fSize}>
                Телефон:
              </FormLabel>
              <Input
                fontSize={fSize}
                w={fieldsSize}
                id={`relativeList[${tempRelative}].phone`}
                name={`relativeList[${tempRelative}].phone`}
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.relativeList[tempRelative].phone}
              />
            </div>
          </FormControl>
        </div>
      );
    }
    if (formLabel === "jusanRelative") {
      const temp = jusanRelativeListLength + 1;
      setJusanRelativeListLength(temp);
      formik.values.relativeJusanEmployeeList.push({
        level: null,
        fio: null,
        division: null,
        major: null,
      });
      jusanRelative.push(
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
                  Степень родства:
                </FormLabel>
                <Input
                  fontSize={fSize}
                  w={fieldsSize}
                  id={`relativeJusanEmployeeList[${temp}].level`}
                  name={`relativeJusanEmployeeList[${temp}].level`}
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.relativeJusanEmployeeList[temp].level}
                />
              </div>
              <div className="field">
                <FormLabel htmlFor="text" fontSize={fSize}>
                  ФИО:
                </FormLabel>
                <Input
                  fontSize={fSize}
                  w={fieldsSize}
                  id={`relativeJusanEmployeeList[${temp}].fio`}
                  name={`relativeJusanEmployeeList[${temp}].fio`}
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.relativeJusanEmployeeList[temp].fio}
                />
              </div>
              <div className="field">
                <FormLabel htmlFor="text" fontSize={fSize}>
                  Подразделение:
                </FormLabel>
                <Input
                  fontSize={fSize}
                  w={fieldsSize}
                  id={`relativeJusanEmployeeList[${temp}].division`}
                  name={`relativeJusanEmployeeList[${temp}].division`}
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.relativeJusanEmployeeList[temp].division}
                />
              </div>
              <div className="field">
                <FormLabel htmlFor="text" fontSize={fSize}>
                  Должность:
                </FormLabel>
                <Input
                  fontSize={fSize}
                  w={fieldsSize}
                  id={`relativeJusanEmployeeList[${temp}].major`}
                  name={`relativeJusanEmployeeList[${temp}].major`}
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.relativeJusanEmployeeList[temp].major}
                />
              </div>
            </FormControl>
          </div>
        </div>
      );
    }
  }
  if (page === 1) {
    return (
      <ChakraProvider>
        <div className="bg">
          <Flex
            bg="gray.100"
            align="center"
            justify="center"
            h="100%"
            padding={25}
          >
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
                        variant="filled"
                        placeholder="Пример: 01.01.1990"
                        onChange={formik.handleChange}
                        value={formik.values.birthDate}
                        type="datetime-local"
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
                    Укажите, пожалуйста, номера телефонов, по которым с Вами
                    можно связаться:
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
                      <div className="checker">
                        <Checkbox
                          id="isAddressMatches"
                          name="isAddressMatches"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isAddressMatches}
                          colorScheme="orange"
                        >
                          Cовпадает с адресом постоянной регистрации
                        </Checkbox>
                      </div>
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
                colorScheme="orange"
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
        </div>
      </ChakraProvider>
    );
  }
  if (page === 2) {
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

                  <FormLabel htmlFor="text">
                    Образование (в том числе неоконченное):
                  </FormLabel>
                  <div className="fieldsContainer">
                    <div className="fieldsContex">
                      {eduList.map((elem) => {
                        return elem;
                      })}
                      <div className="addBtn">
                        <Button
                          colorScheme="orange"
                          onClick={() => {
                            addBtn("education");
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                  <FormLabel htmlFor="text">
                    Специальные курсы,школы,стажировки
                  </FormLabel>
                  <div className="fieldsContainer">
                    <div className="fieldsContex">
                      {specialCourses.map((elem) => {
                        return elem;
                      })}
                    </div>
                    <div className="addBtn">
                      <Button
                        colorScheme="orange"
                        onClick={() => {
                          addBtn("specCourses");
                        }}
                      >
                        +
                      </Button>
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
        </div>
      </ChakraProvider>
    );
  }
  if (page === 3) {
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
                  <FormLabel htmlFor="text">
                    Укажите предшествующие 3 (три) места работы в обратном
                    хронологическом порядке, начиная с последнего или
                    действующего места работы:
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
                            type="datetime-local"
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
                            id={`lastThreeWorkplaces[1].workPeriod`}
                            name={`lastThreeWorkplaces[1].workPeriod`}
                            type="datetime-local"
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
                            id={`lastThreeWorkplaces[2].workPeriod`}
                            name={`lastThreeWorkplaces[2].workPeriod`}
                            type="datetime-local"
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
                              formik.values.threeRecommendationPeople[0]
                                .peopleFio
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
                            id={`threeRecommendationPeople[1].peopleFio`}
                            name={`threeRecommendationPeople[1].peopleFio`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={
                              formik.values.threeRecommendationPeople[1]
                                .peopleFio
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
                            id={`threeRecommendationPeople[2].peopleFio`}
                            name={`threeRecommendationPeople[2].peopleFio`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={
                              formik.values.threeRecommendationPeople[2]
                                .peopleFio
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
        </div>
      </ChakraProvider>
    );
  }
  if (page === 4) {
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
                      <option value="Не состою в браке">
                        Не состою в браке
                      </option>
                      <option value="Незарегистрированный брак">
                        Незарегистрированный брак
                      </option>
                      <option value="В разводе">В разводе</option>
                      <option value="Вдова(ец)">Вдова(ец)</option>
                    </Select>
                  </div>
                  {formik.values.marriageStatus !== "Не состою в браке" &&
                    formik.values.marriageStatus !== "" && (
                      <>
                        <FormLabel htmlFor="text">Супруг(а):</FormLabel>
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
                                  type="datetime-local"
                                  variant="filled"
                                  onChange={formik.handleChange}
                                  placeholder="01.01.1999"
                                  value={
                                    formik.values.lifeCompanion[0].birthDate
                                  }
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
                                  value={
                                    formik.values.lifeCompanion[0].workPlace
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
                                  value={
                                    formik.values.lifeCompanion[0].citizenship
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
                      </>
                    )}
                  <FormLabel htmlFor="text">Дети:</FormLabel>
                  <div className="fieldsContainer">
                    {childrenList.map((elem) => {
                      return elem;
                    })}
                  </div>
                  <div className="addBtn">
                    <Button
                      colorScheme="orange"
                      onClick={() => {
                        addBtn("children");
                      }}
                    >
                      +
                    </Button>
                  </div>

                  <FormLabel htmlFor="text">Ближайшие родственники:</FormLabel>
                  <div className="fieldsContainer">
                    {relativeList.map((elem) => {
                      return elem;
                    })}
                    <div className="addBtn">
                      <Button
                        colorScheme="orange"
                        onClick={() => {
                          addBtn("relative");
                        }}
                      >
                        +
                      </Button>
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
        </div>{" "}
      </ChakraProvider>
    );
  }
  if (page === 5) {
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
                  <FormLabel htmlFor="text">
                    Дополнительная информация:
                  </FormLabel>
                  <FormLabel htmlFor="text">
                    Являетесь ли Вы руководителем/учредителем (соучредителем),
                    членом совета директоров и/или правления коммерческих
                    организаций (ИП/ТОО):
                  </FormLabel>

                  <div className="checker">
                    <Checkbox
                      id="commercialOrganisationList[0].answer"
                      name="commercialOrganisationList[0].answer"
                      onChange={formik.handleChange}
                      isChecked={
                        formik.values.commercialOrganisationList[0].answer
                      }
                      colorScheme="orange"
                    >
                      Да
                    </Checkbox>
                  </div>
                  <div className="fieldsContainer">
                    {formik.values.commercialOrganisationList[0].answer && (
                      <div className="fieldsContex">
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
                            value={
                              formik.values.commercialOrganisationList[0].iin
                            }
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
                              formik.values.commercialOrganisationList[0]
                                .address
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
                            value={
                              formik.values.commercialOrganisationList[0].type
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
                    )}
                    <div className="fieldsContex">
                      <FormLabel htmlFor="text">
                        Имеете ли Вы родственников, членов семьи, работающих в
                        АО " Jusan Bank" или связанных с деятельностью АО "Jusan
                        Bank"
                      </FormLabel>
                      <div className="checker">
                        <Checkbox
                          id="isRelativeJusanEmployee"
                          name="isRelativeJusanEmployee"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isRelativeJusanEmployee}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>

                      {formik.values.isRelativeJusanEmployee && (
                        <>
                          {jusanRelative.map((elem) => {
                            return elem;
                          })}
                          <div className="addBtn">
                            <Button
                              colorScheme="orange"
                              onClick={() => {
                                addBtn("jusanRelative");
                              }}
                            >
                              +
                            </Button>
                          </div>
                        </>
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
        </div>
      </ChakraProvider>
    );
  }
  if (page === 6) {
    return (
      <ChakraProvider>
        <div className="bg">
          <Flex
            bg="gray.100"
            align="center"
            justify="center"
            p="25px"
            margin="0 auto"
          >
            <Box bg="white" p={6} rounded="md" w={"80%"}>
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormLabel htmlFor="text">
                    АНКЕТА КАНДИДАТА (<span style={{ color: "red" }}>*</span>
                    обязательные поля)
                  </FormLabel>
                  <FormLabel htmlFor="text">
                    Дополнительная информация:
                  </FormLabel>
                  <FormLabel htmlFor="text">Наличие Автомобиля</FormLabel>
                  <div className="checker">
                    <Checkbox
                      id="isCarOwner"
                      name="isCarOwner"
                      onChange={formik.handleChange}
                      isChecked={formik.values.isCarOwner}
                      colorScheme="orange"
                    >
                      Да
                    </Checkbox>
                  </div>
                  {formik.values.isCarOwner && (
                    <div className="fieldsContainer">
                      <div className="fieldsContex">
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Модель:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="carList[0].model"
                            name="carList[0].model"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.carList[0].model}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Гос.Номер:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="carList[0].govNumber"
                            name="carList[0].govNumber"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.carList[0].govNumber}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Год выпуска:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="carList[0].year"
                            name="carList[0].year"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.carList[0].year}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="field">
                    <span style={{ color: "red" }}>*</span>
                    <Select
                      isRequired
                      id="isMilitary"
                      name="isMilitary"
                      onChange={formik.handleChange}
                      placeholder="Отношение к воинской службе"
                    >
                      <option value="Военнообязанный">Военнообязанный</option>
                      <option value="невоеннообязанный ">
                        невоеннообязанный{" "}
                      </option>
                    </Select>
                  </div>
                  <FormLabel htmlFor="text" fontSize={fSize}>
                    Внимательно прочитайте и ответьте, пожалуйста, на следующие
                    вопросы
                  </FormLabel>
                  <div className="fieldsContex">
                    <div className="fieldAnsw">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Имеете ли Вы право на льготы согласно действующему
                        законодательству?
                      </FormLabel>
                      <div className="checker">
                        <Checkbox
                          id="isSVC"
                          name="isSVC"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isSVC}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {formik.values.isSVC && (
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Уточните
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="isSVCAnswer"
                            name="isSVCAnswer"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.isSVCAnswer}
                          />
                        </div>
                      )}
                    </div>
                    <div className="fieldAnsw">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Имеете ли Вы просроченный заем?
                      </FormLabel>
                      <div className="checker">
                        <Checkbox
                          id="isExpiredLoan"
                          name="isExpiredLoan"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isExpiredLoan}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {formik.values.isExpiredLoan && (
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Уточните
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="isExpiredLoanAnswer"
                            name="isExpiredLoanAnswer"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.isExpiredLoanAnswer}
                          />
                        </div>
                      )}
                    </div>
                    <div className="fieldAnsw">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Привлекались ли Вы к уголовной ответственности?
                      </FormLabel>
                      <div className="checker">
                        <Checkbox
                          id="isCriminal"
                          name="isCriminal"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isCriminal}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {formik.values.isCriminal && (
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Уточните
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="isCriminalAnswer"
                            name="isCriminalAnswer"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.isCriminalAnswer}
                          />
                        </div>
                      )}
                    </div>
                    <div className="fieldAnsw">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Привлекались ли Ваши близкие родственники, члены семьи к
                        уголовной ответственности?
                      </FormLabel>
                      <div className="checker">
                        <Checkbox
                          id="isRelativeCriminal"
                          name="isRelativeCriminal"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isRelativeCriminal}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {formik.values.isRelativeCriminal && (
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Уточните
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="isRelativeCriminalAnswer"
                            name="isRelativeCriminalAnswer"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.isRelativeCriminalAnswer}
                          />
                        </div>
                      )}
                    </div>
                    <div className="fieldAnsw">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Против Вас когда-либо возбуждалось уголовное дело?
                      </FormLabel>
                      <div className="checker">
                        <Checkbox
                          id="isCriminalDelo"
                          name="isCriminalDelo"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isCriminalDelo}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {formik.values.isCriminalDelo && (
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Уточните
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="isCriminalDeloAnswer"
                            name="isCriminalDeloAnswer"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.isCriminalDeloAnswer}
                          />
                        </div>
                      )}
                    </div>
                    <div className="fieldAnsw">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Выплачиваете ли Вы алименты?
                      </FormLabel>
                      <div className="checker">
                        <Checkbox
                          id="isAlimentPayer"
                          name="isAlimentPayer"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isAlimentPayer}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {formik.values.isAlimentPayer && (
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Уточните
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="isAlimentPayerAnswer"
                            name="isAlimentPayerAnswer"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.isAlimentPayerAnswer}
                          />
                        </div>
                      )}
                    </div>
                    <div className="fieldAnsw">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Привлекались ли Вы к административной ответственности?
                      </FormLabel>
                      <div className="checker">
                        <Checkbox
                          id="isHooligan"
                          name="isHooligan"
                          onChange={formik.handleChange}
                          isChecked={formik.values.isHooligan}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {formik.values.isHooligan && (
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Уточните
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id="isHooliganAnswer"
                            name="isHooliganAnswer"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.isHooliganAnswer}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Дополнительная информация о себе:
                    </FormLabel>
                    <Textarea
                      fontSize={fSize}
                      id="additionalInfo"
                      name="additionalInfo"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.additionalInfo}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Есть ли у Вас дополнительный доход (работа,
                      дистрибьютерство/представительство в торговых компаниях):
                    </FormLabel>
                    <Textarea
                      fontSize={fSize}
                      id="isExtraIncome"
                      name="isExtraIncome"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={formik.values.isExtraIncome}
                    />
                  </div>
                  <div className="buttons">
                    <Button
                      colorScheme="orange"
                      width="30%"
                      marginLeft="50px"
                      onClick={() => {
                        setPage(5);
                      }}
                    >
                      Назад
                    </Button>
                    <Button
                      colorScheme="orange"
                      width="30%"
                      marginLeft="50px"
                      // type="submit"
                      onClick={() => {
                        setPage(7);
                      }}
                    >
                      Далее
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
  if (page === 7) {
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
                  <div className="fieldsContainer">
                    <div className="fieldsContex">
                      <FormLabel w="100%">
                        1.Вид на жительство
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <div className="field">
                        <Input type="file" />
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
                        <Input type="file" />
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
                        <Input type="file" />
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
                        <Input type="file" />
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
                        <Input type="file" />
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
                        <Input type="file" />
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
                        <Input type="file" />
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
                        <Input type="file" />
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
                          <Input type="file" />
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
                          3. Копия документа, подтверждающего право на льготы
                          для лиц, проживающих в экологически неблагополучных
                          регионах Казахстана
                        </FormLabel>
                        <div className="field">
                          <Input type="file" />
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
                          4. Копия свидетельства о заключении/о расторжении
                          брака
                        </FormLabel>
                        <div className="field">
                          <Input type="file" />
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
                          5. Копию свидетельства о рождении ребенка (детей) (до
                          14 лет)
                        </FormLabel>
                        <div className="field">
                          <Input type="file" />
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
                    <Button
                      colorScheme="orange"
                      width="30%"
                      marginLeft="50px"
                      onClick={() => {
                        setPage(6);
                      }}
                    >
                      Назад
                    </Button>
                    <Button
                      colorScheme="orange"
                      width="30%"
                      marginLeft="50px"
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
  return <div className="sd">{page}</div>;
}

import { useFormik } from "formik";
import ReactLoading from "react-loading";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
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
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Service from "../service/service";
import { useEffect } from "react";

export default function Anketa() {
  const [isFormdownloaded, setIsFormDownloaded] = useState(false);
  const [isFormUploaded, setIsFormUploaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [page, setPage] = useState(1);

  // const [recoverForm, setRecoverForm] = useState({});
  // const [eduListLength, setEduListLength] = useState(0);
  const [form, updateForm] = useState({
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
    isAddressMatches: false,
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
    iscommercialOrganisation: false,
    commercialOrganisationList: [
      {
        ipOrToo: "",
        organizationName: "",
        iin: "",
        address: "",
        type: "",
        phone: "",
      },
    ],
    relativeJusanEmployee: false,
    relativeJusanEmployeeList: [
      {
        level: null,
        fio: null,
        division: null,
        major: null,
      },
    ],
    carOwner: false,
    carList: [
      {
        model: "",
        year: "",
        govNumber: "",
      },
    ],
    military: false,
    svc: false,
    isSVCAnswer: "",
    expiredLoan: false,
    isExpiredLoanAnswer: "",
    criminal: false,
    isCriminalAnswer: "",
    relativeCriminal: false,
    isRelativeCriminalAnswer: "",
    criminalDelo: false,
    isCriminalDeloAnswer: "",
    alimentPayer: false,
    isAlimentPayerAnswer: "",
    hooligan: false,
    isHooliganAnswer: "",
    additionalInfo: "",
    extraIncome: "",
    formConfirm: "",
  });
  const fieldsSize = 175;
  const fSize = "14px";
  const formik = useFormik({
    initialValues: form,
    onSubmit: async (values) => {
      if (page === 1) {
        setPage(2);
      }
      if (page === 2) {
        setPage(3);
      }
      if (page === 3) {
        setPage(4);
      }
      if (page === 4) {
        setPage(5);
      }
      if (page === 5) {
        setPage(6);
      }
      if (page === 6) {
        try {
          setShowLoader(true);
          const requestToUpload = await Service("uploadForm", values);

          if (requestToUpload) {
            setIsFormUploaded(true);
            setShowLoader(false);
          }
        } catch (err) {
          // console.log("step1");
          console.log(err);
        }
      }
    },
  });

  const [recoverFormBtn, setRecoverFormBtn] = useState(false);
  const [eduListlength, setEduListlength] = useState(0);
  const [eduList] = useState([
    <div className="fieldsContex">
      <FormControl
        isRequired={false}
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
            type="date"
            variant="filled"
            placeholder="01.01.2000"
            onChange={formik.handleChange}
            value={form.educationList[eduListlength].startDate}
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
            type="date"
            variant="filled"
            onChange={formik.handleChange}
            value={form.educationList[eduListlength].endDate}
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
            onChange={formik.handleChange}
            value={form.educationList[eduListlength].university}
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
            onChange={formik.handleChange}
            value={form.educationList[eduListlength].speciality}
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
            onChange={formik.handleChange}
            value={form.educationList[eduListlength].formOfStudy}
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
            onChange={formik.handleChange}
            value={form.educationList[eduListlength].qualification}
          />
        </div>
      </FormControl>
    </div>,
  ]);
  const [specialCoursesLength, setSpecialCoursesLength] = useState(0);
  const [specialCourses] = useState([
    <div className="fieldsContex">
      <FormControl
        isRequired={false}
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
            type="date"
            variant="filled"
            placeholder="01.01.2000"
            onChange={formik.handleChange}
            value={form.extracurricularList[specialCoursesLength].endDate}
          />
        </div>
        <div className="field">
          <FormLabel htmlFor="text" fontSize={fSize}>
            Начало обучения:
          </FormLabel>
          <Input
            fontSize={fSize}
            w={fieldsSize}
            id={`extracurricularList[${specialCoursesLength}].educationTime`}
            name={`extracurricularList[${specialCoursesLength}].educationTime`}
            type="date"
            variant="filled"
            onChange={formik.handleChange}
            value={form.extracurricularList[specialCoursesLength].educationTime}
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
            value={form.extracurricularList[specialCoursesLength].educationName}
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
            value={form.extracurricularList[specialCoursesLength].speciality}
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
            value={form.extracurricularList[specialCoursesLength].degree}
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
            value={form.chilrenList[childrenListLength].fio}
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
            type="date"
            variant="filled"
            onChange={formik.handleChange}
            placeholder="01.01.1999"
            value={form.chilrenList[childrenListLength].birthDate}
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
            value={form.chilrenList[childrenListLength].studyOrWork}
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
            value={form.chilrenList[childrenListLength].studyOrWork}
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
            value={form.relativeList[relativeListLength]?.level}
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
            value={form.relativeList[relativeListLength]?.fio}
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
            type="date"
            variant="filled"
            onChange={formik.handleChange}
            placeholder="01.01.1999"
            value={form.relativeList[relativeListLength]?.birthDate}
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
            value={form.relativeList[relativeListLength]?.workPlace}
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
            value={form.relativeList[relativeListLength]?.major}
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
            value={form.relativeList[relativeListLength]?.phone}
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
          isRequired={false}
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
              value={form.relativeJusanEmployeeList[0]?.level}
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
              value={form.relativeJusanEmployeeList[0]?.fio}
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
              value={form.relativeJusanEmployeeList[0]?.division}
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
              value={form.relativeJusanEmployeeList[0]?.major}
            />
          </div>
        </FormControl>
      </div>
    </div>,
  ]);

  async function saveForm() {
    const save = await Service("save", form);
  }

  function addBtn(formLabel) {
    if (formLabel === "specCourses") {
      form.extracurricularList.push({
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
            isRequired={false}
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
                type="date"
                variant="filled"
                placeholder="01.01.2000"
                onChange={formik.handleChange}
                value={form.extracurricularList[tempExtraCourse].endDate}
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
                type="date"
                variant="filled"
                onChange={formik.handleChange}
                value={form.extracurricularList[tempExtraCourse].educationTime}
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
                value={form.extracurricularList[tempExtraCourse].educationName}
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
                value={form.extracurricularList[tempExtraCourse].speciality}
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
                value={form.extracurricularList[tempExtraCourse].degree}
              />
            </div>
          </FormControl>
        </div>
      );
    }
    if (formLabel === "education") {
      form.educationList.push({
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
            isRequired={false}
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
                type="date"
                variant="filled"
                placeholder="01.01.2000"
                onChange={formik.handleChange}
                value={form.educationList[tempEdu].startDate}
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
                type="date"
                variant="filled"
                onChange={formik.handleChange}
                value={form.educationList[tempEdu].endDate}
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
                value={form.educationList[tempEdu].university}
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
                value={form.educationList[tempEdu].speciality}
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
                value={form.educationList[tempEdu].formOfStudy}
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
                value={form.educationList[tempEdu].qualification}
              />
            </div>
          </FormControl>
        </div>
      );
    }
    if (formLabel === "children") {
      form.chilrenList.push({
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
                value={form.chilrenList[tempChildren].fio}
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
                type="date"
                variant="filled"
                onChange={formik.handleChange}
                placeholder="01.01.1999"
                value={form.chilrenList[tempChildren].birthDate}
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
                value={form.chilrenList[tempChildren].studyOrWork}
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
                value={form.chilrenList[tempChildren].studyOrWork}
              />
            </div>
          </FormControl>
        </div>
      );
    }
    if (formLabel === "relative") {
      form.relativeList.push({
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
                value={form.relativeList[tempRelative].level}
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
                value={form.relativeList[tempRelative].fio}
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
                type="date"
                variant="filled"
                onChange={formik.handleChange}
                placeholder="01.01.1999"
                value={form.relativeList[tempRelative].birthDate}
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
                value={form.relativeList[tempRelative].workPlace}
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
                value={form.relativeList[tempRelative].major}
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
                value={form.relativeList[tempRelative].phone}
              />
            </div>
          </FormControl>
        </div>
      );
    }
    if (formLabel === "jusanRelative") {
      const temp = jusanRelativeListLength + 1;
      setJusanRelativeListLength(temp);
      form.relativeJusanEmployeeList.push({
        level: null,
        fio: null,
        division: null,
        major: null,
      });
      jusanRelative.push(
        <div className="fieldsContainer">
          <div className="fieldsContex">
            <FormControl
              isRequired={false}
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
                  value={form.relativeJusanEmployeeList[temp].level}
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
                  value={form.relativeJusanEmployeeList[temp].fio}
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
                  value={form.relativeJusanEmployeeList[temp].division}
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
                  value={form.relativeJusanEmployeeList[temp].major}
                />
              </div>
            </FormControl>
          </div>
        </div>
      );
    }
  }
  // if(page === 0) {

  // }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const recoverIIN = useRef(null);

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

                  <>
                    <Button colorScheme="blue" onClick={onOpen}>
                      Восстановить анкету
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Введите ваш ИИН</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                          <FormControl>
                            <FormLabel>ИИН</FormLabel>
                            <Input
                              ref={recoverIIN}
                              placeholder="Ваш ИИН"
                              onChange={(e) => {
                                setRecoverFormBtn(false);
                                document
                                  .querySelector(".recoverIINError")
                                  .removeAttribute("hidden");

                                const regex = /(?=(^([^\d]*?\d){12}$))/;
                                if (regex.test(e.target.value)) {
                                  console.log("hey");
                                  document
                                    .querySelector(".recoverIINError")
                                    .setAttribute("hidden", true);

                                  setRecoverFormBtn(true);
                                }
                                // console.log(validationSchema.iin);
                              }}
                            />
                            <div className="recoverIINError">
                              ИИН должен состоять из 12 цифр!
                            </div>
                          </FormControl>
                        </ModalBody>

                        <ModalFooter>
                          {recoverFormBtn ? (
                            <Button
                              colorScheme="blue"
                              mr={3}
                              onClick={async () => {
                                const iin = recoverIIN.current.value;
                                // const requestToForm = await fetch('')
                                const requestToRecoverForm = await Service(
                                  "recover",
                                  iin
                                );
                                updateForm(requestToRecoverForm);

                                console.log(form);
                              }}
                            >
                              Восстановить
                            </Button>
                          ) : (
                            <Button colorScheme="red" opacity={0.5} mr={3}>
                              Восстановить
                            </Button>
                          )}
                          <Button onClick={onClose}>Отмена</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>

                  <FormControl
                    isRequired={false}
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
                        value={form.iin}
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
                        value={form.fio}
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Число, месяц и год рождения
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={175}
                        id="birthDate"
                        name="birthDate"
                        variant="filled"
                        placeholder="Пример: 01.01.1990"
                        onChange={formik.handleChange}
                        value={form.birthDate}
                        type="date"
                      />
                    </div>
                    <div className="field">
                      <FormLabel htmlFor="text" fontSize={fSize}>
                        Место рождения
                      </FormLabel>
                      <Input
                        fontSize={fSize}
                        w={175}
                        id="birthPlace"
                        name="birthPlace"
                        type="text"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={form.birthPlace}
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
                        value={form.nationality}
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
                        value={form.citizenship}
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
                        value={form.email}
                      />
                    </div>
                  </FormControl>
                  <FormLabel htmlFor="text">
                    Паспорт, удостоверение личности
                  </FormLabel>
                  <FormControl
                    isRequired={false}
                    display={"flex"}
                    // justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    <div className="field">
                      <FormControl
                      //  sisRequired={false}={false}
                      >
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
                          value={form.passportSerie}
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
                        value={form.passportNumber}
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
                        value={form.passportIssuedBy}
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
                        type="date"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={form.passportIssuedAt}
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
                            type="tel"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.homePhone}
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
                            value={form.workPhone}
                          />
                        </div>
                        <div className="field">
                          <FormControl isRequired={false}>
                            <FormLabel htmlFor="text" fontSize={fSize}>
                              Мобильный телефон:
                            </FormLabel>
                            <Input
                              fontSize={fSize}
                              w={150}
                              id="mobilePhone"
                              name="mobilePhone"
                              type="phone"
                              variant="filled"
                              onChange={formik.handleChange}
                              value={form.mobilePhone}
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
                        isRequired={false}
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
                            value={form.relativePhone}
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
                            value={form.relativeFIO}
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
                            value={form.relativeLevel}
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
                        isRequired={false}
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
                            value={form.permanentCity}
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
                            value={form.permanentRegion}
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
                            value={form.permanentDistrict}
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
                            value={form.permanentStreet}
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
                            value={form.permanentHouse}
                          />
                        </div>
                        <div className="field">
                          <FormControl
                          // isRequired={false}={false}
                          >
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
                              value={form.permanentCorpus}
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
                            value={form.permanentApartment}
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
                          isChecked={form.isAddressMatches}
                          colorScheme="orange"
                        >
                          Cовпадает с адресом постоянной регистрации
                        </Checkbox>
                      </div>
                      {!form.isAddressMatches && (
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
                              value={form.factualCity}
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
                              value={form.factualRegion}
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
                              value={form.factualDistrict}
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
                              value={form.factualStreet}
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
                              value={form.factualHouse}
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
                              value={form.factualCorpus}
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
                              value={form.factualApartment}
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
                isChecked={form.rememberMe}
                colorScheme="orange"
              >
                Remember me?
              </Checkbox> */}
                  <div className="buttons">
                    <Button
                      colorScheme="orange"
                      width="30%"
                      // type="submit"
                      marginLeft="50px"
                      type="submit"
                    >
                      Далее
                    </Button>
                    {form.iin ? (
                      <Button
                        colorScheme="green"
                        width="30%"
                        // type="submit"
                        marginLeft="50px"
                        onClick={saveForm}
                      >
                        Сохранить
                      </Button>
                    ) : (
                      <Button
                        colorScheme="red"
                        width="30%"
                        opacity={0.3}
                        // type="submit"
                        marginLeft="50px"
                      >
                        Сохранить
                      </Button>
                    )}
                  </div>
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
                      type="submit"
                      // onClick={() => {
                      //   setPage(3);
                      // }}
                    >
                      Далее
                    </Button>
                    <Button
                      colorScheme="green"
                      width="30%"
                      // type="submit"
                      marginLeft="50px"
                      onClick={saveForm}
                    >
                      Сохранить
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
                        isRequired={false}
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
                            placeholder="1 год 2 месяца"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[0].workPeriod}
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
                            value={form.lastThreeWorkplaces[0].organizationName}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Вид деятельности организации:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[0].organizationType`}
                            name={`lastThreeWorkplaces[0].organizationType`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[0].organizationType}
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
                              form.lastThreeWorkplaces[0].organizationAddress
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
                              form.lastThreeWorkplaces[0].organizationPhone
                            }
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Наименование Должности:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[0].speciality`}
                            name={`lastThreeWorkplaces[0].speciality`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[0].speciality}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            ФИО руководителя:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[0].employerFio`}
                            name={`lastThreeWorkplaces[0].employerFio`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[0].employerFio}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Телефон руководителя:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[0].employerNumber`}
                            name={`lastThreeWorkplaces[0].employerNumber`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[0].employerNumber}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Причина увольнения:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[0].leavingReazon`}
                            name={`lastThreeWorkplaces[0].leavingReazon`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[0].leavingReazon}
                          />
                        </div>
                      </FormControl>
                    </div>
                    <div className="filedsContex">
                      <FormControl
                        isRequired={false}
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
                            placeholder="1 год 2 месяца"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[1].workPeriod}
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
                            value={form.lastThreeWorkplaces[1].organizationName}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Вид деятельности организации:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[1].organizationType`}
                            name={`lastThreeWorkplaces[1].organizationType`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[1].organizationType}
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
                              form.lastThreeWorkplaces[1].organizationAddress
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
                              form.lastThreeWorkplaces[1].organizationPhone
                            }
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Наименование Должности:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[1].speciality`}
                            name={`lastThreeWorkplaces[1].speciality`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[1].speciality}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            ФИО руководителя:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[1].employerFio`}
                            name={`lastThreeWorkplaces[1].employerFio`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[1].employerFio}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Телефон руководителя:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[1].employerNumber`}
                            name={`lastThreeWorkplaces[1].employerNumber`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[1].employerNumber}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Причина увольнения:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[1].leavingReazon`}
                            name={`lastThreeWorkplaces[1].leavingReazon`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[1].leavingReazon}
                          />
                        </div>
                      </FormControl>
                    </div>
                    <div className="filedsContex">
                      <FormControl
                        isRequired={false}
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
                            placeholder="1 год 2 месяца"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[2].workPeriod}
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
                            value={form.lastThreeWorkplaces[2].organizationName}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Вид деятельности организации:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[2].organizationType`}
                            name={`lastThreeWorkplaces[2].organizationType`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[2].organizationType}
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
                              form.lastThreeWorkplaces[2].organizationAddress
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
                              form.lastThreeWorkplaces[2].organizationPhone
                            }
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Наименование Должности:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[2].speciality`}
                            name={`lastThreeWorkplaces[2].speciality`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[2].speciality}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            ФИО руководителя:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[2].employerFio`}
                            name={`lastThreeWorkplaces[2].employerFio`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[2].employerFio}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Телефон руководителя:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[2].employerNumber`}
                            name={`lastThreeWorkplaces[2].employerNumber`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[2].employerNumber}
                          />
                        </div>
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Причина увольнения:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`lastThreeWorkplaces[2].leavingReazon`}
                            name={`lastThreeWorkplaces[2].leavingReazon`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.lastThreeWorkplaces[2].leavingReazon}
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
                        isRequired={false}
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
                            value={form.threeRecommendationPeople[0].peopleFio}
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
                              form.threeRecommendationPeople[0].peopleWorkPlace
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
                              form.threeRecommendationPeople[0].peopleMajor
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
                              form.threeRecommendationPeople[0].peoplePhone
                            }
                          />
                        </div>
                      </FormControl>
                    </div>
                    <div className="filedsContex">
                      <FormControl
                        isRequired={false}
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
                            value={form.threeRecommendationPeople[1].peopleFio}
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
                              form.threeRecommendationPeople[1].peopleWorkPlace
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
                              form.threeRecommendationPeople[1].peopleMajor
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
                              form.threeRecommendationPeople[1].peoplePhone
                            }
                          />
                        </div>
                      </FormControl>
                    </div>
                    <div className="filedsContex">
                      <FormControl
                        isRequired={false}
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
                            value={form.threeRecommendationPeople[2].peopleFio}
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
                              form.threeRecommendationPeople[2].peopleWorkPlace
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
                              form.threeRecommendationPeople[2].peopleMajor
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
                              form.threeRecommendationPeople[2].peoplePhone
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
                      type="submit"
                      // onClick={() => {
                      //   setPage(4);
                      // }}
                    >
                      Далее
                    </Button>
                    <Button
                      colorScheme="green"
                      width="30%"
                      // type="submit"
                      marginLeft="50px"
                      onClick={saveForm}
                    >
                      Сохранить
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
                      isRequired={false}
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
                  {form.marriageStatus !== "Не состою в браке" &&
                    form.marriageStatus !== "" && (
                      <>
                        <FormLabel htmlFor="text">Супруг(а):</FormLabel>
                        <div className="fieldsContainer">
                          <div className="filedsContex">
                            <FormControl
                              isRequired={false}
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
                                  value={form.lifeCompanion[0].fio}
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
                                  type="date"
                                  variant="filled"
                                  onChange={formik.handleChange}
                                  placeholder="01.01.1999"
                                  value={form.lifeCompanion[0].birthDate}
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
                                  value={form.lifeCompanion[0].workPlace}
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
                                  value={form.lifeCompanion[0].major}
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
                                  value={form.lifeCompanion[0].address}
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
                                  value={form.lifeCompanion[0].citizenship}
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
                                  value={form.lifeCompanion[0].phone}
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
                      type="submit"
                      // onClick={() => {
                      //   setPage(5);
                      // }}
                    >
                      Далее
                    </Button>
                    <Button
                      colorScheme="green"
                      width="30%"
                      // type="submit"
                      marginLeft="50px"
                      onClick={saveForm}
                    >
                      Сохранить
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
                      id="iscommercialOrganisation"
                      name="iscommercialOrganisation"
                      onChange={formik.handleChange}
                      isChecked={form.iscommercialOrganisation}
                      colorScheme="orange"
                    >
                      Да
                    </Checkbox>
                  </div>
                  <div className="fieldsContainer">
                    {form.iscommercialOrganisation && (
                      <div className="fieldsContex">
                        <div className="field">
                          <FormLabel htmlFor="text" fontSize={fSize}>
                            Укажите ИП/ТОО:
                          </FormLabel>
                          <Input
                            fontSize={fSize}
                            w={fieldsSize}
                            id={`commercialOrganisationList[0].ipOrToo`}
                            name={`commercialOrganisationList[0].ipOrToo`}
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={form.iscommercialOrganisation.ipOrToo}
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
                              form.iscommercialOrganisation.organizationName
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
                            value={form.commercialOrganisationList[0].iin}
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
                            value={form.commercialOrganisationList[0].address}
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
                            value={form.commercialOrganisationList[0].type}
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
                            value={form.commercialOrganisationList[0].phone}
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
                          id="relativeJusanEmployee"
                          name="relativeJusanEmployee"
                          onChange={formik.handleChange}
                          isChecked={form.relativeJusanEmployee}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>

                      {form.relativeJusanEmployee && (
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
                      type="submit"
                      // onClick={() => {
                      //   setPage(6);
                      // }}
                    >
                      Далее
                    </Button>
                    <Button
                      colorScheme="green"
                      width="30%"
                      // type="submit"
                      marginLeft="50px"
                      onClick={saveForm}
                    >
                      Сохранить
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
        {showLoader && <ReactLoading color="orange" className="loader" />}
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
                      id="carOwner"
                      name="carOwner"
                      onChange={formik.handleChange}
                      isChecked={form.carOwner}
                      colorScheme="orange"
                    >
                      Да
                    </Checkbox>
                  </div>
                  {form.carOwner && (
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
                            value={form.carList[0].model}
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
                            value={form.carList[0].govNumber}
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
                            value={form.carList[0].year}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="field">
                    <span style={{ color: "red" }}>*</span>
                    <Select
                      isRequired={false}
                      id="military"
                      name="military"
                      onChange={formik.handleChange}
                      placeholder="Отношение к воинской службе"
                    >
                      <option value={true}>Военнообязанный</option>
                      <option value={false}>невоеннообязанный </option>
                    </Select>
                  </div>
                  <FormLabel htmlFor="text">
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
                          id="svc"
                          name="svc"
                          onChange={formik.handleChange}
                          isChecked={form.svc}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {form.svc && (
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
                            value={form.isSVCAnswer}
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
                          id="expiredLoan"
                          name="expiredLoan"
                          onChange={formik.handleChange}
                          isChecked={form.expiredLoan}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {form.expiredLoan && (
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
                            value={form.isExpiredLoanAnswer}
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
                          id="criminal"
                          name="criminal"
                          onChange={formik.handleChange}
                          isChecked={form.criminal}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {form.criminal && (
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
                            value={form.isCriminalAnswer}
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
                          id="relativeCriminal"
                          name="relativeCriminal"
                          onChange={formik.handleChange}
                          isChecked={form.relativeCriminal}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {form.relativeCriminal && (
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
                            value={form.isRelativeCriminalAnswer}
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
                          id="criminalDelo"
                          name="criminalDelo"
                          onChange={formik.handleChange}
                          isChecked={form.criminalDelo}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {form.criminalDelo && (
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
                            value={form.isCriminalDeloAnswer}
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
                          id="alimentPayer"
                          name="alimentPayer"
                          onChange={formik.handleChange}
                          isChecked={form.alimentPayer}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {form.alimentPayer && (
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
                            value={form.isAlimentPayerAnswer}
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
                          id="hooligan"
                          name="hooligan"
                          onChange={formik.handleChange}
                          isChecked={form.hooligan}
                          colorScheme="orange"
                        >
                          Да
                        </Checkbox>
                      </div>
                      {form.hooligan && (
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
                            value={form.isHooliganAnswer}
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
                      value={form.additionalInfo}
                    />
                  </div>
                  <div className="field">
                    <FormLabel htmlFor="text" fontSize={fSize}>
                      Есть ли у Вас дополнительный доход (работа,
                      дистрибьютерство/представительство в торговых компаниях):
                    </FormLabel>
                    <Textarea
                      fontSize={fSize}
                      id="extraIncome"
                      name="extraIncome"
                      type="text"
                      variant="filled"
                      onChange={formik.handleChange}
                      value={form.extraIncome}
                    />
                  </div>

                  <div className="formConfirm">
                    <Checkbox
                      id="formConfirm"
                      name="formConfirm"
                      onChange={formik.handleChange}
                      isChecked={form.formConfirm}
                      colorScheme="orange"
                    >
                      <div className="formConfirmText">
                        В соответствии с требованиями Закона Республики
                        Казахстан «О персональных данных и их защите» даю АО "
                        Jusan Bank" (далее – «Банк») безусловное согласие на
                        сбор, обработку, хранение и распространение Банком
                        информации обо мне [и представляемом мной лице], включая
                        мои персональные данные [и персональные данные
                        представляемого мной лица], в том числе биометрические,
                        зафиксированные на электронном, бумажном и любом ином
                        носителе, а также происходящие в них в будущем изменения
                        и дополнения, в связи с возникновением с Банком, в том
                        числе в будущем, любых правоотношений, связанных,
                        включая, но не ограничиваясь, с банковским и/или иным
                        обслуживанием. <br />
                        При этом мои персональные данные [и персональные данные
                        представляемого мной лица] должны распространяться
                        Банком с учетом ограничений, установленных
                        законодательством Республики Казахстан, в том числе, ст.
                        50 Закона Республики Казахстан «О банках и банковской
                        деятельности в Республике Казахстан».
                      </div>
                    </Checkbox>
                  </div>
                  <div className="buttons">
                    <Button
                      colorScheme="orange"
                      width="25%"
                      marginLeft="50px"
                      onClick={() => {
                        setPage(5);
                      }}
                    >
                      Назад
                    </Button>
                    {form.formConfirm ? (
                      <Button
                        colorScheme="blue"
                        marginLeft="50px"
                        width="50%"
                        // onClick={() => {

                        // }}
                        type="submit"
                      >
                        Подписать Анкету
                      </Button>
                    ) : (
                      <Button
                        colorScheme="red"
                        opacity={0.5}
                        marginLeft="50px"
                        width="50%"
                        // onClick={() => {

                        // }}
                        // type="submit"
                      >
                        Подписать Анкету
                      </Button>
                    )}

                    {isFormUploaded ? (
                      <Button
                        colorScheme="green"
                        width="40%"
                        marginLeft="10px"
                        onClick={async () => {
                          setShowLoader(true);
                          const requestToDownload = await Service(
                            "downloadForm",
                            form
                          );
                          if (requestToDownload) {
                            setIsFormDownloaded(true);
                            setShowLoader(false);
                          }
                        }}
                      >
                        Скачать Анкету
                      </Button>
                    ) : (
                      <Button
                        opacity={0.5}
                        colorScheme="red"
                        width="40%"
                        marginLeft="10px"
                        onClick={() => {}}
                      >
                        Скачать Анкету
                      </Button>
                    )}
                    {isFormdownloaded ? (
                      <>
                        <Button
                          colorScheme="green"
                          width="25%"
                          marginLeft="50px"
                          // type="submit"
                          onClick={() => {
                            window.location = `/upload/${form.iin}`;
                          }}
                        >
                          Далее
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          opacity={0.5}
                          colorScheme="red"
                          width="25%"
                          marginLeft="50px"
                          // type="submit"
                          onClick={() => {
                            // console.log(form);
                          }}
                        >
                          Далее
                        </Button>
                      </>
                    )}
                    <Button
                      colorScheme="green"
                      width="30%"
                      // type="submit"
                      marginLeft="50px"
                      onClick={saveForm}
                    >
                      Сохранить
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

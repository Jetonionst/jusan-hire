import Footer from "../pageElements/footer";
import Header from "../pageElements/header";
import picture from "../logos/profilePicture.svg";
import formBtn from "../logos/formBtn.svg";
import docBtn from "../logos/docBtn.svg";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../service/service";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";

export default function Profile() {
  const [profileInfo, setProfileInfo] = useState("sss");
  const [allFieldsCorrect, setAllFieldsCorrect] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    async function getProfileInfo() {
      const profile = await Service("profile");
    }
    if (profileInfo) {
      onOpen();
    }
  }, []);

  function validation(target, type) {
    // console.log(target);
    target.nextSibling.removeAttribute("hidden");
    setAllFieldsCorrect(false);
    if (type === "iin") {
      const regex = /(?=(^([^\d]*?\d){12}$))/;

      if (regex.test(target.value)) {
        // console.log(target.value);
        target.nextSibling.setAttribute("hidden", true);
        setAllFieldsCorrect(true);
      }
    }
    if (type === "email") {
      const emailRegx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegx.test(target.value)) {
        target.nextSibling.setAttribute("hidden", true);
        setAllFieldsCorrect(true);
      }
    }
    if (type === "phone") {
      const regex = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
      if (regex.test(target.value)) {
        target.nextSibling.setAttribute("hidden", true);
        setAllFieldsCorrect(true);
      }
    }
  }

  return (
    <>
      <Header />
      <ChakraProvider>
        <div className="profilePage">
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Введите данные</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl isRequired>
                  <FormLabel>ИИН</FormLabel>
                  <Input
                    placeholder="ИИН"
                    onChange={(e) => {
                      validation(e.target, "iin");
                    }}
                  />
                  <div className="InvalidVaildation">
                    ИИН должен состоять из 12 цифр!
                  </div>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>ФИО</FormLabel>
                  <Input placeholder="ФИО" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Номер телефона</FormLabel>
                  <Input
                    placeholder="Телефон"
                    onChange={(e) => {
                      validation(e.target, "phone");
                    }}
                  />
                  <div className="InvalidVaildation">
                    Номер введён некорректно!
                  </div>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    onChange={(e) => {
                      validation(e.target, "email");
                    }}
                  />
                  <div className="InvalidVaildation">
                    Email введён некорректно!
                  </div>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Город</FormLabel>
                  <Input placeholder="Город" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme={"orange"} onClick={onClose}>
                  Отправить
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <div className="profileImage">
            <img src={picture} alt="pic" />
          </div>
          <div className="profileInfo">
            <div className="profileField">
              <div className="profileFieldElement">
                <b>ФИО:</b> Абдугалимов Абдугали Абдугалиевич
              </div>
              <div className="profileFieldElement">
                <b>Номер:</b> +7 700 000 00 00
              </div>
              <div className="profileFieldElement">
                <b>Email:</b> info@mail.com
              </div>
            </div>
            <div className="profileField">
              <div className="profileFieldElement">
                <b>ИИН:</b> 010103015501
              </div>
            </div>
            <div className="profileField">
              <div className="profileFieldElement">
                <b>Город:</b> Нур-Султан
              </div>
            </div>
          </div>
          <div className="profileButtons">
            <a className="profileButton" href="/form">
              <div className="formBtn">
                <div className="btnImg">
                  <img src={formBtn} alt="form button" />{" "}
                </div>
                <div className="btnText">ЗАПОЛНИТЬ АНКЕТУ</div>
              </div>
            </a>
            <a className="profileButton" href="/upload/12123">
              <div className="formBtn">
                <div className="btnImg">
                  <img src={docBtn} alt="form button" />{" "}
                </div>
                <div className="btnText">ОТПРАВИТЬ ДОКУМЕНТЫ</div>
              </div>
            </a>
            <div className="profilePageText">
              После заполнения анкеты и отправки документов, наш HR менеджер с
              вами свяжется.
            </div>
          </div>
        </div>
      </ChakraProvider>
      <Footer />
    </>
  );
}

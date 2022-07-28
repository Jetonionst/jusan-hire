import Footer from "../pageElements/footer";
import Header from "../pageElements/header";
import picture from "../logos/profilePicture.svg";
import formBtn from "../logos/formBtn.svg";
import docBtn from "../logos/docBtn.svg";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profilePage">
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
              <b>Год рождения:</b> 13.03.2001
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
      <Footer />
    </>
  );
}

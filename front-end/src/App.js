import Footer from "./components/pageElements/footer";
import Header from "./components/pageElements/header";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="mainContainer">
          <div className="formbtn">
            <div className="mainText">
              Найди работу <span>мечты</span> в одном месте!
            </div>
            <div className="btnOnDesk">
              <a href="/form" className="button-5">
                Создать заявку
              </a>
            </div>
          </div>
          <div className="mainPicture"></div>
        </div>
        <div className="mainMotivation">
          <div className="container">
            <div className="motivImage"></div>
            <div className="motivText">
              <h2>Мы нанимаем!</h2>
              Мы всегда стремимся добавить талантливых и целеустремленных людей
              в нашу преданную рабочую силу. Если вы работаете в команде,
              увлечены тем, что делаете, и рады возможности решать проблемы,
              Jusan — это место для вас! В нашей организации вы можете быть
              уверены, что работаете с самыми опытными специалистами в отрасли и
              над сложными заданиями, а также технологиями. Это поможет вам
              сделать вашу карьеру в правильном направлении.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

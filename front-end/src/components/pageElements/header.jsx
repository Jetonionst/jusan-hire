import doWeHaveToken from "../functions/checkIfAutorized";

export default function Header() {
  if (doWeHaveToken()) {
    return (
      <nav className="autorizationNavElemes">
        <a className="Logo" href="/">
          <img
            src="https://thumb.tildacdn.com/tild3864-6334-4461-b934-313861376333/-/resize/200x/-/format/webp/image.png"
            alt="SingLogo"
          />
        </a>

        <div className="headerUserNav">
          <a href="/profile" className="button-5 ">
            Профиль
          </a>

          <a
            href="/"
            className="button-5"
            onClick={() => {
              sessionStorage.clear();
            }}
          >
            Выйти
          </a>
        </div>
      </nav>
    );
  }
  return (
    <nav className="autorizationNavElemes">
      <a className="Logo" href="/">
        <img
          src="https://thumb.tildacdn.com/tild3864-6334-4461-b934-313861376333/-/resize/200x/-/format/webp/image.png"
          alt="SingLogo"
        />
      </a>
      <div className="headerUserNav">
        <a className="button-5 " href="/login">
          Войти
        </a>
      </div>
    </nav>
  );
}

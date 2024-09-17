import { useState } from "react";
import DownloadFiles2 from "./DownloadFiles2";
import DownloadFiles from "./DownloadFiles";
import DownloadFiles3 from "./DownloadFiles3";

const PASSWORDS = {
  sppr: "sppr2024",
  smart: "smart_2024",
  sp81: "spfrd81",
};

export const Password = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authType, setAuthType] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === PASSWORDS.sppr) {
      setIsAuthenticated(true);
      setAuthType("sppr");
    } else if (password === PASSWORDS.smart) {
      setIsAuthenticated(true);
      setAuthType("smart");
    } else if (password === PASSWORDS.sp81) {
      setIsAuthenticated(true);
      setAuthType("sp81");
    } else {
      alert("Błędne hasło");
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="password_input">
            Podaj hasło Twojej szkoły:
            <br />
            <input
              name="login"
              id="password_input"
              placeholder="Podaj hasło"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button id="button" type="submit">
            Accept
          </button>
        </form>
      ) : authType === "sppr" ? (
        <>
          <p>
            <strong>
              Twoje treningi (wyjątki są uzgadniane indywidualnie):
            </strong>
            <br />
            Poniedziałek:
            <br /> 14:45 KLASY 0-2
            <br /> 15:45-16:45 KLASY od 3 wzwyż
            <br />
            Piątek:
            <br /> 14:45 KLASY 0-2
            <br /> 15:45-16:45 KLASY od 3 wzwyż
            <br />
            <strong>
              Wypełnij i przekaż trenerowi deklarację wraz z załącznikami.
            </strong>
          </p>
          <DownloadFiles />
        </>
      ) : authType === "smart" ? (
        <>
          <p>
            <strong>Twoje treningi:</strong>
            <br />
            Czwartek:
            <br /> 13:45 Przedszkole
            <br /> 15:15-16:00 Szkoła
            <br />
            <strong>
              Wypełnij i przekaż trenerowi deklarację wraz z załącznikami.
            </strong>
          </p>
          <DownloadFiles2 />
        </>
      ) : authType === "sp81" ? (
        <>
          <p>
            <strong>Twoje treningi:</strong>
            <br />
            Wtorek:
            <br /> 16:15-17:00 Szkoła
            <br />
            <strong>
              Wypełnij i przekaż trenerowi deklarację wraz z załącznikami.
            </strong>
          </p>
          <DownloadFiles3 />
        </>
      ) : null}
    </div>
  );
};

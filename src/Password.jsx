import { useState } from "react";
import DownloadPdfFile from "./DownloadFiles";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [isAutethitacated, setIsAuthenthicated] = useState(false);
  const [isAutethitacated2, setIsAuthenthicated2] = useState(false);

  const sppr = password === "sppr2024"; // pass  1
  const smart_2024 = password === "smart_2024"; //pass 2

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (sppr) {
      setIsAuthenthicated(true);
      setIsAuthenthicated2("sppr2024");
    } else if (smart_2024) {
      setIsAuthenthicated(true);
      setIsAuthenthicated2("smart_2024");
    } else {
      alert("Błędne hasło");
    }
  };

  return (
    <div>
      {isAutethitacated && sppr ? (
        <>
          <p>
            <strong>
              Twoje treningi(wyjątki są uzgadniane indywidualnie):
            </strong>{" "}
            <br></br>
            Poniedziałek:
            <br></br> 14:45 KLASY 0-2<br></br> 15:45-16:45 KLASY od 3 wzwyż{" "}
            <br></br> Piątek:<br></br> 14:45 KLASY 0-2<br></br> 15:45-16:45
            KLASY od 3 wzwyż
            <br></br>
            <strong>
              Wypełnij i przekaż trenerowi deklarację wraz z załącznikami.
            </strong>
          </p>
          <DownloadPdfFile></DownloadPdfFile>
        </>
      ) : isAutethitacated2 && smart_2024 ? (
        <>
          <p>
            <strong>Twoje treningi:</strong> <br></br>
            Czwartek:
            <br></br> 13:45 Przedszkole<br></br> Szkoła 14:30-15:15 <br></br>
            <strong>
              Wypełnij i przekaż trenerowi deklarację wraz z załącznikami.
            </strong>
          </p>
        </>
      ) : (
        <form id="form" onSubmit={handleSubmit}>
          <label id="form">
            Podaj hasło Twojej szkoły:<br></br>
            <input
              name="login"
              id="password_input"
              placeholder="Podaj hasło"
              value={password}
              onChange={handlePasswordChange}
            ></input>
          </label>

          <br></br>
          <button id="button" type="submit">
            Accept
          </button>
        </form>
      )}
    </div>
  );
};

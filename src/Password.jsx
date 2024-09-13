import { useState } from "react";
import DownloadPdfFile from "./DownloadFiles";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [isAutethitacated, setIsAuthenthicated] = useState(false);
  const [isAutethitacated2, setIsAuthenthicated2] = useState(false);

  const sppr = password === "sppr"; // pass  1
  const spn81 = password === "spn81"; //pass 2

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (sppr) {
      setIsAuthenthicated(true);
      setIsAuthenthicated2("sppr");
    } else if (spn81) {
      setIsAuthenthicated(true);
      setIsAuthenthicated2("spn81");
    } else {
      alert("Błędne hasło");
    }
  };

  return (
    <div>
      {isAutethitacated && sppr ? (
        <>
          <p>
            Twoje treningi: Poniedziałek:<br></br> 14:45 KLASY 1-2<br></br>{" "}
            15:35-16:30 KLASY od 3 wzwyż <br></br> Piątek:<br></br> 14:45 KLASY
            1-2<br></br> 15:35-16:30 KLASY od 3 wzwyż
          </p>
          <DownloadPdfFile>Jestem</DownloadPdfFile>
        </>
      ) : isAutethitacated2 && spn81 ? (
        <p> Twoje treningi: </p>
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

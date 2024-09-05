import trainephoto from "./assets/received_401294507751293.jpeg";
import trainephoto1 from "./assets/comp_IMG_2049.jpg";
import { Password } from "./Password";

function Trainings() {
  return (
    <div className="main">
      <p>
        Przyjdź na trening próbny i dołącz do nas,a my postaramy się sprawić
        ,żeby stało się to Twoją codziennością i stylem życia. Stawiamy na
        bezpeczeństwo i maksymalną realność treningu. Zdrowie,sport i
        samorealizacja.Nowi znajomi i współpraca w grupie.<br></br>
        <br></br>
        Grafiki zajęć i informacje dodatkowe o zajęciach w Twojej lokalizacji
        uzyskasz po podaniu hasła:
      </p>
      <Password></Password>
      <br></br>
      <div className="trainephoto_container">
        <img src={trainephoto} className="trainephoto" alt="trainephoto" />
        <img src={trainephoto1} className="trainephoto1" alt="trainephoto1" />
      </div>
    </div>
  );
}

export default Trainings;

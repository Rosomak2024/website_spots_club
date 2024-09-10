import Photo_Social from "./assets/Twitter Facebook Instagram Youtube - Fb Twitter Youtube Logo Transparent PNG - 922x922 - Free Download on NicePNG.jpg";
import Photofuro2 from "./assets/logo fb black.png";

function Footer() {
  return (
    <div className="footer">
      <p className="footer_text">
        Klub Sportów Walki "Dzik" <br></br> Wszystkie prawa zastrzeżone 2023.
      </p>
      <img src={Photofuro2} className="photofuro2" alt="photofuro" />
      <div className="footer_text">Znajdziesz nas na:</div>
      <FacebookButton />
    </div>
  );
}

const FacebookButton = () => {
  return (
    <a
      href="https://www.facebook.com/baranski.michael/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Photo_Social} className="fb" alt="fb" />
    </a>
  );
};

export default Footer;

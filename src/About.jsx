import myphoto from "./assets/IMG_20220321_212202_032.jpg";

function About({ description, name }) {
  return (
    <div className="main">
      <h1>{name}</h1>
      <img src={myphoto} className="myphoto" alt="myphoto" />
      <p>{description}</p>
    </div>
  );
}

export default About;

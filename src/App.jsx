import Intro from "./Intro";
import StartPage from "./StartPage";
import About from "./About";
import Trainings from "./Trainings";
import Contact from "./Contact";
import Menu from "./Menu";
import Footer from "./Footer";
import Documents from "./Documents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
// import WeatherComponent from "./Weather";

const description = `
Treningi w klubie od 15 lat prowadzi Michał Barański. Ze sportami walki
związany od 23 lat.
International Furo Organisation - karate na zasadach MMA - 2 dan.
Vce mistrz Polski karate Ashihara Karate.
W formule kickboxing semi i grappling w kategorii OPEN na otwartych mistrzostwach
w Mikołowie uwieńczony został dwoma brązowymi medalami w 2016 roku.
Obecnie trenuje BJJ.
`;

export const App = () => {
  return (
    <BrowserRouter>
      <Intro />
      <Menu />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/about"
          element={
            <About description={description} name={"Trener Michał Barański"} />
          }
        />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <WeatherComponent className="weather" /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;

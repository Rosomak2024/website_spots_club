import Intro from './Intro';
import StartPage from './StartPage';
import About from './About';
import Trainings from './Trainings';
import Mobile from './Mobile';
import Contact from './Contact';
import Menu from './Menu';
import Footer from './Footer';
import WeatherComponent from './Weather';
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import './App.scss';


export const App = () => {
  return (
    <BrowserRouter>
      <Intro />
      <Menu />
      <Routes >
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <WeatherComponent className="weather" />
      <Footer />
    </BrowserRouter>

  );
}



export default App;

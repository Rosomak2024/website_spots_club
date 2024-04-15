import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="nav">
      <ul className="list">
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/about">O nas</Link>
        </li>
        <li>
          <Link to="/cooperation">Organizacja</Link>
        </li>
        <li>
          <Link to="/trainings">Treningi</Link>
        </li>
        <li>
          <Link to="/documents">Do Pobrania</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;

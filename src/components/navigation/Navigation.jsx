import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/add-recipe" className="nav-link">
            <span>New Recipe</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <span>Recipe List</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/favorites" className="nav-link">
            <span>Favorites</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

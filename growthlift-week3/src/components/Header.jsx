import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>GrowthLift Internship</h1>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
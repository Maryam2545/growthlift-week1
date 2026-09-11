import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-8 py-4 bg-gray-900 border-b border-gray-800">
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-0">
        GrowthLift Internship
      </h1>

      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400 hover:text-green-400 transition-colors font-medium"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400 hover:text-green-400 transition-colors font-medium"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400 hover:text-green-400 transition-colors font-medium"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400 hover:text-green-400 transition-colors font-medium"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
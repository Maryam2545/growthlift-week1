import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const {
    user,
    logout
  } = useAuth();

  return (
    <header>

      <h2>GrowthLift App</h2>

      {user ? (
        <>
          <span>
            Welcome, {user.name}
          </span>

          {" "}

          <Link to="/dashboard">
            Dashboard
          </Link>

          {" "}

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            Login
          </Link>

          {" "}

          <Link to="/register">
            Register
          </Link>
        </>
      )}

    </header>
  );
}

export default Header;
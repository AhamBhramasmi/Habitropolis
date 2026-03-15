import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Habitropolis</h2>

      <div className="nav-links">

        <Link to="/">Dashboard</Link>

        <Link to="/habits">Habits</Link>

        <Link to="/stats">Stats</Link>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
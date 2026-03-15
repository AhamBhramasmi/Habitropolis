import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 20px",
      background: "#111",
      color: "white"
    }}>
      <h2>Habitropolis</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link to="/habits" style={{ color: "white", textDecoration: "none" }}>
          Habits
        </Link>

        <Link to="/stats" style={{ color: "white", textDecoration: "none" }}>
          Stats
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
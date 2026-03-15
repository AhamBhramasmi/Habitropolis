import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 40px",
      backgroundColor: "#0f172a",
      color: "white"
    }}>
      
      <h2>Habitropolis</h2>

      <div style={{display:"flex", gap:"20px"}}>
        <a href="#">Home</a>
        <a href="#">Habits</a>
        <a href="#">Stats</a>
      </div>

    </nav>
  );
}

export default Navbar;
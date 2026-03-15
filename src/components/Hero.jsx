import React from "react";

function Hero() {
  return (
    <section style={{
      textAlign: "center",
      padding: "100px 20px"
    }}>
      
      <h1>Build Better Habits</h1>

      <p>
        Habitropolis helps you track daily habits and stay consistent.
      </p>

      <button style={{
        marginTop: "20px",
        padding: "12px 24px",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Get Started
      </button>

    </section>
  );
}

export default Hero;
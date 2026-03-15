import { useState } from "react";

function HabitCard({ title, streak }) {
  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setCompleted(true);
  }

  return (
    <div className="habit-card">

      <div className="habit-header">
        <h3>{title}</h3>

        <span className={`fire-icon ${completed ? "fire-active" : ""}`}>
          🔥
        </span>

      </div>

      <p className="habit-streak">
        Streak: {streak} days
      </p>

      <button
        className="complete-btn"
        onClick={handleComplete}
      >
        Mark Done
      </button>

    </div>
  );
}

export default HabitCard;
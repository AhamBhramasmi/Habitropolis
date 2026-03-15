import { useState } from "react";

function HabitCard({ title, streak }) {

  const progress = 60; // placeholder
  const [animateFire, setAnimateFire] = useState(false);

  function handleComplete() {
    setAnimateFire(true);

    setTimeout(() => {
      setAnimateFire(false);
    }, 600);
  }

  return (
    <div className="habit-card">

      <div className="habit-header">
        <h3>{title}</h3>
      </div>

      <p className={`habit-streak ${animateFire ? "fire-animate" : ""}`}>
        🔥 Streak: {streak} days
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="progress-text">{progress}% completed</p>

      <div className="habit-buttons">

        <button
          className="complete-btn"
          onClick={handleComplete}
        >
          Mark Done
        </button>

        <button className="delete-btn">
          Delete
        </button>

      </div>

    </div>
  );
}

export default HabitCard;
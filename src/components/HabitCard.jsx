function HabitCard({ title, streak }) {

  const progress = 60; // placeholder for UI

  return (
    <div className="habit-card">

      <div className="habit-header">
        <h3>{title}</h3>
      </div>

      <p className="habit-streak">🔥 Streak: {streak} days</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="progress-text">{progress}% completed</p>

      <div className="habit-buttons">

        <button className="complete-btn">
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
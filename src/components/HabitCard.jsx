function HabitCard({ title, streak }) {
  return (
    <div className="habit-card">
      <h3>{title}</h3>
      <p>🔥 Streak: {streak} days</p>

      <button className="complete-btn">
        Mark Done
      </button>
    </div>
  );
}

export default HabitCard;
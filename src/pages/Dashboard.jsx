import { useState } from "react";
import Navbar from "../components/Navbar";
import HabitCard from "../components/HabitCard";
import AddHabitModal from "../components/AddHabitModal";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const habits = [
    { title: "Drink Water", streak: 4 },
    { title: "Exercise", streak: 7 },
    { title: "Read Book", streak: 3 }
  ];

  return (
    <div>
      <Navbar />

      <main style={{ padding: "20px" }}>

        <div className="hero-quote">
          <p className="quote-text">
            “A HABIT MISSED ONCE IS A MISTAKE,
            A HABIT MISSED TWICE IS THE START OF A{" "}
            <span
              className="new-habit-highlight"
              onClick={() => setIsModalOpen(true)}
            >
              NEW HABIT
            </span>
            ”
          </p>

          <p className="quote-author">
            — Aditya Gothe
          </p>
        </div>

        <h1>Habit Dashboard</h1>

        <section className="habit-grid">
          {habits.length === 0 ? (
            <div className="empty-state">
              <h2>😴 No habits yet</h2>
              <p>Start building your streak!</p>
            </div>
          ) : (
            habits.map((habit, index) => (
              <HabitCard
                key={index}
                title={habit.title}
                streak={habit.streak}
              />
            ))
          )}
        </section>

        <button
          className="add-habit-btn"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Habit
        </button>

        <AddHabitModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </div>
  );
}

export default Dashboard;
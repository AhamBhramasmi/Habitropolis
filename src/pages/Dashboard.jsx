import { useState } from "react";
import Navbar from "../components/Navbar";
import HabitCard from "../components/HabitCard";
import AddHabitModal from "../components/AddHabitModal";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Navbar />

      <main style={{ padding: "20px" }}>
        <h1>Habit Dashboard</h1>

        <section className="habit-grid">
          <HabitCard title="Drink Water" streak={4} />
          <HabitCard title="Exercise" streak={7} />
          <HabitCard title="Read Book" streak={3} />
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
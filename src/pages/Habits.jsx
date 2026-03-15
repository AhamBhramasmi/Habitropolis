import Navbar from "../components/Navbar";
import HabitCard from "../components/HabitCard";

function Habits() {

  const habits = [
    { title: "Drink Water", streak: 4 },
    { title: "Exercise", streak: 7 },
    { title: "Read Book", streak: 3 },
    { title: "Meditate", streak: 5 }
  ];

  return (
    <div>
      <Navbar />

      <main style={{ padding: "20px" }}>
        <h1>All Habits</h1>

        <section className="habit-grid">
          {habits.map((habit, index) => (
            <HabitCard
              key={index}
              title={habit.title}
              streak={habit.streak}
            />
          ))}
        </section>

      </main>
    </div>
  );
}

export default Habits;
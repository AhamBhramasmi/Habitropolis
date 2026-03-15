import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <main style={{ padding: "20px" }}>
        <h1>Habit Dashboard</h1>

        <section className="habit-grid">
          {/* Habit cards will appear here */}
          <p>No habits yet</p>
        </section>

        <button className="add-habit-btn">
          + Add Habit
        </button>
      </main>
    </div>
  );
}

export default Dashboard;
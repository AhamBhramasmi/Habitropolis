import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";

function Stats({ darkMode, setDarkMode }) {

  return (
    <div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main style={{ padding: "20px" }}>

        <h1>Habit Statistics</h1>

        <div className="stats-grid">

          <StatsCard title="Total Habits" value="5" />

          <StatsCard title="Completed Today" value="3" />

          <StatsCard title="Longest Streak" value="12" />

          <StatsCard title="Current Streak" value="4" />

        </div>

      </main>

    </div>
  );
}

export default Stats;
import Navbar from "../components/Navbar";

function Stats({ darkMode, setDarkMode }) {

  return (
    <div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main style={{ padding: "20px" }}>
        <h1>Habit Statistics</h1>

        <p>Statistics UI coming soon.</p>

      </main>

    </div>
  );
}

export default Stats;
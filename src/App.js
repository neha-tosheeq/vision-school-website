import './App.css';

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2>The Vision Public School</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Admissions</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Empowering Minds, Shaping Futures</h1>
        <p>Welcome to The Vision Public School</p>
        <button>Apply Now</button>
      </section>
      {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <h3>Announcements</h3>
          <p>Latest school updates and notices.</p>
        </div>

        <div className="card">
          <h3>Events</h3>
          <p>Upcoming school events and activities.</p>
        </div>

        <div className="card">
          <h3>News</h3>
          <p>Recent achievements and highlights.</p>
        </div>
      </section>

    </div>
  );
}

export default App;



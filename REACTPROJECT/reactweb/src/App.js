import './App.css';
function App() {
  return (
    <>
      <header>
        <div className="main">
          <h1>MOWRIYAN C</h1>
          <h2>Role</h2>
          <p>I'm Final year Computer Science Student. I'm Pursuing at University College of Engineering, Ariyalur with a passion of Full Stack developer. I'm interested to learn MERN Stack to Become a developer. I know HTML, CSS, JS and interested to learn Full stack development.</p>
          <h2>About</h2>
          <p>Passionate and driven individual with a strong interest in technology and creative problem-solving.
            Always eager to learn new skills and take on challenges with a positive mindset.
            Committed to continuous growth, both personally and professionally.
            Believe in teamwork, innovation, and making a meaningful impact.</p>
          <button>More info</button>
        </div>
        <div className="header">
          <img src="profile1.png.png" />
        </div>
      </header>


      <main className="container">

        <div className="overview-container">
          <h1>PROJECT OVERVIEW</h1>
          <p>
            The <strong>Student Management System</strong> is a web application built using <strong>ReactJS</strong> that allows educational institutions to manage student-related information and parent interaction efficiently. This project focuses on two roles: <strong>Students</strong> and <strong>Parents</strong>.
          </p>

          <h2>✅ Key Features</h2>
          <ul>
            <li>🔐 Student & Parent Login</li>
            <li>📊 View academic performance and contest results</li>
            <li>📁 Profile and attendance overview</li>
            <li>💬 Parent insights into student progress</li>
          </ul>

          <h2>🛠 Tech Stack</h2>
          <ul>
            <li><strong>Frontend:</strong> ReactJS, HTML, CSS</li>
            <li><strong>Routing:</strong> React Router DOM</li>
            <li><strong>State Management:</strong> React Hooks (useState)</li>
          </ul>
        </div>
       
        <div className="overview">
          <h2>🚀 Project Flow</h2>
          <ol>
            <li>Students and Parents access login pages via separate routes</li>
            <li>Forms are styled using CSS with validation</li>
            <li>Alerts are used as placeholders for login success</li>
            <li>Future integration planned with backend/database</li>
          </ol>
          <h2>🔮 Future Enhancements</h2>
          <ul>
            <li>Connect with backend for real authentication</li>
            <li>Dashboard for students and parents</li>
            <li>Reports, marks, attendance uploads</li>
            <li>JWT login, secure API, mobile responsiveness</li>
          </ul>
        </div>
      </main>
    </>
  );
}


export default App;
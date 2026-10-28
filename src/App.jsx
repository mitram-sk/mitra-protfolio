import './App.css'

function App() {
  return (
    <main>
      <nav>
        <a className="logo" href="#">MITRA<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">COMPUTER SCIENCE ENGINEERING</p>
        <h1>Hi, I'm <span>Mitra SK</span></h1>
        <h2>Aspiring Data Analyst | AI/ML Enthusiast</h2>
        <p>
          I'm a Computer Science student interested in using programming,
          data and technology to solve real-world problems.
        </p>
        <p className="usn">USN: 24BBTCS161</p>
        <a className="button" href="#projects">Explore My Projects ↗</a>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a curious and motivated Computer Science Engineering student
          learning programming, data analytics, web development and machine
          learning. I enjoy exploring new technologies, improving my
          problem-solving skills, reading and travelling.
        </p>
      </section>

      <section id="skills">
        <h2>Skills I'm Building</h2>
        <div className="cards">
          {['Python', 'SQL', 'JavaScript', 'Excel', 'Pandas',
            'NumPy', 'Machine Learning', 'HTML & CSS', 'Git & GitHub'
          ].map(skill => <article key={skill}>{skill}</article>)}
        </div>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="cards">
          <article>
            <h3>Project Hub</h3>
            <p>A platform concept for students to discover and organize academic projects.</p>
            <span className="tag">In Progress</span>
          </article>
          <article>
            <h3>CampusPulse AI</h3>
            <p>An AI-based campus complaint management project concept.</p>
            <span className="tag">In Progress</span>
          </article>
          <article>
            <h3>Data Analytics Dashboard</h3>
            <p>A project idea for presenting data insights using visualizations.</p>
            <span className="tag">Planned</span>
          </article>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <article>
          <h3>B.Tech — Computer Science and Engineering</h3>
          <p>Third Year · College name to be added</p>
          <p>PUC: Shree Guru Vidhya Peeth</p>
          <p>SSLC: Mahanteshwara School, Mahagoan</p>
        </article>
      </section>

      <section id="contact">
        <h2>Let's Connect</h2>
        <p>Add your professional contact details here.</p>
        <p>GitHub: <a href="https://github.com/mitram-sk">github.com/mitram-sk</a></p>
        <p>Hobbies: Reading and travelling</p>
      </section>

      <footer>© {new Date().getFullYear()} Mitra SK · Built with React</footer>
    </main>
  )
}

export default App
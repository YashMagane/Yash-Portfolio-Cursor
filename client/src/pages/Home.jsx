import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import './Home.css'
import yash from '../assets/profile-picture.jpg'

function Home() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('http://localhost:4000/api/projects')
        if (!res.ok) {
          throw new Error('Failed to load projects')
        }
        const data = await res.json()
        setProjects(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1 className="hero-title">Yash Magane</h1>
          <p className="hero-subtitle">
            I&apos;m a Software Developer specialising in JavaScript, Node.js,
            Express, React, SQL, and AWS. My current interests include building
            scalable web applications, exploring cloud solutions, and mastering
            advanced front-end frameworks. I have built applications for the
            retail, e-commerce, and educational industries.
          </p>
          <div className="hero-links">
            <a
              href="https://github.com/YashMagane"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yashmagane/"
              target="_blank"
              rel="noreferrer"
              className="hero-link secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          {/* Replace this placeholder with an actual image of you later */}
          <div className="hero-image-placeholder">
            <img src={yash} alt="Yash Magane" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-header">
          <p className="projects-kicker">Projects</p>
          <h2 className="projects-title">Things I&apos;ve built</h2>
          <p className="projects-subtitle">
            Throughout my journey into tech, I&apos;ve worked on a variety of
            projects across retail, e-commerce and education. Here are some of
            the highlights.
          </p>
        </div>

        {loading && <p>Loading projects...</p>}
        {error && <p style={{ color: '#fca5a5' }}>{error}</p>}

        {!loading && !error && (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home



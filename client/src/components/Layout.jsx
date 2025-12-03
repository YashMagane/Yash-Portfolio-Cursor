import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app-root">
      <header className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            Yash&nbsp;Magane
          </Link>
        </div>
        <nav className="nav-right">
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'} mode
          </button>
          <Link
            to="/about"
            className={
              location.pathname === '/about' ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </Link>
          <Link
            to="/blogs"
            className={
              location.pathname === '/blogs' ? 'nav-link active' : 'nav-link'
            }
          >
            Blogs
          </Link>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-name">Yash Magane</p>
          <p className="footer-contact">
            <span>Phone: </span>
            <a href="tel:+447467419453">+44 7467 419 453</a>
          </p>
          <p className="footer-contact">
            <span>Email: </span>
            <a href="mailto:yash.magane.11@gmail.com">
              yash.magane.11@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout



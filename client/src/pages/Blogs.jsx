import { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard.jsx'
import '../components/BlogCard.css'

function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('http://localhost:4000/api/blogs')
        if (!res.ok) {
          throw new Error('Failed to load blogs')
        }
        const data = await res.json()
        setBlogs(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="blogs-page">
      <section className="blogs-header">
        <p className="blogs-kicker">Blogs</p>
        <h1 className="blogs-title">My journey in tech</h1>
        <p className="blogs-subtitle">
          Read my latest thoughts on learning JavaScript, building full-stack
          apps, and navigating my journey into software development.
        </p>
      </section>

      {loading && <p>Loading blogs...</p>}
      {error && <p style={{ color: '#fca5a5' }}>{error}</p>}

      {!loading && !error && (
        <section className="blogs-list">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </section>
      )}
    </div>
  )
}

export default Blogs



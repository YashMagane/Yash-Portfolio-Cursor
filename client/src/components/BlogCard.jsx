import './BlogCard.css'

function BlogCard({ blog }) {
  const { title, excerpt, readMoreUrl, createdAt } = blog

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : ''

  return (
    <article className="blog-card">
      <p className="blog-date">{formattedDate}</p>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-excerpt">{excerpt}</p>
      <div className="blog-actions">
        {readMoreUrl ? (
          <a
            href={readMoreUrl}
            target="_blank"
            rel="noreferrer"
            className="blog-read-more"
          >
            Read more
          </a>
        ) : (
          <button type="button" className="blog-read-more" disabled>
            Coming soon
          </button>
        )}
      </div>
    </article>
  )
}

export default BlogCard



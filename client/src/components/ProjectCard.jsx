import './ProjectCard.css'

function ProjectCard({ project }) {
  const { title, description, imageUrl, githubUrl, liveUrl, techStack } =
    project

  return (
    <article className="project-card">
      {imageUrl && (
        <div className="project-image-wrapper">
          <img src={imageUrl} alt={title} className="project-image" />
        </div>
      )}
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link secondary"
            >
              Live
            </a>
          )}
        </div>
        {Array.isArray(techStack) && techStack.length > 0 && (
          <div className="project-tags">
            {techStack.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard



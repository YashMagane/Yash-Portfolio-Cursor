import './SimplePage.css'

function About() {
  return (
    <div className="simple-page">
      <h1>About</h1>

      <section className="about-section">
        <h2>Who I am</h2>
        <p>
          I&apos;m Yash Magane, a Software Developer specialising in modern
          JavaScript across the stack. I enjoy turning ideas into clean,
          maintainable products and I care a lot about building experiences that
          feel fast, intuitive, and reliable.
        </p>
        <p>
          My core tools are JavaScript, Node.js, Express, React, SQL, and AWS,
          and I&apos;ve used them to build projects ranging from small utility
          APIs to full-stack applications for retail, e-commerce, and
          education-focused products.
        </p>
      </section>

      <section className="about-section">
        <h2>Experience</h2>
        <p>
          I&apos;ve worked on projects that cover both front-end and back-end
          development. On the back end, I&apos;ve built RESTful APIs with
          Node.js and Express, integrated MySQL databases, implemented JWT-based
          authentication, and deployed services to the cloud.
        </p>
        <p>
          On the front end, I build responsive React interfaces, focusing on
          clear layouts, accessible components, and smooth user flows. I enjoy
          collaborating with designers and other developers to refine features
          and ship work that feels polished and purposeful.
        </p>
      </section>

      <section className="about-section">
        <h2>Education & learning</h2>
        <p>
          My journey into tech has been very hands-on: I&apos;ve learned by
          building real projects, exploring modern JavaScript tooling, and
          constantly iterating on my work. I regularly experiment with new
          patterns, libraries, and best practices to keep my skills moving
          forward.
        </p>
        <p>
          I&apos;m particularly interested in deepening my knowledge of scalable
          back-end design, cloud infrastructure, and advanced front-end
          patterns, while continuing to sharpen my fundamentals in computer
          science and software engineering.
        </p>
      </section>

      <section className="about-section">
        <h2>Download my CV</h2>
        <p>
          If you&apos;d like a more detailed view of my experience and
          background, you can download my CV using the link below.
        </p>
        <p>
          <a
            className="cv-link"
            href="https://drive.google.com/file/d/1sX6AeRR7HdU42hCnUrOL156D3Y8VNkVN/view"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </p>
      </section>
    </div>
  )
}

export default About



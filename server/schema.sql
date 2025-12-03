CREATE DATABASE IF NOT EXISTS yash_portfolio;
USE yash_portfolio;

CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  imageUrl VARCHAR(500),
  githubUrl VARCHAR(500),
  liveUrl VARCHAR(500),
  techStack TEXT,
  displayOrder INT DEFAULT 0
);

INSERT INTO projects (title, description, imageUrl, githubUrl, liveUrl, techStack, displayOrder)
VALUES
(
  'RareKind Backend',
  'Node.js + Express backend for RareKind — an exotic animal collection platform with RESTful API, MySQL, JWT auth, and Cloudinary media handling.',
  NULL,
  'https://github.com/technative-academy/rarekind-backend',
  NULL,
  'Node.js,Express,MySQL,JWT,AWS',
  1
),
(
  'Portfolio Website',
  'Portfolio website built with HTML, CSS, and JavaScript, showcasing my projects and experience.',
  NULL,
  'https://github.com/YashMagane/Portfolio_Website',
  'https://yashmagane.github.io/Portfolio_Website',
  'HTML,CSS,JavaScript',
  2
);



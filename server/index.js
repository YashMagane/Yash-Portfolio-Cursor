import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createPool } from "mysql2/promise";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

// Create MySQL pool
const pool = createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "yash_portfolio",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Get all projects
app.get("/api/projects", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, title, description, imageUrl, githubUrl, liveUrl, techStack FROM projects ORDER BY displayOrder ASC, id DESC"
    );

    const projects = rows.map((row) => ({
      ...row,
      techStack: row.techStack ? row.techStack.split(",").map((t) => t.trim()) : [],
    }));

    res.json(projects);
  } catch (err) {
    console.error("Error fetching projects", err);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, title, excerpt, readMoreUrl, createdAt FROM blogs ORDER BY createdAt DESC'
    )
    res.json(rows)
  } catch (err) {
    console.error('Error fetching blogs', err)
    res.status(500).json({ error: 'Failed to fetch blogs' })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});



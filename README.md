# Yash Portfolio Web App

Full-stack portfolio web app with a React frontend and a Node/Express/MySQL backend to showcase projects.

## Structure

- `client/` – React app (Vite)
- `server/` – Node/Express API with MySQL

## Backend setup

1. Create the database and table using MySQL:

   ```sql
   SOURCE server/schema.sql;
   ```

2. In `server/`, create a `.env` file:

   ```bash
   PORT=4000
   CLIENT_ORIGIN=http://localhost:5173

   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=yash_portfolio
   ```

3. Start the API:

   ```bash
   cd server
   npm run dev
   ```

## Frontend setup

1. Start the React app:

   ```bash
   cd client
   npm run dev
   ```

2. Open `http://localhost:5173/` in your browser.



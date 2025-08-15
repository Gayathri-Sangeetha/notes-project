Notes App

A simple full-stack Notes application with authentication. Users can register, login, add, edit, and delete notes. Built with Node.js, Express, MongoDB for backend and React (Vite) for frontend.

Project Structure

notes-project/
├── backend/
│   ├── index.js          # Main backend server file
│   ├── package.json      # Backend dependencies
│   ├── .env              # Environment variables (not pushed)
│   ├── routes/           # API routes
│   ├── models/           # Mongoose models
│   └── middleware/       # Auth and other middlewares
├── frontend/
│   ├── package.json      # Frontend dependencies
│   ├── vite.config.js    # Vite config
│   └── src/              # React components, pages, context, API helper
├── .gitignore            # Ignored files (node_modules, .env, etc.)
└── README.md             # Project documentation


Features

User registration and login with JWT authentication.

Add, edit, delete, and view notes.

Protected routes (only logged-in users can access notes).

Input validation on frontend and backend.

Clear error messages and user-friendly UI.

Tech Stack

Backend: Node.js, Express, MongoDB, Mongoose

Frontend: React, Vite, Axios, React Router

Authentication: JWT (JSON Web Token)

Others: CORS, dotenv
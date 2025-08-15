# 📝 Notes App

A simple full-stack Notes application with authentication. Users can register, login, add, edit, and delete notes. Built with **Node.js, Express, MongoDB** for backend and **React (Vite)** for frontend.

## 📂 Project Structure
notes-project/
├── notes-api/
│ ├── index.js # Backend server
│ ├── package.json # Backend dependencies
│ ├── .env # Environment variables (not pushed)
│ ├── routes/ # API routes
│ ├── models/ # MongoDB models
│ └── middleware/ # Auth & other middleware
├── notes-frontend/
│ ├── package.json # Frontend dependencies
│ ├── vite.config.js # Vite configuration
│ └── src/ # React components & pages
├── .gitignore # Ignored files (node_modules, .env)
└── README.md # Project documentation
---
## 🚀 Features

- User registration and login with JWT authentication  
- Add, edit, delete, and view notes  
- Protected routes (only logged-in users can access notes)  
- Input validation on frontend and backend  
- Clear error messages and user-friendly UI 
---
## ⚙️ Setup Instructions

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/yourusername/notes-project.git
cd notes-project

2️⃣ Install Backend Dependencies
cd notes-api
npm install

3️⃣ Install Frontend Dependencies
cd ../notes-frontend
npm install

4️⃣ Run Backend Server
cd ../notes-api
npm start

5️⃣ Run Frontend
cd ../frontend
npm run dev

Backend runs on http://localhost:5000
Frontend runs on the port Vite assigns (usually http://localhost:5173)

🔒 Environment Variables
Create a .env file in the backend/ folder:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Do not commit your .env file to GitHub.

📌 Notes
Anyone cloning this repo should run npm install in both backend and frontend

node_modules and .env are excluded from GitHub via .gitignore

The project is ready for further improvements, e.g., styling, pagination, or deploying to platforms like Vercel/Heroku


import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Notes from './pages/Notes.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          {/* Redirect root to /notes if logged in, else to /login */}
          <Route path="/" element={<Navigate to="/notes" replace />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/notes"
            element={
              <PrivateRoute>
                <Notes />
              </PrivateRoute>
            }
          />

          {/* 404 fallback */}
          <Route path="*" element={<div style={{padding:16}}>Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}

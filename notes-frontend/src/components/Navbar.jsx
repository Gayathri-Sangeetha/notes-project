import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
  const { isAuthed, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const doLogout = () => {
    logout();
    navigate('/login');
  };

  
  const hide = ['/login', '/register'].includes(location.pathname);
  if (hide) return null;

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/notes" className="brand">Notes</Link>
      </div>
      <div className="nav-right">
        {!isAuthed ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={doLogout} className="btn">Logout</button>
        )}
      </div>
    </nav>
  );
}

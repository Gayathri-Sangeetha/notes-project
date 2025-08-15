import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function Register() {
  const [name, setName] = useState('');          
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      
      const payload = { name, username: name, email, password };
      await api.post('/auth/register', payload);
      alert('Registered successfully! Please login.');
      navigate('/login');
    } catch (error) {
      setErr(error?.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h2>Create account</h2>
      <form onSubmit={onSubmit} className="form">
        <label>
          Name
          <input value={name} onChange={(e)=>setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required minLength={6} />
        </label>
        {err && <div className="error">{err}</div>}
        <button className="btn" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      </form>
      <div className="hint">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

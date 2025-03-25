import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true'); // 🔒 Save auth state
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" placeholder="Email" className="border p-3 rounded w-full mb-4" required />
        <input type="password" placeholder="Password" className="border p-3 rounded w-full mb-6" required />
        <button type="submit" className="bg-blue-600 text-white py-3 rounded w-full hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}

export default Login;

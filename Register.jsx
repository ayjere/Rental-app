import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <input type="text" placeholder="Email" className="w-full mb-4 p-2 border" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;

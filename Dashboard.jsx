import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate(); // ✅ useNavigate moved inside the component

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');  // ✅ navigate now works perfectly
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-8">
        <Link to="/tenants" className="p-6 bg-white shadow-lg rounded-lg hover:bg-blue-50">Manage Tenants</Link>
        <Link to="/landlords" className="p-6 bg-white shadow-lg rounded-lg hover:bg-blue-50">Manage Landlords</Link>
        <Link to="/properties" className="p-6 bg-white shadow-lg rounded-lg hover:bg-blue-50">Property Management</Link>
        <Link to="/payments" className="p-6 bg-white shadow-lg rounded-lg hover:bg-blue-50">Payments</Link>
      </div>

      <div className='flex left'>
        <button 
          onClick={handleLogout} 
          className="mt-6 bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

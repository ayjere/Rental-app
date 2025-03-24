import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Tenants from './components/Tenants.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Landlords from './components/Landlords.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/tenants" element={<Tenants/>} />
      <Route path="/landlords" element={<Landlords />} />
    </Routes>
  );
}

export default App;

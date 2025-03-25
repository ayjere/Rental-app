import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <ul className="space-y-4">
        <li><Link to="/tenants">Tenants</Link></li>
        <li><Link to="/landlords">Landlords</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}
export default Sidebar;

import React from 'react';

function Tenants() {
  const tenants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', rentStatus: 'Paid' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', rentStatus: 'Pending' },
    // Add more dummy tenants
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Tenant Management</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Rent Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant) => (
            <tr key={tenant.id}>
              <td className="border p-2">{tenant.name}</td>
              <td className="border p-2">{tenant.email}</td>
              <td className="border p-2">{tenant.rentStatus}</td>
              <td className="border p-2">
                <button className="bg-red-500 text-white px-4 py-1 rounded">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tenants;

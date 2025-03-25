import React from 'react';

function Landlords() {
  const landlords = [
    { id: 1, name: 'Mr. Ibrahim', email: 'ibrahim@example.com', properties: 3 },
    { id: 2, name: 'Mrs. Aisha', email: 'aisha@example.com', properties: 5 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Landlord Management</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Total Properties</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {landlords.map((landlord) => (
            <tr key={landlord.id}>
              <td className="border p-2">{landlord.name}</td>
              <td className="border p-2">{landlord.email}</td>
              <td className="border p-2">{landlord.properties}</td>
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

export default Landlords;

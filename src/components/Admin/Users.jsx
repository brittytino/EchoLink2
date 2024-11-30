import React, { useState } from 'react';
import { FaUserPlus, FaTrash, FaEdit, FaCircle } from 'react-icons/fa';

const Users = ({ darkMode }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', groups: 'Sales', sipNumber: '1001', status: 'active', sipPassword: '********' },
    { id: 2, name: 'Jane Smith', groups: 'Support', sipNumber: '1002', status: 'inactive', sipPassword: '********' },
    { id: 3, name: 'Alice Johnson', groups: 'Marketing', sipNumber: '1003', status: 'active', sipPassword: '********' },
  ]);

  const addUser = () => {
    const newUser = { 
      id: users.length + 1, 
      name: `User ${users.length + 1}`, 
      groups: 'New Group', 
      sipNumber: `100${users.length + 1}`, 
      status: 'inactive', 
      sipPassword: '********' 
    };
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const toggleStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } : user
    ));
  };

  return (
    <div className={`container mx-auto p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Users</h2>
        <button onClick={addUser} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300">
          <FaUserPlus />
          <span>Add New User</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Groups</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">SIP Number</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">SIP Password</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {users.map(user => (
              <tr key={user.id} className={`transition-colors duration-300 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.groups}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.sipNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.sipPassword}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => toggleStatus(user.id)} className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 mr-2">
                    <FaEdit />
                  </button>
                  <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:text-red-600 transition-colors duration-300">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
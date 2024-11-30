import React, { useState } from 'react';
import { FaEdit, FaTrash, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Extension = ({ darkMode }) => {
  const [extensions, setExtensions] = useState([
    { id: 1, extensionNo: '1001', name: 'John Doe', status: 'active' },
    { id: 2, extensionNo: '1002', name: 'Jane Smith', status: 'inactive' },
    { id: 3, extensionNo: '1003', name: 'Alice Johnson', status: 'active' },
  ]);

  const toggleStatus = (id) => {
    setExtensions(extensions.map(ext => 
      ext.id === id ? { ...ext, status: ext.status === 'active' ? 'inactive' : 'active' } : ext
    ));
  };

  return (
    <div className={`container mx-auto p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-6">Extensions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Extension No</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {extensions.map(ext => (
              <tr key={ext.id} className={`transition-colors duration-300 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <td className="px-6 py-4 whitespace-nowrap">{ext.extensionNo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ext.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    ext.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {ext.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => toggleStatus(ext.id)} className="text-blue-500 hover:text-blue-600 transition-colors duration-300 mr-2">
                    {ext.status === 'active' ? <FaToggleOn size={20} /> : <FaToggleOff size={20} />}
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 mr-2">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-600 transition-colors duration-300">
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

export default Extension;
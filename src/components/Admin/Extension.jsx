import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

const Extension = ({ darkMode }) => {
  const [extensions, setExtensions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExtension, setSelectedExtension] = useState(null);

  // Fetch data from the server
  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await fetch('https://server-ou54.onrender.com/webapi/core/extension');
        if (!response.ok) {
          throw new Error(`Failed to fetch extensions: ${response.statusText}`);
        }
        const data = await response.json();
        setExtensions(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchExtensions();
  }, []);

  // Function to toggle the status of an extension
  const toggleStatus = (id) => {
    setExtensions(extensions.map(ext =>
      ext.id === id ? { ...ext, enabled: !ext.enabled } : ext
    ));
  };

  // Open the edit dialog
  const handleEdit = (extension) => {
    setSelectedExtension(extension);
  };

  // Close the edit dialog
  const closeDialog = () => {
    setSelectedExtension(null);
  };

  if (loading) return <p>Loading extensions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`container mx-auto p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-6">Extensions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Extension No</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Extension Password</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {extensions.map(ext => (
              <tr key={ext.id} className={`transition-colors duration-300 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <td className="px-6 py-4 whitespace-nowrap">{ext.extension}</td>
                <td className="px-6 py-4 whitespace-nowrap">********</td>
                <td className="px-6 py-4 whitespace-nowrap">{ext.effective_caller_id_name}</td>
                <td className="px-6 py-4 whitespace-nowrap flex flex-col items-center">
                  <span className="mb-2">{ext.enabled ? 'Active' : 'Inactive'}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={ext.enabled}
                      onChange={() => toggleStatus(ext.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                  </label>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                    onClick={() => handleEdit(ext)}
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Dialog */}
      {selectedExtension && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className={`bg-white p-6 rounded-lg shadow-lg ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>
            <h3 className="text-lg font-bold mb-4">Edit Extension</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Extension No:</label>
              <input
                type="text"
                value={selectedExtension.extension}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password:</label>
              <input
                type="password"
                value={selectedExtension.password}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name:</label>
              <input
                type="text"
                value={selectedExtension.effective_caller_id_name}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Status:</label>
              <select
                value={selectedExtension.enabled ? 'Active' : 'Inactive'}
                className="w-full px-3 py-2 border rounded-md"
                disabled
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={closeDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extension;

import React from 'react';
import { FaTimes, FaUser, FaLock, FaPhone, FaToggleOn } from 'react-icons/fa';

const EditExtensionDialog = ({ extension, onClose, darkMode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={`relative w-full max-w-md p-6 rounded-lg shadow-xl ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold mb-6 text-center">Edit Extension</h3>
        <form className="space-y-4">
          <div className="relative">
            <label htmlFor="extension" className="block text-sm font-medium mb-1">Extension No:</label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="extension"
                value={extension.extension}
                readOnly
                className={`pl-10 pr-4 py-2 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                  darkMode
                    ? 'bg-gray-700 text-white focus:bg-gray-600'
                    : 'bg-gray-100 text-gray-900 focus:bg-white'
                }`}
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password:</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="password"
                value={extension.password}
                readOnly
                className={`pl-10 pr-4 py-2 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                  darkMode
                    ? 'bg-gray-700 text-white focus:bg-gray-600'
                    : 'bg-gray-100 text-gray-900 focus:bg-white'
                }`}
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name:</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                value={extension.effective_caller_id_name}
                readOnly
                className={`pl-10 pr-4 py-2 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                  darkMode
                    ? 'bg-gray-700 text-white focus:bg-gray-600'
                    : 'bg-gray-100 text-gray-900 focus:bg-white'
                }`}
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="status" className="block text-sm font-medium mb-1">Status:</label>
            <div className="relative">
              <FaToggleOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                id="status"
                value={extension.enabled ? 'Active' : 'Inactive'}
                disabled
                className={`pl-10 pr-4 py-2 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                  darkMode
                    ? 'bg-gray-700 text-white focus:bg-gray-600'
                    : 'bg-gray-100 text-gray-900 focus:bg-white'
                }`}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExtensionDialog;


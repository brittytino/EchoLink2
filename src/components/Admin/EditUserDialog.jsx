import React, { useState } from 'react';
import { FaTimes, FaUser, FaUsers, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const EditUserDialog = ({ isOpen, closeModal, user, onSave, darkMode }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
    closeModal();
  };

  const toggleStatus = () => {
    setEditedUser(prev => ({ ...prev, user_enabled: !prev.user_enabled }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className={`relative w-full max-w-md p-6 rounded-xl shadow-2xl ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center">Edit User</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="username" className="block text-sm font-medium mb-1">
                  Username
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={editedUser.username}
                    onChange={handleChange}
                    className={`pl-10 pr-4 py-2 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      darkMode
                        ? 'bg-gray-700 text-white focus:bg-gray-600'
                        : 'bg-gray-100 text-gray-900 focus:bg-white'
                    }`}
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="group_name" className="block text-sm font-medium mb-1">
                  Group
                </label>
                <div className="relative">
                  <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="group_name"
                    name="group_name"
                    value={editedUser.group_name}
                    onChange={handleChange}
                    className={`pl-10 pr-4 py-2 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      darkMode
                        ? 'bg-gray-700 text-white focus:bg-gray-600'
                        : 'bg-gray-100 text-gray-900 focus:bg-white'
                    }`}
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="user_enabled" className="block text-sm font-medium mb-1">
                  Status
                </label>
                <div
                  onClick={toggleStatus}
                  className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                    editedUser.user_enabled
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-red-500 hover:bg-red-600'
                  }`}
                >
                  <span className="font-medium text-white">
                    {editedUser.user_enabled ? 'Active' : 'Inactive'}
                  </span>
                  {editedUser.user_enabled ? (
                    <FaToggleOn className="w-6 h-6 text-white" />
                  ) : (
                    <FaToggleOff className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditUserDialog;


import React, { useState } from 'react';
import { FaTachometerAlt, FaUsers, FaPhoneAlt, FaCog, FaPhone, FaTable, FaSun, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import { Dashboard, Users, CDR, Settings, Call, Extension } from '../components/Admin';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard darkMode={darkMode} />;
      case 'Users':
        return <Users darkMode={darkMode} />;
      case 'CDR':
        return <CDR darkMode={darkMode} />;
      case 'Call':
        return <Call darkMode={darkMode} />;
      case 'Extension':
        return <Extension darkMode={darkMode} />;
      case 'Settings':
        return <Settings darkMode={darkMode} />;
      default:
        return <Dashboard darkMode={darkMode} />;
    }
  };

  const navItems = [
    { name: 'Dashboard', icon: FaTachometerAlt },
    { name: 'Users', icon: FaUsers },
    { name: 'CDR', icon: FaPhoneAlt },
    { name: 'Call', icon: FaPhone },
    { name: 'Extension', icon: FaTable },
    { name: 'Settings', icon: FaCog },
  ];

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing local storage, etc.)
    window.location.href = '/';
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-all duration-300`}>
      <aside className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex flex-col`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
        </div>
        <nav className="mt-8 flex-grow">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveComponent(item.name)}
              className={`flex items-center p-4 w-full text-left transition-colors duration-200 ${
                activeComponent === item.name
                  ? 'bg-blue-600 text-white'
                  : `${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:bg-blue-500 hover:text-white`
              }`}
            >
              <item.icon className="mr-3" />
              {item.name}
            </button>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className={`flex items-center p-4 w-full text-left transition-colors duration-200 ${
            darkMode ? 'text-gray-400 hover:bg-red-700' : 'text-gray-600 hover:bg-red-500'
          } hover:text-white mt-auto`}
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </aside>
      <main className="flex-grow p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{activeComponent}</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-white'} transition-colors duration-200`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
        <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300`}>
          {renderComponent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;


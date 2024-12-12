import React from 'react';
import { FiLogOut, FiMoon, FiSun, FiArrowLeft, FiHome } from 'react-icons/fi';

const Navbar = ({ username, userStatus, darkMode, setDarkMode, activeComponent, setActiveComponent, handleLogout }) => {
  return (
    <nav className={`w-full px-4 py-3 shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-all duration-300 ease-in-out sticky top-0 z-10`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => setActiveComponent('welcome')}
          className={`flex items-center text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${
            darkMode 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {activeComponent !== 'welcome' ? <FiArrowLeft className="mr-2" /> : <FiHome className="mr-2" />}
          {activeComponent !== 'welcome' ? 'Back' : 'Home'}
        </button>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span
              className={`w-3 h-3 rounded-full ${
                userStatus === 'active' ? 'bg-green-500' : 'bg-red-500'
              }`}
              title={userStatus === 'active' ? 'Active' : 'Inactive'}
            ></span>
            <div>
              <p className="text-sm font-medium">{username}</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Status: {userStatus}</p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
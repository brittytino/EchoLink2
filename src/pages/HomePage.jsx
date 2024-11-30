import React, { useState } from 'react';
import { FiPhone, FiSettings, FiUsers, FiList, FiLogOut } from 'react-icons/fi';
import DialPad from '../components/DialPad';
import CallLog from '../components/CallLog';
import Contacts from '../components/Contacts';
import Settings from '../components/Settings';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState('welcome');
  const [darkMode, setDarkMode] = useState(false);
  const username = 'John Doe'; // Example user data
  const userStatus = 'active'; // Options: active, inactive

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dialpad':
        return <DialPad darkMode={darkMode} onDial={(number) => console.log(number)} />;
      case 'call-log':
        return <CallLog darkMode={darkMode} />;
      case 'contacts':
        return <Contacts darkMode={darkMode} />;
      case 'settings':
        return <Settings darkMode={darkMode} />;
      default:
        return (
          <div className="text-center mt-16 space-y-6">
            <h1 className="text-4xl font-bold">Welcome to Echo Link</h1>
            <p className="text-lg">Click an icon to view a section.</p>
          </div>
        );
    }
  };

  const icons = [
    { key: 'dialpad', label: 'Dial Pad', icon: FiPhone },
    { key: 'call-log', label: 'Call Log', icon: FiList },
    { key: 'contacts', label: 'Contacts', icon: FiUsers },
    { key: 'settings', label: 'Settings', icon: FiSettings },
  ];

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing local storage, etc.)
    window.location.href = '/';
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      } transition-all`}
    >
      {/* Header */}
      <div className="w-full flex justify-between items-center px-3 py-1 shadow-lg bg-gray-800 text-white sticky top-0 z-10">
        <button
          onClick={() => setActiveComponent('welcome')}
          className="text-lg font-medium bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600"
        >
          {activeComponent !== 'welcome' ? '← Back' : 'Home'}
        </button>
        <div className="flex items-center space-x-4">
          <span
            className={`w-3 h-3 rounded-full ${
              userStatus === 'active' ? 'bg-green-500' : 'bg-red-500'
            }`}
            title={userStatus === 'active' ? 'Active' : 'Inactive'}
          ></span>
          <div>
            <p className="text-sm">{username}</p>
            <p className="text-xs text-gray-400">Status: {userStatus}</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-lg bg-gray-700 px-3 py-1 rounded-lg flex items-center space-x-2 hover:bg-gray-600"
          >
            {darkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
          <button
            onClick={handleLogout}
            className="text-lg bg-red-600 px-3 py-1 rounded-lg flex items-center space-x-2 hover:bg-red-700"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full p-6 flex justify-center items-center">
        {/* Render Active Component */}
        <div className="w-full max-w-4xl">{renderComponent()}</div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full fixed bottom-0 text-white py-4">
        <div className="grid grid-cols-4 gap-2.5 max-w-xl mx-auto">
          {icons.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`flex flex-col items-center py-4 rounded-lg ${
                activeComponent === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-400 hover:bg-blue-700 hover:text-white'
              }`}
            >
              <Icon className="text-2xl mb-1" />
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;


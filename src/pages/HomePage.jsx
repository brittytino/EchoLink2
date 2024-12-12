import React, { useState } from 'react';
import { FiPhone, FiSettings, FiUsers, FiList } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import CallLog from '../components/CallLog';
import Contacts from '../components/Contacts';
import Settings from '../components/Settings';
import SipModal from '../components/SipModal';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState('welcome');
  const [darkMode, setDarkMode] = useState(false);
  const [isSipModalOpen, setIsSipModalOpen] = useState(false);
  const username = 'John Doe'; // Example user data
  const userStatus = 'active'; // Options: active, inactive

  const renderComponent = () => {
    switch (activeComponent) {
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
      } transition-all duration-300 ease-in-out`}
    >
      <Navbar
        username={username}
        userStatus={userStatus}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-grow w-full p-6 flex justify-center items-center">
        {/* Render Active Component */}
        <div className="w-full max-w-4xl">{renderComponent()}</div>
      </div>

      {/* Footer Navigation */}
      <div className={`w-full fixed bottom-0 ${darkMode ? 'text-white' : 'text-gray-900'} py-4`}>
        <div className="grid grid-cols-4 gap-2.5 max-w-xl mx-auto">
          {icons.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                if (key === 'dialpad') {
                  setIsSipModalOpen(true);
                } else {
                  setActiveComponent(key);
                }
              }}
              className={`flex flex-col items-center py-4 rounded-lg transition-colors duration-300 ${
                activeComponent === key
                  ? 'bg-blue-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-400 hover:bg-blue-700 hover:text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <Icon className="text-2xl mb-1" />
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SIP Modal */}
      <SipModal isOpen={isSipModalOpen} onClose={() => setIsSipModalOpen(false)} />
    </div>
  );
};

export default HomePage;


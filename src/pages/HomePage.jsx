import React, { useState } from 'react';
import { FiPhone, FiSettings, FiList } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import CallLog from '../components/CallLog';
import Settings from '../components/Settings';
import SipModal from '../components/SipModal';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState('welcome');
  const [darkMode, setDarkMode] = useState(false);
  const [isSipModalOpen, setIsSipModalOpen] = useState(false);
  const username = 'John Doe'; // Example user data
  const userStatus = 'active'; // Options: active, inactive

  // Define the icons for the footer navigation
  const icons = [
    { key: 'dialpad', label: 'Dial Pad', icon: FiPhone },
    { key: 'call-log', label: 'Call Log', icon: FiList },
    { key: 'settings', label: 'Settings', icon: FiSettings },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'call-log':
        return <CallLog darkMode={darkMode} />;
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

  return (
    <div className={`min-h-screen flex flex-col ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    } transition-all duration-300 ease-in-out`}>
      <Navbar
        username={username}
        userStatus={userStatus}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeComponent={activeComponent}
        handleLogout={() => window.location.href = '/'}
      />

      {/* Main Content with sufficient bottom padding */}
      <div className="flex-grow w-full p-6 flex justify-center items-center pb-20">
        <div className="w-full max-w-4xl">{renderComponent()}</div>
      </div>

      {/* Footer Navigation */}
      <div className={`fixed bottom-0 inset-x-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} py-4 shadow-lg`}>
        <div className="grid grid-cols-3 gap-3 place-items-center max-w-md mx-auto">
          {icons.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => key === 'dialpad' ? setIsSipModalOpen(true) : setActiveComponent(key)}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-300 ${
                activeComponent === key
                  ? 'bg-blue-600 text-white shadow'
                  : darkMode
                    ? 'text-gray-400 hover:bg-blue-700 hover:text-white'
                    : 'text-gray-600 hover:bg-blue-600 hover:text-white'
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

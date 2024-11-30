import React, { useState } from 'react';

const DialPad = ({ onDial, darkMode }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleDial = () => {
    if (phoneNumber.length >= 10) {
      onDial(phoneNumber);
      setPhoneNumber('');
    } else {
      alert('Please enter a valid phone number.');
    }
  };

  return (
    <div
      className={`p-4 flex justify-center items-center min-h-[50vh] mb-12 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      } transition-all`}
    >
      <div
        className={`w-full max-w-sm rounded-lg shadow-md p-4 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } transition-all`}
      >
        <h1 className="text-lg font-semibold text-center mb-4">Dial Pad</h1>
        <input
          type="tel"
          className={`w-full rounded-md p-2 text-base mb-4 focus:outline-none transition-all border ${
            darkMode
              ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white'
              : 'bg-gray-100 border-gray-300 placeholder-gray-500'
          }`}
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className="grid grid-cols-3 gap-2 mb-4">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(
            (digit) => (
              <button
                key={digit}
                onClick={() => setPhoneNumber((prev) => prev + digit)}
                className={`w-full rounded-md py-3 text-xl font-semibold transition-all ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {digit}
              </button>
            )
          )}
        </div>
        <button
          onClick={handleDial}
          className={`w-full py-3 rounded-md font-semibold text-lg transition-all ${
            darkMode
              ? 'bg-blue-600 hover:bg-blue-500 text-white'
              : 'bg-blue-500 hover:bg-blue-400 text-white'
          }`}
        >
          Dial
        </button>
      </div>
    </div>
  );
};

export default DialPad;
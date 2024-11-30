import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaUsers, FaArrowDown, FaArrowUp, FaClock } from 'react-icons/fa';

const Dashboard = ({ darkMode }) => {
  const [data, setData] = useState({
    ongoingCall: 'Details about the ongoing call...',
    usersOnline: 8,
    incomingCalls: 18,
    outgoingCalls: 17,
    missedCalls: 26,
    totalMinutes: 'Details about total minutes speaking...',
  });

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = () => {
      setData({
        ongoingCall: 'Details about the ongoing call...',
        usersOnline: 5,
        incomingCalls: 8,
        outgoingCalls: 7,
        missedCalls: 6,
        totalMinutes: 'Details about total minutes speaking...',
      });
    };

    fetchData();
  }, []);

  const cards = [
    { title: 'Ongoing Call', value: data.ongoingCall, icon: FaPhoneAlt, color: 'blue' },
    { title: 'Users Online', value: `${data.usersOnline} users online`, icon: FaUsers, color: 'green' },
    { title: 'Incoming Calls', value: `${data.incomingCalls} incoming calls`, icon: FaArrowDown, color: 'red' },
    { title: 'Outgoing Calls', value: `${data.outgoingCalls} outgoing calls`, icon: FaArrowUp, color: 'yellow' },
    { title: 'Missed Calls', value: `${data.missedCalls} missed calls`, icon: FaPhoneAlt, color: 'purple' },
    { title: 'Total Minutes Speaking', value: data.totalMinutes, icon: FaClock, color: 'indigo' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-md flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
        >
          <card.icon className={`text-3xl text-${card.color}-600` } aria-hidden="true" />
          <div>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;


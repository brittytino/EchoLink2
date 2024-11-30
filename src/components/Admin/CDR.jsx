import React, { useState } from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';

const CDR = ({ darkMode }) => {
  const [logs, setLogs] = useState([
    { id: 1, date: '2023-05-01', time: '10:30:00', caller: '1001', receiver: '1002', type: 'Outgoing', duration: '00:05:30' },
    { id: 2, date: '2023-05-01', time: '11:45:00', caller: '1003', receiver: '1001', type: 'Incoming', duration: '00:03:15' },
    { id: 3, date: '2023-05-02', time: '09:15:00', caller: '1002', receiver: '1004', type: 'Missed', duration: '00:00:00' },
  ]);

  const [filters, setFilters] = useState({
    date: '',
    callerId: '',
    missedCall: false
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const filteredLogs = logs.filter(log => {
    return (
      (filters.date ? log.date === filters.date : true) &&
      (filters.callerId ? log.caller.includes(filters.callerId) || log.receiver.includes(filters.callerId) : true) &&
      (filters.missedCall ? log.type === 'Missed' : true)
    );
  });

  return (
    <div className={`container mx-auto p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-6">Call Detail Records</h2>
      
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="date" className="text-sm font-medium">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
            className={`rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} px-3 py-2 text-sm`}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="callerId" className="text-sm font-medium">Caller ID:</label>
          <input
            type="text"
            id="callerId"
            name="callerId"
            value={filters.callerId}
            onChange={handleFilterChange}
            placeholder="Enter Caller ID"
            className={`rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} px-3 py-2 text-sm`}
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="missedCall"
            name="missedCall"
            checked={filters.missedCall}
            onChange={handleFilterChange}
            className="rounded text-blue-600"
          />
          <label htmlFor="missedCall" className="text-sm font-medium">Missed Calls Only</label>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300">
          <FaFilter />
          <span>Apply Filters</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Time</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Caller</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Receiver</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Duration</th>
            </tr>
          </thead>
          <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {filteredLogs.map((log, index) => (
              <tr key={log.id} className={`transition-colors duration-300 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.caller}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.receiver}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    log.type === 'Incoming' ? 'bg-green-100 text-green-800' : 
                    log.type === 'Outgoing' ? 'bg-blue-100 text-blue-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {log.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{log.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CDR;
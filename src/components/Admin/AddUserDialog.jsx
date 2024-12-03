import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaUser, FaUsers, FaToggleOn, FaCheck } from 'react-icons/fa';

export default function AddUserDialog({ isOpen, closeModal, darkMode }) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your API to add the user
    console.log('Adding user:', { username, name, group, status });
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog 
        as="div" 
        className="relative z-10" 
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 mb-4"
                >
                  Add New User
                </Dialog.Title>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className={`block w-full pl-10 sm:text-sm rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className={`block w-full pl-10 sm:text-sm rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="group" className="block text-sm font-medium mb-1">Group</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUsers className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="group"
                        id="group"
                        className={`block w-full pl-10 sm:text-sm rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Enter group"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
                    <div className="mt-1 flex items-center">
                      <button
                        type="button"
                        className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${status ? 'bg-blue-600' : 'bg-gray-200'}`}
                        onClick={() => setStatus(!status)}
                      >
                        <span className={`${status ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`} />
                      </button>
                      <span className="ml-3">{status ? 'Active' : 'Inactive'}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      <FaCheck className="mr-2" />
                      Add User
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}


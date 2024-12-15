import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaUser, FaEnvelope, FaBuilding, FaLock, FaUserTag } from 'react-icons/fa';

export default function UserExtensionDialog({ isOpen, closeModal, darkMode }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirm_password: '',
    email: '',
    language: 'en-us',
    timezone: 'Asia/Kolkata',
    first_name: '',
    last_name: '',
    organization: '',
    user_groups: '4d487ba7-b399-4a98-9780-000e7e9a725d|user',
    domain: 'bc2fed7e-e575-42c1-9e53-3155f6019096',
    user_enabled: 'true',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirm_password) {
      setResponseMessage('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://server-ou54.onrender.com/webapi/core/user/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('User created successfully!');
        setFormData({
          username: '',
          password: '',
          confirm_password: '',
          email: '',
          language: 'en-us',
          timezone: 'Asia/Kolkata',
          first_name: '',
          last_name: '',
          organization: '',
          user_groups: '4d487ba7-b399-4a98-9780-000e7e9a725d|user',
          domain: 'bc2fed7e-e575-42c1-9e53-3155f6019096',
          user_enabled: 'true',
        });
        closeModal();
      } else {
        setResponseMessage(data.message || 'Failed to create user.');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setResponseMessage('An error occurred while creating the user.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputFields = [
    { name: 'username', icon: FaUser, type: 'text' },
    { name: 'password', icon: FaLock, type: 'password' },
    { name: 'confirm_password', icon: FaLock, type: 'password' },
    { name: 'email', icon: FaEnvelope, type: 'email' },
    { name: 'first_name', icon: FaUser, type: 'text' },
    { name: 'last_name', icon: FaUser, type: 'text' },
    { name: 'organization', icon: FaBuilding, type: 'text' },
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className={`w-full max-w-4xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 mb-6 flex justify-between items-center">
                  Create User
                </Dialog.Title>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {inputFields.map(({ name, icon: Icon, type }) => (
                      <div key={name}>
                        <label htmlFor={name} className="block text-sm font-medium mb-1">
                          {name.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          </div>
                          <input
                            type={type}
                            name={name}
                            id={name}
                            className={`block w-full pl-10 pr-3 py-2 sm:text-sm rounded-md ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500' : 'bg-white text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                            placeholder={`Enter ${name.replace(/_/g, ' ')}`}
                            value={formData[name]}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      type="button"
                      onClick={closeModal}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} focus:outline-none`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium text-white ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Creating...' : 'Create User'}
                    </button>
                  </div>
                </form>
                {responseMessage && <p className={`mt-4 text-sm ${responseMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{responseMessage}</p>}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

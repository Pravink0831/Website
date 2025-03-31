'use client';

import React, { useState } from 'react';
import { testCredentials } from '../../utils/auth/credentials';

const VendorLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (credentials.username === testCredentials.username && 
        credentials.password === testCredentials.password) {
      onLogin(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100/50 backdrop-blur-sm">
      <div 
        style={{ width: '320px' }} 
        className="bg-white p-8 rounded-xl shadow-2xl transform transition-all mx-auto"
      >
        <div className="mb-6 mt-40">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Admin Login</h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
          {error && (
            <div className="mt-4 p-2 bg-red-50 border border-red-200 text-red-600 text-center text-sm rounded">
              {error}
            </div>
          )}
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              required
              placeholder="Enter username"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                transition-all duration-200"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              required
              placeholder="Enter password"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                transition-all duration-200"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full mt-10 center py-2.5 px-4 border border-transparent rounded-lg text-sm font-medium text-black 
              bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-blue-500 transition-colors duration-200 mt-6"
          >
            Sign in
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default VendorLogin;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  // Define state for the form
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here (e.g., validation, API call)
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl text-white font-semibold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="username" 
              className="block text-teal-400 text-sm mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 text-white px-3 py-2 focus:outline-none focus:border-teal-400 transition-colors"
              required
            />
          </div>

          <div className="mb-6">
            <label 
              htmlFor="password" 
              className="block text-teal-400 text-sm mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 text-white px-3 py-2 focus:outline-none focus:border-teal-400 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-transparent text-teal-400 border border-teal-400 py-2 px-4 rounded hover:bg-teal-400 hover:text-slate-900 transition-colors uppercase text-sm tracking-wider"
          >
            Submit
          </button>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="w-full mt-4 bg-transparent text-teal-400 border border-teal-400 py-2 px-4 rounded hover:bg-teal-400 hover:text-slate-900 transition-colors uppercase text-sm tracking-wider block text-center"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';

function SignUp() {
  // Define state for the form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    
    // Validate that the passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Implement your sign-up logic here (e.g., API call)
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-700 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl text-white font-semibold mb-6 text-center">Sign Up</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="username" 
              className="block text-yellow-500 text-sm mb-2"
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

          <div className="mb-4">
            <label 
              htmlFor="number" 
              className="block text-yellow-500 text-sm mb-2"
            >
              Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 text-white px-3 py-2 focus:outline-none focus:border-teal-400 transition-colors"
              required
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="block text-yellow-500 text-sm mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 text-white px-3 py-2 focus:outline-none focus:border-teal-400 transition-colors"
              required
            />
          </div>

          <div className="mb-6">
            <label 
              htmlFor="password" 
              className="block text-yellow-500 text-sm mb-2"
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
            className="w-full bg-transparent text-yellow-500 border border-yellow-400 py-2 px-4 rounded hover:bg-yellow-400 hover:text-slate-900 transition-colors uppercase text-sm tracking-wider"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

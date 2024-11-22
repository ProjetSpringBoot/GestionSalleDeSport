import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    number: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError('');

    const phoneRegex = /^[0-9]{8}$/; // Accepte uniquement 8 chiffres.
    if (!phoneRegex.test(formData.number)) {
      setError('The phone number must be exactly 8 digits!');
      return;
    }
    
    setLoading(true);
    setMessage('');
    

    const payload = {
      username: formData.username,
      number: formData.number,
      email: formData.email,
      password: formData.password,

    };

    try {
      const response = await axios.post('http://localhost:9070/api/users/register', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);

    } catch (error) {
      // Handle error properly
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response error:", error.response.data);  // Error message from server
        console.error("Status code:", error.response.status);    // HTTP status code
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
    }
  };
 
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-700 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl text-white font-semibold mb-6 text-center">Sign Up</h2>

        {message && <p className="text-center mb-4 text-yellow-400">{message}</p>}
        {error && <p className="text-center mb-4 text-red-400">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-yellow-500 text-sm mb-2">
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
            <label htmlFor="number" className="block text-yellow-500 text-sm mb-2">
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
            <label htmlFor="email" className="block text-yellow-500 text-sm mb-2">
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

          <div className="mb-4">
            <label htmlFor="password" className="block text-yellow-500 text-sm mb-2">
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

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-yellow-500 text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 text-white px-3 py-2 focus:outline-none focus:border-teal-400 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-transparent text-yellow-500 border border-yellow-400 py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-400 hover:text-slate-900'} transition-colors uppercase text-sm tracking-wider`}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

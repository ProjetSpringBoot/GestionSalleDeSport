import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
        const response = await axios.post('http://localhost:9070/api/coaches/login', {
          email,
          password,
        });
  
      // Save token in localStorage
      localStorage.setItem('token', response.data.token);
  
      // Redirect to user dashboard or home
      navigate('/Coach');
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-800 p-3 flex items-center justify-center">
      <div className="bg-gray-700 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl text-white font-semibold mb-6 text-center">Login</h2>

        {error && <p className="text-center mb-4 text-red-400">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-yellow-500 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-gray-600 text-white px-3 py-2 focus:outline-none focus:border-yellow-400 transition-colors"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-yellow-500 text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-gray-600 text-white px-3 py-2 focus:outline-none focus:border-yellow-400 transition-colors"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-transparent text-yellow-400 border border-yellow-400 py-2 px-4 rounded ${
              loading
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-yellow-400 hover:text-slate-900'
            } transition-colors uppercase text-sm tracking-wider`}
          >
            {loading ? 'Logging in...' : 'Submit'}
          </button>

{/* Don't Have an Account Section */}
<div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link
              to="/SignUpCoachs"
              className="text-yellow-400 font-semibold hover:text-yellow-500 transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

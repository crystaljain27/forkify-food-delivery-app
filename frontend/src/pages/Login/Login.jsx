import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import AnimatedFoodBackground from '../../components/AnimatedFoodBackground/AnimatedFoodBackground';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, formData);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4 relative overflow-hidden">
      <AnimatedFoodBackground />

      <div className="bg-gray-800/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-md z-10 border border-gray-700">
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-2">Welcome Back!</h1>
        <p className="text-center text-gray-400 mb-8">Login to continue with Forkify</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-3 px-4 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full py-3 px-4 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 transition-all text-white py-3 rounded-lg font-semibold text-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-orange-500 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

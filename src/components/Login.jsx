import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cek username dan password statis
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Username atau Password salah!');
    }
  };

  return (
    <div className="min-h-screen bg-white-gold flex items-center justify-center p-4 font-serif">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20"
        >
          <h1 className="text-3xl font-serif text-gold text-center mb-6">Login</h1>
          {error && <p className="bg-red-500/50 text-white text-center p-2 rounded mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-light-cream mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gold rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div className="mb-6">
            <label className="block text-light-cream mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gold rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <button type="submit" className="w-full bg-gold text-dark-green font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-all">
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
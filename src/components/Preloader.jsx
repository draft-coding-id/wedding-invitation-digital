import React from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ progress, isComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-white-gold z-[100] flex flex-col items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gold/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-light-cream/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 border border-gold/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-light-cream/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Wedding Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-4xl text-dark-green"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
                  fill="currentColor"
                  opacity="0.3"
                />
                <path 
                  d="M12 6v6l4 2" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeDasharray="31.416" 
                  strokeDashoffset="31.416"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    dur="2s" 
                    values="31.416;0;31.416" 
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-2">
            Ivandrian & Meigiana
          </h1>
          <p className="text-light-cream text-lg">
            Wedding Invitation
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-80 mx-auto mb-6"
        >
          <div className="relative">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-full shadow-lg"
              />
            </div>
            
            {/* Progress Dots */}
            <div className="flex justify-between mt-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: progress > (i * 20) ? 1 : 0.5,
                    backgroundColor: progress > (i * 20) ? "#D4AF37" : "rgba(255,255,255,0.3)"
                  }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-light-cream"
        >
          <motion.p
            key={Math.floor(progress / 20)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm mb-2"
          >
            {progress < 20 && "Menyiapkan undangan..."}
            {progress >= 20 && progress < 40 && "Memuat foto-foto indah..."}
            {progress >= 40 && progress < 60 && "Menyiapkan detail acara..."}
            {progress >= 60 && progress < 80 && "Hampir siap..."}
            {progress >= 80 && progress < 100 && "Menyelesaikan sentuhan akhir..."}
            {progress >= 100 && "Selesai! ✨"}
          </motion.p>
          
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs text-gold font-medium"
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <div className="text-gold text-xl">💝</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0 
            }}
            animate={{ 
              y: -50,
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-gold rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
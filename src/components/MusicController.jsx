import React from 'react';
import { motion } from 'framer-motion';

const MusicController = ({ isPlaying, toggleMusic }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div
        onClick={toggleMusic}
        className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center border-4 border-white/20"
      >
        <div 
          className={`w-8 h-8 bg-black rounded-full relative flex items-center justify-center ${
            isPlaying ? 'animate-spin' : ''
          }`}
          style={{ animationDuration: '3s' }}
        >
          {/* Piringan vinyl dengan garis-garis */}
          <div className="absolute inset-0 rounded-full border border-gray-600"></div>
          <div className="absolute inset-1 rounded-full border border-gray-500"></div>
          <div className="absolute inset-2 rounded-full border border-gray-400"></div>
          
          {/* Center hole */}
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          
          {/* Play/Pause icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {isPlaying ? (
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3 bg-white opacity-80"></div>
                <div className="w-0.5 h-3 bg-white opacity-80"></div>
              </div>
            ) : (
              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5 opacity-80"></div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MusicController;
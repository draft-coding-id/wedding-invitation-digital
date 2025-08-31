import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdMail } from 'react-icons/md';
import CoverImage from '../assets/cover.jpg';
import CoverCornerBottomLeft from '../assets/bottom-left.png';
import CoverCornerBottomRight from '../assets/bottom-right.png';
import CoverCornerTopRight from '../assets/top-right.png';

const Cover = ({ isOpen, guestName, onOpen }) => {
  return (
    <motion.div
      style={{ width: '100vw', height: '100vh', backgroundImage: `url(${CoverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="fixed inset-0 flex flex-col items-center justify-between text-center z-50 p-4 text-white py-28"
      initial={{ y: 0 }}
      exit={{ y: '-100vh' }} // Animasi keluar yang simpel
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <div className='absolute inset-0 bg-[#353535] opacity-60 -z-10'></div>
      {/* <div className='absolute inset-0 bg-primary opacity-95 -z-10'></div> */}
      {/* <img src={CoverCornerTopRight} layout="fill" objectFit="cover" className='top-0 absolute right-0 -z-10' /> */}
      {/* <img src={CoverCornerRight} layout="fill" objectFit="cover" className='bottom-0 absolute w-2/3 right-0' /> */}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl text-light-cream"
      >
        The Wedding Of
      </motion.h2>
      
      <div className='w-full'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-6xl/tight md:text-8xl/tight font-corinthia mt-8 font-semibold text-start w-full ms-10"
        >
          Ivandrian
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-6xl md:text-8xl font-corinthia font-semibold"
        >
          &
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-6xl/tight md:text-8xl/tight font-corinthia mb-8 font-semibold text-end w-full me-10"
        >
          Meigiana
        </motion.h1>
      </div>

      <div className='flex flex-col items-center'>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-xl font-bold mb-2"
        >
          Rabu, 10 Desember 2025
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-lg text-light-cream mb-2"
        >
          Dear,
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-2xl font-bold text-light-cream mb-8"
        >
          {guestName}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          onClick={onOpen}
          className="bg-white text-dark-green font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-all flex items-center"
        >
          <MdMail className="me-2" />
          Open Invitation
        </motion.button>
      </div>

      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6, delay: 0 }}
        src={CoverCornerBottomLeft} 
        layout="fill" 
        objectFit="cover" 
        className='bottom-0 absolute left-0 -z-10 lg:w-2/5' 
      />
    </motion.div>
  );
};

export default Cover;
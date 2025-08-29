import React from 'react';
import { motion } from 'framer-motion';

const DressCode = () => {
  return (
    <section className="py-20 px-4 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif text-gold mb-4"
      >
        Dress Code
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl mx-auto mb-8"
      >
        We would be delighted if you could join us by wearing formal attire in shades of our wedding palette.
      </motion.p>
      <div className="flex justify-center relative">
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-primary border-2 border-primary absolute"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-white border-2 border-primary absolute"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-gray-400 border-2 border-primary absolute"></motion.div>
      </div>
    </section>
  );
}

export default DressCode;
import React from 'react';
import { motion } from 'framer-motion';

const DressCode = () => {
  return (
    <section className="py-20 px-4 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-5xl  text-white-gold mb-4"
      >
        Dress Code
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl mx-auto mb-8 text-white"
      >
        Kami berharap tamu undangan berkenan mengenakan warna-warna berikut ini di hari istimewa kami.
      </motion.p>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale justify-center">
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-primary border-2 border-primary"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-white border-2 border-primary"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-gray-400 border-2 border-primary"></motion.div>
      </div>
    </section>
  );
}

export default DressCode;
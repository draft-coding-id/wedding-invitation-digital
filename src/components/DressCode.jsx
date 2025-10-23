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
        "Earthy Coastal"<br />
        Please note : As our event is outdoors on the beach, we suggest choosing comfortable shoes and attire
      </motion.p>
      
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale justify-center mb-4">
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-[#5b632a]"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-[#8e9164]"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-[#b7b9a4]"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-[#d9cfc3]"></motion.div>
      </div>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale justify-center">
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-[#f3efe4]"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-[#c7b199]"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-[#9f876f]"></motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full bg-[#8c6347]"></motion.div>
      </div>

    </section>
  );
}

export default DressCode;
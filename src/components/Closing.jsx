import React from 'react';
import { motion } from 'framer-motion';
import ClosingImage from '../assets/closing-image.jpg';

const Closing = () => {
	return (
		<section className="min-h-screen relative flex flex-col gap-y-10 py-8 justify-center items-center text-center px-4 text-white-gold bg-gradient-to-b from-transparent via-primary to-primary">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1, y: 0 }}
        className='text-lg max-w-xl'
      >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus odit obcaecati autem nemo eligendi esse ratione assumenda debitis, quo voluptatibus dolore! Labore doloribus provident pariatur.
      </motion.p>
      <motion.div 
        className='relative px-8 flex flex-col justify-center items-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <img src={ClosingImage} alt="Closing" className='border-4 border-white-gold lg:w-4/12 w-full'/>
        <p className='text-5xl font-corinthia mt-6'>
          Ivandrian & Meigiana
        </p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className='text-lg'
      >
        Thank you for being a part of our special day!
      </motion.p>
		</section>
	);
};

export default Closing;
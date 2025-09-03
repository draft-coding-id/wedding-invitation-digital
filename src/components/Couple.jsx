import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import CoverImage2 from '../assets/cover-2.jpg';
import bride from '../assets/bride.jpg';
import groom from '../assets/groom.jpg';

const Couple = () => {
  return (
    <>
      <section 
        style={{ width: '100vw', height: '100vh', backgroundImage: `url(${CoverImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className='h-screen relative flex flex-col justify-center items-center text-center px-4'
      >
        <div className='absolute inset-0 bg-[#555555] opacity-60'></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='relative z-10 h-9/12 flex flex-col justify-center items-center'
        >
          <div className='w-full text-white-gold'>
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: false }}
              className="text-6xl/tight md:text-8xl/tight font-corinthia mt-8 font-semibold w-full"
            >
              Ivandrian
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-6xl md:text-8xl font-corinthia font-semibold"
            >
              &
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-6xl/tight md:text-8xl/tight font-corinthia mb-8 font-semibold w-full"
            >
              Meigiana
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-lg text-white-gold">
              Wedding Invitation
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className='relative z-10 h-3/12 text-white-gold max-w-xl'
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className='text-white'
          >
            "Bila dalam perjalanan hidupmu, engkau menemukan seorang teman yang bijaksana dan cocok untuk hidup denganmu, hendaklah engkau berjalan bersamanya, dengan gembira dan penuh kesadaran mengatasi segala bahaya."
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className='font-semibold text-2xl mt-4'
          >
            (Dhammapada XXIII - 328)
          </motion.p>
        </motion.div>
      </section>
      <section className="py-20 min-h-screen flex flex-col items-center justify-center space-y-12 overflow-x-hidden">

        <div className="w-full flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className='w-11/12 lg:w-5/12 overflow-hidden h-[80vh] relative text-white'
            style={{ backgroundImage: `url(${groom})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='absolute inset-0 bg-gradient-to-b from-transparent to-[#000000c0]'
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='h-full w-full flex flex-col justify-end p-10 text-light-cream relative z-10'>
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='text-6xl font-corinthia'
              >
                Ivandrian
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-xl font-semibold mt-2'
              >
                Ivandrian Gregorianto Gunawan
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 1 }}
                className='text-lg mt-2'
              >
                Putra dari Bpk. Gunawan Budi Santoso & Ibu Handayani Hutama
              </motion.p>
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 1.2 }}
                href="https://www.instagram.com/nafiswatsiq" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-gold hover:text-light-cream"
              >
                <FaInstagram size={28} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-semibold text-white-gold"
        >
          &
        </motion.div>
        <div className="w-full flex justify-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className='w-11/12 lg:w-5/12 overflow-hidden h-[80vh] relative text-white'
            style={{ backgroundImage: `url(${bride})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='absolute inset-0 bg-gradient-to-b from-transparent to-[#000000c0]'
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='h-full w-full flex flex-col items-end justify-end p-10 text-light-cream relative z-10 text-end'>
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='text-6xl font-corinthia'
              >
                Meigiana
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-xl font-semibold mt-2'
              >
                Meigiana Sumedho
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 1 }}
                className='text-lg mt-2'
              >
                Putri dari Bpk. Sumedho & Ibu Viska Giana
              </motion.p>
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 1.2 }}
                href="https://www.instagram.com/nafiswatsiq" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-gold hover:text-light-cream"
              >
                <FaInstagram size={28} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Couple;
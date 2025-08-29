import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import bride from '../assets/bride.jpg';
import groom from '../assets/groom.jpg';

const CoupleCard = ({ image, name, fullName, parents, instagram, alignment }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: alignment === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`w-full md:w-2/5 p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md border border-white/20 text-center ${alignment === 'right' ? 'md:self-end' : 'md:self-start'}`}
    >
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gold" />
      <h3 className="text-4xl font-serif text-gold">{name}</h3>
      <p className="text-lg text-light-cream mt-2">{fullName}</p>
      <p className="text-md text-light-cream/80 mt-4">{parents}</p>
      <a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-gold hover:text-light-cream">
        <FaInstagram size={24} />
      </a>
    </motion.div>
  );
};

const Couple = () => {
  return (
    <section className="py-20 px-4 min-h-screen flex flex-col items-center justify-center space-y-12">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif text-center text-gold mb-12"
      >
        The Bride & Groom
      </motion.h2>

      <div className="w-full max-w-4xl flex flex-col items-center space-y-8 md:space-y-16">
        <CoupleCard 
          image={bride}
          name="Meigiana"
          fullName="Meigiana Surodipo"
          parents="Daughter of Mr. Surodipo & Mrs. Surodipo"
          instagram="https://instagram.com"
          alignment="left"
        />

        <div className="text-5xl font-serif text-gold">&</div>

        <CoupleCard 
          image={groom}
          name="Joandrian"
          fullName="Joandrian Gregorianto"
          parents="Son of Mr. Gregorianto & Mrs. Gregorianto"
          instagram="https://instagram.com"
          alignment="right"
        />
      </div>
    </section>
  );
};

export default Couple;
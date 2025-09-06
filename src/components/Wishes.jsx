import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Wishes = ({ wishes, addWish, guestName }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (guestName && guestName !== 'Guest') {
      setName(guestName);
    }
  }, [guestName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      addWish({ name, message });
      setName('');
      setMessage('');
    }
  };

  return (
    <section className="py-20 px-4 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl  text-center text-white-gold mb-8"
      >
        Wishes & Prayers
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-white-gold">Nama</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-white-gold rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-white-gold">Wish & Prayer</label>
          <textarea 
            id="message" 
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-white-gold rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold text-white"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-gold text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-all">
          Send Wish
        </button>
      </motion.form>

      <div className="w-full max-w-lg mt-12">
        <h3 className="text-3xl  text-center text-gold mb-6">Messages</h3>
        <AnimatePresence>
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-4 border border-white/20"
            >
              <p className="font-bold text-white">{wish.name}</p>
              <p className="text-light-cream/90 text-white-gold">{wish.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Wishes;
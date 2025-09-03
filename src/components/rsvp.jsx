import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';

// Terima guestName dari App.jsx untuk pre-fill form
const Rsvp = ({ rsvps, addRsvp, guestName }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('');
  const [guestCount, setGuestCount] = useState(1);

  // useEffect untuk mengisi nama dari URL saat komponen dimuat
  useEffect(() => {
    if (guestName && guestName !== 'Guest') {
      setName(guestName);
    }
  }, [guestName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message && attendance) {
      const newRsvp = {
        name,
        message,
        attendance,
        guestCount: attendance === 'Hadir' ? guestCount : 0,
      };
      addRsvp(newRsvp);

      // Reset form setelah submit
      setName('');
      setMessage('');
      setAttendance('');
      setGuestCount(1);
    } else {
      alert("Harap isi semua kolom yang wajib diisi.");
    }
  };

  return (
    <section className="py-20 px-4 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif text-center text-white-gold mb-8"
      >
        RSVP & Wishes
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-white-gold">Nama Anda</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-white border border-white-gold rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="attendance" className="block mb-2 text-white-gold">Konfirmasi Kehadiran</label>
          <select 
            id="attendance" 
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className="w-full text-white border border-white-gold rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold appearance-none"
            style={{
              color: 'white'
            }}
            required
          >
            <option value="" disabled style={{ background: '#bfa06f', color: 'white' }}>Pilih Jawaban...</option>
            <option value="Hadir" style={{ background: '#bfa06f', color: 'white' }}>Hadir</option>
            <option value="Tidak Hadir" style={{ background: '#bfa06f', color: 'white' }}>Tidak Hadir</option>
          </select>
        </div>

        {/* Kolom jumlah tamu HANYA muncul jika memilih "Hadir" */}
        {attendance === 'Hadir' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-4 overflow-hidden"
          >
            <label htmlFor="guestCount" className="block mb-2 text-white-gold">Jumlah Tamu (termasuk Anda)</label>
            <select 
              id="guestCount" 
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value))}
              className="w-full text-white border border-white-gold rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold appearance-none"
              style={{
                color: 'white'
              }}
            >
              <option value={1} style={{ background: '#bfa06f', color: 'white' }}>1 Orang</option>
              <option value={2} style={{ background: '#bfa06f', color: 'white' }}>2 Orang</option>
            </select>
          </motion.div>
        )}

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-white-gold">Ucapan & Doa</label>
          <textarea 
            id="message" 
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-white border border-white-gold rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-gold text-dark-green font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-all">
          Kirim Konfirmasi
        </button>
      </motion.form>

      {/* Menampilkan data RSVP yang sudah masuk */}
      <div className="w-full max-w-lg mt-12">
        <h3 className="text-3xl font-serif text-center text-gold mb-6">Daftar Ucapan</h3>
        <AnimatePresence>
          {rsvps.map((rsvp, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-4 border border-white/20"
            >
              <div className="flex justify-between items-start">
                <p className="font-bold text-gold">{rsvp.name}</p>
                {rsvp.attendance === 'Hadir' ? (
                  <span className="text-xs font-semibold text-green-300 bg-green-800/50 px-2 py-1 rounded-full flex items-center gap-1">
                    <FaUserCheck /> Hadir ({rsvp.guestCount} orang)
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-red-300 bg-red-800/50 px-2 py-1 rounded-full flex items-center gap-1">
                    <FaUserTimes /> Tidak Hadir
                  </span>
                )}
              </div>
              <p className="text-light-cream/90 mt-2">{rsvp.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Rsvp;
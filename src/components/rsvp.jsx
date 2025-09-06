import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';

// Terima guestName dari App.jsx untuk pre-fill form
const Rsvp = ({ rsvps, addRsvp, guestName }) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [guestCount, setGuestCount] = useState(1);

  // useEffect untuk mengisi nama dari URL saat komponen dimuat
  useEffect(() => {
    if (guestName && guestName !== 'Guest') {
      setName(guestName);
    }
  }, [guestName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && attendance) {
      const rsvpData = {
        name,
        attendance,
        guestcount: attendance === 'Hadir' ? guestCount : 0,
      };
      
      // Kirim data langsung ke Supabase
      const { error } = await supabase.from('rsvps').insert(rsvpData);

      if (error) {
        alert('Gagal mengirim RSVP. Coba lagi.');
        console.error(error);
      } else {
        alert("Terima kasih atas konfirmasinya!");
        addRsvp(rsvpData); // Update UI langsung
        setName('');
        setAttendance('');
        setGuestCount(1);
      }
    } else {
      alert("Harap isi nama dan konfirmasi kehadiran.");
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
        RSVP
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
              <option value={3} style={{ background: '#bfa06f', color: 'white' }}>3 Orang</option>
            </select>
          </motion.div>
        )}
        <button type="submit" className="w-full bg-gold text-dark-green font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-all">
          Kirim Konfirmasi
        </button>
      </motion.form>
    </section>
  );
};

export default Rsvp;
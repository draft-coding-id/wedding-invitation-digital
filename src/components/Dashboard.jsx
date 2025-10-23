import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = ({ rsvps, wishes, onLogout }) => {
  console.log(rsvps);
  // 1. State untuk melacak tab yang sedang aktif
  const [activeTab, setActiveTab] = useState('kehadiran'); // Default ke 'kehadiran'

  // Logika untuk data kehadiran (dipindahkan dari atas)
  const attendingGuests = rsvps.filter(rsvp => rsvp.attendance === 'Attending');
  const notAttendingGuests = rsvps.filter(rsvp => rsvp.attendance === 'Not Attending');
  const totalAttending = attendingGuests.reduce((sum, rsvp) => sum + rsvp.guestcount, 0);

  // Konten untuk setiap tab
  const tabContent = {
    kehadiran: (
      <motion.div
        key="kehadiran"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <p className="mb-4">
          Total Tamu yang Akan Hadir: <span className="font-bold text-xl text-gold">{totalAttending}</span> orang
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gold/50">
                <th className="p-2">No.</th>
                <th className="p-2">Name</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Guest Count</th>
              </tr>
            </thead>
            <tbody>
              {attendingGuests.map((rsvp, index) => (
                <tr key={index} className="border-b border-white/10">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{rsvp.name}</td>
                  <td className="p-2">{rsvp.phone}</td>
                  <td className="p-2">{rsvp.guestcount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    ),
    tidakHadir: (
      <motion.div
        key="tidakHadir"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="overflow-x-auto max-h-[60vh]">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gold/50">
                <th className="p-2">No.</th>
                <th className="p-2">Name</th>
                <th className="p-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {notAttendingGuests.map((rsvp, index) => (
                <tr key={index} className="border-b border-white/10">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{rsvp.name}</td>
                  <td className="p-2">{rsvp.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    ),
    wishes: (
      <motion.div
        key="wishes"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="space-y-4 max-h-[60vh] overflow-y-auto pr-2"
      >
        {wishes.map((wish, index) => (
          <div key={index} className="p-4 rounded border">
            <p className="font-bold text-gold">{wish.name}</p>
            <p className="mt-1">{wish.message}</p>
          </div>
        ))}
      </motion.div>
    ),
  };

  return (
    <div className="min-h-screen bg-white text-light-cream p-4 md:p-8 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif text-gold">Dashboard</h1>
          <button
            onClick={onLogout}
            className="bg-gold text-dark-green font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-all"
          >
            Logout
          </button>
        </div>

        {/* 2. Tombol untuk mengganti tab */}
        <div className="flex border-b border-gold/30 mb-6">
          <button
            onClick={() => setActiveTab('kehadiran')}
            className={`py-2 px-4 font-semibold transition-colors duration-300 ${activeTab === 'kehadiran' ? 'text-gold border-b-2 border-gold' : 'text-light-cream/70 hover:text-light-cream'}`}
          >
            Hadir ({attendingGuests.length})
          </button>
          <button
            onClick={() => setActiveTab('tidakHadir')}
            className={`py-2 px-4 font-semibold transition-colors duration-300 ${activeTab === 'tidakHadir' ? 'text-gold border-b-2 border-gold' : 'text-light-cream/70 hover:text-light-cream'}`}
          >
            Tidak Hadir ({notAttendingGuests.length})
          </button>
          <button
            onClick={() => setActiveTab('wishes')}
            className={`py-2 px-4 font-semibold transition-colors duration-300 ${activeTab === 'wishes' ? 'text-gold border-b-2 border-gold' : 'text-light-cream/70 hover:text-light-cream'}`}
          >
            Wishes ({wishes.length})
          </button>
        </div>
        
        {/* 3. Konten tab yang ditampilkan secara dinamis */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
          <AnimatePresence mode="wait">
            {tabContent[activeTab]}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
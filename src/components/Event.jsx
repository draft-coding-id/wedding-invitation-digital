import React from 'react';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import qrCode from '../assets/qr-code.png';

const EventCard = ({ title, date, time, venue, address, mapLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-center w-full max-w-sm border border-white/20"
    >
      <h3 className="text-3xl  mb-4">{title}</h3>
      <p className="text-lg">{date}</p>
      <p className="text-md mb-4">{time}</p>
      <p className="font-bold text-lg">{venue}</p>
      <p className="text-xs mb-6 font-inter">{address}</p>
      <a href={mapLink} target="_blank" rel="noopener noreferrer" className="bg-gold text-dark-green font-bold py-2 px-4 rounded-full inline-flex items-center gap-2 hover:bg-opacity-80 transition-all">
        <FaMapMarkerAlt />
        <span>View Map</span>
      </a>
    </motion.div>
  );
};

const Event = () => {
  const weddingDate = '2025-12-10T09:00:00';

  const CountdownRenderer = ({ days, hours, minutes, seconds }) => (
    <div className="flex justify-center gap-4 text-center">
      <div><span className="text-4xl font-bold">{days}</span><p>Hari</p></div>
      <div><span className="text-4xl font-bold">{hours}</span><p>Jam</p></div>
      <div><span className="text-4xl font-bold">{minutes}</span><p>Menit</p></div>
      <div><span className="text-4xl font-bold">{seconds}</span><p>Detik</p></div>
    </div>
  );

  return (
    <section className="py-20 px-4 flex flex-col items-center text-white-gold">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-5xl  text-center mb-8"
      >
        Wedding Event
      </motion.h2>

      <div className="mb-12 text-light-cream">
        <Countdown date={weddingDate} renderer={CountdownRenderer} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20of%20(Ivandrian%20%26%20Meigiana)&dates=20251210T010000Z/20251210T130000Z&details=Join%20us%20for%20our%20wedding%20celebration%20at%20Green%20Nirvana%20Resort%20Maratua&location=Green%20Nirvana%20Resort%20Maratua,%20Payung-Payung,%20Maratua,%20Berau%20Regency,%20East%20Kalimantan%2077381"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-dark-green font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 hover:bg-opacity-80 transition-all"
        >
          <FaCalendarAlt />
          <span>REMINDER</span>
        </a>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
        <EventCard 
          title="Pemberkatan"
          date="Rabu, 10 Desember 2025"
          time="09:00 - 11:00 WITA"
          venue="Green Nirvana Resort Maratua"
          address="Payung-Payung, Maratua, Payung-Payung, Maratua, Berau Regency, East Kalimantan 77381"
          mapLink="https://maps.app.goo.gl/Z6Z6jUoDDkVHtHcm8"
        />
        <EventCard 
          title="Resepsi"
          date="Rabu, 10 Desember 2025"
          time="17:00 - 21:00 WITA"
          venue="Green Nirvana Resort Maratua"
          address="Payung-Payung, Maratua, Payung-Payung, Maratua, Berau Regency, East Kalimantan 77381"
          mapLink="https://maps.app.goo.gl/Z6Z6jUoDDkVHtHcm8"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className='bg-white/10 backdrop-blur-md p-6 rounded-lg text-center w-full max-w-sm border border-white/20 px-10 mt-8'
      >
        <h3 className="text-3xl  mb-4">QR MAP</h3>
        <img src={qrCode} alt="QR Code" className='mx-auto' />
      </motion.div>

    </section>
  );
};

export default Event;
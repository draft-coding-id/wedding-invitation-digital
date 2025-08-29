import React from 'react';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const EventCard = ({ title, date, time, venue, address, mapLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-center w-full max-w-sm border border-white/20"
    >
      <h3 className="text-3xl font-serif mb-4">{title}</h3>
      <p className="text-lg">{date}</p>
      <p className="text-md mb-4">{time}</p>
      <p className="font-bold text-lg">{venue}</p>
      <p className="text-sm mb-6">{address}</p>
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
      <div><span className="text-4xl font-bold">{days}</span><p>Days</p></div>
      <div><span className="text-4xl font-bold">{hours}</span><p>Hours</p></div>
      <div><span className="text-4xl font-bold">{minutes}</span><p>Mins</p></div>
      <div><span className="text-4xl font-bold">{seconds}</span><p>Secs</p></div>
    </div>
  );

  return (
    <section className="py-20 px-4 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif text-center mb-8"
      >
        Wedding Event
      </motion.h2>

      <div className="mb-12 text-light-cream">
        <Countdown date={weddingDate} renderer={CountdownRenderer} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <EventCard 
          title="Akad Nikah"
          date="Rabu, 10 Desember 2025"
          time="09:00 - 11:00 WIB"
          venue="Green Nirvana Resort"
          address="Jl. Maratua No. 123, Bogor"
          mapLink="https://maps.google.com"
        />
        <EventCard 
          title="Resepsi"
          date="Rabu, 10 Desember 2025"
          time="19:00 - 21:00 WIB"
          venue="Green Nirvana Resort"
          address="Jl. Maratua No. 123, Bogor"
          mapLink="https://maps.google.com"
        />
      </div>
    </section>
  );
};

export default Event;
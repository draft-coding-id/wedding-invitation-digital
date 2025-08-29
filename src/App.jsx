import { useEffect, useRef, useState } from 'react'
import './App.css'
import Cover from './components/Cover';
import song from './assets/song/song.mp3';
import { AnimatePresence, motion } from 'framer-motion';
import Couple from './components/Couple';
import Event from './components/Event';
import DressCode from './components/DressCode';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [wishes, setWishes] = useState([]);
  const audioRef = useRef(null);
  const [guestName, setGuestName] = useState('Guest');

  useEffect(() => {
    document.body.style.overflow = 'hidden';


    const params = new URLSearchParams(window.location.search);
    const name = params.get('to');
    if (name) {
      setGuestName(name.replace(/_/g, " "));
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);

    document.body.style.overflow = 'auto';

    // if (audioRef.current) {
    //   audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    // }
  };

  const addWish = (newWish) => {
    setWishes([newWish, ...wishes]);
  };

  return (
    <div className="font-cormorant">
      <audio ref={audioRef} src={song} loop />

      <AnimatePresence>
        {!isOpen && <Cover guestName={guestName} onOpen={handleOpen} />}
      </AnimatePresence>
      
      {isOpen && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Couple />
          <Event />
          <DressCode />
          {/* <Gallery /> */}
          {/* <Wishes wishes={wishes} addWish={addWish} /> */}
        </motion.main>
      )}
    </div>
  )
}

export default App

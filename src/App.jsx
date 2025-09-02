import { useEffect, useRef, useState } from 'react'
import './App.css'
import Cover from './components/Cover';
import song from './assets/song/song.mp3';
import { AnimatePresence, motion } from 'framer-motion';
import Couple from './components/Couple';
import Event from './components/Event';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import LoveStory from './components/LoveStory';
import Closing from './components/Closing';
import MusicController from './components/MusicController';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [wishes, setWishes] = useState([]);
  const audioRef = useRef(null);
  const [guestName, setGuestName] = useState('Guest');
  const [isPlaying, setIsPlaying] = useState(false);

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

    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log("Audio play failed:", error));
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(error => console.log("Audio play failed:", error));
        setIsPlaying(true);
      }
    }
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
        <div
          className="relative z-0"
        >
          <div className='absolute inset-0 bg-[#3e3e3e] opacity-70'></div>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='relative z-10'
          >
            <Couple />
            <Event />
            <DressCode />
            <Wishes wishes={wishes} addWish={addWish} />
            <Gallery />
            <LoveStory />
            <Closing />
          </motion.main>

          <MusicController isPlaying={isPlaying} toggleMusic={toggleMusic} />
        </div>
      )}
    </div>
  )
}

export default App

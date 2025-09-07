import { useEffect, useRef, useState } from 'react'
import './App.css'
import { AnimatePresence, motion } from 'framer-motion';
import song from './assets/song/song.mp3';
import { supabase } from './supabaseClient';

import Cover from './components/Cover';
import Couple from './components/Couple';
import Event from './components/Event';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import Closing from './components/Closing';
import MusicController from './components/MusicController';
import Rsvp from './components/rsvp';
import Detail from './components/Detail';

// Import komponen dan data untuk fitur admin
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [wishes, setWishes] = useState([]);
  const [rsvps, setRsvps] = useState([]);

  const audioRef = useRef(null);
  const [guestName, setGuestName] = useState('Guest');
  const [isPlaying, setIsPlaying] = useState(false);

  const [view, setView] = useState('invitation');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Ambil data dari kedua tabel
      const { data: rsvpsData } = await supabase.from('rsvps').select().order('created_at', { ascending: false });
      const { data: wishesData } = await supabase.from('wishes').select().order('created_at', { ascending: false });

      setRsvps(rsvpsData || []);
      setWishes(wishesData || []);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setView(isLoggedIn ? 'dashboard' : 'login');
      } else {
        setView('invitation');
      }
    };
    
    handleHashChange(); // Cek saat pertama kali load
    window.addEventListener('hashchange', handleHashChange);
    
    // Logika untuk kunci scroll di awal
    if (view === 'invitation' && !isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup listener
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isLoggedIn, isOpen, view]);

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

  const addRsvp = (newRsvp) => setRsvps([newRsvp, ...rsvps]);
  const addWish = (newWish) => setWishes([newWish, ...wishes]);

  const handleLogin = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setView('dashboard');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setView('login');
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard rsvps={rsvps} wishes={wishes} onLogout={handleLogout} />;
      case 'invitation':
      default:
        return (
          <>
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
                  <Rsvp rsvps={rsvps} addRsvp={addRsvp} guestName={guestName} />
                  <Wishes wishes={wishes} addWish={addWish} guestName={guestName} />
                  <Detail />
                  <Gallery />
                  <Closing />
                </motion.main>

                <MusicController isPlaying={isPlaying} toggleMusic={toggleMusic} />
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="font-cormorant">
      <audio ref={audioRef} src={song} loop />
      {renderView()}
    </div>
  )
}

export default App

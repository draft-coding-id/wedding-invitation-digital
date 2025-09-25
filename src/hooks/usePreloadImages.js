import { useState, useEffect } from 'react';

// Import semua gambar yang perlu di-preload
import background from '../assets/background.jpg';
import bottomLeft from '../assets/bottom-left.png';
import bottomRight from '../assets/bottom-right.png';
import bride from '../assets/bride.jpg';
import cover2 from '../assets/cover-2.jpg';
import cover from '../assets/cover.jpg';
import groom from '../assets/groom.jpg';
import qrCode from '../assets/qr-code.png';
import topRight from '../assets/top-right.png';
import galleryImage1a from '../assets/gallery/1a.jpg';
import galleryImage1b from '../assets/gallery/1b.jpg';
import galleryImage2a from '../assets/gallery/2a.jpg';
import galleryImage2b from '../assets/gallery/2b.jpg';
import galleryImage3a from '../assets/gallery/3a.jpg';
import galleryImage3b from '../assets/gallery/3b.jpg';
import galleryImage4a from '../assets/gallery/4a.jpg';
import galleryImage4b from '../assets/gallery/4b.jpg';

// Daftar semua asset yang perlu di-preload
const imagesToPreload = [
  background,
  bottomLeft,
  bottomRight,
  bride,
  cover2,
  cover,
  groom,
  qrCode,
  topRight,
  // Tambahkan URL eksternal untuk gallery
  galleryImage1a,
  galleryImage1b,
  galleryImage2a,
  galleryImage2b,
  galleryImage3a,
  galleryImage3b,
  galleryImage4a,
  galleryImage4b,
];

const usePreloadImages = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;
    const imagePromises = [];

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          const currentProgress = (loadedCount / totalImages) * 100;
          setProgress(currentProgress);
          resolve(img);
        };
        
        img.onerror = () => {
          // Jika gambar gagal load, tetap count sebagai loaded
          // agar loading tidak stuck
          loadedCount++;
          const currentProgress = (loadedCount / totalImages) * 100;
          setProgress(currentProgress);
          console.warn(`Failed to load image: ${src}`);
          resolve(img);
        };
        
        img.src = src;
      });
    };

    // Buat promise untuk setiap gambar
    imagesToPreload.forEach(src => {
      imagePromises.push(preloadImage(src));
    });

    // Tunggu semua gambar selesai di-load
    Promise.all(imagePromises).then(() => {
      // Tambahan delay agar user bisa melihat 100%
      setTimeout(() => {
        setIsComplete(true);
      }, 500);
    });

  }, []);

  return { progress, isComplete };
};

export default usePreloadImages;
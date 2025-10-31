import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryImage1a from '../assets/gallery/1a.jpg';
import galleryImage1b from '../assets/gallery/1b.jpg';
import galleryImage2a from '../assets/gallery/2a.jpg';
import galleryImage2b from '../assets/gallery/2b.jpg';
import galleryImage3a from '../assets/gallery/3a.jpg';
import galleryImage3b from '../assets/gallery/3b.jpg';
import galleryImage4a from '../assets/gallery/4a.jpg';
import galleryImage4b from '../assets/gallery/4b.jpg';
import movie from '../assets/movie.mp4';

const photos = [
  galleryImage1a,
  galleryImage1b,
  galleryImage2a,
  galleryImage2b,
  galleryImage3a,
  galleryImage3b,
  galleryImage4a,
  galleryImage4b,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src, index) => {
    setSelectedImage({ src, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage && selectedImage.index < photos.length - 1) {
      const newIndex = selectedImage.index + 1;
      setSelectedImage({ src: photos[newIndex], index: newIndex });
    }
  };

  const prevImage = () => {
    if (selectedImage && selectedImage.index > 0) {
      const newIndex = selectedImage.index - 1;
      setSelectedImage({ src: photos[newIndex], index: newIndex });
    }
  };
  return (
    <section className="py-20 px-4">


      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl  text-center text-white-gold mb-12"
      >
        Our Moments
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {photos.map((src, index) => (
          <motion.div 
            key={index} 
            className="mb-4 break-inside-avoid cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(src, index)}
          >
            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          </motion.div>
        ))}
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl  text-center text-white-gold mb-12 mt-20"
      >
        Our Video
      </motion.h2>

      <video controls className="w-full max-w-6xl mx-auto my-12 rounded-lg shadow-lg">
        <source src={movie} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors z-60"
            >
              ×
            </motion.button>

            {/* Previous Button */}
            {selectedImage.index > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gold transition-colors z-60"
              >
                ‹
              </motion.button>
            )}

            {/* Next Button */}
            {selectedImage.index < photos.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gold transition-colors z-60"
              >
                ›
              </motion.button>
            )}

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-lg max-h-full lg:h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={`Gallery image ${selectedImage.index + 1}`}
                className="max-w-full max-h-full lg:h-auto object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {selectedImage.index + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
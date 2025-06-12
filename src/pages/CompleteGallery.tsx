import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const imageFiles = [
  "45.jpg", "44.jpg", "43.jpg", "42.jpg", "41.jpg", "40.jpg", "39.jpg", "38.jpg", "37.jpg", "36.jpg", "35.jpg", "34.jpg", "33.jpg", "32.jpg", "31.jpg", "30.jpg", "29.jpg", "28.jpg", "27.jpg", "26.jpg", "25.jpg", "24.jpg", "23.jpg", "22.jpg", "21.jpg", "20.jpg", "19.jpg", "18.jpg", "17.jpg", "16.jpg", "15.jpg", "14.jpg", "13.jpg", "12.jpg", "11.jpg", "10.jpg", "9.jpg", "8.jpg", "7.jpg", "6.jpg", "5.jpg", "4.jpg", "3.jpg", "2.jpg", "1.jpg", "room6.jpg", "bath2.jpg", "room5.jpg", "room4.jpg", "room3.png", "outside2.png", "outside.png", "room2.png", "room1.png", "bath.png",
  "f2165585-e25c-43ce-a953-0fcd10590628.png", "af75c345-8ae7-43c9-ae35-811e84e17bb9.png", "c5e90ece-244e-4d89-bb9e-b40235a77525.png", "acd3abb4-d1f7-44fe-a91b-0f2467f36916.png", "57475bff-7167-4a6b-8694-93dd7c72ba8c.png", "86d9639c-4497-4529-8893-41d267f68fd7.png", "21434ff3-4ef9-4eb6-97ac-b8aca2c6ed11.png", "9c226fe2-4c4f-4c85-810f-373ddf2769c7.png", "1c226b57-a854-4dfb-a454-fcf1dd80cb8d.png", "12ae632d-259d-4e39-91b3-e717fd854052.png"
];

const CompleteGallery = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = (idx: number) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? imageFiles.length - 1 : prev - 1));
  };
  const nextImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev === imageFiles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black py-16 px-2 md:px-0">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-10 drop-shadow-goldGlow text-center">
          {t('complete_gallery_title')}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageFiles.map((img, idx) => (
            <div
              key={img}
              className="bg-luxury-black/80 border border-luxury-gold/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-goldGlow transition-all duration-300 cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <img
                src={`/images/${img}`}
                alt={img}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Modal για fullscreen προβολή και carousel */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-8 text-luxury-gold hover:text-white text-4xl z-20 focus:outline-none"
            aria-label="Κλείσιμο"
          >
            ×
          </button>
          <button
            onClick={prevImg}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-black/80 hover:bg-luxury-gold/80 text-luxury-gold hover:text-luxury-black rounded-full p-3 z-20 shadow-lg transition-colors border border-luxury-gold"
            aria-label="Προηγούμενη εικόνα"
          >
            &#8592;
          </button>
          <img
            src={`/images/${imageFiles[currentIdx]}`}
            alt={imageFiles[currentIdx]}
            className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl border-4 border-luxury-gold/60 animate-fade-in bg-black"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={nextImg}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-black/80 hover:bg-luxury-gold/80 text-luxury-gold hover:text-luxury-black rounded-full p-3 z-20 shadow-lg transition-colors border border-luxury-gold"
            aria-label="Επόμενη εικόνα"
          >
            &#8594;
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-luxury-gold text-lg font-semibold select-none">
            {currentIdx + 1} / {imageFiles.length}
          </div>
        </div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default CompleteGallery; 
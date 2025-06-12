import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ChevronLeft, ChevronRight, X, Diamond } from 'lucide-react';

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    { src: '/lovable-uploads/outside.png', alt: t('gallery_image1_alt') },
    { src: '/lovable-uploads/room4.jpg', alt: t('gallery_image2_alt') },
    { src: '/lovable-uploads/room1.png', alt: t('gallery_image3_alt') },
    { src: '/lovable-uploads/room2.png', alt: t('gallery_image4_alt') },
    { src: '/lovable-uploads/room5.jpg', alt: t('gallery_image5_alt') },
    { src: '/lovable-uploads/bath2.jpg', alt: t('gallery_image6_alt') },
  ];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setCurrentImage(images[index].src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      setCurrentImage(images[newIndex].src);
      return newIndex;
    });
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      setCurrentImage(images[newIndex].src);
      return newIndex;
    });
  };

  return (
    <section
      id="gallery"
      className="py-20 px-2 md:px-0 bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black relative overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          {/* Diamond Icon */}
          <div className="mb-6">
            <Diamond className="h-16 w-16 mx-auto text-luxury-gold drop-shadow-goldGlow animate-fade-in" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
            {t('gallery')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
          <p className="text-lg md:text-xl text-center text-luxury-gold/90 font-light max-w-2xl mx-auto animate-fade-in">
            {t('gallery_description')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-luxury-black/80 border border-luxury-gold/20 hover:border-luxury-gold transition-all duration-300 animate-slide-up"
              onClick={() => openModal(index)}
              style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.10)' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out group-hover:shadow-[0_0_0_4px_#e0cba8]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/10 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl" />
              <span className="absolute bottom-4 left-4 text-luxury-gold text-base font-medium bg-black/40 px-3 py-1 rounded-lg backdrop-blur-sm">
                {image.alt}
              </span>
            </div>
          ))}
        </div>
        {/* Νέο κουμπί για πλήρη συλλογή */}
        <div className="flex justify-center mt-8">
          <a
            href="/completegallery"
            className="inline-block px-8 py-3 rounded-full bg-luxury-gold text-luxury-black font-semibold text-lg shadow-goldGlow hover:bg-luxury-black hover:text-luxury-gold border-2 border-luxury-gold transition-all duration-300"
          >
            {t('complete_gallery_button')}
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full flex flex-col items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-luxury-gold hover:text-white text-3xl z-20 focus:outline-none"
              aria-label="Close"
            >
              <X size={36} />
            </button>
            <button
              onClick={showPrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-luxury-black/80 hover:bg-luxury-gold/80 text-luxury-gold hover:text-luxury-black rounded-full p-2 z-20 shadow-lg transition-colors border border-luxury-gold"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-auto rounded-2xl max-h-[75vh] object-contain shadow-2xl border-4 border-luxury-gold/60 animate-fade-in"
              onClick={e => e.stopPropagation()}
            />
            <div className="mt-4 text-center">
              <span className="block text-lg md:text-xl text-luxury-gold font-playfair font-semibold mb-1 animate-fade-in">
                {images[currentIndex].alt}
              </span>
              <span className="block text-sm text-luxury-gold/70 animate-fade-in">
                {`${currentIndex + 1} / ${images.length}`}
              </span>
            </div>
            <button
              onClick={showNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-luxury-black/80 hover:bg-luxury-gold/80 text-luxury-gold hover:text-luxury-black rounded-full p-2 z-20 shadow-lg transition-colors border border-luxury-gold"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      )}

      {/* Section Βίντεο */}
      <section className="mt-20 mb-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="mb-6">
              <Diamond className="h-14 w-14 mx-auto text-luxury-gold drop-shadow-goldGlow animate-fade-in" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
              {t('video_section_title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
            <p className="max-w-2xl mx-auto text-luxury-gold/90 text-lg font-light animate-fade-in">
              {t('video_section_desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["v1.mp4", "v2.mp4", "v3.mp4"].map((src, idx) => (
              <div key={src} className="bg-luxury-black/80 border border-luxury-gold/20 rounded-2xl shadow-xl p-4 flex flex-col items-center animate-fade-in">
                <video
                  src={"/videos/" + src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/lovable-uploads/video-thumb.png"
                  className="rounded-xl w-full aspect-video max-h-[32rem] min-h-[20rem] object-cover border-2 border-luxury-gold/30 shadow-lg mb-3"
                  style={{background: '#18181b', minHeight: '20rem', maxHeight: '32rem'}}
                />
                <span className="text-luxury-gold font-playfair text-base font-semibold mt-2">
                  {t('video_label')} {idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom fade-in animation */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.4s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
}

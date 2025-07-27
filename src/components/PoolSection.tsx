import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Sun, Umbrella, Users, Diamond, X, ChevronLeft, ChevronRight } from "lucide-react";

const PoolSection = () => {
  const { t } = useTranslation();
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const poolFeatures = [
    {
      icon: <Droplets className="h-8 w-8 text-sky-400" />,
      title: t("pool_large_size"),
      description: t("pool_large_size_desc"),
    },
    {
      icon: <Umbrella className="h-8 w-8 text-amber-400" />,
      title: t("pool_sun_loungers"),
      description: t("pool_sun_loungers_desc"),
    },
    {
      icon: <Sun className="h-8 w-8 text-orange-400" />,
      title: t("pool_sunbathing"),
      description: t("pool_sunbathing_desc"),
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: t("pool_refreshment"),
      description: t("pool_refreshment_desc"),
    },
  ];

  const poolGallery = [
    "/images/pool1.JPG",
    "/images/pool2.JPG",
    "/images/pool3.JPG",
    "/images/pool4.JPG",
    "/images/pool5.JPG",
  ];

  const openFullscreen = (image: string, index: number) => {
    setFullscreenImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % poolGallery.length;
    setCurrentImageIndex(nextIndex);
    setFullscreenImage(poolGallery[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = currentImageIndex === 0 ? poolGallery.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setFullscreenImage(poolGallery[prevIndex]);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (fullscreenImage) {
      if (e.key === 'Escape') {
        closeFullscreen();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        previousImage();
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [fullscreenImage, currentImageIndex]);

  return (
    <>
      <section className="mt-20">
        {/* Main Pool Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-luxury-black/90 backdrop-blur-lg border border-luxury-gold/30 rounded-3xl shadow-xl p-8 md:p-12"
          style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.15)' }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <Diamond className="h-16 w-16 mx-auto text-luxury-gold drop-shadow-goldGlow" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-4 drop-shadow-goldGlow"
            >
              {t("pool_section_title")}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-32 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-3xl mx-auto text-xl text-luxury-gold/90 font-light"
            >
              {t("pool_section_subtitle")}
            </motion.p>
          </div>

          {/* Main Pool Image and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl cursor-pointer" onClick={() => openFullscreen("/images/pool.JPG", -1)}>
                <img
                  src="/images/pool.JPG"
                  alt={t("pool_main_image_alt")}
                  className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-luxury-black/50 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-luxury-gold font-playfair drop-shadow-goldGlow">
                {t("pool_main_title")}
              </h3>
              <p className="text-luxury-gold/80 text-lg leading-relaxed font-light">
                {t("pool_main_description")}
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {poolFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + idx * 0.1 }}
                    className="bg-luxury-black/50 backdrop-blur-sm border border-luxury-gold/20 rounded-xl p-4 hover:bg-luxury-black/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-luxury-gold/10 p-2 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-luxury-gold text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-luxury-gold/70 text-xs font-light">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Pool Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-luxury-gold text-center mb-8 font-playfair drop-shadow-goldGlow">
              {t("pool_gallery_title")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {poolGallery.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + idx * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-goldGlow transition-all duration-300 cursor-pointer"
                  onClick={() => openFullscreen(image, idx)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image}
                      alt={`${t("pool_image")} ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-luxury-black/50 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-center bg-gradient-to-r from-luxury-gold/10 via-luxury-gold2/10 to-luxury-bronze/10 border border-luxury-gold/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-luxury-gold mb-4 font-playfair drop-shadow-goldGlow">
              {t("pool_cta_title")}
            </h3>
            <p className="text-luxury-gold/80 mb-6 max-w-2xl mx-auto font-light">
              {t("pool_cta_description")}
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-3 bg-luxury-gold text-luxury-black font-semibold px-8 py-4 rounded-xl hover:bg-luxury-black hover:text-luxury-gold border-2 border-luxury-gold hover:shadow-goldGlow transition-all duration-300 group"
            >
              <span className="text-lg">{t("book_now")}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            {/* Close Button - Mobile Optimized */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-60 bg-luxury-black/80 backdrop-blur-sm border border-luxury-gold/30 rounded-full p-3 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 shadow-lg"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons - Desktop */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-60 bg-luxury-black/80 backdrop-blur-sm border border-luxury-gold/30 rounded-full p-3 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 shadow-lg hidden md:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-60 bg-luxury-black/80 backdrop-blur-sm border border-luxury-gold/30 rounded-full p-3 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 shadow-lg hidden md:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={fullscreenImage}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={fullscreenImage}
                alt={`${t("pool_image")} ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Counter - Mobile */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-luxury-black/80 backdrop-blur-sm border border-luxury-gold/30 rounded-full px-4 py-2 text-luxury-gold text-sm font-medium md:hidden">
                {currentImageIndex + 1} / {poolGallery.length}
              </div>

              {/* Mobile Navigation Dots */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                {poolGallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                      setFullscreenImage(poolGallery[idx]);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex 
                        ? 'bg-luxury-gold scale-125' 
                        : 'bg-luxury-gold/50 hover:bg-luxury-gold/80'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Instructions for Mobile */}
            <div className="absolute bottom-4 right-4 text-luxury-gold/70 text-xs hidden md:block">
              <p>Use arrow keys or click arrows to navigate</p>
              <p>Press ESC to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PoolSection; 
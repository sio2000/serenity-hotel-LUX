import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Crown } from "lucide-react";

const heroSections = [
  {
    bg: "/lovable-uploads/room6.jpg", // luxury villa
    titleKey: "hero_title",
    subtitleKey: "hero_subtitle",
    ctaKey: "discover_more",
    ctaHref: "#about",
  },
  {
    bg: "/lovable-uploads/outside.png", // luxury garden
    titleKey: "hero2_title",
    subtitleKey: "hero2_subtitle",
    ctaKey: "hero2_cta",
    ctaHref: "#amenities",
  },
  {
    bg: "/lovable-uploads/room3.png", // luxury suite
    titleKey: "hero3_title",
    subtitleKey: "hero3_subtitle",
    ctaKey: "hero3_cta",
    ctaHref: "#rooms",
  },
];

const Hero = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % heroSections.length);
    }, 6000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [active]);

  const current = heroSections[active];

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 transition-all duration-1000"
        style={{
          backgroundImage: `url('${current.bg}')`,
          filter: "brightness(0.75)",
          backgroundAttachment: "fixed"
        }}
        aria-hidden="true"
      />
      {/* Brighter Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-luxury-navy/40 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
        {/* Crown Icon */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <Crown size={48} className="mx-auto text-luxury-gold drop-shadow-goldGlow" />
        </motion.div>
        {/* Title */}
        <motion.h1
          key={current.titleKey}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-goldGlow"
          style={{
            textShadow: "0 2px 12px #fffbe6, 0 1px 2px #bfa980"
          }}
        >
          {t(current.titleKey)}
        </motion.h1>
        {/* Decorative Gold Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze rounded-full mx-auto mb-8 origin-left"
        />
        {/* Subtitle */}
        <motion.p
          key={current.subtitleKey}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl font-montserrat text-white mb-12 max-w-2xl mx-auto drop-shadow-lg"
        >
          {t(current.subtitleKey)}
        </motion.p>
        {/* CTA Button */}
        <motion.a
          key={current.ctaKey}
          href={current.ctaHref}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="inline-block px-10 py-4 border-2 border-luxury-gold text-luxury-gold font-montserrat text-lg rounded-full shadow-goldGlow hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 font-semibold tracking-wide backdrop-blur-md relative overflow-hidden"
        >
          <span className="relative z-10">{t(current.ctaKey)}</span>
          {/* Gold shimmer effect on hover */}
          <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-luxury-gold/20 via-luxury-gold2/30 to-luxury-bronze/20 pointer-events-none" />
        </motion.a>
      </div>
      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {heroSections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-4 h-4 rounded-full border-2 border-luxury-gold transition-all duration-200 ${active === idx ? 'bg-luxury-gold border-luxury-gold2 scale-125 shadow-goldGlow' : 'bg-white/20 hover:bg-luxury-gold/60'}`}
            aria-label={`Go to hero section ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

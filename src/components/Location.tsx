import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { MapPin, Umbrella, Utensils, Landmark, Mountain, Car, Clock, Compass, Plane, Train, Diamond } from "lucide-react";
import { motion } from "framer-motion";

const iconClass = "h-8 w-8 text-luxury-gold drop-shadow-goldGlow";
const infoIconClass = "h-6 w-6 text-luxury-gold";

const Location = () => {
  const { t } = useTranslation();

  const attractions = [
    {
      icon: <Umbrella className={iconClass} />,
      title: t("sarande_beach"),
      description: t("sarande_beach_description"),
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Landmark className={iconClass} />,
      title: t("ancient_fanoti"),
      description: t("ancient_fanoti_description"),
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Utensils className={iconClass} />,
      title: t("local_restaurants"),
      description: t("local_restaurants_description"),
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Mountain className={iconClass} />,
      title: t("mountain_views"),
      description: t("mountain_views_description"),
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const transportation = [
    {
      icon: <Car className="w-8 h-8" />,
      title: t("by_car"),
      description: t("by_car_description")
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: t("by_plane"),
      description: t("by_plane_description")
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: t("by_bus"),
      description: t("by_bus_description")
    }
  ];

  const locationInfo = [
    {
      icon: <MapPin className={infoIconClass} />,
      title: t("location_address"),
      content: t("location_address_content"),
    },
    {
      icon: <Car className={infoIconClass} />,
      title: t("location_transportation"),
      content: t("location_transportation_content"),
    },
    {
      icon: <Clock className={infoIconClass} />,
      title: t("location_distances"),
      content: t("location_distances_content"),
    },
    {
      icon: <Compass className={infoIconClass} />,
      title: t("location_rating"),
      content: t("location_rating_content"),
    },
  ];

  // Gallery images
  const gallery = [
    "/lovable-uploads/outside.png",
    "/lovable-uploads/outside2.png",
    "/lovable-uploads/room2.png",
    "/lovable-uploads/86d9639c-4497-4529-8893-41d267f68fd7.png"
  ];

  return (
    <section id="location" className="relative bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black py-0 overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[600px] flex items-center justify-center bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(/lovable-uploads/outside2.png)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-luxury-navy/70"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          {/* Diamond Icon */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <Diamond className="h-20 w-20 mx-auto text-luxury-gold drop-shadow-goldGlow" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold font-playfair bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-4 drop-shadow-goldGlow"
          >
            {t("location_section_title")}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-8 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-luxury-gold/90 drop-shadow-lg font-light"
          >
            {t("location_section_subtitle")}
          </motion.p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 -mt-32 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Attractions */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-luxury-black/90 backdrop-blur-lg border border-luxury-gold/30 rounded-2xl shadow-xl hover:scale-105 hover:shadow-goldGlow transition-all duration-300 overflow-hidden flex flex-col h-full"
                style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.15)' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-luxury-black/90 rounded-full p-3 shadow-lg border border-luxury-gold/50 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-semibold mb-3 text-luxury-gold font-playfair drop-shadow-goldGlow">{item.title}</h4>
                  <p className="text-luxury-gold/80 flex-1 font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info & Map */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-luxury-black/90 backdrop-blur-lg border border-luxury-gold/30 rounded-2xl shadow-xl p-8"
              style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.15)' }}
            >
              <h3 className="text-2xl font-bold mb-6 text-luxury-gold flex items-center gap-3 font-playfair drop-shadow-goldGlow">
                <MapPin className="h-8 w-8 text-luxury-gold" /> {t("location_information")}
              </h3>
              <ul className="space-y-6">
                {locationInfo.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <span className="bg-luxury-gold/10 p-3 rounded-full mt-1 border border-luxury-gold/30 group-hover:bg-luxury-gold/20 transition-colors">
                      {item.icon}
                    </span>
                    <div>
                      <span className="font-medium text-luxury-gold font-playfair text-lg">{item.title}</span>
                      <p className="text-luxury-gold/80 whitespace-pre-line font-light mt-1">{item.content}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-72 border border-luxury-gold/30"
              style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.15)' }}
            >
              <iframe
                src="https://www.google.com/maps?q=V2GJ%2BR2X+Saranda+Albania&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Villa Serenity Location"
              />
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              href="https://www.google.com/maps?q=V2GJ%2BR2X+Saranda+Albania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-luxury-gold text-luxury-gold font-semibold py-4 px-8 rounded-xl hover:bg-luxury-gold hover:text-luxury-black hover:shadow-goldGlow transition-all duration-300 group"
              style={{ boxShadow: '0 4px 16px 0 rgba(224, 203, 168, 0.15)' }}
            >
              <span className="text-lg">{t("view_on_google_maps")}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-bold text-luxury-gold mb-10 text-center font-playfair drop-shadow-goldGlow"
          >
            {t("gallery_title")}
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg group relative bg-luxury-black/90 backdrop-blur-lg border border-luxury-gold/30"
                style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.15)' }}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img src={img} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-luxury-gold font-playfair text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {t("gallery_image")} {idx + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

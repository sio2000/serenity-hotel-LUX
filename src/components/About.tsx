import React from "react";
import { Diamond, MapPin, Wifi, ParkingCircle, TreePine } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

// Vibrant χρώματα για κάθε icon
const vibrantIconColors = {
  MapPin: "text-rose-500",
  Wifi: "text-green-400",
  ParkingCircle: "text-amber-400",
  TreePine: "text-emerald-500",
  Diamond: "text-luxury-gold"
};

const About = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <MapPin className={"h-10 w-10 " + vibrantIconColors.MapPin} />,
      title: t("about_feature1_title"),
      description: t("about_feature1_desc"),
    },
    {
      icon: <Wifi className={"h-10 w-10 " + vibrantIconColors.Wifi} />,
      title: t("about_feature2_title"),
      description: t("about_feature2_desc"),
    },
    {
      icon: <ParkingCircle className={"h-10 w-10 " + vibrantIconColors.ParkingCircle} />,
      title: t("about_feature3_title"),
      description: t("about_feature3_desc"),
    },
    {
      icon: <TreePine className={"h-10 w-10 " + vibrantIconColors.TreePine} />,
      title: t("about_feature4_title"),
      description: t("about_feature4_desc"),
    },
  ];

  return (
    <section
      id="about"
      className="relative section-padding bg-gradient-to-br from-luxury-black via-luxury-navy to-luxury-black overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-luxury-black/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-luxury-gold/20 p-10 md:p-16 text-center mb-16">
          {/* Diamond Icon */}
          <div className="mb-6">
            <Diamond className={"h-16 w-16 mx-auto " + vibrantIconColors.Diamond + " drop-shadow-goldGlow"} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-playfair bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent drop-shadow-goldGlow">
            {t("about_title")}
          </h2>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze"></span>
          </div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-luxury-gold mb-2 font-light">
            {t("about_subtitle")}
          </p>
          <p className="max-w-2xl mx-auto text-luxury-gold/80 mb-0 md:mb-2">
            {t("about_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-luxury-black/80 backdrop-blur-lg border border-luxury-gold/30 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform feature-card group"
              style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.10)' }}
            >
              <div className="mb-4 flex items-center justify-center bg-luxury-gold/10 rounded-full w-16 h-16 group-hover:bg-luxury-gold/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-luxury-gold font-playfair">
                {feature.title}
              </h3>
              <p className="text-luxury-gold/80 text-sm font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

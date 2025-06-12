import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { MapPin, Car, Plane, Utensils, Key, Users, Diamond } from "lucide-react";

const icons = [
  <MapPin className="text-blue-400 w-8 h-8" />,
  <Car className="text-green-400 w-8 h-8" />,
  <Plane className="text-indigo-400 w-8 h-8" />,
  <Utensils className="text-yellow-500 w-8 h-8" />,
  <Key className="text-pink-400 w-8 h-8" />,
  <Users className="text-blue-600 w-8 h-8" />
];

const PartnershipSection = () => {
  console.log("PartnershipSection component rendered");
  const { t } = useTranslation();
  const content = [
    {
      key: "canoe_kayak",
      icon: icons[0],
      titleKey: "canoe_kayak_title",
      descKey: "canoe_kayak_desc"
    },
    {
      key: "taxi_electric",
      icon: icons[1],
      titleKey: "taxi_electric_title",
      descKey: "taxi_electric_desc"
    },
    {
      key: "airport_transfer",
      icon: icons[2],
      titleKey: "airport_transfer_title",
      descKey: "airport_transfer_desc"
    },
    {
      key: "exclusive_benefits",
      icon: icons[3],
      titleKey: "exclusive_benefits_title",
      descKey: "exclusive_benefits_desc"
    },
    {
      key: "scooter_car_rental",
      icon: icons[4],
      titleKey: "scooter_car_rental_title",
      descKey: "scooter_car_rental_desc"
    },
    {
      key: "local_insights",
      icon: icons[5],
      titleKey: "local_insights_title",
      descKey: "local_insights_desc"
    }
  ];

  return (
    <section id="partnerships" className="relative section-padding bg-gradient-to-br from-luxury-black via-luxury-navy to-luxury-black overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Diamond Icon */}
          <div className="mb-6">
            <Diamond className="h-16 w-16 mx-auto text-luxury-gold drop-shadow-goldGlow animate-fade-in" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
            {t("partnership_section_title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.map((item, idx) => (
            <div
              key={item.key}
              className="bg-luxury-black/80 backdrop-blur-lg border border-luxury-gold/30 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform feature-card group"
              style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.10)' }}
            >
              <div className="mb-4 flex items-center justify-center bg-luxury-gold/10 rounded-full w-16 h-16 group-hover:bg-luxury-gold/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-luxury-gold font-playfair">
                {t(item.titleKey)}
              </h3>
              <p className="text-luxury-gold/80 text-sm font-light">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <a
            href="mailto:VillaSerenity2024@hotmail.com?subject=CUSTOMER%20TRANSFER%20REQUEST"
            className="block bg-luxury-gold text-luxury-black font-semibold px-10 py-4 rounded-full shadow-goldGlow text-lg hover:bg-luxury-black hover:text-luxury-gold border-2 border-luxury-gold hover:shadow-goldGlow transition-all duration-300 text-center mt-4 md:mt-0"
            style={{ boxShadow: '0 2px 8px 0 rgba(224, 203, 168, 0.10)' }}
          >
            {t("request_transfer")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection; 
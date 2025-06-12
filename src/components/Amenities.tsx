import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Bath,
  BedDouble,
  MapPin,
  Shrub,
  Utensils,
  Tv,
  GlassWater,
  Key,
  Shield,
  Globe,
  Clock,
  Baby,
  PawPrint,
  Cigarette,
  PartyPopper,
  Info,
  Wifi,
  Car,
  Diamond
} from "lucide-react";

// Vibrant χρώματα για κάθε icon
const vibrantIconColors = {
  Bath: "text-sky-400",
  BedDouble: "text-amber-400",
  MapPin: "text-rose-500",
  Shrub: "text-green-500",
  Utensils: "text-orange-400",
  Tv: "text-indigo-400",
  GlassWater: "text-cyan-400",
  Key: "text-yellow-400",
  Shield: "text-emerald-500",
  Globe: "text-blue-400",
  Clock: "text-sky-400",
  Baby: "text-pink-400",
  PawPrint: "text-orange-500",
  Cigarette: "text-orange-400",
  PartyPopper: "text-violet-500",
  Info: "text-cyan-400",
  Wifi: "text-green-400",
  Car: "text-red-400",
  Diamond: "text-luxury-gold"
};

const iconClass = "w-10 h-10 md:w-12 md:h-12 stroke-[1.5] group-hover:text-white transition-colors duration-300 drop-shadow-goldGlow";

const Amenities = () => {
  const { t } = useTranslation();

  const facilityCategories = [
    {
      icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />,
      title: t("bathroom"),
      items: [
        t("toiletPaper"),
        t("towels"),
        t("privateBathroom"),
        t("bathtub")
      ]
    },
    {
      icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />,
      title: t("bedroom"),
      items: [
        t("linen"),
        t("wardrobe"),
        t("extraLargeBeds"),
        t("view")
      ]
    },
    {
      icon: <Shrub className={iconClass + " " + vibrantIconColors.Shrub} />,
      title: t("outdoors"),
      items: [
        t("outdoorFurniture"),
        t("sunTerrace"),
        t("bbqFacilities"),
        t("terrace"),
        t("garden")
      ]
    },
    {
      icon: <Utensils className={iconClass + " " + vibrantIconColors.Utensils} />,
      title: t("kitchen"),
      items: [
        t("cleaningProducts"),
        t("electricKettle")
      ]
    },
    {
      icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />,
      title: t("mediaAndTechnology"),
      items: [
        t("flatScreenTv")
      ]
    },
    {
      icon: <GlassWater className={iconClass + " " + vibrantIconColors.GlassWater} />,
      title: t("foodAndDrink"),
      items: [
        t("onSiteCoffeeShop"),
        t("wineChampagne"),
        t("bar")
      ]
    },
    {
      icon: <Wifi className={iconClass + " " + vibrantIconColors.Wifi} />,
      title: t("internet"),
      items: [
        t("wifiEverywhere")
      ]
    },
    {
      icon: <Car className={iconClass + " " + vibrantIconColors.Car} />,
      title: t("parking"),
      items: [
        t("freePrivateParking")
      ]
    },
    {
      icon: <Key className={iconClass + " " + vibrantIconColors.Key} />,
      title: t("services"),
      items: [
        t("dailyHousekeeping"),
        t("sharedLounge"),
        t("trouserPress"),
        t("privateCheckIn"),
        t("ironingService"),
        t("dryCleaning"),
        t("laundry"),
        t("airportShuttle")
      ]
    },
    {
      icon: <Baby className={iconClass + " " + vibrantIconColors.Baby} />,
      title: t("entertainmentFamily"),
      items: [
        t("childSafetyGates")
      ]
    },
    {
      icon: <Shield className={iconClass + " " + vibrantIconColors.Shield} />,
      title: t("safetyAndSecurity"),
      items: [
        t("fireExtinguishers"),
        t("cctvOutside"),
        t("cctvCommon"),
        t("smokeDetectors"),
        t("alarmSystem"),
        t("keyCardAccess"),
        t("keyAccess"),
        t("security24h")
      ]
    },
    {
      icon: <Info className={iconClass + " " + vibrantIconColors.Info} />,
      title: t("general"),
      items: [
        t("allergyFreeRoom"),
        t("designatedSmokingArea"),
        t("airConditioning"),
        t("mosquitoNet"),
        t("heating"),
        t("soundproofing"),
        t("soundproofRooms"),
        t("familyRooms"),
        t("ironingFacilities"),
        t("nonSmokingRooms")
      ]
    },
    {
      icon: <Globe className={iconClass + " " + vibrantIconColors.Globe} />,
      title: t("languagesSpoken"),
      items: [
        t("greek"),
        t("english"),
        t("swedish")
      ]
    }
  ];

  return (
    <section
      id="amenities"
      className="py-20 px-2 md:px-0 bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black relative overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          {/* Diamond Icon */}
          <div className="mb-6">
            <Diamond className={"h-16 w-16 mx-auto " + vibrantIconColors.Diamond + " drop-shadow-goldGlow animate-fade-in"} />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
            {t("amenities")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
          <p className="max-w-2xl mx-auto text-luxury-gold text-lg md:text-xl font-light animate-fade-in">
            {t("amenities_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilityCategories.map((category, index) => (
            <div
              key={index}
              className="bg-luxury-black/80 border border-luxury-gold/30 p-8 rounded-2xl shadow-xl group hover:scale-105 hover:shadow-goldGlow transition-all duration-300 feature-card animate-slide-up"
              style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.10)' }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-luxury-gold">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-luxury-gold flex items-center">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;

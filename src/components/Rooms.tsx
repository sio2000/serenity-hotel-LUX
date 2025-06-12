import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { BedDouble, Wifi, Bath, Tv, Coffee, Users, Mountain, Key, Utensils, MapPin, Castle, Diamond } from "lucide-react";

// Vibrant χρώματα για κάθε icon
const vibrantIconColors = {
  BedDouble: "text-amber-400",
  Wifi: "text-green-400",
  Bath: "text-sky-400",
  Tv: "text-indigo-400",
  Coffee: "text-orange-400",
  Users: "text-pink-400",
  Mountain: "text-emerald-500",
  Key: "text-yellow-400",
  Utensils: "text-rose-500",
  MapPin: "text-rose-500",
  Castle: "text-violet-500",
  Diamond: "text-luxury-gold"
};

const iconClass = "w-6 h-6 md:w-7 md:h-7 stroke-[1.5] drop-shadow-goldGlow";

const Rooms = () => {
  const { t } = useTranslation();

  const rooms = [
    {
      id: "triple-104",
      name: t("room_104_triple"),
      description: t("room_104_triple_desc"),
      image: "/lovable-uploads/27.jpg",
      price: "€110",
      features: [
        { icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />, text: t("triple_room") },
        { icon: <Users className={iconClass + " " + vibrantIconColors.Users} />, text: "3" },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("private_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
    {
      id: "castle-202",
      name: t("room_202_castle"),
      description: t("room_202_castle_desc"),
      image: "/lovable-uploads/28.jpg",
      price: "€120",
      features: [
        { icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />, text: t("deluxe_double_room") },
        { icon: <Castle className={iconClass + " " + vibrantIconColors.Castle} />, text: t("castle_view") },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("luxury_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
    {
      id: "castle-203",
      name: t("room_203_castle"),
      description: t("room_203_castle_desc"),
      image: "/lovable-uploads/31.jpg",
      price: "€120",
      features: [
        { icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />, text: t("deluxe_double_room") },
        { icon: <Castle className={iconClass + " " + vibrantIconColors.Castle} />, text: t("castle_view") },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("luxury_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
    {
      id: "balcony-102",
      name: t("room_102_balcony"),
      description: t("room_102_balcony_desc"),
      image: "/lovable-uploads/32.jpg",
      price: "€120",
      features: [
        { icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />, text: t("deluxe_double_room") },
        { icon: <MapPin className={iconClass + " " + vibrantIconColors.MapPin} />, text: t("private_balcony") },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("luxury_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
    {
      id: "triple-balcony-103",
      name: t("room_103_triple_balcony"),
      description: t("room_103_triple_balcony_desc"),
      image: "/lovable-uploads/36.jpg",
      price: "€130",
      features: [
        { icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />, text: t("deluxe_triple_room") },
        { icon: <MapPin className={iconClass + " " + vibrantIconColors.MapPin} />, text: t("private_balcony") },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("luxury_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
    {
      id: "king-201",
      name: t("room_201_king"),
      description: t("room_201_king_desc"),
      image: "/lovable-uploads/39.jpg",
      price: "€140",
      features: [
        { icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />, text: t("king_size_bed") },
        { icon: <Mountain className={iconClass + " " + vibrantIconColors.Mountain} />, text: t("mountain_view") },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("luxury_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
    {
      id: "apartment-204",
      name: t("room_204_apartment"),
      description: t("room_204_apartment_desc"),
      image: "/lovable-uploads/7.jpg",
      price: "€150",
      features: [
        { icon: <Users className={iconClass + " " + vibrantIconColors.Users} />, text: t("max_guests_5") },
        { icon: <Wifi className={iconClass + " " + vibrantIconColors.Wifi} />, text: t("free_wifi") },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("luxury_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Utensils className={iconClass + " " + vibrantIconColors.Utensils} />, text: t("minibar") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
    {
      id: "mountain-105",
      name: t("room_105_mountain"),
      description: t("room_105_mountain_desc"),
      image: "/lovable-uploads/8.jpg",
      price: "€120",
      features: [
        { icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />, text: t("deluxe_double_room") },
        { icon: <Mountain className={iconClass + " " + vibrantIconColors.Mountain} />, text: t("mountain_view") },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("luxury_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
    {
      id: "mountain-castle-101",
      name: t("room_101_mountain_castle"),
      description: t("room_101_mountain_castle_desc"),
      image: "/lovable-uploads/10.jpg",
      price: "€120",
      features: [
        { icon: <BedDouble className={iconClass + " " + vibrantIconColors.BedDouble} />, text: t("deluxe_double_room") },
        { icon: <Mountain className={iconClass + " " + vibrantIconColors.Mountain} />, text: t("mountain_view") },
        { icon: <Castle className={iconClass + " " + vibrantIconColors.Castle} />, text: t("castle_view") },
        { icon: <Bath className={iconClass + " " + vibrantIconColors.Bath} />, text: t("luxury_bathroom") },
        { icon: <Tv className={iconClass + " " + vibrantIconColors.Tv} />, text: t("smart_tv") },
        { icon: <Key className={iconClass + " " + vibrantIconColors.Key} />, text: t("daily_housekeeping") },
      ],
    },
  ];

  const RoomFeature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
    <div className="flex items-center gap-2 text-luxury-gold/90">
      <div>{icon}</div>
      <span className="text-sm font-light">{text}</span>
    </div>
  );

  return (
    <section id="rooms" className="section-padding bg-gradient-to-br from-luxury-black via-luxury-navy to-luxury-black overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Diamond Icon */}
          <div className="mb-6">
            <Diamond className="h-16 w-16 mx-auto text-luxury-gold drop-shadow-goldGlow animate-fade-in" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
            {t("ourRooms")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
          <p className="max-w-3xl mx-auto text-luxury-gold/90 text-lg md:text-xl font-light animate-fade-in">
            {t("roomsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={room.id}
              className="bg-luxury-black/80 border border-luxury-gold/30 rounded-3xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-goldGlow transition-all duration-300 room-card animate-slide-up flex flex-col"
              style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.10)' }}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Gold overlay for luxury effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-luxury-gold font-playfair drop-shadow-goldGlow">
                    {room.name}
                  </h3>
                  <span className="text-luxury-gold font-semibold">
                    {room.price}
                    <span className="text-sm text-luxury-gold/70">{t("per_night")}</span>
                  </span>
                </div>
                <p className="text-luxury-gold/80 mb-4 font-light">{room.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, index) => (
                    <RoomFeature key={index} icon={feature.icon} text={feature.text} />
                  ))}
                </div>
                <a
                  href="#booking"
                  className="block w-full bg-luxury-gold text-luxury-black font-semibold text-center py-3 rounded-md transition-all hover:bg-luxury-black hover:text-luxury-gold border-2 border-luxury-gold hover:shadow-goldGlow mt-auto"
                  style={{ boxShadow: '0 2px 8px 0 rgba(224, 203, 168, 0.10)' }}
                >
                  {t("book_now")}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-luxury-gold/80 mb-6">
            {t("roomsIncludedFeatures")}
          </p>
          <a href="#amenities" className="text-luxury-gold hover:underline font-medium inline-flex items-center">
            {t("viewAllAmenities")}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rooms;

import React from "react";
import { Star, Diamond } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import reviews from "../data/reviews";

// Ratings
const ratings = [
  { key: "cleanliness", en: "Cleanliness", el: "Καθαριότητα", sq: "Pastërtia", value: 9.8 },
  { key: "comfort", en: "Comfort", el: "Άνεση", sq: "Rehatia", value: 9.9 },
  { key: "staff", en: "Staff", el: "Προσωπικό", sq: "Stafi", value: 9.9 },
  { key: "value", en: "Value for Money", el: "Αξία για τα χρήματα", sq: "Vlera për para", value: 9.8 },
  { key: "facilities", en: "Facilities", el: "Παροχές", sq: "Komoditetet", value: 9.9 },
  { key: "wifi", en: "WiFi", el: "WiFi", sq: "WiFi", value: 10 },
  { key: "location", en: "Location", el: "Τοποθεσία", sq: "Vendndodhja", value: 9.3 },
  { key: "overall", en: "Overall", el: "Συνολικά", sq: "Në përgjithësi", value: 9.8 },
];

function getAvatarVibrant(idx: number) {
  // Vibrant παλέτα
  const colors = [
    "bg-sky-400 text-white",
    "bg-pink-500 text-white",
    "bg-emerald-500 text-white",
    "bg-amber-400 text-white",
    "bg-violet-500 text-white",
    "bg-cyan-500 text-white",
    "bg-orange-400 text-white",
    "bg-red-500 text-white",
    "bg-blue-500 text-white",
    "bg-lime-500 text-white"
  ];
  return colors[idx % colors.length];
}

const Testimonials = () => {
  const { language } = useTranslation();
  // Υπολογισμός στατιστικών
  const totalReviews = reviews.length;
  const avgRating = (
    reviews.reduce((sum, t) => sum + t.rating, 0) / totalReviews
  ).toFixed(1);
  const ratingDist = [
    reviews.filter((t) => t.rating === 10).length,
    reviews.filter((t) => t.rating === 9).length,
    reviews.filter((t) => t.rating === 8).length,
    reviews.filter((t) => t.rating === 7).length,
    reviews.filter((t) => t.rating <= 6).length,
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-2 md:px-0 bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black relative overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          {/* Diamond Icon */}
          <div className="mb-6">
            <Diamond className="h-16 w-16 mx-auto text-luxury-gold drop-shadow-goldGlow animate-fade-in" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
            {language === "el"
              ? "Σχόλια Επισκεπτών"
              : language === "sq"
              ? "Komente Vizitorësh"
              : "Guest Reviews"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
          <p className="max-w-2xl mx-auto text-luxury-gold text-lg md:text-xl font-light animate-fade-in">
            {language === "el"
              ? "Η εμπειρία των επισκεπτών μας στη Villa Serenity."
              : language === "sq"
              ? "Përvoja e vizitorëve tanë në Villa Serenity."
              : "Our guests' experience at Villa Serenity."}
          </p>
        </div>

        {/* Luxury Ratings Bars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {ratings.map((r, i) => (
            <div
              key={r.key}
              className="flex flex-col items-center bg-luxury-black/80 border border-luxury-gold/30 group rounded-3xl py-4 px-4 shadow-xl hover:shadow-goldGlow transition-all duration-300 relative overflow-hidden backdrop-blur-md animate-fade-in"
              style={{ minWidth: 120, boxShadow: '0 2px 16px 0 rgba(224,203,168,0.13), 0 0 0 1.5px #e0cba8 inset' }}
            >
              <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-luxury-gold opacity-30 group-hover:opacity-60 transition-opacity duration-300" style={{boxShadow:'0 0 24px 2px #e0cba8'}}></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent font-playfair drop-shadow-goldGlow group-hover:scale-110 transition-transform duration-200 z-10">
                {r.value}
              </span>
              <span className="text-xs text-luxury-gold font-semibold text-center tracking-wide group-hover:text-white transition-colors duration-200 z-10">
                {r[language]}
              </span>
            </div>
          ))}
        </div>

        {/* Στατιστικά */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="flex flex-col items-center justify-center bg-luxury-black/90 border-2 border-luxury-gold rounded-3xl px-12 py-10 shadow-xl min-w-[240px] max-w-[300px] mx-auto relative overflow-hidden backdrop-blur-md animate-fade-in" style={{boxShadow:'0 8px 48px 0 rgba(224,203,168,0.18),0 0 0 2px #e0cba8 inset'}}>
            <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-luxury-gold opacity-40" style={{boxShadow:'0 0 48px 8px #e0cba8'}}></div>
            <span className="text-5xl font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent font-playfair drop-shadow-goldGlow mb-1 z-10">
              {avgRating}
            </span>
            <span className="text-lg font-semibold text-white mb-1 z-10">
              {language === "el"
                ? "Άριστο"
                : language === "sq"
                ? "Shkëlqyeshëm"
                : "Excellent"}
            </span>
            <span className="text-luxury-gold text-xs mb-2 z-10">{totalReviews} reviews</span>
            <div className="flex items-center justify-center mb-2 z-10">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={
                    i < Math.round(Number(avgRating) / 2)
                      ? "text-amber-400 fill-amber-400 drop-shadow-goldGlow"
                      : "text-gray-300"
                  }
                  fill={i < Math.round(Number(avgRating) / 2) ? "#fbbf24" : "none"}
                />
              ))}
            </div>
            <div className="w-full flex flex-col gap-1 mt-2 z-10">
              {[10, 9, 8, 7, 6].map((star, idx) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-luxury-gold font-semibold w-6 text-xs">{star}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-luxury-navy overflow-hidden">
                    <div
                      className="h-1.5 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-gold2 transition-all"
                      style={{ width: `${(ratingDist[idx] / totalReviews) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-luxury-gold text-xs w-4 text-right">
                    {ratingDist[idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {reviews.slice(0, 12).map((t, idx) => (
            <div
              key={idx}
              className="bg-luxury-black/80 border border-luxury-gold/20 hover:border-luxury-gold shadow-xl hover:shadow-goldGlow p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 backdrop-blur-md group min-h-[240px] animate-slide-up"
              style={{ minHeight: 240 }}
            >
              {/* Avatar */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-2 shadow-md border-2 border-luxury-gold transition-colors duration-300 animate-fade-in ${getAvatarVibrant(idx)}`}
              >
                {t.name[0]}
              </div>
              {/* Όνομα, χώρα, ημερομηνία */}
              <div className="mb-1 flex flex-col items-center">
                <span className="text-base font-semibold text-luxury-gold font-playfair">
                  {t.name} – {t.country}
                </span>
                <span className="text-luxury-gold/90 text-xs flex items-center gap-1">
                  {t.room && (t.room[language] || t.room.en)}
                </span>
                <span className="text-luxury-gold/80 text-xs flex items-center gap-1">
                  {t.stay && (t.stay[language] || t.stay.en)}
                </span>
                <span className="text-[10px] text-luxury-gold/60">{t.date}</span>
              </div>
              {/* Αστέρια */}
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={
                      i < Math.round(t.rating / 2)
                        ? "text-amber-400 fill-amber-400 drop-shadow-goldGlow"
                        : "text-gray-300"
                    }
                    fill={i < Math.round(t.rating / 2) ? "#fbbf24" : "none"}
                  />
                ))}
                <span className="ml-2 text-luxury-gold text-xs font-bold">{t.rating} / 10</span>
              </div>
              {/* Quote */}
              <blockquote className="text-white text-sm mt-2 font-light animate-fade-in">
                “{t.quote[language] || t.quote.en}”
              </blockquote>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <a
            href="/reviews"
            className="inline-block bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze text-luxury-black font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-goldGlow transition-all duration-300 text-lg border-2 border-luxury-gold"
          >
            Booking Reviews
          </a>
          <a
            href="/google-reviews"
            className="inline-block bg-transparent text-luxury-gold font-bold py-3 px-8 rounded-full shadow-lg hover:bg-luxury-gold hover:text-luxury-black hover:scale-105 hover:shadow-goldGlow transition-all duration-300 text-lg border-2 border-luxury-gold"
          >
            {language === "el"
              ? "Google Κριτικές"
              : language === "sq"
              ? "Vlerësimet në Google"
              : "Google Reviews"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
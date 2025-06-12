import React from "react";
import { Diamond, Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import reviews from "../data/reviews";

function getAvatarVibrant(idx: number) {
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

const Reviews = () => {
  const { t, language } = useTranslation();
  const totalReviews = reviews.length;
  const avgRating = (
    reviews.reduce((sum, t) => sum + t.rating, 0) / totalReviews
  ).toFixed(1);

  console.log("[REVIEWS PAGE] Current language:", language);
  reviews.forEach((review, idx) => {
    console.log(`Review #${idx + 1} (${review.name}):`, {
      room: review.room,
      stay: review.stay,
      quote: review.quote,
      roomSelected: review.room?.[language] || review.room?.el || review.room?.en,
      staySelected: review.stay?.[language] || review.stay?.el || review.stay?.en,
      quoteSelected: review.quote?.[language] || review.quote?.el || review.quote?.en
    });
  });

  return (
    <section
      id="reviews"
      className="py-20 px-2 md:px-0 bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="text-center mb-16">
        <div className="mb-6">
          <Diamond className="h-16 w-16 mx-auto text-luxury-gold drop-shadow-goldGlow animate-fade-in" />
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
          {t("guestReviews")}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in">
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M9 17H7a2 2 0 01-2-2v-2a6 6 0 016-6h2a6 6 0 016 6v2a2 2 0 01-2 2h-2M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2" /></svg>
            <span className="text-luxury-gold text-lg font-bold">9.8</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M16 3.13a4 4 0 01.84 7.9M12 7v4m0 0l-2-2m2 2l2-2" /></svg>
            <span className="text-luxury-gold text-lg font-bold">9.9</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="text-luxury-gold text-lg font-bold">9.9</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" /></svg>
            <span className="text-luxury-gold text-lg font-bold">9.8</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-violet-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" /></svg>
            <span className="text-luxury-gold text-lg font-bold">9.9</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.53 16.11a4 4 0 016.94 0M5.07 13.07a8 8 0 0113.86 0M1.64 10.03a12 12 0 0120.72 0M12 20h.01" /></svg>
            <span className="text-luxury-gold text-lg font-bold">10</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-7 w-7 text-amber-400 mb-1 drop-shadow-goldGlow" />
            <span className="text-luxury-gold text-lg font-bold">9.8/10</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {reviews.map((t, idx) => (
          <div
            key={idx}
            className="bg-luxury-black/80 border border-luxury-gold/20 hover:border-luxury-gold shadow-xl hover:shadow-goldGlow p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 backdrop-blur-md group min-h-[240px] animate-slide-up"
            style={{ minHeight: 240 }}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-2 shadow-md border-2 border-luxury-gold transition-colors duration-300 animate-fade-in ${getAvatarVibrant(idx)}`}
            >
              {t.name[0]}
            </div>
            <div className="mb-1 flex flex-col items-center">
              <span className="text-base font-semibold text-luxury-gold font-playfair">
                {t.name} – {t.country}
              </span>
              <span className="text-luxury-gold/90 text-xs flex items-center gap-1">
                {t.room && (t.room[language] || t.room.el || t.room.en)}
              </span>
              <span className="text-luxury-gold/80 text-xs flex items-center gap-1">
                {t.stay && (t.stay[language] || t.stay.el || t.stay.en)}
              </span>
              <span className="text-[10px] text-luxury-gold/60">{t.date}</span>
            </div>
            <div className="flex items-center justify-center mb-2 z-10">
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
            <blockquote className="text-white text-sm mt-2 font-light animate-fade-in">
              “{t.quote[language] || t.quote.el || t.quote.en}”
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews; 
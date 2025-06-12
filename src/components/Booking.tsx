import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Mail, Phone, MapPin, Users, BedDouble, Diamond } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaViber, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

const Booking = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [roomType, setRoomType] = useState("standard");
  const [loading, setLoading] = useState(false);
  const [specialRequests, setSpecialRequests] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format ημερομηνίες
    const checkIn = dateFrom ? format(dateFrom, 'yyyy-MM-dd') : '';
    const checkOut = dateTo ? format(dateTo, 'yyyy-MM-dd') : '';
    // Μετάφραση τύπου δωματίου
    let roomTypeLabel = '';
    if (roomType === 'standard') roomTypeLabel = t('standard_room');
    else if (roomType === 'deluxe') roomTypeLabel = t('deluxe_room');
    else if (roomType === 'suite') roomTypeLabel = t('suite') || 'Suite';
    // Guests label
    let guestsLabel = guests === 1 ? t('one_guest') : `${guests} ${t('guests')}`;
    // Email body
    const body =
      `${t('full_name')}: ${name}\n` +
      `${t('email')}: ${email}\n` +
      `${t('phone')}: ${phone}\n` +
      `${t('check_in')}: ${checkIn}\n` +
      `${t('check_out')}: ${checkOut}\n` +
      `${t('guests')}: ${guestsLabel}\n` +
      `${t('room_type')}: ${roomTypeLabel}\n` +
      `${t('special_requests')}: ${specialRequests}`;
    const mailto = `mailto:VillaSerenity2024@hotmail.com?subject=ROOM%20BOOKING&body=${encodeURIComponent(body)}`;
    window.open(mailto, '_blank');
  };

  return (
    <section id="booking" className="relative section-padding bg-gradient-to-br from-luxury-black via-luxury-navy to-luxury-black overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          {/* Diamond Icon */}
          <div className="mb-6">
            <Diamond className="h-16 w-16 mx-auto text-luxury-gold drop-shadow-goldGlow animate-fade-in" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
            {t("book_now")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
          <p className="max-w-2xl mx-auto text-luxury-gold/90 text-lg md:text-xl font-light animate-fade-in">
            {t('booking_description')}
          </p>
        </div>
        <div className="w-full bg-luxury-black/80 backdrop-blur-lg border border-luxury-gold/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-in">
          {/* Contact Info */}
          <div className="md:w-1/3 bg-gradient-to-br from-luxury-gold/20 via-luxury-gold2/20 to-luxury-bronze/20 p-8 flex flex-col justify-between min-h-[420px] border-r border-luxury-gold/30">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-6">{t('contact_info')}</h3>
              <div className="space-y-4">
                <div
                  className="flex items-center text-luxury-gold/90 mb-2 cursor-pointer hover:text-white transition-colors"
                  onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Ruhi+Deliu+Street,+9701+Saranda,+Albania', '_blank')}
                >
                  <FaMapMarkerAlt className="h-5 w-5 mr-3" />
                  <span>{t('villa_full_address')}</span>
                </div>
                <div
                  className="flex items-center text-luxury-gold/90 mb-2 cursor-pointer hover:text-white transition-colors"
                  onClick={() => window.location.href = 'tel:+355684725190'}
                >
                  <FaPhone className="h-5 w-5 mr-3" />
                  <span>+355 684725190</span>
                </div>
                <div
                  className="flex items-center text-luxury-gold/90 mb-2 cursor-pointer hover:text-white transition-colors"
                  onClick={() => window.location.href = 'mailto:VillaSerenity2024@hotmail.com'}
                >
                  <FaEnvelope className="h-5 w-5 mr-3" />
                  <span>VillaSerenity2024@hotmail.com</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-playfair font-semibold text-luxury-gold mb-4">{t('follow_us')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#1877F3] hover:scale-110 transition-transform">
                  <FaFacebook className="h-8 w-8 drop-shadow" />
                </a>
                <a href="https://www.instagram.com/villa.serenityy/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:scale-110 transition-transform">
                  <FaInstagram className="h-8 w-8 drop-shadow" />
                </a>
                <a href="#" className="text-[#1DA1F2] hover:scale-110 transition-transform">
                  <FaTwitter className="h-8 w-8 drop-shadow" />
                </a>
              </div>
            </div>
          </div>
          {/* Booking Form */}
          <div className="md:w-2/3 p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-luxury-gold mb-2 font-medium">{t('check_in')}</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "w-full bg-luxury-black/50 border border-luxury-gold/30 rounded-lg px-4 py-2 text-luxury-gold text-left focus:outline-none focus:border-luxury-gold2 focus:ring-1 focus:ring-luxury-gold2",
                          !dateFrom && "text-muted-foreground"
                        )}
                      >
                        {dateFrom ? format(dateFrom, 'dd/MM/yyyy') : t('select_date')}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateFrom}
                        onSelect={setDateFrom}
                        initialFocus
                        fromDate={new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block text-luxury-gold mb-2 font-medium">{t('check_out')}</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "w-full bg-luxury-black/50 border border-luxury-gold/30 rounded-lg px-4 py-2 text-luxury-gold text-left focus:outline-none focus:border-luxury-gold2 focus:ring-1 focus:ring-luxury-gold2",
                          !dateTo && "text-muted-foreground"
                        )}
                      >
                        {dateTo ? format(dateTo, 'dd/MM/yyyy') : t('select_date')}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateTo}
                        onSelect={setDateTo}
                        initialFocus
                        fromDate={dateFrom || new Date()}
                        disabled={date => dateFrom && date < dateFrom}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-luxury-gold mb-2 font-medium">{t('guests')}</label>
                  <select
                    className="w-full bg-luxury-black/50 border border-luxury-gold/30 rounded-lg px-4 py-2 text-luxury-gold focus:outline-none focus:border-luxury-gold2 focus:ring-1 focus:ring-luxury-gold2"
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                  >
                    <option value="1">{t('one_guest')}</option>
                    <option value="2">2 {t('guests')}</option>
                    <option value="3">3 {t('guests')}</option>
                    <option value="4">4 {t('guests')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-luxury-gold mb-2 font-medium">{t('room_type')}</label>
                  <select
                    className="w-full bg-luxury-black/50 border border-luxury-gold/30 rounded-lg px-4 py-2 text-luxury-gold focus:outline-none focus:border-luxury-gold2 focus:ring-1 focus:ring-luxury-gold2"
                    value={roomType}
                    onChange={e => setRoomType(e.target.value)}
                  >
                    <option value="standard">{t('standard_room')}</option>
                    <option value="deluxe">{t('deluxe_room')}</option>
                    <option value="suite">{t('suite') || 'Suite'}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-luxury-gold mb-2 font-medium">{t('special_requests')}</label>
                <textarea
                  className="w-full bg-luxury-black/50 border border-luxury-gold/30 rounded-lg px-4 py-2 text-luxury-gold focus:outline-none focus:border-luxury-gold2 focus:ring-1 focus:ring-luxury-gold2 h-32"
                  placeholder={t('special_requests_placeholder') || ''}
                  value={specialRequests}
                  onChange={e => setSpecialRequests(e.target.value)}
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-luxury-gold mb-2 font-medium">{t('full_name')}</label>
                  <input
                    type="text"
                    className="w-full bg-luxury-black/50 border border-luxury-gold/30 rounded-lg px-4 py-2 text-luxury-gold focus:outline-none focus:border-luxury-gold2 focus:ring-1 focus:ring-luxury-gold2"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-luxury-gold mb-2 font-medium">{t('email')}</label>
                  <input
                    type="email"
                    className="w-full bg-luxury-black/50 border border-luxury-gold/30 rounded-lg px-4 py-2 text-luxury-gold focus:outline-none focus:border-luxury-gold2 focus:ring-1 focus:ring-luxury-gold2"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-luxury-gold mb-2 font-medium">{t('phone')}</label>
                  <input
                    type="tel"
                    className="w-full bg-luxury-black/50 border border-luxury-gold/30 rounded-lg px-4 py-2 text-luxury-gold focus:outline-none focus:border-luxury-gold2 focus:ring-1 focus:ring-luxury-gold2"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze text-luxury-black font-semibold py-3 rounded-lg hover:shadow-goldGlow transition-all duration-300"
              >
                {t('confirm_booking')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

import React, { useContext } from "react";
import { Clock, Info, Baby, Ban, Cigarette, PartyPopper, HelpCircle, Diamond } from "lucide-react";
import { LanguageContext } from "../components/Navbar";
import { el } from "../translations/el";
import { en } from "../translations/en";
import { sq } from "../translations/sq";

// Vibrant χρώματα για κάθε icon
const iconColors = {
  Clock: "text-sky-400",
  Info: "text-cyan-400",
  Baby: "text-pink-400",
  Ban: "text-red-500",
  Cigarette: "text-orange-400",
  PartyPopper: "text-violet-500",
  HelpCircle: "text-emerald-400"
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center mb-12 relative justify-center">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent"></div>
    <div className="mr-4 text-luxury-gold drop-shadow-goldGlow">{icon}</div>
    <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent tracking-tight drop-shadow-goldGlow">
      {title}
    </h2>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-[2px] bg-gradient-to-l from-transparent via-luxury-gold/40 to-transparent"></div>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative bg-luxury-black/80 border border-luxury-gold/30 p-8 rounded-2xl shadow-xl group hover:scale-105 hover:shadow-goldGlow transition-all duration-300 ${className}`} style={{ boxShadow: '0 8px 32px 0 rgba(224, 203, 168, 0.10)' }}>
    <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
    {children}
  </div>
);

const PolicyItem = ({ icon, iconName, title, content }: { icon: React.ReactNode; iconName: keyof typeof iconColors; title: string; content: React.ReactNode }) => (
  <div className="mb-8 group">
    <h3 className="font-semibold mb-3 flex items-center text-luxury-gold group-hover:text-luxury-gold/80 transition-colors duration-300">
      <span className={`mr-3 transform group-hover:scale-110 transition-transform duration-300 ${iconColors[iconName]}`}>{icon}</span>
      {title}
    </h3>
    <div className="text-white leading-relaxed pl-8 border-l-2 border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-colors duration-300">
      {content}
    </div>
  </div>
);

const FAQItem = ({ question, answer, iconName }: { question: string; answer: React.ReactNode; iconName?: keyof typeof iconColors }) => (
  <div className="mb-8 group">
    <h3 className={`font-semibold mb-3 text-luxury-gold group-hover:text-luxury-gold/80 transition-colors duration-300 flex items-center`}>{iconName && <HelpCircle className={`mr-2 ${iconColors[iconName]}`} size={22} />}{question}</h3>
    <div className="text-white leading-relaxed pl-4 border-l-2 border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-colors duration-300">
      {answer}
    </div>
  </div>
);

const LuxuryList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 ml-6">
    {items.map((item, i) => (
      <li key={i} className="flex items-center text-luxury-gold">
        <span className="w-2 h-2 rounded-full bg-luxury-gold mr-3"></span>
        <span className="text-white">{item}</span>
      </li>
    ))}
  </ul>
);

const PropertyPolicies = () => {
  const { language } = useContext(LanguageContext);
  const t = language === "el" ? el : language === "sq" ? sq : en;

  return (
    <section className="py-20 px-2 md:px-0 bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle icon={<Diamond className="h-12 w-12" />} title={t.property_policies_title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Πολιτικές Καταλύματος */}
          <Card>
            <PolicyItem icon={<Clock />} iconName="Clock" title={t.checkin} content={t.checkin_time} />
            <PolicyItem icon={<Clock />} iconName="Clock" title={t.checkout} content={t.checkout_time} />
            <PolicyItem icon={<Info />} iconName="Info" title={t.cancellation_policy} content={t.cancellation_policy} />
            <PolicyItem icon={<Baby />} iconName="Baby" title={t.children_beds} content={<><div>{t.children_welcome}</div><div>{t.children_note}</div><div className="text-xs italic text-luxury-gold/80">{t.no_baby_cots}</div></>} />
            <PolicyItem icon={<Ban />} iconName="Ban" title={t.age_restriction} content={t.age_restriction_note} />
            <PolicyItem icon={<Ban />} iconName="Ban" title={t.pets} content={t.pets_note} />
            <PolicyItem icon={<Cigarette />} iconName="Cigarette" title={t.smoking_policy} content={t.smoking_note} />
            <PolicyItem icon={<PartyPopper />} iconName="PartyPopper" title={t.parties} content={t.parties_note} />
            <PolicyItem icon={<Info />} iconName="Info" title={t.important_notes} content={t.no_bachelor_parties} />
          </Card>
          {/* Συχνές Ερωτήσεις */}
          <Card>
            <h3 className="font-semibold mb-8 flex items-center text-luxury-gold">
              <HelpCircle className="mr-3 text-emerald-400" size={28} />
              {t.faq_title}
            </h3>
            <FAQItem question={t.breakfast_question} answer={<><div>{t.breakfast_answer}</div><LuxuryList items={t.breakfast_types} /></>} iconName="HelpCircle" />
            <FAQItem question={t.room_types_question} answer={<><div>{t.room_types_answer}</div><LuxuryList items={t.room_types} /></>} iconName="HelpCircle" />
            <FAQItem question={t.check_times_question} answer={t.check_times_answer} iconName="HelpCircle" />
            <FAQItem question={t.pricing_question} answer={t.pricing_answer} iconName="HelpCircle" />
            <FAQItem question={t.distance_question} answer={t.distance_answer} iconName="HelpCircle" />
            <div className="mt-12 pt-8 border-t border-luxury-gold/30">
              <h4 className="font-semibold mb-6 text-luxury-gold text-xl">{t.location_highlights.split('\n')[0]}</h4>
              <p className="text-white mb-8 leading-relaxed">{t.location_highlights.split('\n')[1]}</p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-luxury-gold flex items-center"><span className="mr-2">🏛</span>{language === "el" ? "Κοντινά Αξιοθέατα" : "Nearby Attractions"}</h4>
                  <LuxuryList items={t.nearby_attractions} />
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-luxury-gold flex items-center"><span className="mr-2">🍽</span>{language === "el" ? "Κοντινά Εστιατόρια & Καφέ" : "Nearby Restaurants & Cafés"}</h4>
                  <LuxuryList items={t.nearby_restaurants} />
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-luxury-gold flex items-center"><span className="mr-2">🏖</span>{language === "el" ? "Κοντινές Παραλίες" : "Nearby Beaches"}</h4>
                  <LuxuryList items={t.nearby_beaches} />
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-luxury-gold flex items-center"><span className="mr-2">✈</span>{language === "el" ? "Πλησιέστερα Αεροδρόμια" : "Closest Airports"}</h4>
                  <LuxuryList items={t.closest_airports} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PropertyPolicies; 
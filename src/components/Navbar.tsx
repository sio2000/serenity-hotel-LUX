import React, { useState, useContext } from "react";
import { cn } from "@/lib/utils";
import { Globe, Crown, Menu, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";

// Προσθέτουμε ένα context για την αλλαγή γλώσσας
export const LanguageContext = React.createContext({
  language: 'en',
  setLanguage: (lang: string) => {}
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, language, } = useTranslation();
  const { setLanguage } = useContext(LanguageContext);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
    localStorage.setItem('preferredLanguage', lang); // Save preference
  };

  const navLinks = [
    { name: t('home'), href: "#home" },
    { name: t('rooms'), href: "#rooms" },
    { name: t('amenities'), href: "#amenities" },
    { name: t('gallery'), href: "#gallery" },
    { name: t('location'), href: "#location" },
    { name: t('contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-black shadow-luxury py-2 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center group min-w-0">
          <img src="/images/logo.png" alt="Villa Serenity Logo" className="h-11 w-auto mr-3 drop-shadow-goldGlow transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold font-playfair text-luxury-gold tracking-wide drop-shadow-gold-glow whitespace-nowrap">
            Villa Serenity
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-7 px-1 min-w-0 overflow-x-auto">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-montserrat uppercase tracking-wider text-base text-luxury-gold transition-all duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-luxury-gold2 after:to-luxury-gold after:rounded-full hover:after:w-full hover:after:h-0.5 hover:after:transition-all hover:after:duration-300 hover:text-luxury-gold2 px-1 whitespace-nowrap"
              style={{ paddingBottom: 2 }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-3">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center text-luxury-gold hover:text-luxury-gold2 font-montserrat"
            >
              <Globe className="h-5 w-5 mr-1 text-luxury-gold" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-md shadow-gold bg-luxury-black ring-1 ring-luxury-gold/30 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`${language === 'en' ? 'bg-luxury-gold/10 text-luxury-gold2' : 'text-luxury-gold'} block w-full text-left px-4 py-2 text-sm hover:bg-luxury-gold/10`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('sq')}
                    className={`${language === 'sq' ? 'bg-luxury-gold/10 text-luxury-gold2' : 'text-luxury-gold'} block w-full text-left px-4 py-2 text-sm hover:bg-luxury-gold/10`}
                  >
                    Albanian
                  </button>
                  <button
                    onClick={() => changeLanguage('el')}
                    className={`${language === 'el' ? 'bg-luxury-gold/10 text-luxury-gold2' : 'text-luxury-gold'} block w-full text-left px-4 py-2 text-sm hover:bg-luxury-gold/10`}
                  >
                    Greek
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Book Now Button */}
          <a
            href="#booking"
            className="rounded-full px-6 py-2 font-montserrat font-semibold border-2 border-luxury-gold text-luxury-gold bg-transparent hover:bg-luxury-gold hover:text-luxury-black shadow-goldGlow transition-all duration-300 text-lg tracking-wide backdrop-blur-md"
          >
            {t('book_now')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-luxury-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={32} className="text-luxury-gold" />
          ) : (
            <Menu size={32} className="text-luxury-gold" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-luxury-black shadow-goldGlow animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block py-3 text-lg text-luxury-gold font-montserrat uppercase tracking-wider hover:text-luxury-gold2 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Language Selector */}
            <div className="py-2 mt-2 border-t border-luxury-gold/20">
              <p className="text-sm text-luxury-gold mb-2">Language:</p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-full border-2 font-montserrat text-sm ${language === 'en' ? 'bg-luxury-gold text-luxury-black border-luxury-gold2' : 'bg-luxury-black text-luxury-gold border-luxury-gold'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => changeLanguage('sq')}
                  className={`px-3 py-1 rounded-full border-2 font-montserrat text-sm ${language === 'sq' ? 'bg-luxury-gold text-luxury-black border-luxury-gold2' : 'bg-luxury-black text-luxury-gold border-luxury-gold'}`}
                >
                  Albanian
                </button>
                <button 
                  onClick={() => changeLanguage('el')}
                  className={`px-3 py-1 rounded-full border-2 font-montserrat text-sm ${language === 'el' ? 'bg-luxury-gold text-luxury-black border-luxury-gold2' : 'bg-luxury-black text-luxury-gold border-luxury-gold'}`}
                >
                  Greek
                </button>
              </div>
            </div>
            <a
              href="#booking"
              className="block py-3 mt-4 border-2 border-luxury-gold text-luxury-gold text-center rounded-full font-montserrat font-semibold text-lg hover:bg-luxury-gold hover:text-luxury-black shadow-goldGlow transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('book_now')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

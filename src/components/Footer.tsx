import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock as FaClockIcon } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const handlePhoneClick = () => {
    window.location.href = "tel:+355684725190";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:VillaSerenity2024@hotmail.com";
  };

  return (
    <footer id="contact" className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-white">
            {t("contact_title")}
          </h2>
          <div className="w-24 h-1 bg-serenity-darkblue mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-400">
            {t("contact_description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Villa Serenity</h3>
            <p className="mb-6 max-w-md">
              {t("about_description1")}
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#1877F3] hover:scale-110 transition-transform">
                <FaFacebook className="h-8 w-8 drop-shadow" />
              </a>
              <a href="https://www.instagram.com/villa.serenityy/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:scale-110 transition-transform">
                <FaInstagram className="h-8 w-8 drop-shadow" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4 border-b border-gray-700 pb-2">{t('quick_links')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-white hover:underline transition-colors flex items-center"><span className="w-1 h-1 bg-serenity-darkblue rounded-full inline-block mr-2"></span>{t("home")}</a></li>
              <li><a href="#rooms" className="hover:text-white hover:underline transition-colors flex items-center"><span className="w-1 h-1 bg-serenity-darkblue rounded-full inline-block mr-2"></span>{t("rooms")}</a></li>
              <li><a href="#amenities" className="hover:text-white hover:underline transition-colors flex items-center"><span className="w-1 h-1 bg-serenity-darkblue rounded-full inline-block mr-2"></span>{t("amenities")}</a></li>
              <li><a href="#gallery" className="hover:text-white hover:underline transition-colors flex items-center"><span className="w-1 h-1 bg-serenity-darkblue rounded-full inline-block mr-2"></span>{t("gallery")}</a></li>
              <li><a href="#location" className="hover:text-white hover:underline transition-colors flex items-center"><span className="w-1 h-1 bg-serenity-darkblue rounded-full inline-block mr-2"></span>{t("location")}</a></li>
              <li><a href="#booking" className="hover:text-white hover:underline transition-colors flex items-center"><span className="w-1 h-1 bg-serenity-darkblue rounded-full inline-block mr-2"></span>{t("book_now")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4 border-b border-gray-700 pb-2">{t("contact_info")}</h4>
            <div className="space-y-4">
              <div 
                onClick={handlePhoneClick}
                className="flex items-start bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer group"
              >
                <FaPhone className="h-5 w-5 mr-3 mt-1 text-serenity-darkblue group-hover:text-white transition-colors" />
                <div>
                  <span className="block text-white font-medium">{t('phone')}</span>
                  <span className="group-hover:text-white transition-colors">+355 684725190</span>
                </div>
              </div>
              <div 
                onClick={handleEmailClick}
                className="flex items-start bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer group"
              >
                <FaEnvelope className="h-5 w-5 mr-3 mt-1 text-serenity-darkblue group-hover:text-white transition-colors" />
                <div>
                  <span className="block text-white font-medium">{t('email')}</span>
                  <span className="group-hover:text-white transition-colors">VillaSerenity2024@hotmail.com</span>
                </div>
              </div>
              <div className="flex items-start bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors group">
                <FaMapMarkerAlt className="h-5 w-5 mr-3 mt-1 text-serenity-darkblue group-hover:text-white transition-colors" />
                <div>
                  <span className="block text-white font-medium">{t('address')}</span>
                  <span className="group-hover:text-white transition-colors">{t("villa_full_address")}</span>
                </div>
              </div>
              <div className="flex items-start bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors group">
                <FaClockIcon className="h-5 w-5 mr-3 mt-1 text-serenity-darkblue group-hover:text-white transition-colors" />
                <div>
                  <span className="block text-white font-medium">{t('business_hours')}</span>
                  <span className="group-hover:text-white transition-colors">{t('open_hours')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

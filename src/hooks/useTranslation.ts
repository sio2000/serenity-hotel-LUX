import { useContext } from 'react';
import { LanguageContext } from '../components/Navbar';
import translations from '../translations';

// Hook to use translations throughout the app
export function useTranslation() {
  const { language } = useContext(LanguageContext);
  
  // Function to get the translation for a specific key
  const t = (key: string) => {
    const translation = translations[key]?.[language];
    if (!translation) {
      return translations[key]?.en || key;
    }
    return translation;
  };
  
  return { t, language };
} 
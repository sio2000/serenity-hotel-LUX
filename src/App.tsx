import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Reviews from "./pages/Reviews";
import GoogleReviews from "./pages/GoogleReviews";
import CompleteGallery from "./pages/CompleteGallery";
import { LanguageContext } from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState(() => localStorage.getItem('preferredLanguage') || 'en');
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/google-reviews" element={<GoogleReviews />} />
              <Route path="/completegallery" element={<CompleteGallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

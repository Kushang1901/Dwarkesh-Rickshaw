"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import LogoSpinner from "@/components/LogoSpinner";

export const AVAILABLE_LANGUAGES = [
  { code: "en", name: "English", nativeName: "English", flag: "EN" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "GU" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "HI" },
];

const TRANSLATION_MESSAGES = {
  en: {
    title: "Dwarkesh Riksha & Tour Service",
    subtitle: "Switching to English (Default)",
  },
  gu: {
    title: "દ્વારકેશ રીક્ષા અને ટૂર સર્વિસ",
    subtitle: "ગુજરાતીમાં અનુવાદ થઈ રહ્યું છે...",
  },
  hi: {
    title: "द्वारकेश रिक्शा एवं टूर सर्विस",
    subtitle: "हिन्दी में अनुवाद हो रहा है...",
  },
};

const LanguageContext = createContext({
  currentLanguage: "en",
  changeLanguage: () => {},
  isTranslating: false,
  availableLanguages: AVAILABLE_LANGUAGES,
});

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isTranslating, setIsTranslating] = useState(false);
  const [targetLang, setTargetLang] = useState("en");

  // Read saved language from localStorage & googtrans cookie on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dwarkesh_user_lang");
      if (saved && ["en", "gu", "hi"].includes(saved)) {
        setCurrentLanguage(saved);
        setTargetLang(saved);
      } else {
        const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
        if (match && match[1]) {
          const parts = decodeURIComponent(match[1]).split("/");
          const code = parts[parts.length - 1];
          if (["en", "gu", "hi"].includes(code)) {
            setCurrentLanguage(code);
            setTargetLang(code);
          }
        }
      }
    } catch (e) {
      // ignore in strict private modes
    }
  }, []);

  // Initialize Google Translate Script
  useEffect(() => {
    // 1. Define global init callback
    window.googleTranslateElementInit = function () {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,gu,hi",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // 2. Inject Google Translate script if not present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const changeLanguage = (langCode) => {
    if (langCode === currentLanguage) return;

    setIsTranslating(true);
    setTargetLang(langCode);

    try {
      localStorage.setItem("dwarkesh_user_lang", langCode);
    } catch (e) {}

    // Configure Google Translate cookies
    const host = window.location.hostname;
    const cookieVal = `/en/${langCode}`;

    if (langCode === "en") {
      // Clear cookie for English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
      document.cookie = `googtrans=/en/en; path=/;`;
    } else {
      document.cookie = `googtrans=${cookieVal}; path=/;`;
      if (host) {
        document.cookie = `googtrans=${cookieVal}; path=/; domain=${host};`;
        document.cookie = `googtrans=${cookieVal}; path=/; domain=.${host};`;
      }
    }

    setCurrentLanguage(langCode);

    // Try in-place combo update first
    setTimeout(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event("change"));
      }

      // To guarantee 100% clean, fluent translation across all pages,
      // refresh with the active cookie so Google translates every DOM node without caching issues
      setTimeout(() => {
        window.location.reload();
      }, 550);
    }, 400);
  };

  const currentMsg = TRANSLATION_MESSAGES[targetLang] || TRANSLATION_MESSAGES.en;

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        isTranslating,
        availableLanguages: AVAILABLE_LANGUAGES,
      }}
    >
      {/* Hidden mount point for Google Translate widget */}
      <div
        id="google_translate_element"
        style={{
          position: "fixed",
          top: -9999,
          left: -9999,
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
        }}
      />

      {/* Dynamic Translation Loader with Logo & Rotating Circles */}
      {isTranslating && (
        <div
          id="translation-overlay-loader"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999999,
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.25s ease-out forwards",
          }}
        >
          {/* Subtle radial aura */}
          <div
            style={{
              position: "absolute",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(254, 243, 199, 0.6) 0%, rgba(255, 255, 255, 0) 70%)",
              pointerEvents: "none",
            }}
          />

          <LogoSpinner
            size={130}
            showText={true}
            title={currentMsg.title}
            subtitle={currentMsg.subtitle}
          />
        </div>
      )}

      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

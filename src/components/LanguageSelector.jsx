"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, AVAILABLE_LANGUAGES } from "@/context/LanguageContext";
import { Globe, Check, ChevronDown } from "lucide-react";

export default function LanguageSelector({ variant = "navbar", onSelect }) {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    changeLanguage(code);
    setDropdownOpen(false);
    if (onSelect) onSelect();
  };

  const activeLangObj =
    AVAILABLE_LANGUAGES.find((l) => l.code === currentLanguage) ||
    AVAILABLE_LANGUAGES[0];

  // 1. Top Bar Variant: Sleek segmented pills
  if (variant === "topbar") {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          backgroundColor: "#f1f5f9",
          padding: "2px 4px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 4px",
            color: "#64748b",
          }}
        >
          <Globe size={11} color="#d97706" />
        </span>
        {AVAILABLE_LANGUAGES.map((lang) => {
          const isActive = currentLanguage === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              title={`Switch to ${lang.name}`}
              style={{
                padding: "2px 8px",
                fontSize: "0.72rem",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#b45309" : "#475569",
                backgroundColor: isActive ? "#ffffff" : "transparent",
                borderRadius: "5px",
                boxShadow: isActive ? "0 1px 2px rgba(0, 0, 0, 0.06)" : "none",
                transition: "all 0.15s ease",
                cursor: "pointer",
                border: "none",
                lineHeight: 1.4,
              }}
            >
              {lang.nativeName}
            </button>
          );
        })}
      </div>
    );
  }

  // 2. Mobile Drawer Variant: Full-width list card
  if (variant === "mobile") {
    return (
      <div
        className="notranslate"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "14px",
          border: "1px solid #f1f5f9",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            marginBottom: "10px",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#64748b",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          <Globe size={14} color="#d97706" />
          <span>Select Language / ભાષા પસંદ કરો</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "6px",
          }}
        >
          {AVAILABLE_LANGUAGES.map((lang) => {
            const isActive = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className="notranslate"
                style={{
                  padding: "10px 6px",
                  borderRadius: "10px",
                  border: isActive ? "1.5px solid #d97706" : "1px solid #e2e8f0",
                  backgroundColor: isActive ? "#fffbeb" : "#f8fafc",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <span
                  className="notranslate"
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? "#b45309" : "#1e293b",
                  }}
                >
                  {lang.nativeName}
                </span>
                <span
                  className="notranslate"
                  style={{
                    fontSize: "0.6875rem",
                    color: isActive ? "#d97706" : "#64748b",
                    fontWeight: 500,
                  }}
                >
                  {lang.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. Navbar Dropdown Variant (Default): Compact & Modern
  return (
    <div ref={dropdownRef} className="notranslate" style={{ position: "relative" }}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="notranslate"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          borderRadius: "10px",
          border: "1px solid #e2e8f0",
          backgroundColor: dropdownOpen ? "#fffbeb" : "#ffffff",
          color: "#0f172a",
          fontSize: "0.875rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.15s ease",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
        }}
        aria-label="Change Language"
      >
        <Globe size={15} color="#d97706" />
        <span className="notranslate">{activeLangObj.nativeName}</span>
        <ChevronDown
          size={14}
          color="#64748b"
          style={{
            transform: dropdownOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.2s ease",
          }}
        />
      </button>

      {dropdownOpen && (
        <div
          className="notranslate"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            width: "180px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            padding: "6px",
            zIndex: 100,
            animation: "fadeIn 0.15s ease-out forwards",
          }}
        >
          <div
            className="notranslate"
            style={{
              padding: "6px 8px",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              borderBottom: "1px solid #f1f5f9",
              marginBottom: "4px",
            }}
          >
            Select Language
          </div>
          {AVAILABLE_LANGUAGES.map((lang) => {
            const isActive = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className="notranslate"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  borderRadius: "8px",
                  backgroundColor: isActive ? "#fffbeb" : "transparent",
                  color: isActive ? "#b45309" : "#1e293b",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: isActive ? 700 : 500 }}>
                    {lang.nativeName}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b" }}>
                    {lang.name}
                  </div>
                </div>
                {isActive && <Check size={14} color="#d97706" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

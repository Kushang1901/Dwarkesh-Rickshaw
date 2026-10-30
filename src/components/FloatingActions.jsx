"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUp, MessageCircle, Phone, X, Sparkles, Check, Send, Car, Calendar } from "lucide-react";
import { OWNER_INFO, DWARKA_DARSHAN } from "@/data/toursData";
import { buildQuickWhatsAppUrl } from "@/utils/whatsapp";
import { useBooking } from "@/context/BookingContext";

export default function FloatingActions() {
  const { openBooking } = useBooking();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const chatRef = useRef(null);

  // Monitor scroll for Back-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close chat popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };

    if (isChatOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsChatOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Hide hint tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleQuickQuestion = (topic) => {
    const url = buildQuickWhatsAppUrl(topic);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsChatOpen(false);
  };

  return (
    <>
      {/* =========================================================
          1. BACK TO TOP BUTTON (BOTTOM-LEFT)
          ========================================================= */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll back to top"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          zIndex: 49,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          color: "#0f172a",
          border: "1px solid #e2e8f0",
          boxShadow: "0 6px 20px rgba(15, 23, 42, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? "visible" : "hidden",
          transform: showBackToTop ? "scale(1) translateY(0)" : "scale(0.85) translateY(12px)",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="back-to-top-btn"
      >
        <ArrowUp size={20} strokeWidth={2.4} color="#d97706" />
      </button>

      {/* =========================================================
          2. CHATBOT / QUICK CONNECT POPUP (BOTTOM-RIGHT)
          ========================================================= */}
      <div
        ref={chatRef}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {/* Floating Hint Pill (Appears automatically to invite devottes) */}
        {!isChatOpen && showTooltip && (
          <div
            onClick={() => {
              setIsChatOpen(true);
              setShowTooltip(false);
            }}
            style={{
              marginBottom: "12px",
              backgroundColor: "#ffffff",
              color: "#0f172a",
              padding: "8px 14px",
              borderRadius: "20px",
              boxShadow: "0 6px 18px rgba(15, 23, 42, 0.12)",
              border: "1px solid #fef3c7",
              fontSize: "0.8125rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              animation: "fadeIn 0.3s ease-out forwards",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                display: "inline-block",
              }}
            />
            <span>Tour Help &amp; Inquiries 🙏</span>
            <X
              size={14}
              color="#94a3b8"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              style={{ marginLeft: "4px" }}
            />
          </div>
        )}

        {/* The Chat Dialog Popup */}
        {isChatOpen && (
          <div
            style={{
              width: "min(350px, calc(100vw - 32px))",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.22)",
              border: "1px solid #e2e8f0",
              overflow: "hidden",
              marginBottom: "14px",
              animation: "chatPopupIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              transformOrigin: "bottom right",
            }}
          >
            {/* Header: Driver Info & Online Status */}
            <div
              style={{
                backgroundColor: "#0c4a6e",
                backgroundImage: "linear-gradient(135deg, #075985 0%, #0c4a6e 100%)",
                padding: "16px 18px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#fffbeb",
                      color: "#b45309",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      border: "2px solid #ffffff",
                    }}
                  >
                    🛺
                  </div>
                  {/* Green Online Dot */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "1px",
                      right: "1px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#22c55e",
                      border: "2px solid #ffffff",
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span>Dwarkesh Riksha Desk</span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#bae6fd", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                    <span>Official Service • Active Now</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsChatOpen(false)}
                aria-label="Close assistant"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div style={{ padding: "18px 16px", backgroundColor: "#f8fafc" }}>
              {/* Message from Ashokbhai */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px 14px 14px 4px",
                  padding: "14px 16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                  marginBottom: "16px",
                }}
              >
                <p style={{ fontSize: "0.875rem", color: "#0f172a", lineHeight: 1.5, margin: 0 }}>
                  <strong>Jai Dwarkadhish! 🙏</strong>
                </p>
                <p style={{ fontSize: "0.85rem", color: "#334155", lineHeight: 1.55, marginTop: "6px", marginBottom: "8px" }}>
                  We provide <strong>Auto Riksha &amp; 4-Wheeler Car</strong> service for Dwarka (8 spots) &amp; Somnath tours. How would you like to connect?
                </p>
                <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                  📍 Pickup: Teen Batti Chowk, Railway Stn or Hotel
                </div>
              </div>

              {/* THE TWO MAIN ACTION BUTTONS: WHATSAPP & CALLING */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                {/* 1. WHATSAPP BUTTON */}
                <a
                  href={buildQuickWhatsAppUrl("Dwarka Darshan Tour")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{
                    padding: "12px 16px",
                    borderRadius: "12px",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
                  }}
                >
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* 2. CALLING BUTTON */}
                <a
                  href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
                  className="btn-call"
                  style={{
                    padding: "12px 16px",
                    borderRadius: "12px",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.28)",
                  }}
                >
                  <Phone size={18} />
                  <span>Direct Call: {OWNER_INFO.phoneFormatted}</span>
                </a>
              </div>

              {/* Quick Topic Chips */}
              <div style={{ borderTop: "1px dashed #cbd5e1", paddingTop: "12px", marginBottom: "12px" }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginBottom: "8px",
                  }}
                >
                  Quick Inquiries via WhatsApp:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <button
                    onClick={() => handleQuickQuestion("Dwarka Darshan 8 Places Fare & Timing")}
                    style={{
                      fontSize: "0.75rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid #cbd5e1",
                      padding: "5px 10px",
                      borderRadius: "16px",
                      color: "#334155",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#fffbeb";
                      e.currentTarget.style.borderColor = "#f59e0b";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#cbd5e1";
                    }}
                  >
                    🛺 Dwarka 8 Places
                  </button>

                  <button
                    onClick={() => handleQuickQuestion("Somnath Darshan Full Day Tour")}
                    style={{
                      fontSize: "0.75rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid #cbd5e1",
                      padding: "5px 10px",
                      borderRadius: "16px",
                      color: "#334155",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#fffbeb";
                      e.currentTarget.style.borderColor = "#f59e0b";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#cbd5e1";
                    }}
                  >
                    🌅 Somnath Coastal Tour
                  </button>

                  <button
                    onClick={() => handleQuickQuestion("4-Wheeler Car / Taxi Option")}
                    style={{
                      fontSize: "0.75rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid #cbd5e1",
                      padding: "5px 10px",
                      borderRadius: "16px",
                      color: "#334155",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#fffbeb";
                      e.currentTarget.style.borderColor = "#f59e0b";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#cbd5e1";
                    }}
                  >
                    🚗 4-Wheeler Car Option
                  </button>
                </div>
              </div>

              {/* Secondary booking modal opener */}
              <button
                onClick={() => {
                  setIsChatOpen(false);
                  openBooking("Dwarka Darshan");
                }}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#b45309",
                  backgroundColor: "#fffbeb",
                  border: "1px solid #fde68a",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <Calendar size={14} />
                <span>Open Date &amp; Shift Booking Form</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Chatbot Launcher Button (Toggle) */}
        <button
          onClick={() => {
            setIsChatOpen((prev) => !prev);
            setShowTooltip(false);
          }}
          aria-label={isChatOpen ? "Close assistant" : "Chat with driver"}
          title={isChatOpen ? "Close chat" : "Chat / Call with Driver"}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: isChatOpen ? "#0f172a" : "#25d366",
            backgroundImage: isChatOpen
              ? "none"
              : "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
            color: "#ffffff",
            border: "none",
            boxShadow: isChatOpen
              ? "0 8px 24px rgba(15, 23, 42, 0.3)"
              : "0 8px 24px rgba(37, 211, 102, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="chat-launcher-btn"
        >
          {isChatOpen ? (
            <X size={24} strokeWidth={2.4} />
          ) : (
            <>
              <MessageCircle size={26} strokeWidth={2.2} />
              {/* Online Pulse Indicator */}
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  border: "2px solid #ffffff",
                }}
              />
            </>
          )}
        </button>
      </div>

      <style jsx>{`
        .back-to-top-btn:hover {
          background-color: #fffbeb !important;
          border-color: #fde68a !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 24px rgba(217, 119, 6, 0.2) !important;
        }

        .chat-launcher-btn:hover {
          transform: scale(1.08) translateY(-2px);
        }

        @keyframes chatPopupIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 640px) {
          .back-to-top-btn {
            bottom: 20px !important;
            left: 16px !important;
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </>
  );
}

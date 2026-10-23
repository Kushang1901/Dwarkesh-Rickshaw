"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OWNER_INFO } from "@/data/toursData";
import { useBooking } from "@/context/BookingContext";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Home,
  Compass,
  Navigation,
  Sparkles,
  Car,
} from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";

export default function Navbar() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dwarka-darshan", label: "Dwarka Darshan", icon: Compass },
    { href: "/somnath-darshan", label: "Somnath Darshan", icon: Navigation },
    { href: "/contact", label: "Contact Us", icon: MapPin },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e2e8f0",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* Top micro bar - Visible on Desktop, hidden on Mobile as per request */}
      <div
        className="top-desktop-bar"
        style={{
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid #f1f5f9",
          padding: "5px 0",
          fontSize: "0.75rem",
          color: "#475569",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <MapPin size={12} color="#d97706" />
            <span>Location: <strong>{OWNER_INFO.location}</strong></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: "5px" }}>
              <Car size={13} color="#16a34a" />
              <span>Riksha &amp; 4-Wheeler Car (as per persons)</span>
            </span>
            <span style={{ color: "#cbd5e1" }}>•</span>
            <a
              href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
              style={{ color: "#2563eb", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}
            >
              <Phone size={11} /> {OWNER_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            minWidth: 0,
            flex: "1 1 auto",
            marginRight: "12px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1.5px solid #fde68a",
              boxShadow: "0 2px 6px rgba(217, 119, 6, 0.15)",
              flexShrink: 0,
              backgroundColor: "#fffbeb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/logo.jpg"
              alt="Dwarkesh Riksha & Tour Service Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          <div style={{ minWidth: 0, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "nowrap" }}>
              <span
                style={{
                  fontSize: "clamp(0.95rem, 3.8vw, 1.2rem)",
                  fontWeight: 900,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {OWNER_INFO.businessName}
              </span>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  backgroundColor: "#fef3c7",
                  color: "#b45309",
                  padding: "2px 7px",
                  borderRadius: "5px",
                  flexShrink: 0,
                }}
              >
                द्वारका
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links - Aligned to the Right */}
        <nav className="desktop-nav" style={{ alignItems: "center", gap: "32px", marginLeft: "auto" }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? "#d97706" : "#334155",
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <LanguageSelector variant="navbar" />
        </nav>

        {/* Mobile Hamburger Button in Top Right */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger-btn"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
            backgroundColor: mobileMenuOpen ? "#f8fafc" : "#ffffff",
            color: "#0f172a",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            flexShrink: 0,
            marginLeft: "auto",
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? <X size={22} color="#0f172a" /> : <Menu size={22} color="#0f172a" />}
        </button>
      </div>

      {/* Mobile Right-Side Slide-Over Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(15, 23, 42, 0.45)",
              backdropFilter: "blur(3px)",
              zIndex: 998,
              transition: "opacity 0.25s ease",
            }}
          />

          {/* Right-Side Drawer Panel */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "82%",
              maxWidth: "360px",
              height: "100vh",
              backgroundColor: "#ffffff",
              boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.16)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              animation: "slideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            {/* Drawer Header with Brand & Close Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 20px",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/logo.jpg"
                  alt="Dwarkesh Logo"
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    border: "1.5px solid #fde68a",
                    objectFit: "cover",
                    display: "block",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0f172a" }}>
                  {OWNER_INFO.businessName}
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    backgroundColor: "#fef3c7",
                    color: "#b45309",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  द्वारका
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#f1f5f9",
                  color: "#475569",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div
              style={{
                padding: "20px",
                overflowY: "auto",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* 1. All Navigation Pages First */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                    paddingLeft: "4px",
                  }}
                >
                  Navigation Menu
                </div>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "13px 14px",
                        borderRadius: "10px",
                        fontSize: "0.95rem",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#b45309" : "#1e293b",
                        backgroundColor: isActive ? "#fffbeb" : "transparent",
                        border: isActive ? "1px solid #fef3c7" : "1px solid transparent",
                        transition: "all 0.15s",
                      }}
                    >
                      <IconComponent size={18} color={isActive ? "#d97706" : "#64748b"} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* 2. Interactive Language Selection */}
              <div style={{ marginBottom: "20px" }}>
                <LanguageSelector variant="mobile" onSelect={() => setMobileMenuOpen(false)} />
              </div>

              {/* 3. Stand & Contact Information - Below Nav Pages and Above Buttons */}
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.8125rem", color: "#334155" }}>
                  <MapPin size={15} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>Stand: <strong>{OWNER_INFO.location}</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#334155" }}>
                  <Phone size={14} color="#2563eb" style={{ flexShrink: 0 }} />
                  <a
                    href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
                    style={{
                      fontWeight: 700,
                      color: "#2563eb",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {OWNER_INFO.phoneFormatted}
                  </a>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#16a34a", fontWeight: 600, borderTop: "1px dashed #e2e8f0", paddingTop: "8px", marginTop: "2px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Car size={14} color="#16a34a" />
                  <span>Riksha &amp; 4-Wheeler as per number of persons</span>
                </div>
              </div>

              {/* 3. Booking & Call Action Buttons at the Bottom */}
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px", paddingTop: "12px" }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking("Dwarka Darshan");
                  }}
                  className="btn-whatsapp"
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "0.95rem",
                    borderRadius: "10px",
                    justifyContent: "center",
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Book on WhatsApp (Pop-up)</span>
                </button>

                <a
                  href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
                  className="btn-call"
                  style={{
                    width: "100%",
                    padding: "13px",
                    fontSize: "0.95rem",
                    borderRadius: "10px",
                    justifyContent: "center",
                  }}
                >
                  <Phone size={17} />
                  <span>Call Directly ({OWNER_INFO.phone})</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Responsive Styles & Animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        /* Desktop: show nav links & action buttons, hide hamburger */
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
          .top-desktop-bar {
            display: block !important;
          }
        }

        /* Mobile View (Below 860px): ONLY show brand on left and hamburger button on right */
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-actions {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
          .top-desktop-bar {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

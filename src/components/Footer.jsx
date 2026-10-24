"use client";

import React from "react";
import Link from "next/link";
import { OWNER_INFO, DWARKA_DARSHAN, SOMNATH_DARSHAN } from "@/data/toursData";
import { Phone, MessageCircle, MapPin, Clock, Search, ShieldCheck, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e2e8f0",
        marginTop: "auto",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "36px",
            marginBottom: "40px",
          }}
        >
          {/* Col 1: Business Profile */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #fde68a",
                  boxShadow: "0 2px 8px rgba(217, 119, 6, 0.15)",
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
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                  {OWNER_INFO.businessName}
                </h3>

              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6, marginBottom: "16px" }}>
              Trusted pilgrimage & local sightseeing auto-rickshaw & car service in Devbhumi Dwarka. Dedicated to providing holy, comfortable, and punctually guided temple tours.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#fffbeb", padding: "6px 12px", borderRadius: "9999px", border: "1px solid #fde68a", fontSize: "0.8rem", color: "#b45309", fontWeight: 600 }}>
                <span>🌐 Official Website:</span>
                <span style={{ color: "#d97706" }}>www.dwarkadarshantour.com</span>
              </div>
              <a
                href={OWNER_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#fff7ed",
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  border: "1px solid #ffedd5",
                  fontSize: "0.8rem",
                  color: "#c2410c",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <span>⭐ Justdial: <strong>4.3 ★ Rating (17+ Reviews)</strong></span>
              </a>
            </div>
          </div>

          {/* Col 2: Tour Packages & Shifts */}
          <div>
            <h4
              style={{
                fontSize: "0.9375rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#0f172a",
                marginBottom: "16px",
              }}
            >
              Tour Packages & Timings
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ backgroundColor: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                <Link
                  href="/dwarka-darshan"
                  style={{ fontWeight: 700, color: "#d97706", fontSize: "0.9rem", display: "block", marginBottom: "4px" }}
                >
                  {DWARKA_DARSHAN.title} ({DWARKA_DARSHAN.titleHindi})
                </Link>
                <div style={{ fontSize: "0.78rem", color: "#475569", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Clock size={12} color="#64748b" />
                  <span>07:30 AM to 01:00 PM • 01:30 PM to 07:00 PM</span>
                </div>
              </div>

              <div style={{ backgroundColor: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                <Link
                  href="/somnath-darshan"
                  style={{ fontWeight: 700, color: "#0284c7", fontSize: "0.9rem", display: "block", marginBottom: "4px" }}
                >
                  {SOMNATH_DARSHAN.title} ({SOMNATH_DARSHAN.titleHindi})
                </Link>
                <div style={{ fontSize: "0.78rem", color: "#475569", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Clock size={12} color="#64748b" />
                  <span>07:30 AM • 09:30 AM • 03:30 PM Departures</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Stand & Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.9375rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#0f172a",
                marginBottom: "16px",
              }}
            >
              Riksha Stand & Contact
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "#475569" }}>
                <MapPin size={18} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Teen Batti Chowk</strong>, Dwarka, Gujarat - 361335
                  <br />
                  <span style={{ fontSize: "0.78rem", color: "#94a3b8" }}>(Near Dwarkadhish Temple Area)</span>
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem", color: "#475569" }}>
                <Phone size={18} color="#2563eb" style={{ flexShrink: 0 }} />
                <a href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`} style={{ fontWeight: 600, color: "#2563eb" }}>
                  {OWNER_INFO.phoneFormatted} (Call / WhatsApp)
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div
          style={{
            borderTop: "1px solid #f1f5f9",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.8125rem",
            color: "#64748b",
            gap: "12px",
          }}
        >
          <p>
            © 2026 {OWNER_INFO.businessName}. All rights reserved. Developed by{" "}
            <a
              href="https://kushangacharya.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0f172a",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Kushang Acharya
            </a>
            .
          </p>

        </div>
      </div>
    </footer>
  );
}

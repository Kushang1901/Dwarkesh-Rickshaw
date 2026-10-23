"use client";

import React from "react";
import { OWNER_INFO, SOMNATH_DARSHAN } from "@/data/toursData";
import { useBooking } from "@/context/BookingContext";
import PlaceCard from "@/components/PlaceCard";
import {
  Clock,
  MapPin,
  CheckCircle2,
  Compass,
  Sparkles,
  Navigation,
  Car,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function SomnathDarshanPage() {
  const { openBooking } = useBooking();

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* HEADER SECTION */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#f0f9ff",
          borderBottom: "1px solid #e0f2fe",
          padding: "68px 0 55px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Sketch Layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero-bg-3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 48%",
            backgroundRepeat: "no-repeat",
            opacity: 0.78,
            pointerEvents: "none",
          }}
        />

        {/* Soft Central Radial Halo for Contrast & Coastal Blue Tint */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 85% 80% at 50% 50%, rgba(240, 249, 255, 0.90) 0%, rgba(240, 249, 255, 0.65) 55%, rgba(240, 249, 255, 0.20) 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "#0369a1",
                backgroundColor: "#ffffff",
                padding: "6px 14px",
                borderRadius: "9999px",
                border: "1px solid #bae6fd",
                marginBottom: "16px",
              }}
            >
              <Navigation size={13} color="#0284c7" />
              <span>SAURASHTRA COASTAL PILGRIMAGE</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                color: "#0f172a",
                lineHeight: 1.2,
                marginBottom: "10px",
              }}
            >
              Somnath Darshan Tour Package
              <span style={{ display: "block", color: "#0284c7", fontSize: "1.7rem", fontWeight: 700, marginTop: "6px" }}>
                सोमनाथ दर्शन (द्वारका से सोमनाथ पवित्र यात्रा)
              </span>
            </h1>

            <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.65, maxWidth: "720px", margin: "0 auto 24px" }}>
              Journey from Dwarka along the coastal highway through Porbandar to the first Jyotirlinga of Lord Shiva at Prabhas Patan, Somnath. For visiting all places, <strong>comfortable 4-wheeler car service (Taxi / Cab) as well as auto-rickshaw are provided as per the respected number of persons</strong> in your family.
            </p>

            {/* Departure Slots Centered */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "16px 24px",
                borderRadius: "14px",
                border: "1px solid #bae6fd",
                display: "inline-flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "20px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", fontWeight: 700, color: "#0c4a6e" }}>
                <Clock size={16} color="#0284c7" />
                <span>Scheduled Departures:</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                {SOMNATH_DARSHAN.timings.map((time, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "5px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#f0f9ff",
                      color: "#0369a1",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      border: "1px solid #e0f2fe",
                    }}
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>

            {/* 4-Wheeler & Rickshaw Service Notice Banner */}
            <div
              style={{
                maxWidth: "680px",
                margin: "0 auto 24px",
                padding: "12px 18px",
                backgroundColor: "#f0f9ff",
                borderRadius: "12px",
                border: "1px solid #bae6fd",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textAlign: "left",
              }}
            >
              <Car size={22} color="#0369a1" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: "0.85rem", color: "#0369a1", lineHeight: 1.5 }}>
                <strong>Long-Distance Transit:</strong> For visiting Somnath and places along the route, <strong>4-wheeler car service (Taxi/Cab) is provided along with rickshaw</strong> as per the respected number of persons in your family.
              </div>
            </div>

            {/* Quick Hero Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", alignItems: "center" }}>
              <button
                onClick={() => openBooking("Somanath Darshan")}
                className="btn-whatsapp"
                style={{ padding: "14px 28px", fontSize: "0.95rem", borderRadius: "12px" }}
              >
                <MessageCircle size={18} />
                Book Somnath Darshan (Pop-up)
              </button>
              <a
                href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
                className="btn-outline"
                style={{ padding: "13px 22px", fontSize: "0.95rem", borderRadius: "12px", backgroundColor: "#ffffff" }}
              >
                <Phone size={16} color="#2563eb" />
                Call Directly {OWNER_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALL 6 SPOTS GRID */}
      <section style={{ padding: "64px 0", backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div style={{ marginBottom: "36px" }}>
            <span className="section-tag-navy">
              <CheckCircle2 size={13} color="#0284c7" /> ALL 6 PILGRIMAGE LANDMARKS
            </span>
            <h2 className="section-title">
              Route & Darshan Itinerary
            </h2>
            <p className="section-subtitle">
              From Goddess Harsiddhi&apos;s holy hill to the eternal Jyotirlinga at Somnath.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {SOMNATH_DARSHAN.places.map((place, idx) => (
              <PlaceCard
                key={place.id}
                place={place}
                index={idx}
                tourTitle={SOMNATH_DARSHAN.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ROUTE HIGHLIGHTS & TRAVEL INFORMATION */}
      <section style={{ padding: "72px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 44px" }}>
            <span className="section-tag-navy">
              <Compass size={13} /> COASTAL HIGHWAY HIGHLIGHTS
            </span>
            <h2 className="section-title">
              The Sacred Dwarka – Somnath Corridor
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Key stops and cultural experiences along the scenic Arabian Sea coastal pilgrimage route.
            </p>
          </div>

          {/* 4 Highlights Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            <div className="card-white" style={{ padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#fef2f2",
                    color: "#dc2626",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #fecaca",
                  }}
                >
                  1
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Maa Harsiddhi Mataji (Miyani)
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Overlooking the sea, this revered shrine was consecrated by King Vikramaditya. Devotees pause here for divine blessings on the coastal highway.
              </p>
            </div>

            <div className="card-white" style={{ padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#fffbeb",
                    color: "#b45309",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #fef3c7",
                  }}
                >
                  2
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Mul Dwarka Ancient Relic
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Visit the authentic historical site where Lord Krishna first arrived before establishing the kingdom of Dwarka. Features an ancient well and historic coastal shrines.
              </p>
            </div>

            <div className="card-white" style={{ padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#eff6ff",
                    color: "#2563eb",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #bfdbfe",
                  }}
                >
                  3
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Porbandar: Sudama &amp; Gandhiji
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Visit the world&apos;s unique Sudama Temple (celebrating eternal friendship) and Kirti Mandir (Mahatma Gandhi&apos;s birthplace museum) right along the route.
              </p>
            </div>

            <div className="card-white" style={{ padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#f0fdf4",
                    color: "#166534",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #bbf7d0",
                  }}
                >
                  4
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Somnath Sound &amp; Light Show
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Experience the majestic evening aarti at the First Jyotirlinga, followed by the dramatic 3D Sound &amp; Light show against the backdrop of the sea waves.
              </p>
            </div>
          </div>

          {/* Clean Centered Action Card */}
          <div
            style={{
              backgroundColor: "#f0f9ff",
              border: "1px solid #bae6fd",
              borderRadius: "20px",
              padding: "36px 28px",
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
              Ready to Book Somnath Darshan?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#475569", marginBottom: "24px", maxWidth: "560px", margin: "0 auto 24px" }}>
              Departures daily at 07:30 AM, 09:30 AM, and 03:30 PM. Book in seconds via our instant pop-up.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <button
                onClick={() => openBooking("Somanath Darshan", "07:30 AM Departure")}
                className="btn-whatsapp"
                style={{ padding: "14px 28px", fontSize: "1rem", borderRadius: "12px" }}
              >
                <MessageCircle size={18} />
                Book via WhatsApp Pop-up
              </button>
              <a
                href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
                className="btn-outline"
                style={{ padding: "14px 24px", fontSize: "1rem", borderRadius: "12px", backgroundColor: "#ffffff" }}
              >
                <Phone size={17} color="#2563eb" />
                Call Directly {OWNER_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { OWNER_INFO, DWARKA_DARSHAN } from "@/data/toursData";
import { useBooking } from "@/context/BookingContext";
import PlaceCard from "@/components/PlaceCard";
import {
  Clock,
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  Info,
  Calendar,
  Sun,
  Sunset,
  Car,
} from "lucide-react";

export default function DwarkaDarshanPage() {
  const { openBooking } = useBooking();
  const [selectedShiftFilter, setSelectedShiftFilter] = useState("all");

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* HEADER SECTION */}
      <section
        style={{
          backgroundColor: "#fffbeb",
          borderBottom: "1px solid #fef3c7",
          padding: "60px 0 50px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "#b45309",
                backgroundColor: "#ffffff",
                padding: "6px 14px",
                borderRadius: "9999px",
                border: "1px solid #fde68a",
                marginBottom: "16px",
              }}
            >
              <Sparkles size={13} color="#d97706" />
              <span>DWARKESH RIKSHA OFFICIAL TOUR</span>
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
              Dwarka Darshan Tour Package
              <span style={{ display: "block", color: "#d97706", fontSize: "1.7rem", fontWeight: 700, marginTop: "6px" }}>
                द्वारका दर्शन (8 प्रमुख पवित्र एवं दर्शनीय स्थल)
              </span>
            </h1>

            <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.65, maxWidth: "720px", margin: "0 auto 24px" }}>
              Comprehensive 5.5-hour local pilgrimage covering Lord Shiva&apos;s Jyotirling, Krishna&apos;s island residence, ancient queens&apos; temples, and certified Blue Flag beach with our experienced local drivers. For visiting all places, <strong>both Auto Rickshaw and 4-Wheeler Car services are provided as per the respected number of persons</strong> in your family.
            </p>

            {/* Shift cards centered */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "14px",
                maxWidth: "680px",
                margin: "0 auto 20px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "16px 20px",
                  borderRadius: "14px",
                  border: "1px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "#fffbeb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Sun size={22} color="#d97706" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    Morning Shift
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a" }}>
                    07:30 AM To 01:00 PM
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#16a34a", fontWeight: 600 }}>
                    Best for early darshan &amp; calm waters
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "16px 20px",
                  borderRadius: "14px",
                  border: "1px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "#fffbeb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Sunset size={22} color="#d97706" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    Afternoon Shift
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a" }}>
                    01:30 PM To 07:00 PM
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#d97706", fontWeight: 600 }}>
                    Includes sunset at Bhadkeshwar
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Wheeler & Rickshaw Service Notice Banner */}
            <div
              style={{
                maxWidth: "680px",
                margin: "0 auto 24px",
                padding: "12px 18px",
                backgroundColor: "#f0fdf4",
                borderRadius: "12px",
                border: "1px solid #bbf7d0",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textAlign: "left",
              }}
            >
              <Car size={22} color="#166534" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: "0.85rem", color: "#166534", lineHeight: 1.5 }}>
                <strong>Vehicle Provision:</strong> For visiting all 8 places, <strong>4-wheeler car service (Taxi/Cab) is provided along with rickshaw</strong> as per the respected number of persons in your family or group.
              </div>
            </div>

            {/* Quick Hero Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", alignItems: "center" }}>
              <button
                onClick={() => openBooking("Dwarka Darshan")}
                className="btn-whatsapp"
                style={{ padding: "14px 28px", fontSize: "0.95rem", borderRadius: "12px" }}
              >
                <MessageCircle size={18} />
                Book Dwarka Darshan (Pop-up)
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

      {/* ALL 8 PLACES GRID */}
      <section style={{ padding: "64px 0", backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div style={{ marginBottom: "36px" }}>
            <span className="section-tag">
              <CheckCircle2 size={13} color="#16a34a" /> ALL 8 SPOTS COVERED
            </span>
            <h2 className="section-title">
              Complete Spot-by-Spot Itinerary
            </h2>
            <p className="section-subtitle">
              Every location listed on our official tour card, arranged in the optimal travel circuit.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {DWARKA_DARSHAN.places.map((place, idx) => (
              <PlaceCard
                key={place.id}
                place={place}
                index={idx}
                tourTitle={DWARKA_DARSHAN.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL TRAVEL TIPS & ADVICE */}
      <section style={{ padding: "72px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 44px" }}>
            <span className="section-tag">
              <Info size={13} /> LOCAL DRIVER TIPS &amp; GUIDELINES
            </span>
            <h2 className="section-title">
              Important Pilgrimage &amp; Local Tips
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Helpful advice from a 10+ year experienced local driver to make your Dwarka pilgrimage smooth, comfortable, and memorable.
            </p>
          </div>

          {/* 6 Tip Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {/* Tip 1 */}
            <div
              className="card-white"
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            >
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
                  1
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Bet Dwarka Transit &amp; Sudarshan Setu
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Bet Dwarka is now connected via the magnificent Sudarshan Setu cable-stayed bridge. Our vehicle drops you directly at the transit hub. Carry valid government ID cards (Aadhaar/Voter ID) for temple security checkpoints.
              </p>
            </div>

            {/* Tip 2 */}
            <div
              className="card-white"
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            >
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
                  2
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Shivrajpur Blue Flag Beach Guidelines
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Shivrajpur has crystal clear water and clean changing rooms. If you wish to take a quick dip or water sports ride (scuba, jet-ski), inform your driver at pickup so the schedule can be planned smoothly!
              </p>
            </div>

            {/* Tip 3 */}
            <div
              className="card-white"
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#eff6ff",
                    color: "#1d4ed8",
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
                  Bhadkeshwar Mahadev High-Tide Experience
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                If you choose the afternoon shift (01:30 PM – 07:00 PM), you will reach Bhadkeshwar Mahadev and Sunset Point right during golden hour when the Arabian Sea waves lap against the temple rocks.
              </p>
            </div>

            {/* Tip 4 */}
            <div
              className="card-white"
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#fef3c7",
                    color: "#b45309",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #fde68a",
                  }}
                >
                  4
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Temple Darshan &amp; Aarti Schedules
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Nageshwar Jyotirling and Rukmani Mandir have specific aarti timings. Our drivers plan each route to ensure devotees get maximum time for peaceful darshan without rushing.
              </p>
            </div>

            {/* Tip 5 */}
            <div
              className="card-white"
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#fdf2f8",
                    color: "#be185d",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #fbcfe8",
                  }}
                >
                  5
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Footwear &amp; Traditional Attire
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Slip-on sandals or easily removable footwear are recommended for convenience at temple entry gates. Modest and comfortable attire is preferred for holy sanctums.
              </p>
            </div>

            {/* Tip 6 */}
            <div
              className="card-white"
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#f0fdf4",
                    color: "#15803d",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #bbf7d0",
                  }}
                >
                  6
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                  Doorstep Pickup &amp; Luggage Care
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                Pickup is available directly from your hotel, dharmashala, or Teen Batti Chowk stand. The rickshaw provides safe, clean space for day bags, water bottles, and holy prasad.
              </p>
            </div>
          </div>

          {/* Clean Centered Action Card */}
          <div
            style={{
              backgroundColor: "#fffdfa",
              border: "1px solid #fef3c7",
              borderRadius: "20px",
              padding: "36px 28px",
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
              Ready to Book Your Dwarka Darshan Tour?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "24px", maxWidth: "560px", margin: "0 auto 24px" }}>
              Click below to choose your date &amp; shift in our quick pop-up, or call our team directly.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <button
                onClick={() => openBooking("Dwarka Darshan", "07:30 AM To 01:00 PM")}
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

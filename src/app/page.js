"use client";

import React, { useState } from "react";
import Link from "next/link";
import { OWNER_INFO, DWARKA_DARSHAN, SOMNATH_DARSHAN, WHY_CHOOSE_US, TESTIMONIALS, FAQS } from "@/data/toursData";
import { useBooking } from "@/context/BookingContext";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Star,
  ChevronRight,
  ShieldCheck,
  Search,
  ArrowRight,
  Sparkles,
  Car,
} from "lucide-react";

export default function HomePage() {
  const { openBooking } = useBooking();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          paddingTop: "68px",
          paddingBottom: "90px",
          minHeight: "560px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Sketch Layer - Covers Full Hero Section Completely */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero-bg-sketch.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 12%",
            backgroundRepeat: "no-repeat",
            opacity: 0.82,
            pointerEvents: "none",
          }}
        />

        {/* Soft Central Radial Halo for Text Contrast with Seamless Bottom Fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 95% 80% at 50% 45%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.65) 50%, rgba(255, 255, 255, 0.15) 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "9999px",
                backgroundColor: "#fffbeb",
                border: "1px solid #fef3c7",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "#b45309",
                marginBottom: "20px",
              }}
            >
              <Car size={15} color="#b45309" />
              <span>Auto Riksha &amp; 4-Wheeler Car Service (As per Persons) • {OWNER_INFO.location}</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 900,
                color: "#0f172a",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              Devbhumi Dwarka &amp; Somnath Darshan in Comfort
            </h1>

            {/* Subheading with Hindi emphasis */}
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#d97706",
                marginBottom: "20px",
              }}
            >
              द्वारका दर्शन (8 पवित्र स्थल) एवं सोमनाथ दर्शन टूर सेवा
            </div>

            <p
              style={{
                fontSize: "1.08rem",
                color: "#475569",
                lineHeight: 1.7,
                maxWidth: "760px",
                margin: "0 auto 32px",
              }}
            >
              Welcome to Dwarka! Travel hassle-free with positive vibes and energy. Enjoy clean, punctual, and well-guided pilgrimage tours covering sacred Jyotirlingas, coastal temples, and scenic beaches. For visiting places, <strong>4-wheeler service is provided along with rickshaw as per the respected number of persons</strong> in your family.
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", alignItems: "center", marginBottom: "28px" }}>
              <button
                onClick={() => openBooking("Dwarka Darshan")}
                className="btn-whatsapp"
                style={{
                  padding: "15px 32px",
                  fontSize: "1.05rem",
                  borderRadius: "12px",
                }}
              >
                <MessageCircle size={20} />
                Book on WhatsApp Now
              </button>

              <a
                href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
                className="btn-outline"
                style={{
                  padding: "14px 26px",
                  fontSize: "1.05rem",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <Phone size={18} color="#2563eb" />
                Call {OWNER_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TWO MAIN DARSHAN PACKAGES */}
      <section style={{ padding: "72px 0", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
            <span className="section-tag">
              <Sparkles size={13} /> OFFICIAL TOUR PACKAGES
            </span>
            <h2 className="section-title">
              Choose Your Pilgrimage Package
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Carefully curated routes based on authentic local temple darshan & aarti schedules.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Package 1: Dwarka Darshan */}
            <div
              className="card-white"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "2px solid #fef3c7",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#d97706",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  textTransform: "uppercase",
                }}
              >
                Most Popular
              </div>

              <div style={{ padding: "32px 28px 20px", borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#d97706", textTransform: "uppercase" }}>
                  5.5 Hours Local Sightseeing
                </span>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#0f172a", marginTop: "4px" }}>
                  {DWARKA_DARSHAN.title}
                </h3>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#d97706", marginBottom: "12px" }}>
                  {DWARKA_DARSHAN.titleHindi}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.55 }}>
                  {DWARKA_DARSHAN.description}
                </p>

                {/* Fleet provision notice */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#16a34a", fontWeight: 700, backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", padding: "5px 10px", borderRadius: "6px", marginTop: "12px" }}>
                  <Car size={14} color="#16a34a" />
                  <span>Auto Riksha &amp; 4-Wheeler Car provided as per number of persons</span>
                </div>

                {/* Shifts info */}
                <div
                  style={{
                    marginTop: "20px",
                    padding: "14px",
                    backgroundColor: "#fffbeb",
                    borderRadius: "12px",
                    border: "1px solid #fef3c7",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#b45309", textTransform: "uppercase", marginBottom: "6px" }}>
                    Daily Shifts Available:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.875rem", color: "#1e293b", fontWeight: 600 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={14} color="#d97706" />
                      <span>Shift 1: 07:30 AM to 01:00 PM (Morning)</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={14} color="#d97706" />
                      <span>Shift 2: 01:30 PM to 07:00 PM (Sunset Special)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8 Spots checklist */}
              <div style={{ padding: "24px 28px", flexGrow: 1 }}>
                <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", marginBottom: "12px" }}>
                  Includes All 8 Sacred & Scenic Places:
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 14px", fontSize: "0.875rem", color: "#334155" }}>
                  {DWARKA_DARSHAN.places.map((place, i) => (
                    <div key={place.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                      <span style={{ fontWeight: 500 }}>{place.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{ padding: "20px 28px 28px", backgroundColor: "#ffffff", borderTop: "1px solid #f1f5f9", display: "flex", gap: "10px" }}>
                <Link
                  href="/dwarka-darshan"
                  className="btn-outline"
                  style={{ flex: 1, padding: "12px", fontSize: "0.875rem", borderRadius: "10px", justifyContent: "center" }}
                >
                  View 8 Spots Details
                </Link>
                <button
                  onClick={() => openBooking("Dwarka Darshan")}
                  className="btn-whatsapp"
                  style={{ flex: 1.2, padding: "12px", fontSize: "0.875rem", borderRadius: "10px" }}
                >
                  <MessageCircle size={16} /> Book via WhatsApp
                </button>
              </div>
            </div>

            {/* Package 2: Somnath Darshan */}
            <div
              className="card-white"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "2px solid #e0f2fe",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#0284c7",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  textTransform: "uppercase",
                }}
              >
                Coastal Route
              </div>

              <div style={{ padding: "32px 28px 20px", borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#0284c7", textTransform: "uppercase" }}>
                  Saurashtra Highway Darshan
                </span>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#0f172a", marginTop: "4px" }}>
                  {SOMNATH_DARSHAN.title}
                </h3>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0284c7", marginBottom: "12px" }}>
                  {SOMNATH_DARSHAN.titleHindi}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.55 }}>
                  {SOMNATH_DARSHAN.description}
                </p>

                {/* Fleet provision notice */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#0284c7", fontWeight: 700, backgroundColor: "#f0f9ff", border: "1px solid #bae6fd", padding: "5px 10px", borderRadius: "6px", marginTop: "12px" }}>
                  <Car size={14} color="#0284c7" />
                  <span>4-Wheeler Car &amp; Auto Riksha provided as per number of persons</span>
                </div>

                {/* Timings info */}
                <div
                  style={{
                    marginTop: "20px",
                    padding: "14px",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "12px",
                    border: "1px solid #e0f2fe",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0369a1", textTransform: "uppercase", marginBottom: "6px" }}>
                    Departure Schedules:
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "0.875rem", color: "#1e293b", fontWeight: 600 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={14} color="#0284c7" />
                      <span>07:30 AM</span>
                    </div>
                    <span>•</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={14} color="#0284c7" />
                      <span>09:30 AM</span>
                    </div>
                    <span>•</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={14} color="#0284c7" />
                      <span>03:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 Spots checklist */}
              <div style={{ padding: "24px 28px", flexGrow: 1 }}>
                <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", marginBottom: "12px" }}>
                  Includes 6 Legendary Coastal Landmarks:
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 14px", fontSize: "0.875rem", color: "#334155" }}>
                  {SOMNATH_DARSHAN.places.map((place, i) => (
                    <div key={place.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                      <span style={{ fontWeight: 500 }}>{place.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{ padding: "20px 28px 28px", backgroundColor: "#ffffff", borderTop: "1px solid #f1f5f9", display: "flex", gap: "10px" }}>
                <Link
                  href="/somnath-darshan"
                  className="btn-outline"
                  style={{ flex: 1, padding: "12px", fontSize: "0.875rem", borderRadius: "10px", justifyContent: "center" }}
                >
                  View Route Details
                </Link>
                <button
                  onClick={() => openBooking("Somanath Darshan")}
                  className="btn-whatsapp"
                  style={{ flex: 1.2, padding: "12px", fontSize: "0.875rem", borderRadius: "10px" }}
                >
                  <MessageCircle size={16} /> Book via WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Fleet Flexibility Banner */}
          <div
            style={{
              marginTop: "32px",
              padding: "20px 24px",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  backgroundColor: "#fffbeb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                  border: "1px solid #fef3c7",
                }}
              >
                <Car size={24} color="#d97706" />
              </div>
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", marginBottom: "2px" }}>
                  Travelling with Family or a Larger Group?
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>
                  For visiting all places, <strong>4-wheeler car service (Taxi / Cab) is provided along with rickshaws</strong> as per the respected number of persons in your group.
                </p>
              </div>
            </div>
            <button
              onClick={() => openBooking("Dwarka Darshan")}
              className="btn-whatsapp"
              style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "10px", flexShrink: 0 }}
            >
              Inquire on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: 3 STEP WHATSAPP BOOKING FLOW */}
      <section style={{ padding: "72px 0", backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}>
            <span className="section-tag">
              <MessageCircle size={13} /> SIMPLE BOOKING PROCESS
            </span>
            <h2 className="section-title">
              How WhatsApp Pre-Formatted Booking Works
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Zero hassle, zero upfront payment. Send structured tour details directly via WhatsApp in 30 seconds.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Step 1 */}
            <div
              className="card-white"
              style={{ padding: "32px 24px", textAlign: "center", borderRadius: "16px" }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#fffbeb",
                  color: "#d97706",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  border: "1px solid #fef3c7",
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                Select Tour & Date
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6 }}>
                Choose between Dwarka Darshan (morning/afternoon) or Somnath Darshan, select your date and passenger count.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="card-white"
              style={{ padding: "32px 24px", textAlign: "center", borderRadius: "16px" }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#f0fdf4",
                  color: "#16a34a",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  border: "1px solid #bbf7d0",
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                System Prepares WhatsApp Text
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6 }}>
                Our website formats your request into a neat, polite WhatsApp message ready to send for instant driver confirmation (+91 99981 51725).
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="card-white"
              style={{ padding: "32px 24px", textAlign: "center", borderRadius: "16px" }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  border: "1px solid #bfdbfe",
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                Direct Driver Confirmation
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6 }}>
                We confirm your pickup point (Teen Batti Chowk, Hotel, or Station) and timings immediately on WhatsApp. Pay after your tour!
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION: WHY CHOOSE US */}
      <section style={{ padding: "72px 0", backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}>
            <span className="section-tag">
              <ShieldCheck size={13} /> DWARKESH RIKSHA COMMITMENT
            </span>
            <h2 className="section-title">
              Why Devotees Prefer Our Riksha Service
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Experience the genuine warmth, reliability, and local knowledge of a true Dwarka native.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="card-white"
                style={{ padding: "28px 24px", borderRadius: "16px" }}
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
                    marginBottom: "16px",
                    border: "1px solid #fef3c7",
                  }}
                >
                  <Sparkles size={20} color="#d97706" />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CONTINUOUS CUSTOMER REVIEWS (JUSTDIAL) */}
      <ReviewsMarquee />

      {/* SECTION: FAQS */}
      <section style={{ padding: "72px 0", backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container-narrow">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="section-tag">
              <Clock size={13} /> FREQUENT QUESTIONS
            </span>
            <h2 className="section-title">
              Common Questions Before Booking
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#0f172a",
                    backgroundColor: activeFaq === idx ? "#f8fafc" : "#ffffff",
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    size={18}
                    color="#64748b"
                    style={{
                      transform: activeFaq === idx ? "rotate(90deg)" : "none",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                      marginLeft: "12px",
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div
                    style={{
                      padding: "16px 20px 20px",
                      fontSize: "0.875rem",
                      color: "#475569",
                      lineHeight: 1.6,
                      borderTop: "1px solid #f1f5f9",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FINAL CALL TO ACTION BANNER */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#fffbeb",
          borderBottom: "1px solid #fef3c7",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "#b45309",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px",
            }}
          >
            START YOUR HOLY DWARKA PILGRIMAGE
          </span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#0f172a", marginBottom: "12px" }}>
            Ready to Explore Devbhumi Dwarka &amp; Somnath?
          </h2>
          <p style={{ fontSize: "1rem", color: "#475569", maxWidth: "600px", margin: "0 auto 28px" }}>
            Reach out directly via WhatsApp for instant date booking or give us a quick phone call.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
            <button
              onClick={() => openBooking("Dwarka Darshan")}
              className="btn-whatsapp"
              style={{ padding: "14px 28px", fontSize: "1rem", borderRadius: "12px" }}
            >
              <MessageCircle size={18} />
              Book on WhatsApp (+91 {OWNER_INFO.phone})
            </button>
            <a
              href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
              className="btn-outline"
              style={{ padding: "14px 24px", fontSize: "1rem", borderRadius: "12px", backgroundColor: "#ffffff" }}
            >
              <Phone size={17} color="#2563eb" />
              Call Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

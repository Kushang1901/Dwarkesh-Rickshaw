"use client";

import React from "react";
import { OWNER_INFO, DWARKA_DARSHAN, SOMNATH_DARSHAN } from "@/data/toursData";
import { useBooking } from "@/context/BookingContext";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Search,
  ShieldCheck,
  Navigation,
  Car,
  Compass,
} from "lucide-react";

export default function ContactPage() {
  const { openBooking } = useBooking();
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* HEADER */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "72px 0 60px",
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Sketch Layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero-bg-4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 65%",
            backgroundRepeat: "no-repeat",
            opacity: 0.85,
            pointerEvents: "none",
          }}
        />

        {/* Soft Central Radial Halo for Text Contrast */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 75% 75% at 50% 50%, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.62) 50%, rgba(255, 255, 255, 0.12) 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <span className="section-tag" style={{ display: "inline-flex", marginBottom: "16px" }}>
              <MapPin size={13} /> STAND &amp; CONTACT
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                color: "#0f172a",
                lineHeight: 1.2,
                marginBottom: "14px",
              }}
            >
              Contact Us &amp; Find Our Stand
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.65, maxWidth: "700px", margin: "0 auto 28px" }}>
              Our official stand is situated at <strong>Teen Batti Chowk, Dwarka</strong>. Both Auto Rickshaw and 4-Wheeler Car services are provided as per the respected number of persons in your family. Call or message us on WhatsApp for bookings or hotel doorstep pickup.
            </p>

            {/* Quick Hero Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", alignItems: "center" }}>
              <button
                onClick={() => openBooking("Dwarka Darshan")}
                className="btn-whatsapp"
                style={{ padding: "14px 28px", fontSize: "0.95rem", borderRadius: "12px" }}
              >
                <MessageCircle size={18} />
                Book Tour (Open Pop-up)
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

      {/* MAIN CONTENT */}
      <section style={{ padding: "64px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
            }}
            className="contact-layout-grid"
          >
            {/* Left: Contact Details & Stand Guide */}
            <div>
              <div
                className="card-white"
                style={{ padding: "32px", borderRadius: "18px", marginBottom: "28px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      backgroundColor: "#fffbeb",
                      border: "1px solid #fef3c7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.6rem",
                    }}
                  >
                    <Compass size={24} color="#d97706" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a" }}>
                      {OWNER_INFO.businessName}
                    </h2>
                    <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
                      Owner & Driver: <strong>{OWNER_INFO.name}</strong>
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {/* Phone / WhatsApp */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={18} color="#16a34a" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                        Call / WhatsApp (Mobail Nobar)
                      </div>
                      <a
                        href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
                        style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}
                      >
                        {OWNER_INFO.phoneFormatted}
                      </a>
                      <div style={{ fontSize: "0.8rem", color: "#16a34a", fontWeight: 600, marginTop: "2px" }}>
                        Available 6:00 AM to 10:00 PM Daily
                      </div>
                    </div>
                  </div>

                  {/* Location Stand */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "#fffbeb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={18} color="#d97706" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                        Official Stand Location
                      </div>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a" }}>
                        {OWNER_INFO.location}
                      </div>
                      <div style={{ fontSize: "0.8125rem", color: "#64748b", marginTop: "2px" }}>
                        Centrally located near market, easy access from temple dharmashalas & hotels.
                      </div>
                    </div>
                  </div>

                  {/* Fleet Provision */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Car size={18} color="#16a34a" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#16a34a", textTransform: "uppercase" }}>
                        Fleet Service
                      </div>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a" }}>
                        Auto Riksha &amp; 4-Wheeler Car / Cab
                      </div>
                      <div style={{ fontSize: "0.8125rem", color: "#64748b", marginTop: "2px" }}>
                        For visiting places, 4-wheeler car service is provided along with rickshaw as per the respected number of persons.
                      </div>
                    </div>
                  </div>

                  {/* Google Verified */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "#eff6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Search size={18} color="#2563eb" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                        Google Search
                      </div>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a" }}>
                        Search &ldquo;{OWNER_INFO.googleSearchQuery}&rdquo;
                      </div>
                      <div style={{ fontSize: "0.8125rem", color: "#64748b", marginTop: "2px" }}>
                        Find verified Google Reviews, directions, and customer feedback.
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
                    className="btn-call"
                    style={{ flex: 1, padding: "12px", borderRadius: "10px" }}
                  >
                    <Phone size={16} /> Direct Call
                  </a>
                  <a
                    href={`https://wa.me/${OWNER_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                    style={{ flex: 1.2, padding: "12px", borderRadius: "10px" }}
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Pickup Landmarks Guide */}
              <div
                className="card-white"
                style={{ padding: "28px", borderRadius: "18px" }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "14px" }}>
                  Doorstep Pickup Options in Dwarka
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem", color: "#475569" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Navigation size={16} color="#d97706" style={{ flexShrink: 0 }} />
                    <span><strong>Teen Batti Chowk:</strong> Our primary rickshaw stand in town center.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Navigation size={16} color="#d97706" style={{ flexShrink: 0 }} />
                    <span><strong>Hotel / Dharmashala Doorstep:</strong> Free pickup anywhere in Dwarka town.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Navigation size={16} color="#d97706" style={{ flexShrink: 0 }} />
                    <span><strong>Dwarka Railway Station:</strong> Pre-schedule your pickup upon train arrival.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Embedded Google Map for Teen Batti Chowk Stand */}
            <div style={{ height: "100%" }}>
              <div
                className="card-white"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minHeight: "520px",
                  boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.08)",
                }}
              >
                {/* Map Card Header */}
                <div
                  style={{
                    padding: "16px 20px",
                    backgroundColor: "#f8fafc",
                    borderBottom: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "#fffbeb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #fde68a",
                      }}
                    >
                      <MapPin size={18} color="#d97706" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#0f172a" }}>
                        Stand Location: Teen Batti Chowk
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                        Dwarka, Gujarat • Live Google Map
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Teen+Batti+chauk+Dwarka"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#0369a1",
                      backgroundColor: "#f0f9ff",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      border: "1px solid #bae6fd",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Open in Maps ↗
                  </a>
                </div>

                {/* Google Map iframe */}
                <div style={{ flex: 1, width: "100%", minHeight: "400px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.9989772759554!2d68.96298097518276!3d22.240117595074487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569d002f66f47f%3A0xc2c6abb56abae613!2sTeen%20Batti%20chauk!5e0!3m2!1sen!2sin!4v1792740364645!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px", width: "100%", display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Dwarkesh Riksha Stand Location - Teen Batti Chowk, Dwarka"
                  />
                </div>

                {/* Map Card Footer Note */}

              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import React from "react";
import { OWNER_INFO } from "@/data/toursData";
import { useBooking } from "@/context/BookingContext";
import { Phone, MessageSquare } from "lucide-react";

export default function StickyMobileBar() {
  const { openBooking } = useBooking();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid #e2e8f0",
        boxShadow: "0 -4px 12px rgba(15, 23, 42, 0.08)",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      className="mobile-sticky-bar"
    >
      {/* Direct Call Button */}
      <a
        href={`tel:+91${OWNER_INFO.phone.replace(/\s+/g, "")}`}
        className="btn-call"
        style={{
          flex: 1,
          padding: "12px",
          fontSize: "0.875rem",
          borderRadius: "10px",
          whiteSpace: "nowrap",
        }}
      >
        <Phone size={16} />
        <span>Call Directly</span>
      </a>

      {/* WhatsApp Booking CTA */}
      <button
        onClick={() => openBooking("Dwarka Darshan")}
        className="btn-whatsapp"
        style={{
          flex: 1.4,
          padding: "12px",
          fontSize: "0.875rem",
          borderRadius: "10px",
          whiteSpace: "nowrap",
        }}
      >
        <MessageSquare size={16} />
        <span>Book on WhatsApp</span>
      </button>

      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-sticky-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

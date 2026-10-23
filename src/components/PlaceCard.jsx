"use client";

import React from "react";
import { Clock, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function PlaceCard({ place, tourTitle = "Dwarka Darshan", index }) {
  const { openBooking } = useBooking();

  return (
    <div
      className="card-white"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        backgroundColor: "#ffffff",
        transition: "all 0.25s ease",
      }}
    >
      {/* Top Banner with Spot Index & Category */}
      <div
        style={{
          padding: "16px 20px 12px",
          borderBottom: "1px solid #f1f5f9",
          backgroundColor: "#fbfcfd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#fffbeb",
              color: "#b45309",
              fontSize: "0.8125rem",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #fef3c7",
            }}
          >
            {index + 1}
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#475569",
            }}
          >
            {place.category}
          </span>
        </div>

        {place.badge && (
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "9999px",
              backgroundColor: "#f0fdf4",
              color: "#166534",
              border: "1px solid #bbf7d0",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Sparkles size={11} />
            {place.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {/* Title in English & Hindi */}
        <div style={{ marginBottom: "12px" }}>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.3,
            }}
          >
            {place.name}
          </h3>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#d97706",
              marginTop: "2px",
            }}
          >
            {place.nameHindi}
          </div>
        </div>

        {/* Location or Time recommendation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "0.8125rem",
            color: "#64748b",
            marginBottom: "14px",
          }}
        >
          {place.timeToSpend && (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={13} color="#64748b" />
              <span>{place.timeToSpend} stop</span>
            </div>
          )}
          {place.location && (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <MapPin size={13} color="#d97706" />
              <span>{place.location}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "#475569",
            lineHeight: 1.6,
            marginBottom: "16px",
            flexGrow: 1,
          }}
        >
          {place.description}
        </p>

        {/* Key Highlights list */}
        {place.highlights && place.highlights.length > 0 && (
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "8px",
              }}
            >
              Spot Highlights
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {place.highlights.map((h, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "0.75rem",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    color: "#334155",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <CheckCircle2 size={11} color="#16a34a" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={() => openBooking(tourTitle)}
          className="btn-outline"
          style={{
            width: "100%",
            padding: "9px 12px",
            fontSize: "0.8125rem",
            borderRadius: "8px",
            justifyContent: "center",
            marginTop: "auto",
          }}
        >
          Book This Tour via WhatsApp
        </button>
      </div>
    </div>
  );
}

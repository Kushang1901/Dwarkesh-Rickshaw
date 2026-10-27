"use client";

import React, { useState } from "react";
import { Clock, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function PlaceCard({ place, tourTitle = "Dwarka Darshan", index }) {
  const { openBooking } = useBooking();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasImage = place.image && !imageError;

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
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 2px 6px rgba(15, 23, 42, 0.04)",
      }}
    >
      {/* Visual Image Section */}
      {hasImage ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "210px",
            backgroundColor: "#f1f5f9",
            overflow: "hidden",
          }}
        >
          {/* Skeleton loading background */}
          {!imageLoaded && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748b",
                fontSize: "0.8rem",
              }}
            >
              Loading photo...
            </div>
          )}

          <img
            src={place.image}
            alt={`${place.name} - ${place.nameHindi || ""} Dwarka Darshan`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: imageLoaded ? 1 : 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />

          {/* Dark gradient overlay at bottom of photo for contrast */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.0) 50%, rgba(15, 23, 42, 0.3) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Spot Index & Category floating pill */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(6px)",
              padding: "4px 10px",
              borderRadius: "9999px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
              border: "1px solid rgba(254, 243, 199, 0.8)",
            }}
          >
            {typeof index === "number" && (
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#d97706",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {index + 1}
              </span>
            )}
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#1e293b",
              }}
            >
              {place.category}
            </span>
          </div>

          {/* Badge pill */}
          {place.badge && (
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(6px)",
                padding: "4px 10px",
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#166534",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                border: "1px solid rgba(187, 247, 208, 0.8)",
              }}
            >
              <Sparkles size={11} color="#16a34a" />
              <span>{place.badge}</span>
            </div>
          )}

          {/* Bottom title in photo */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "14px",
              right: "14px",
              color: "#ffffff",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#fef3c7",
                textShadow: "0 1px 3px rgba(0,0,0,0.8)",
              }}
            >
              {place.nameHindi}
            </div>
          </div>
        </div>
      ) : (
        /* Top Banner fallback when no image is available */
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
            {typeof index === "number" && (
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
            )}
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
      )}

      {/* Card Content Body */}
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
          {!hasImage && place.nameHindi && (
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#b45309",
                marginTop: "2px",
              }}
            >
              {place.nameHindi}
            </div>
          )}
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
          <div style={{ marginBottom: "18px" }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#64748b",
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
                    padding: "4px 9px",
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
          onClick={() => openBooking(`${tourTitle} - ${place.name}`)}
          className="btn-outline"
          style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: "0.85rem",
            borderRadius: "10px",
            justifyContent: "center",
            marginTop: "auto",
            fontWeight: 700,
          }}
        >
          Book This Tour via WhatsApp
        </button>
      </div>
    </div>
  );
}

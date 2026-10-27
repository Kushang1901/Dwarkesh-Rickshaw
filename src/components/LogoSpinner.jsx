"use client";

import React from "react";
import { OWNER_INFO } from "@/data/toursData";

export default function LogoSpinner({
  size = 120,
  showText = true,
  title,
  subtitle,
}) {
  const logoSize = Math.round(size * 0.7);
  const displayTitle = title || OWNER_INFO?.businessName || "Dwarkesh Riksha & Tour Service";
  const displaySubtitle = subtitle || "Loading pilgrimage journey";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Central Rotating Circle with Logo in Middle */}
      <div
        style={{
          position: "relative",
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer subtle decorative dashed ring */}
        <div
          style={{
            position: "absolute",
            inset: "-8px",
            borderRadius: "50%",
            border: "1.5px dashed rgba(217, 119, 6, 0.35)",
            animation: "spinCounterClockwise 12s linear infinite",
          }}
        />

        {/* Outer stationary glowing track */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3px solid #fef3c7",
          }}
        />

        {/* Primary Spinning Ring with Radiant Saffron Gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3.5px solid transparent",
            borderTopColor: "#d97706",
            borderRightColor: "#f59e0b",
            animation: "spinClockwise 1.1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite",
            filter: "drop-shadow(0 2px 6px rgba(217, 119, 6, 0.3))",
          }}
        />

        {/* Second counter-accent micro-ring */}
        <div
          style={{
            position: "absolute",
            inset: "4px",
            borderRadius: "50%",
            border: "2px solid transparent",
            borderBottomColor: "#b45309",
            animation: "spinCounterClockwise 1.8s ease-in-out infinite",
          }}
        />

        {/* Center Logo Badge */}
        <div
          style={{
            width: `${logoSize}px`,
            height: `${logoSize}px`,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(217, 119, 6, 0.25)",
            border: "2.5px solid #ffffff",
            backgroundColor: "#fffbeb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "loaderPulse 2.5s ease-in-out infinite",
            zIndex: 2,
          }}
        >
          <img
            src="/logo.webp"
            alt="Dwarkesh Logo"
            width={logoSize}
            height={logoSize}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Brand Text Below Loader */}
      {showText && (
        <div
          style={{
            marginTop: "22px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "1.08rem",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.01em",
            }}
          >
            {displayTitle}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              marginTop: "5px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#b45309",
            }}
          >
            <span>{displaySubtitle}</span>
            <span
              style={{
                display: "inline-flex",
                gap: "2px",
                alignItems: "center",
              }}
            >
              <span className="loader-dot" style={{ animationDelay: "0s" }}>•</span>
              <span className="loader-dot" style={{ animationDelay: "0.2s" }}>•</span>
              <span className="loader-dot" style={{ animationDelay: "0.4s" }}>•</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

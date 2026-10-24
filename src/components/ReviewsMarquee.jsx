"use client";

import React from "react";
import { Star, ExternalLink, MessageSquarePlus, ShieldCheck, CheckCircle2 } from "lucide-react";
import { JUSTDIAL_STATS, JUSTDIAL_REVIEWS } from "@/data/toursData";

export default function ReviewsMarquee() {
  // Duplicate reviews array to create an infinite, seamless continuous marquee loop
  const duplicatedReviews = [...JUSTDIAL_REVIEWS, ...JUSTDIAL_REVIEWS];

  return (
    <section
      id="reviews"
      style={{
        padding: "76px 0 68px",
        backgroundColor: "#f8fafc",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "#fff7ed",
              border: "1px solid #ffedd5",
              fontSize: "0.8rem",
              fontWeight: 800,
              color: "#c2410c",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "14px",
            }}
          >
            <ShieldCheck size={14} color="#c2410c" />
            <span>Verified Passenger Reviews</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
              fontWeight: 900,
              color: "#0f172a",
              lineHeight: 1.25,
              marginBottom: "12px",
            }}
          >
            What Pilgrims Say About Dwarkesh Riksha
          </h2>

          <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.6, margin: "0 auto" }}>
            Real customer feedback from pilgrims and tourists who experienced Dwarka &amp; Somnath Darshan with Ashokbhai.
          </p>
        </div>
      </div>

      {/* CONTINUOUS MARQUEE CAROUSEL (RIGHT TO LEFT) */}
      <div className="marquee-container" aria-label="Continuous customer reviews slider">
        <div className="marquee-track">
          {duplicatedReviews.map((review, idx) => {
            const initial = review.name ? review.name.trim().charAt(0).toUpperCase() : "P";
            return (
              <div
                key={`${review.id || idx}-${idx}`}
                style={{
                  width: "360px",
                  flexShrink: 0,
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  padding: "24px 22px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 14px -3px rgba(15, 23, 42, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "default",
                }}
              >
                <div>
                  {/* Card Header: Avatar, Name, Date, Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                          color: "#ffffff",
                          fontWeight: 900,
                          fontSize: "1.1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 6px rgba(217, 119, 6, 0.25)",
                        }}
                      >
                        {initial}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: "0.98rem", color: "#0f172a" }}>
                          {review.name}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
                          {review.date}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "9999px",
                        backgroundColor: "#ecfdf5",
                        color: "#059669",
                        border: "1px solid #a7f3d0",
                      }}
                    >
                      <CheckCircle2 size={11} color="#059669" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "10px" }}>
                    {[...Array(5)].map((_, starIdx) => {
                      const isFilled = starIdx < review.rating;
                      return (
                        <Star
                          key={starIdx}
                          size={15}
                          fill={isFilled ? "#f59e0b" : "#e2e8f0"}
                          color={isFilled ? "#f59e0b" : "#cbd5e1"}
                        />
                      );
                    })}
                  </div>

                  {/* Highlight title if present */}
                  {review.highlight && (
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "0.92rem",
                        color: "#1e293b",
                        marginBottom: "8px",
                        lineHeight: 1.4,
                      }}
                    >
                      &ldquo;{review.highlight}&rdquo;
                    </div>
                  )}

                  {/* Tags (if present, e.g. for customer concerns or specific service) */}
                  {review.tags && review.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
                      {review.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            padding: "2px 8px",
                            borderRadius: "4px",
                            backgroundColor: "#fef2f2",
                            color: "#dc2626",
                            border: "1px solid #fee2e2",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Review Text */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#475569",
                      lineHeight: 1.6,
                      fontStyle: "normal",
                    }}
                  >
                    {review.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ACTION AREA BELOW TESTIMONIALS */}
      <div className="container" style={{ marginTop: "32px", textAlign: "center" }}>
        <a
          href={JUSTDIAL_STATS.rateUsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 36px",
            fontSize: "1.05rem",
            fontWeight: 800,
            borderRadius: "12px",
            backgroundColor: "#ea580c",
            borderColor: "#ea580c",
            color: "#ffffff",
            boxShadow: "0 4px 14px rgba(234, 88, 12, 0.28)",
            transition: "all 0.2s ease",
          }}
        >
          <MessageSquarePlus size={20} />
          <span>Write a Review</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

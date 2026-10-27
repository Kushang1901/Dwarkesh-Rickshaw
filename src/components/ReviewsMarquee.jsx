"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Star,
  ExternalLink,
  MessageSquarePlus,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { JUSTDIAL_STATS, JUSTDIAL_REVIEWS } from "@/data/toursData";

export default function ReviewsMarquee() {
  const reviewsCount = JUSTDIAL_REVIEWS.length;
  // Duplicate the first 3 items at the end to create a seamless infinite slide loop
  const extendedReviews = [...JUSTDIAL_REVIEWS, ...JUSTDIAL_REVIEWS.slice(0, 3)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const touchStartXRef = useRef(null);
  const isJumpingRef = useRef(false);

  // Responsive items count: 3 on desktop, 2 on tablet, 1 on mobile
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Ensure direct link with hash scrolls into view
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#testimonials" || hash === "#reviews") {
        const el = document.getElementById("testimonials") || document.getElementById("reviews");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 250);
        }
      }
    }
  }, []);

  // Slide forward: 1 card exits left, 1 card enters right
  const handleNext = useCallback(() => {
    if (isJumpingRef.current) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Slide backward
  const handlePrev = useCallback(() => {
    if (isJumpingRef.current) return;
    if (currentIndex === 0) {
      // Instantly jump to the duplicate end without transition, then slide back
      isJumpingRef.current = true;
      setIsTransitioning(false);
      setCurrentIndex(reviewsCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(reviewsCount - 1);
          isJumpingRef.current = false;
        });
      });
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex, reviewsCount]);

  // Seamless transition reset when passing the end
  const handleTransitionEnd = () => {
    if (currentIndex >= reviewsCount) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Auto-slide interval (one card slides every 3.8s, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (deltaX > 45) {
      handlePrev();
    } else if (deltaX < -45) {
      handleNext();
    }
  };

  const gapPx = 24;

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
        scrollMarginTop: "90px",
      }}
    >
      {/* Anchor for #testimonials */}
      <div id="testimonials" style={{ position: "absolute", top: "-90px" }} />

      <div className="container">
        {/* Section Header */}
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

        {/* Carousel Slider Wrapper with Left/Right Navigation */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            style={{
              position: "absolute",
              left: "-18px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "1.5px solid #e2e8f0",
              boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#0f172a",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#fffbeb";
              e.currentTarget.style.borderColor = "#fde68a";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronLeft size={22} color="#0f172a" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            style={{
              position: "absolute",
              right: "-18px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "1.5px solid #e2e8f0",
              boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#0f172a",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#fffbeb";
              e.currentTarget.style.borderColor = "#fde68a";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronRight size={22} color="#0f172a" />
          </button>

          {/* Viewport: Shows exactly 3 cards on desktop, 2 on tablet, 1 on mobile */}
          <div
            style={{
              overflow: "hidden",
              borderRadius: "20px",
              padding: "8px 2px",
            }}
          >
            {/* Sliding Track: Shifts by 1 card smoothly */}
            <div
              onTransitionEnd={handleTransitionEnd}
              style={{
                display: "flex",
                gap: `${gapPx}px`,
                transform: `translateX(calc(-${currentIndex} * (100% + ${gapPx}px) / ${visibleCount}))`,
                transition: isTransitioning
                  ? "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)"
                  : "none",
                willChange: "transform",
              }}
            >
              {extendedReviews.map((review, idx) => {
                const initial = review.name ? review.name.trim().charAt(0).toUpperCase() : "P";
                return (
                  <div
                    key={`${review.id || idx}-${idx}`}
                    style={{
                      flex: `0 0 calc((100% - ${(visibleCount - 1) * gapPx}px) / ${visibleCount})`,
                      boxSizing: "border-box",
                      backgroundColor: "#ffffff",
                      borderRadius: "18px",
                      padding: "26px 24px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 14px -3px rgba(15, 23, 42, 0.05)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      cursor: "default",
                      minHeight: "290px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 10px 24px -4px rgba(15, 23, 42, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 14px -3px rgba(15, 23, 42, 0.05)";
                    }}
                  >
                    <div>
                      {/* Card Header: Avatar, Name, Date, Verified Badge */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "14px",
                        }}
                      >
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
                              flexShrink: 0,
                            }}
                          >
                            {initial}
                          </div>
                          <div>
                            <div style={{ fontWeight: 800, fontSize: "0.98rem", color: "#0f172a" }}>
                              {review.name}
                            </div>
                            <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
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
                            color: "#047857",
                            border: "1px solid #a7f3d0",
                            flexShrink: 0,
                          }}
                        >
                          <CheckCircle2 size={11} color="#047857" />
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
                            fontSize: "0.95rem",
                            color: "#0f172a",
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
                        }}
                      >
                        {review.text}
                      </p>
                    </div>

                    {/* Subtle quote icon decoration at bottom right */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "16px",
                        opacity: 0.25,
                      }}
                    >
                      <Quote size={20} color="#b45309" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Button Below Testimonials */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <a
            href={JUSTDIAL_STATS.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 34px",
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
            <span>Write a Review on Justdial</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

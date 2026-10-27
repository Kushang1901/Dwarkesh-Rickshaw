"use client";

import React, { useState, useEffect } from "react";
import { useBooking } from "@/context/BookingContext";
import { OWNER_INFO, DWARKA_DARSHAN, SOMNATH_DARSHAN } from "@/data/toursData";
import { buildWhatsAppBookingUrl } from "@/utils/whatsapp";
import { X, Calendar, Clock, Users, MapPin, User, Phone, MessageSquare, Check, Sparkles, Car, Info } from "lucide-react";

export default function BookingModal() {
  const { isOpen, closeBooking, initialPackage, initialShift } = useBooking();

  const [packageName, setPackageName] = useState("Dwarka Darshan");
  const [shift, setShift] = useState("07:30 AM To 01:00 PM");
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState("3");
  const [vehicleType, setVehicleType] = useState("As per Persons (Auto Riksha or 4-Wheeler Car)");
  const [pickup, setPickup] = useState("Teen Batti Chowk, Dwarka");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync initial state when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialPackage) setPackageName(initialPackage);
      if (initialShift) {
        setShift(initialShift);
      } else {
        if (initialPackage === "Somanath Darshan" || initialPackage === SOMNATH_DARSHAN.title) {
          setShift("07:30 AM Departure");
        } else {
          setShift("07:30 AM To 01:00 PM");
        }
      }
      // Set default tomorrow date if empty
      if (!date) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
        const dd = String(tomorrow.getDate()).padStart(2, "0");
        setDate(`${yyyy}-${mm}-${dd}`);
      }
    }
  }, [isOpen, initialPackage, initialShift]);

  // Update available shifts when package changes
  const handlePackageChange = (e) => {
    const selected = e.target.value;
    setPackageName(selected);
    if (selected === "Dwarka Darshan") {
      setShift("07:30 AM To 01:00 PM");
    } else if (selected === "Somanath Darshan") {
      setShift("07:30 AM Departure");
    } else {
      setShift("Flexible Timing");
    }
  };

  if (!isOpen) return null;

  const whatsappUrl = buildWhatsAppBookingUrl({
    name,
    phone,
    packageName,
    shift,
    date,
    persons,
    vehicleType,
    pickup,
    notes,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(4px)",
        padding: "16px",
      }}
      onClick={closeBooking}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "580px",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          border: "1px solid #e2e8f0",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px 16px",
            borderBottom: "1px solid #f1f5f9",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#b45309",
                backgroundColor: "#fffbeb",
                padding: "3px 10px",
                borderRadius: "9999px",
                marginBottom: "6px",
              }}
            >
              <Sparkles size={12} />
              PRE-FORMATTED WHATSAPP BOOKING
            </div>
            <h2
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.2,
              }}
            >
              Book with {OWNER_INFO.businessName}
            </h2>
            <p style={{ fontSize: "0.875rem", color: "#64748b", marginTop: "2px" }}>
              Direct driver confirmation • Instant WhatsApp booking
            </p>
          </div>
          <button
            onClick={closeBooking}
            style={{
              padding: "8px",
              borderRadius: "50%",
              backgroundColor: "#f1f5f9",
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s",
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: "20px 24px" }}>
          {/* Select Package & Shift */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "6px",
                }}
              >
                Tour Package *
              </label>
              <select
                value={packageName}
                onChange={handlePackageChange}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "0.875rem",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  fontWeight: 500,
                }}
              >
                <option value="Dwarka Darshan">Dwarka Darshan (द्वारका दर्शन)</option>
                <option value="Somanath Darshan">Somanath Darshan (सोमनाथ दर्शन)</option>
                <option value="Custom Tour / Full Day">Custom Pilgrimage Tour</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "6px",
                }}
              >
                <Clock size={13} color="#d97706" /> Timing / Shift *
              </label>
              <select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "0.875rem",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  fontWeight: 500,
                }}
              >
                {packageName === "Dwarka Darshan" ? (
                  <>
                    <option value="07:30 AM To 01:00 PM">07:30 AM – 01:00 PM (Morning)</option>
                    <option value="01:30 PM To 07:00 PM">01:30 PM – 07:00 PM (Afternoon / Sunset)</option>
                  </>
                ) : packageName === "Somanath Darshan" ? (
                  <>
                    <option value="07:30 AM Departure">07:30 AM Morning Departure</option>
                    <option value="09:30 AM Departure">09:30 AM Standard Departure</option>
                    <option value="03:30 PM Departure">03:30 PM Afternoon Departure</option>
                  </>
                ) : (
                  <>
                    <option value="Morning Flexible">Morning Flexible</option>
                    <option value="Afternoon Flexible">Afternoon Flexible</option>
                    <option value="Full Day">Full Day</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Date & Number of Persons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "6px",
                }}
              >
                <Calendar size={13} color="#d97706" /> Travel Date *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  fontSize: "0.875rem",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "6px",
                }}
              >
                <Users size={13} color="#d97706" /> Passengers *
              </label>
              <select
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "0.875rem",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  fontWeight: 500,
                }}
              >
                <option value="1">1 Person (Auto Riksha)</option>
                <option value="2">2 Persons (Auto Riksha)</option>
                <option value="3">3 Persons (Auto Riksha / Car)</option>
                <option value="4">4 Persons (Auto Riksha or 4-Wheeler Car)</option>
                <option value="5">5 Persons (4-Wheeler Car / Cab)</option>
                <option value="6">6 Persons (4-Wheeler Car / Ertiga / Innova)</option>
                <option value="7+ Persons">7+ Persons (4-Wheeler or Multiple Vehicles)</option>
              </select>
            </div>
          </div>

          {/* Vehicle Service Type (Auto Riksha / 4-Wheeler) */}
          <div style={{ marginBottom: "14px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#334155",
                marginBottom: "6px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Car size={14} color="#d97706" /> Vehicle Service *
              </span>
              <span style={{ fontSize: "0.72rem", color: "#15803d", fontWeight: 700 }}>
                Provided as per number of persons
              </span>
            </label>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                fontSize: "0.875rem",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "#0f172a",
                fontWeight: 500,
              }}
            >
              <option value="As per Persons (Auto Riksha or 4-Wheeler Car)">
                Best Fit as per Persons (Auto Riksha / 4-Wheeler Car)
              </option>
              <option value="Auto Riksha (1 to 4 Persons)">
                Auto Riksha (1 to 4 Persons)
              </option>
              <option value="4-Wheeler Car / Taxi (4 to 7+ Persons / Family Comfort)">
                4-Wheeler Car / Taxi (For family comfort &amp; larger groups)
              </option>
            </select>
            <div
              style={{
                marginTop: "6px",
                padding: "6px 10px",
                backgroundColor: "#f8fafc",
                borderRadius: "6px",
                border: "1px solid #e2e8f0",
                fontSize: "0.75rem",
                color: "#475569",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Info size={15} color="#2563eb" style={{ flexShrink: 0 }} />
              <span>
                For visiting places, <strong>4-wheeler service is provided along with rickshaw</strong> as per the respected number of persons in your group.
              </span>
            </div>
          </div>

          {/* Pickup Point */}
          <div style={{ marginBottom: "14px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#334155",
                marginBottom: "6px",
              }}
            >
              <MapPin size={13} color="#d97706" /> Pickup Location in Dwarka
            </label>
            <input
              type="text"
              placeholder="e.g. Teen Batti Chowk, Dwarka Railway Station, or Hotel Name"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                fontSize: "0.875rem",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "#0f172a",
              }}
            />
          </div>

          {/* Name & Phone */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "6px",
                }}
              >
                <User size={13} color="#d97706" /> Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  fontSize: "0.875rem",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "6px",
                }}
              >
                <Phone size={13} color="#d97706" /> Contact Phone
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  fontSize: "0.875rem",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                }}
              />
            </div>
          </div>

          {/* Special Request */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#334155",
                marginBottom: "6px",
              }}
            >
              Additional Notes (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Senior citizens with us, luggage space needed, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 12px",
                fontSize: "0.875rem",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "#0f172a",
              }}
            />
          </div>



          {/* Submit Button */}
          <button
            type="submit"
            className="btn-whatsapp"
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "1rem",
              borderRadius: "10px",
            }}
          >
            <MessageSquare size={18} />
            Send Booking Request via WhatsApp
          </button>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              color: "#64748b",
              marginTop: "10px",
            }}
          >
            Direct communication • No advance payment required online • Pay after tour
          </p>
        </form>
      </div>
    </div>
  );
}

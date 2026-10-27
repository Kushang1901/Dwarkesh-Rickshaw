"use client";

import React, { useState, useEffect } from "react";
import { OWNER_INFO } from "@/data/toursData";
import { buildWhatsAppBookingUrl } from "@/utils/whatsapp";
import { Calendar, Clock, Users, MapPin, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";

export default function QuickBookCard({ defaultPackage = "Dwarka Darshan", defaultShift = "07:30 AM To 01:00 PM" }) {
  const [packageName, setPackageName] = useState(defaultPackage);
  const [shift, setShift] = useState(defaultShift);
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState("3");
  const [pickup, setPickup] = useState("Teen Batti Chowk, Dwarka");
  const [name, setName] = useState("");

  useEffect(() => {
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    const yyyy = tmrw.getFullYear();
    const mm = String(tmrw.getMonth() + 1).padStart(2, "0");
    const dd = String(tmrw.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = buildWhatsAppBookingUrl({
      name,
      packageName,
      shift,
      date,
      persons,
      pickup,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "28px 24px",
        boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
        border: "1px solid #e2e8f0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#b45309",
            backgroundColor: "#fffbeb",
            padding: "4px 10px",
            borderRadius: "9999px",
            border: "1px solid #fef3c7",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Sparkles size={12} />
          DIRECT WHATSAPP BOOKING
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "#15803d",
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <ShieldCheck size={14} /> Instant Response
        </span>
      </div>

      <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>
        Reserve Your Riksha
      </h3>
      <p style={{ fontSize: "0.8125rem", color: "#64748b", marginBottom: "20px" }}>
        Enter tour preferences &amp; send pre-formatted booking via WhatsApp.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Tour Package */}
        <div>
          <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
            Select Darshan Tour
          </label>
          <select
            value={packageName}
            onChange={handlePackageChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              fontSize: "0.875rem",
              fontWeight: 500,
              backgroundColor: "#ffffff",
              color: "#0f172a",
            }}
          >
            <option value="Dwarka Darshan">Dwarka Darshan (8 Spots Tour)</option>
            <option value="Somanath Darshan">Somanath Darshan (Coastal Highway Tour)</option>
            <option value="Custom Tour">Custom Pilgrimage Sightseeing</option>
          </select>
        </div>

        {/* Shift Timing */}
        <div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#334155",
              marginBottom: "4px",
            }}
          >
            <Clock size={13} color="#d97706" /> Timing Shift
          </label>
          <select
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              fontSize: "0.875rem",
              fontWeight: 500,
              backgroundColor: "#ffffff",
              color: "#0f172a",
            }}
          >
            {packageName === "Dwarka Darshan" ? (
              <>
                <option value="07:30 AM To 01:00 PM">07:30 AM To 01:00 PM (Morning Shift)</option>
                <option value="01:30 PM To 07:00 PM">01:30 PM To 07:00 PM (Afternoon / Sunset)</option>
              </>
            ) : (
              <>
                <option value="07:30 AM Departure">07:30 AM Morning Departure</option>
                <option value="09:30 AM Departure">09:30 AM Regular Departure</option>
                <option value="03:30 PM Departure">03:30 PM Afternoon Departure</option>
              </>
            )}
          </select>
        </div>

        {/* Date and Passengers */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#334155",
                marginBottom: "4px",
              }}
            >
              <Calendar size={13} color="#d97706" /> Date
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 10px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "0.8125rem",
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
                marginBottom: "4px",
              }}
            >
              <Users size={13} color="#d97706" /> Persons
            </label>
            <select
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 10px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "0.8125rem",
                fontWeight: 500,
                backgroundColor: "#ffffff",
                color: "#0f172a",
              }}
            >
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5+">5+ Persons</option>
            </select>
          </div>
        </div>

        {/* Pickup and Name */}
        <div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#334155",
              marginBottom: "4px",
            }}
          >
            <MapPin size={13} color="#d97706" /> Pickup Point in Dwarka
          </label>
          <input
            type="text"
            placeholder="e.g. Teen Batti Chowk / Hotel Name"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            style={{
              width: "100%",
              padding: "9px 12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              fontSize: "0.8125rem",
              color: "#0f172a",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
            Your Name (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Ramesh Bhai"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "9px 12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              fontSize: "0.8125rem",
              color: "#0f172a",
            }}
          />
        </div>

        <button
          type="submit"
          className="btn-whatsapp"
          style={{
            marginTop: "6px",
            padding: "13px",
            fontSize: "0.9375rem",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <MessageSquare size={17} />
          Book Tour via WhatsApp
        </button>

      </form>
    </div>
  );
}

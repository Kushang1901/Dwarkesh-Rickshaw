"use client";

import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext({
  isOpen: false,
  initialPackage: "Dwarka Darshan",
  initialShift: "",
  openBooking: () => {},
  closeBooking: () => {},
});

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPackage, setInitialPackage] = useState("Dwarka Darshan");
  const [initialShift, setInitialShift] = useState("");

  const openBooking = (pkgName = "Dwarka Darshan", shift = "") => {
    setInitialPackage(pkgName);
    setInitialShift(shift);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        initialPackage,
        initialShift,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

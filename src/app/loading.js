import React from "react";
import LogoSpinner from "@/components/LogoSpinner";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <LogoSpinner size={110} showText={true} />
    </div>
  );
}

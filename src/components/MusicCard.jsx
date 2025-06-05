import React from "react";
import album from "../assets/music.jpg"

export default function MusicCard() {
  return (
    <div
      style={{
        height: "100px",
        width: "382px",
        backgroundColor: "#EBE9DD",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        padding: "15px",
        boxSizing: "border-box",
        gap: "15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
            height: "80px",
            width: "80px",
            borderRadius: "10%",
            backgroundImage: `url(${album})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
          }}
      ></div>

      <div style={{ flexGrow: 1 }}>
        <h3
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Janaki
        </h3>
        <p
          style={{
            marginTop: "6px",
            marginBottom: 0,
            fontSize: "14px",
            color: "#666",
          }}
        >
          Manasi Gautam
        </p>
      </div>

      <button
        style={{
          backgroundColor: "#F2D354",
          border: "none",
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F2D354")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F2D354")}
        aria-label="Play"
      >
        ►
      </button>
    </div>
  );
}

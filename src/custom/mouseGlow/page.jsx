"use client";
import React, { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-[60] mix-blend-screen transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${pos.x - 192}px, ${pos.y - 192}px)`,
        background:
          "radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)",
      }}
    />
  );
};

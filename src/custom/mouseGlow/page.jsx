"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

/* ── Soft glow cursor (used on Home page) ── */
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

/* ── Ring cursor (used on About / Works / Blogs / Contact pages) ── */
export const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const springConfig = { stiffness: 400, damping: 28 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const interactables = document.querySelectorAll("a, button, [data-hover]");
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          borderColor: hovered ? "#c084fc" : "rgba(167,139,250,0.5)",
          backgroundColor: hovered ? "rgba(167,139,250,0.15)" : "transparent",
        }}
        className="fixed top-[-20px] left-[-20px] w-10 h-10 rounded-full border border-violet-400 pointer-events-none z-[9999]"
      />
      {/* Inner Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{ scale: clicked ? 1.5 : 1 }}
        className="fixed top-[-4px] left-[-4px] w-2 h-2 rounded-full bg-violet-400 pointer-events-none z-[10000]"
      />
    </>
  );
};

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/pages/Header/page";
import MainContent from "@/pages/MainContent/page";
import Image from "@/pages/photo/page";
import logo from "../Images/logo.png";

const text = "Welcome to Dev Sharma’s Portfolio";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Random animation direction for letters
  const randomDirection = () => {
    const dirs = [-50, 50];
    return dirs[Math.floor(Math.random() * dirs.length)];
  };

  return (
    <AnimatePresence mode="wait">
      {showLanding ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden z-[9999]"
        >
          <motion.img
            src="/logo.png"
            alt="Logo"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1 }}
            className="w-20 h-20 mb-6"
          />

          <motion.div className="flex flex-wrap justify-center text-3xl md:text-5xl font-bold text-center px-4">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{
                  x: randomDirection(),
                  y: randomDirection(),
                  opacity: 0,
                }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ) : (
        // Main content with entry animation
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="sm:min-h-screen h-fit"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-screen sm:px-4 lg:px-32 gap-4 z-20">
            <Header />
            <MainContent />
            <Image />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

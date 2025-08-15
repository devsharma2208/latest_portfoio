"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/pages/Header/page";
import MainContent from "@/pages/MainContent/page";
import Image from "@/pages/photo/page";
import { FaEnvelope, FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";

const text = "Welcome to Dev Sharma’s Portfolio";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      const hasSeenLanding = sessionStorage.getItem("seenLanding");
      if (!hasSeenLanding) {
        setShowLanding(true);
        sessionStorage.setItem("seenLanding", "true");

        const timer = setTimeout(() => {
          setShowLanding(false);
        }, 5000);

        return () => clearTimeout(timer);
      }
    }
  }, [hasMounted]);

  const randomDirection = () => {
    const dirs = [-50, 50];
    return dirs[Math.floor(Math.random() * dirs.length)];
  };

  // 🛡 Prevent SSR mismatch
  if (!hasMounted) return null;

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
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="sm:min-h-screen h-fit"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-screen sm:px-4 bg-black lg:px-32 gap-4 z-20">
            <Header className="order-1 lg:order-none" />
            <MainContent className="order-2 md:order-3" />
            <Image className="order-3 md:order-2" />
          </div>
          <div className="fixed top-0 right-6 md:flex hidden flex-col items-center gap-10 z-50 h-screen justify-center">
            <a
              href="https://www.linkedin.com/in/dev-sharma-007301173/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white rounded-full shadow-lg animate-pulse"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://github.com/devsharma2208"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#171515] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://topmate.io/dev_sharma28"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#4B0082] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              title="Topmate"
            >
              <FaUserTie size={22} />
            </a>

            <a
              href="mailto:devsharmaelc@gmail.com"
              className="w-12 h-12 flex items-center justify-center bg-[#D44638] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              title="Gmail"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

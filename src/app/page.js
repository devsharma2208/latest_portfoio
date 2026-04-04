"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/pages/Header/page";
import MainContent from "@/pages/MainContent/page";
import Image from "@/pages/photo/page";
import { FaEnvelope, FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";

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
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {showLanding ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden z-[9999]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_20px_white]">
              <span className="text-3xl font-black">D</span>
            </div>
            DEV SHARMA
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="h-[2px] bg-white/20 mt-8 overflow-hidden rounded-full relative"
          >
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="h-full w-1/3 bg-white absolute top-0"
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-white selection:text-black relative overflow-x-hidden"
        >
          {/* Subtle Ambient Radial Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

          {/* Grid Background Pattern */}
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

          {/* Top Navbar Container */}
          <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-2 lg:pt-6 px-4">
            <Header />
          </div>

          {/* Main Layout Area */}
          <div className="max-w-[1400px] mx-auto w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20 relative z-10 gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center order-2 lg:order-1 relative">
              <MainContent />
            </div>

            {/* Right Photo Area */}
            <div className="w-full lg:w-[45%] flex items-center justify-center order-1 lg:order-2">
              <Image />
            </div>
          </div>

          {/* Modern Social Links footer on mobile / Floating sidebar on large screens */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 left-0 lg:left-8 w-full lg:w-auto flex flex-row lg:flex-col items-center justify-center gap-6 z-50 py-4 lg:py-6 px-6 lg:px-4 bg-black/60 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-t border-white/10 lg:border-none"
          >
            <div className="hidden lg:block w-[1px] h-12 bg-white/20 mb-2"></div>
            
            <a href="https://www.linkedin.com/in/dev-sharma-007301173/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-125">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/devsharma2208" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-125">
              <FaGithub size={22} />
            </a>
            <a href="https://topmate.io/dev_sharma28" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-125">
              <FaUserTie size={20} />
            </a>
            <a href="mailto:devsharmaelc@gmail.com" className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-125">
              <FaEnvelope size={20} />
            </a>

            <div className="hidden lg:block w-[1px] h-12 bg-white/20 mt-2"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "@/pages/Header/page";
import MainContent from "@/pages/MainContent/page";
import Image from "@/pages/photo/page";
import { FaEnvelope, FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  const { scrollY } = useScroll();
  const avatarTop = useTransform(scrollY, [0, 400], ["25vh", "16px"]);
  const avatarLeft = useTransform(scrollY, [0, 400], ["5vw", "16px"]);
  const avatarScale = useTransform(scrollY, [0, 400], [1, 0.15]);

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
          className="w-full bg-[#0d0d0d] text-zinc-100 font-sans selection:bg-teal-500 selection:text-white relative"
        >
          {/* Subtle Dot Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Top Navbar Container */}
          <div className="absolute top-0 left-0 w-full flex justify-center z-50 pt-4 lg:pt-6 px-4">
            <Header />
          </div>

          {/* Dynamic Scrolling Avatar */}
          {/* <motion.div 
            style={{ top: avatarTop, left: avatarLeft, scale: avatarScale }}
            className="fixed z-[100] origin-top-left hidden md:block w-[300px] pointer-events-none"
          >
            <Image />
          </motion.div> */}

          {/* Trendy Vertical Scrolling Layout */}
          <div className="w-full flex flex-col items-center justify-start relative z-10 pt-[100px] lg:pt-[150px] overflow-visible">
            {/* HERO SECTION */}
            <div className="w-full mx-auto px-4 flex flex-col items-center justify-center relative mb-32">
              {/* Ambient Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

              {/* Centered Main Typography Component */}
              <MainContent />
            </div>

            {/* SCROLLING SECTIONS: TECH STACK & EXPERTISE */}
            <div className="w-full max-w-[1200px] mx-auto px-4 py-24 border-t border-white/5 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#121212] flex flex-col justify-between to-transparent -z-10"></div>

              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">
                  The toolkit for modern web.
                </h2>
                <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                  Leveraging the best technologies to build scalable, secure,
                  and beautiful applications from end to end.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
                {/* Card 1 */}
                <div className="bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 hover:bg-blue-900/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-blue-400 mb-6 text-xl">
                    🚀
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Frontend Excellence
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Expertise in building complex interfaces using React,
                    Next.js, and modern CSS architectures.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["React", "Next.js", "Tailwind", "Framer"].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white/5 rounded-md text-xs text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 hover:bg-purple-900/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-purple-400 mb-6 text-xl">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Backend Architecture
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Designing robust, scalable APIs and microservices using MERN
                    stack and secure cloud infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Node.js", "Express", "MongoDB", "AWS"].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white/5 rounded-md text-xs text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-emerald-500/30 hover:bg-emerald-900/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-emerald-400 mb-6 text-xl">
                    🧠
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AI Integration
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Bridging the gap between software and intelligence by
                    embedding state-of-the-art AI into applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["OpenAI", "LLMs", "Vector DBs", "Python"].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white/5 rounded-md text-xs text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-full flex items-center justify-center gap-8 py-12 mt-12 bg-[#0a0a0a] border-t border-white/5 z-50"
            >
              <a
                href="https://www.linkedin.com/in/dev-sharma-007301173/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/devsharma2208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://topmate.io/dev_sharma28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaUserTie size={22} />
              </a>
              <a
                href="mailto:devsharmaelc@gmail.com"
                className="text-zinc-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaEnvelope size={22} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

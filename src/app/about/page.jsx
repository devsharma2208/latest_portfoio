"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/pages/Header/page";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDownload,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaGlobe,
  FaLanguage,
  FaBirthdayCake,
  FaUser,
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

/* ================= CURSOR GLOW ================= */
function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-50 mix-blend-screen"
      style={{
        transform: `translate(${pos.x - 192}px, ${pos.y - 192}px)`,
        background:
          "radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)",
      }}
    />
  );
}

/* ================= NOISE ================= */
function Noise() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-40 opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "256px 256px",
      }}
    />
  );
}

/* ================= CIRCULAR PROGRESS ================= */
function SkillCircle({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { percent, color, icon: Icon, name } = skill;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percent) / 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative flex flex-col items-center"
    >
      <div
        className="relative"
        style={{
          animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
          animationDelay: `${index * 0.2}s`,
        }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
          style={{ backgroundColor: `${color}15` }}
        />

        {/* Background circle glow */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-20"
          style={{ backgroundColor: color }}
        />

        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Track */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="5"
              fill="rgba(255,255,255,0.02)"
            />
            {/* Progress */}
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              stroke={color}
              strokeWidth="5"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={
                isInView
                  ? { strokeDashoffset: offset }
                  : { strokeDashoffset: circumference }
              }
              transition={{
                duration: 1.8,
                delay: index * 0.1 + 0.3,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              style={{
                filter: `drop-shadow(0 0 6px ${color}80)`,
              }}
            />
          </svg>

          {/* Icon + percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon className="text-xl sm:text-2xl mb-0.5" style={{ color }} />
            <span
              className="text-[10px] sm:text-xs font-bold tabular-nums"
              style={{ color }}
            >
              {percent}%
            </span>
          </div>
        </div>
      </div>

      {/* Label */}
      <p className="mt-4 text-xs sm:text-sm text-zinc-500 group-hover:text-zinc-200 transition-colors duration-500 font-medium">
        {name}
      </p>
    </motion.div>
  );
}

/* ================= INFO FIELD ================= */
function InfoField({ icon: Icon, label, value, color = "#a855f7" }) {
  return (
    <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-all duration-300">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/[0.06] transition-all duration-300 group-hover:border-white/[0.12]"
        style={{ backgroundColor: `${color}08` }}
      >
        <Icon className="text-xs" style={{ color: `${color}cc` }} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-0.5">
          {label}
        </p>
        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-300 truncate">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function AboutPage() {
  const skills = [
    { name: "HTML", percent: 90, color: "#E34F26", icon: FaHtml5 },
    { name: "CSS", percent: 90, color: "#1572B6", icon: FaCss3Alt },
    { name: "JavaScript", percent: 85, color: "#F7DF1E", icon: FaJs },
    { name: "React", percent: 90, color: "#61DAFB", icon: FaReact },
    { name: "Next.js", percent: 80, color: "#c0c0c0", icon: SiNextdotjs },
    {
      name: "Tailwind CSS",
      percent: 85,
      color: "#38BDF8",
      icon: SiTailwindcss,
    },
    { name: "Node.js", percent: 80, color: "#68A063", icon: FaNodeJs },
    { name: "Express.js", percent: 75, color: "#A0AEC0", icon: SiExpress },
    { name: "MongoDB", percent: 75, color: "#4DB33D", icon: SiMongodb },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  return (
    <div className="bg-[#030303] text-white min-h-screen overflow-x-hidden select-none">
      <Noise />
      <CursorGlow />
      <Header />

      {/* Reduced gap from pt-40 to pt-24 to bring content closer to Header */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Background orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/[0.05] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-fuchsia-600/[0.04] blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/[0.03] blur-[160px] pointer-events-none" />

        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-[14px] font-bold uppercase tracking-[0.4em] text-purple-400/70 mb-6"
          >
            Portfolio Overview
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95]"
          >
            My Skills{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              &
            </span>{" "}
            Profile
          </motion.h1>

          {/* Stylish underline */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-6 flex justify-center"
          >
            <div className="relative">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
            </div>
          </motion.div>
        </motion.div>

        {/* ===== MAIN TWO-COLUMN LAYOUT ===== */}
        {/* Removed 'items-start' to allow height stretching */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ===== LEFT: PERSONAL INFO CARD ===== */}
          {/* Added h-full to make column stretch */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5 h-full"
          >
            <div className="group relative h-full flex flex-col">
              {/* Card outer glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/[0.08] via-fuchsia-500/[0.04] to-indigo-500/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />

              <div className="relative h-full flex flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                {/* Top gradient bar */}
                <div className="h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

                {/* Card inner glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-500/[0.03] to-transparent pointer-events-none" />

                <div className="relative p-6 sm:p-8 flex flex-col h-full">
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/20">
                        DS
                      </div>
                      {/* Status dot */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#030303]">
                        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold tracking-tight text-white">
                        Dev Sharma
                      </h2>
                      <p className="text-sm text-purple-400 font-medium">
                        MERN Stack Developer
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-transparent mb-6" />

                  {/* Info fields */}
                  <div className="space-y-1 text-3xl font-semibold">
                    <InfoField
                      icon={FaUser}
                      label="Full Name"
                      value="Dev Sharma"
                      color="#a855f7"
                    />
                    <InfoField
                      icon={FaBriefcase}
                      label="Role"
                      value="MERN Stack Developer"
                      color="#f472b6"
                    />
                    <InfoField
                      icon={FaBirthdayCake}
                      label="Date of Birth"
                      value="22 Aug 2001"
                      color="#fb923c"
                    />
                    <InfoField
                      icon={FaGlobe}
                      label="Nationality"
                      value="Indian"
                      color="#38bdf8"
                    />
                    <InfoField
                      icon={FaLanguage}
                      label="Languages"
                      value="English, Hindi"
                      color="#a3e635"
                    />
                    <InfoField
                      icon={FaMapMarkerAlt}
                      label="Location"
                      value="Saharanpur, Uttar Pradesh"
                      color="#f87171"
                    />
                    <InfoField
                      icon={FaLocationArrow}
                      label="Current Location"
                      value="Dehradun"
                      color="#c084fc"
                    />
                    <InfoField
                      icon={FaPhone}
                      label="Phone"
                      value="+91 7668776421"
                      color="#34d399"
                    />
                    <InfoField
                      icon={FaEnvelope}
                      label="Email"
                      value="devsharmaelc@gmail.com"
                      color="#60a5fa"
                    />
                    <InfoField
                      icon={FaBriefcase}
                      label="Organisation"
                      value="Pearl Organisation"
                      color="#fbbf24"
                    />
                  </div>

                  {/* Spacer to push footer down if needed */}
                  <div className="flex-grow"></div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-transparent my-6" />

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/[0.06] transition-all duration-300"
                    >
                      <FaLinkedin className="text-sm" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <FaGithub className="text-sm" />
                    </a>

                    {/* Download CV Button */}
                    <motion.a
                      href="/resume.pdf"
                      download
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold tracking-wide hover:shadow-lg hover:shadow-purple-500/20 transition-shadow duration-500"
                    >
                      <FaDownload className="text-[10px]" />
                      Download CV
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT: SKILLS VISUALIZATION ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="lg:col-span-7 h-full"
          >
            <div className="group relative h-full flex flex-col">
              {/* Card outer glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/[0.06] via-purple-500/[0.03] to-fuchsia-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />

              <div className="relative h-full flex flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                {/* Top gradient bar */}
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500" />

                {/* Inner glow */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-500/[0.03] to-transparent pointer-events-none" />

                <div className="relative p-6 sm:p-10 flex flex-col h-full">
                  {/* Section heading */}
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        Technical Proficiency
                      </h3>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
                        Frontend & Backend Technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex-grow grid grid-cols-3 sm:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 place-items-center content-center">
                    {skills.map((skill, i) => (
                      <SkillCircle key={i} skill={skill} index={i} />
                    ))}
                  </div>

                  {/* Bottom stats bar */}
                  <div className="mt-8 pt-8 border-t border-white/[0.04]">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {[
                        { label: "Frontend", value: "5", color: "#a855f7" },
                        { label: "Backend", value: "3", color: "#6366f1" },
                        { label: "Database", value: "1", color: "#f472b6" },
                      ].map((stat, i) => (
                        <div key={i} className="group/stat">
                          <p
                            className="text-2xl font-bold tabular-nums"
                            style={{ color: stat.color }}
                          >
                            {stat.value}
                          </p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== BOTTOM DECORATIVE ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-zinc-700">
            Designed & Built by Dev Sharma
          </p>
        </motion.div>
      </main>

      {/* ===== KEYFRAMES ===== */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}
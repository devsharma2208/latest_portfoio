"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/pages/Header/page";
import Footer from "@/custom/Footer/page";
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
  FaUser,
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
  FaBrain, 
  FaGraduationCap, // Added for Education Title
  FaCertificate,   // Added for Certification/Newton School
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFastapi, 
} from "react-icons/si";
import { CursorGlow, CustomCursor } from "@/custom/mouseGlow/page";

/* ================= NOISE ================= */
function Noise() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-40 opacity-40"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
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
        <div
          className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
          style={{ backgroundColor: `${color}15` }}
        />
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-20"
          style={{ backgroundColor: color }}
        />

        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="5"
              fill="rgba(255,255,255,0.02)"
            />
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

      <p className="mt-4 text-xs sm:text-sm text-zinc-500 group-hover:text-zinc-200 transition-colors duration-500 font-medium text-center max-w-[90px] sm:max-w-none">
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
    { name: "ML", percent: 75, color: "#FF6F61", icon: FaBrain },
    { name: "LLM", percent: 80, color: "#A855F7", icon: FaBrain },
    { name: "LangChain", percent: 70, color: "#1C3D5A", icon: FaBrain },
    { name: "FastAPI", percent: 80, color: "#009688", icon: SiFastapi },
  ];

  // Professional Experience Array
  const experience = [
    {
      role: "Full Stack Developer",
      company: "Centrelocus",
      type: "Full Time",
      duration: "Mar 2026 - Present",
      location: "Dehradun, Uttarakhand, India (On-site)",
      description: "Leading MERN & Next.js architecture development while implementing advanced, scalable backend logic alongside customized AI tools and performance rendering optimization frameworks.",
    },
    {
      role: "MERN Stack & React Native Developer",
      company: "Pearl Organisation",
      type: "Full Time",
      duration: "Sep 2024 - Dec 2025",
      location: "Dehradun, Uttarakhand, India (On-site)",
      description: "Designed, integrated, and maintained multi-platform applications using React Native. Engineered dynamic dashboards using the MERN ecosystem with real-time analytics data pipelines.",
    },
    {
      role: "Front End Developer",
      company: "Byteworld IT Services",
      type: "Full Time",
      duration: "Mar 2024 - Aug 2024",
      location: "Gurugram, Haryana, India (On-site)",
      description: "Spearheaded front-end responsive modern design systems. Focused on building components layout optimization, high-speed loading assets pipelines, and smooth user flow state handling.",
    },
  ];

  // Education Array
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Technical University", 
      duration: "2025 - 2027",
      status: "Completed",
      icon: FaGraduationCap,
      color: "#6366f1",
      description: "Advanced studies in computer architectures, enterprise software modeling, database systems optimization, data structures, and algorithmic principles.",
    },
    {
      degree: "Full Stack Web Development Program",
      institution: "Newton School",
      duration: "2023 - 2024",
      status: "Certification",
      icon: FaCertificate,
      color: "#10b981",
      description: "Immersive industrial coding Bootcamp specializing in MERN stack ecosystem. Mastered data architectures, modern state workflows, testing suites, and complex problem-solving patterns.",
    },
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
    <div className="bg-[#07070f] pt-20 text-white min-h-screen overflow-x-hidden select-none">
      <Noise />
      <CustomCursor />
      <Header />

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
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ===== LEFT: PERSONAL INFO CARD ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5 h-full"
          >
            <div className="group relative h-full flex flex-col">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/[0.08] via-fuchsia-500/[0.04] to-indigo-500/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />

              <div className="relative h-full flex flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-500/[0.03] to-transparent pointer-events-none" />

                <div className="relative p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/20">
                        DS
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#030303]">
                        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold tracking-tight text-white">
                        Dev Sharma
                      </h2>
                      <p className="text-sm text-purple-400 font-medium">
                        Full Stack & AI Developer
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-transparent mb-6" />

                  <div className="space-y-1 text-3xl font-semibold">
                    <InfoField icon={FaUser} label="Full Name" value="Dev Sharma" color="#a855f7" />
                    <InfoField icon={FaBriefcase} label="Role" value="MERN & AI Stack Developer" color="#f472b6" />
                    <InfoField icon={FaGlobe} label="Nationality" value="Indian" color="#38bdf8" />
                    <InfoField icon={FaLanguage} label="Languages" value="English, Hindi" color="#a3e635" />
                    <InfoField icon={FaMapMarkerAlt} label="Location" value="Saharanpur, Uttar Pradesh" color="#f87171" />
                    <InfoField icon={FaLocationArrow} label="Current Location" value="Dehradun" color="#c084fc" />
                    <InfoField icon={FaPhone} label="Phone" value="+91 7668776421" color="#34d399" />
                    <InfoField icon={FaEnvelope} label="Email" value="devsharmaelc@gmail.com" color="#60a5fa" />
                    <InfoField icon={FaBriefcase} label="Organisation" value="Centrelocus" color="#fbbf24" />
                  </div>

                  <div className="flex-grow"></div>
                  <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-transparent my-6" />

                  <div className="flex items-center gap-3">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/[0.06] transition-all duration-300">
                      <FaLinkedin className="text-sm" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                      <FaGithub className="text-sm" />
                    </a>

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
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-7 h-full"
          >
            <div className="group relative h-full flex flex-col">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/[0.06] via-purple-500/[0.03] to-fuchsia-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />

              <div className="relative h-full flex flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500" />
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-500/[0.03] to-transparent pointer-events-none" />

                <div className="relative p-6 sm:p-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">Technical Proficiency</h3>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">Full Stack & Intelligent Systems</p>
                    </div>
                  </div>

                  <div className="flex-grow grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 place-items-center content-center">
                    {skills.map((skill, i) => (
                      <SkillCircle key={i} skill={skill} index={i} />
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/[0.04]">
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {[
                        { label: "Frontend", value: "6", color: "#a855f7" },
                        { label: "Backend", value: "4", color: "#6366f1" },
                        { label: "Database", value: "1", color: "#f472b6" },
                        { label: "AI & ML", value: "3", color: "#10B981" },
                      ].map((stat, i) => (
                        <div key={i} className="group/stat">
                          <p className="text-xl sm:text-2xl font-bold tabular-nums" style={{ color: stat.color }}>{stat.value}</p>
                          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-zinc-600 mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== PROFESSIONAL EXPERIENCE TIMELINE ===== */}
        <section className="max-w-7xl mx-auto mt-32 px-2 sm:px-4">
          <div className="mb-16">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-purple-400/70 block mb-2">
              Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Professional Experience
            </h2>
          </div>

          <div className="relative border-l border-white/5 pl-6 ml-4 space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#07070f] border-2 border-purple-500 group-hover:bg-purple-400 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full hidden group-hover:block" />
                </div>

                <div className="bg-[#0c0c20]/40 hover:bg-[#0f0f29]/60 border border-white/[0.05] rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl backdrop-blur-sm group-hover:border-purple-500/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                        <span className="text-purple-400 font-medium">{exp.company}</span>
                        {exp.type && (
                          <span className="text-[10px] uppercase bg-white/5 px-2 py-0.5 rounded text-zinc-400 border border-white/5 tracking-wider">
                            {exp.type}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-start md:items-end">
                      <span className="text-xs font-bold text-purple-300/80 bg-purple-500/10 border border-purple-500/25 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="text-xs text-zinc-500 mt-2">{exp.location}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-4xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== ADDED: EDUCATION TIMELINE SECTION ===== */}
        <section className="max-w-7xl mx-auto mt-32 px-2 sm:px-4">
          <div className="mb-16">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-indigo-400/70 block mb-2">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Education & Certifications
            </h2>
          </div>

          <div className="relative border-l border-white/5 pl-6 ml-4 space-y-12">
            {education.map((edu, i) => {
              const EduIcon = edu.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Custom Timeline Dot Marker with Variable Color */}
                  <div 
                    className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#07070f] border-2 transition-colors duration-300 flex items-center justify-center"
                    style={{ borderColor: edu.color }}
                  >
                    <div className="w-1 h-1 bg-white rounded-full hidden group-hover:block" />
                  </div>

                  <div className="bg-[#0c0c20]/40 hover:bg-[#0f0f29]/60 border border-white/[0.05] rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl backdrop-blur-sm group-hover:border-white/[0.12]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Dynamic Floating Education/Bootcamp Icon */}
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.06] mt-1"
                          style={{ backgroundColor: `${edu.color}10`, borderColor: `${edu.color}30` }}
                        >
                          <EduIcon style={{ color: edu.color }} className="text-base" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                            <span className="text-zinc-300 font-medium">{edu.institution}</span>
                            {edu.status && (
                              <span 
                                className="text-[9px] font-bold uppercase px-2 py-0.5 rounded border tracking-wider"
                                style={{ color: edu.color, borderColor: `${edu.color}40`, backgroundColor: `${edu.color}08` }}
                              >
                                {edu.status}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right flex flex-col items-start md:items-end pl-14 md:pl-0">
                        <span className="text-xs font-semibold text-zinc-400 bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full whitespace-nowrap">
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-4xl pl-14 md:pl-14">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />

      {/* ===== KEYFRAMES + GLOBAL STYLES ===== */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

        * {
          user-select: none !important;
          -webkit-user-select: none !important;
          cursor: none !important;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #07070f;
          overflow-x: hidden;
          margin: 0;
          font-family: "DM Sans", sans-serif;
        }

        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #07070f;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #7c3aed;
        }

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
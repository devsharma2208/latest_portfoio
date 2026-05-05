"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Header from "@/pages/Header/page";

/* ── 1. ADVANCED CUSTOM CURSOR WITH PHYSICS ── */
const CustomCursor = () => {
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

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const interactables = document.querySelectorAll("a, button, [data-hover]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
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
        style={{
          position: "fixed", top: -20, left: -20, width: 40, height: 40,
          borderRadius: "50%", border: "1.5px solid #a78bfa",
          pointerEvents: "none", zIndex: 9999, x: mouseX, y: mouseY,
          backgroundColor: hovered ? "rgba(167,139,250,0.15)" : "transparent",
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          borderColor: hovered ? "#c084fc" : "rgba(167,139,250,0.5)",
        }}
      />
      {/* Inner Dot */}
      <motion.div
        style={{
          position: "fixed", top: -4, left: -4, width: 8, height: 8,
          borderRadius: "50%", background: "#a78bfa",
          pointerEvents: "none", zIndex: 10000, x: mouseX, y: mouseY,
        }}
        animate={{ scale: clicked ? 1.5 : 1 }}
      />
    </>
  );
};

/* ── NOISE OVERLAY ── */
const Noise = () => (
  <div style={{
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
    opacity: 0.4,
  }} />
);

const SectionLabel = ({ children }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    fontSize: 10, fontWeight: 700, letterSpacing: "0.22em",
    textTransform: "uppercase", color: "#a78bfa",
    padding: "6px 14px", borderRadius: 999,
    border: "1px solid rgba(167,139,250,0.25)",
    background: "rgba(167,139,250,0.07)",
  }}>
    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#a78bfa", display: "inline-block" }} />
    {children}
  </span>
);

/* ── FEATURED CARD ── */
const FeaturedCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [entered, setEntered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      style={{
        position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr",
        borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)",
        background: "#0d0d1a", minHeight: 420,
      }}
    >
      {entered && (
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
          background: `radial-gradient(500px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(124,58,237,0.1) 0%, transparent 70%)`,
        }} />
      )}

      <div style={{ position: "relative", order: isEven ? 0 : 1, overflow: "hidden" }}>
        <div style={{
          height: "100%", width: "100%",
          backgroundImage: `url(${project.img?.default?.src || project.img?.src || ""})`,
          backgroundSize: ["Casham", "3B Profiles"].includes(project.title) ? "contain" : "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: entered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.8s ease",
          padding: ["Casham", "3B Profiles"].includes(project.title) ? "40px" : "0px",
        }} />
      </div>

      <div style={{ padding: "50px", display: "flex", flexDirection: "column", justifyContent: "center", order: isEven ? 1 : 0 }}>
        <SectionLabel>{project.tech}</SectionLabel>
        <h2 style={{ fontSize: "2.5rem", fontFamily: "'Bebas Neue', sans-serif", margin: "20px 0", color: entered ? "#e9d5ff" : "#fff" }}>{project.title}</h2>
        <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{project.description}</p>
        <div style={{ display: "flex", gap: 10, marginBottom: 30, flexWrap: "wrap" }}>
          {project.features.map(f => <span key={f} style={{ fontSize: 10, background: "rgba(255,255,255,0.05)", padding: "4px 10px", borderRadius: 4 }}>{f}</span>)}
        </div>
        <div style={{ display: "flex", gap: 15 }}>
          <Link href={project.live} target="_blank" style={{ background: "#7c3aed", color: "#fff", padding: "10px 20px", borderRadius: 12, fontSize: 13, fontWeight: "bold", textDecoration: "none" }}>Live Project</Link>
          <Link href={project.code} target="_blank" style={{ border: "1px solid #334155", color: "#94a3b8", padding: "10px 20px", borderRadius: 12, fontSize: 13, textDecoration: "none" }}>GitHub</Link>
        </div>
      </div>
    </motion.div>
  );
};

/* ── SMALL CARD ── */
const SmallCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    style={{ background: "#0d0d23", borderRadius: 20, padding: "20px", border: "1px solid rgba(255,255,255,0.05)", transition: "border-color 0.3s" }}
  >
    <div style={{ height: 160, borderRadius: 12, backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${project.img?.default?.src || project.img?.src || ""})`, marginBottom: 15, backgroundRepeat: "no-repeat" }} />
    <span style={{ fontSize: 10, color: "#a78bfa", fontWeight: "bold", trackingLetter: "1px", textTransform: "uppercase" }}>{project.tech}</span>
    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", margin: "8px 0 12px", color: "#fff" }}>{project.title}</h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 15 }}>
        {project.features?.slice(0, 3).map(f => (
            <span key={f} style={{ fontSize: 9, background: "rgba(255,255,255,0.03)", padding: "2px 8px", borderRadius: 4, color: "#64748b" }}>{f}</span>
        ))}
    </div>
    <div style={{ display: "flex", gap: 12, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "15px" }}>
      <Link href={project.live} target="_blank" style={{ color: "#a78bfa", fontSize: 12, fontWeight: "bold", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>Live <FaExternalLinkAlt size={10} /></Link>
      <Link href={project.code} target="_blank" style={{ color: "#475569", fontSize: 12, textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}><FaGithub size={13} /> Code</Link>
    </div>
  </motion.div>
);

/* ── TICKER ── */
const Ticker = ({ items }) => (
  <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "18px 0", overflow: "hidden" }}>
    <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ display: "flex", gap: 50, whiteSpace: "nowrap" }}>
      {[...items, ...items].map((item, i) => (
        <span key={i} style={{ fontSize: 12, fontWeight: "bold", color: "rgba(255,255,255,0.15)", letterSpacing: "3px" }}>{item.toUpperCase()} ✦</span>
      ))}
    </motion.div>
  </div>
);

/* ── MAIN COMPONENT ── */
export default function Works() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const featured = [
    { 
        title: "HeadGen AI", 
        tech: "MERN Stack · Tailwind", 
        img: require("../../Images/headGen.jpeg"), 
        description: "AI-powered headshot generation platform that creates professional portraits with customizable features — delivered in seconds.", 
        features: ["AI Headshots", "Stripe API", "Next.js", "Instant Delivery"], 
        live: "https://headgen.ai/", 
        code: "https://headgen.ai/" 
    },
    { 
        title: "Casham", 
        tech: "React Native", 
        img: require("../../Images/casham.jpg"), 
        description: "Mobile payment app enabling instant P2P transfers, QR-code scanning, and seamless wallet management for everyday transactions.", 
        features: ["QR Pay", "Wallet System", "Security", "P2P Transfer"], 
        live: "https://play.google.com/store/apps/details?id=com.casham&hl=en", 
        code: "https://play.google.com/store/apps/details?id=com.casham&hl=en" 
    },
    { 
        title: "3B Profiles", 
        tech: "React Native + MERN", 
        img: require("../../Images/3bProfiles.jpg"), 
        description: "B2B distributor networking platform with order management, inventory tracking, and a streamlined supply-chain workflow.", 
        features: ["Inventory Mgmt", "B2B Connect", "Order Flow"], 
        live: "https://play.google.com/store/apps/details?id=com.pearl.bprofiles&pli=1", 
        code: "https://play.google.com/store/apps/details?id=com.pearl.bprofiles&pli=1" 
    },
  ];

  const archive = [
    { 
        title: "Amazon Clone", 
        tech: "React JS, Redux", 
        img: require("../../Images/Amazon.png"), 
        features: ["Product Catalog", "Shopping Cart", "User Auth"], 
        live: "https://amazon-clon-tau.vercel.app/", 
        code: "https://github.com/devsharma2208/Amazon-Clon" 
    },
    { title: "Goibibo Clone", tech: "React JS", img: require("../../Images/Goibibo.png"), features: ["Flight Booking", "UI/UX"], live: "https://goibibo-clone-react-project-1-sobnc222vpo4.vercel.app/", code: "https://github.com/devsharma2208/Goibibo-Clone---React-Project-1---sobnc222vpo4" },
    { title: "Reddit Clone", tech: "React JS", img: require("../../Images/Reddit.png"), features: ["Subreddits", "Voting"], live: "https://reddit-react-clone-react-project-2-m2j8eo3lwprp.vercel.app/", code: "https://github.com/devsharma2208/Reddit-React-Clone---React-Project-2---m2j8eo3lwprp" },
    { title: "Star Portal", tech: "Next.js", img: require("../../Images/IntractiveWeb.png"), features: ["Animations", "GSAP"], live: "https://star-portal-wheat.vercel.app/", code: "https://github.com/devsharma2208/star_portal" },
    { title: "E-commerce Backend", tech: "Node.js · MongoDB", img: require("../../Images/backend1.jpg"), features: ["RESTful API", "JWT", "Express"], live: "https://github.com/devsharma2208/Full-Stack/tree/master/Backend", code: "https://github.com/devsharma2208/Full-Stack/tree/master/Backend" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');
        
        /* ── DISABLE SELECTION & COPY ── */
        * { 
          user-select: none !important; 
          -webkit-user-select: none !important; 
          -webkit-touch-callout: none !important;
          cursor: none !important; 
        }
        
        body { background: #07070f; margin: 0; overflow-x: hidden; }
        html { scroll-behavior: smooth; }
        a, button { cursor: none !important; }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #07070f; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #7c3aed; }
      `}</style>

      <CustomCursor />
      <Noise />

      <div style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
        <Header />

        {/* ── HERO SECTION WITH GAP ── */}
        <section ref={heroRef} style={{ 
          minHeight: "100vh", 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          paddingTop: "120px", // Header Gap
          position: "relative" 
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)" }} />

          <motion.div style={{ y: heroY, opacity: heroOpacity, textAlign: "center", zIndex: 2 }}>
            <SectionLabel>Selected Works — {featured.length + archive.length} Projects</SectionLabel>
            <h1 style={{ 
              fontSize: "clamp(3.5rem, 11vw, 8.5rem)", 
              fontFamily: "'Bebas Neue', sans-serif", 
              lineHeight: 0.85, 
              margin: "35px 0",
              letterSpacing: "-2px"
            }}>
              ENGINEERING<br />
              <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SYSTEMS</span>
            </h1>
            <p style={{ color: "#64748b", maxWidth: 550, margin: "0 auto 45px", fontSize: "18px", lineHeight: "1.6" }}>
              Building high-performance digital products with modern tech stacks and obsessive attention to detail.
            </p>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <div style={{ width: 1, height: 70, background: "linear-gradient(#7c3aed, transparent)", margin: "0 auto" }} />
            </motion.div>
          </motion.div>
        </section>

        <Ticker items={["React Native", "Next.js", "MERN Stack", "Tailwind CSS", "Framer Motion", "Node.js", "Redux", "Stripe"]} />

        {/* FEATURED PROJECTS */}
        <section style={{ maxWidth: 1200, margin: "100px auto", padding: "0 25px", display: "grid", gap: "70px" }}>
          <div style={{ marginBottom: "20px" }}>
            <SectionLabel>Premium Apps</SectionLabel>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", marginTop: "10px" }}>Featured Work</h2>
          </div>
          {featured.map((p, i) => <FeaturedCard key={i} project={p} index={i} />)}
        </section>

        {/* ARCHIVE PROJECTS (Includes Amazon, Backend, etc) */}
        <section style={{ maxWidth: 1200, margin: "100px auto", padding: "0 25px" }}>
          <div style={{ marginBottom: "40px" }}>
            <SectionLabel>The Archive</SectionLabel>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", marginTop: "10px" }}>More Projects</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "30px" }}>
            {archive.map((p, i) => <SmallCard key={i} project={p} index={i} />)}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "160px 25px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "80%", height: "300px", background: "radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)", zIndex: 0 }} />
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "4.5rem", position: "relative", zIndex: 1 }}>Let's Build Something Great</h2>
          <p style={{ color: "#64748b", marginBottom: "40px", fontSize: "18px" }}>Have a visionary project? Let's talk.</p>
          <Link href="/contact" style={{ 
            display: "inline-block", position: "relative", zIndex: 1, background: "#fff", color: "#000", 
            padding: "16px 45px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none",
            transition: "transform 0.3s"
          }} 
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            Work Together <FaArrowRight style={{ marginLeft: 10 }} />
          </Link>
        </section>

        <footer style={{ padding: "50px 25px", textAlign: "center", color: "#334155", fontSize: 13, borderTop: "1px solid rgba(255,255,255,0.05)", letterSpacing: "1px" }}>
          © {new Date().getFullYear()} DEV SHARMA. ENGINEERED WITH PASSION ✦
        </footer>
      </div>
    </>
  );
}
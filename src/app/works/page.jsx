"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

import Header from "@/pages/Header/page";
import Footer from "@/custom/Footer/page";

/* ── CUSTOM CURSOR ── */
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
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          borderColor: hovered ? "#c084fc" : "rgba(167,139,250,0.5)",
          backgroundColor: hovered ? "rgba(167,139,250,0.15)" : "transparent",
        }}
        className="fixed top-[-20px] left-[-20px] w-10 h-10 rounded-full border border-violet-400 pointer-events-none z-[9999]"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: clicked ? 1.5 : 1,
        }}
        className="fixed top-[-4px] left-[-4px] w-2 h-2 rounded-full bg-violet-400 pointer-events-none z-[10000]"
      />
    </>
  );
};

/* ── NOISE ── */
const Noise = () => (
  <div
    className="fixed inset-0 pointer-events-none z-[1] opacity-40"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
    }}
  />
);

/* ── LABEL ── */
const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase text-violet-400 px-[14px] py-[6px] rounded-full border border-violet-400/25 bg-violet-400/10">
    <span className="w-[5px] h-[5px] rounded-full bg-violet-400 inline-block" />
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

    setMouse({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    });
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
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="relative grid md:grid-cols-2 rounded-3xl overflow-hidden border border-white/5 bg-[#0d0d1a] min-h-[420px]"
    >
      {entered && (
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(500px circle at ${
              mouse.x * 100
            }% ${mouse.y * 100}%, rgba(124,58,237,0.1) 0%, transparent 70%)`,
          }}
        />
      )}

      <div
        className={`relative overflow-hidden ${isEven ? "order-1" : "order-2"}`}
      >
        <div
          className={`w-full h-full transition-transform duration-700 ${
            entered ? "scale-105" : "scale-100"
          } ${
            ["Casham", "3B Profiles"].includes(project.title)
              ? "bg-contain p-10"
              : "bg-cover"
          } bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${
              project.img?.default?.src || project.img?.src || ""
            })`,
          }}
        />
      </div>

      <div
        className={`p-8 md:p-12 flex flex-col justify-center ${
          isEven ? "order-2" : "order-1"
        }`}
      >
        <SectionLabel>{project.tech}</SectionLabel>

        <h2
          className={`text-5xl font-bold font-[Bebas_Neue] my-5 transition-colors duration-300 ${
            entered ? "text-violet-200" : "text-white"
          }`}
        >
          {project.title}
        </h2>

        <p className="text-slate-400 text-sm leading-7 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.features.map((f) => (
            <span
              key={f}
              className="text-[10px] bg-white/5 px-3 py-1 rounded-md"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <Link
            href={project.live}
            target="_blank"
            className="bg-violet-700 hover:bg-violet-600 transition text-white px-5 py-3 rounded-xl text-sm font-bold no-underline"
          >
            Live Project
          </Link>

          <Link
            href={project.code}
            target="_blank"
            className="border border-slate-700 text-slate-400 hover:text-white transition px-5 py-3 rounded-xl text-sm no-underline"
          >
            GitHub
          </Link>
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
    className="bg-[#0d0d23] rounded-3xl p-5 border border-white/5"
  >
    <div
      className="h-40 rounded-xl bg-cover bg-center bg-no-repeat mb-4"
      style={{
        backgroundImage: `url(${
          project.img?.default?.src || project.img?.src || ""
        })`,
      }}
    />

    <span className="text-[10px] uppercase tracking-[1px] text-violet-400 font-bold">
      {project.tech}
    </span>

    <h3 className="font-[Bebas_Neue] text-3xl text-white my-3">
      {project.title}
    </h3>

    <div className="flex flex-wrap gap-2 mb-5">
      {project.features?.slice(0, 3).map((f) => (
        <span
          key={f}
          className="text-[9px] bg-white/5 px-2 py-1 rounded text-slate-500"
        >
          {f}
        </span>
      ))}
    </div>

    <div className="flex gap-4 border-t border-white/5 pt-4">
      <Link
        href={project.live}
        target="_blank"
        className="text-violet-400 text-xs font-bold no-underline flex items-center gap-1"
      >
        Live <FaExternalLinkAlt size={10} />
      </Link>

      <Link
        href={project.code}
        target="_blank"
        className="text-slate-600 text-xs no-underline flex items-center gap-1"
      >
        <FaGithub size={13} /> Code
      </Link>
    </div>
  </motion.div>
);

/* ── TICKER ── */
const Ticker = ({ items }) => (
  <div className="border-y border-white/5 py-5 overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-12 whitespace-nowrap"
    >
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="text-xs font-bold text-white/15 tracking-[3px]"
        >
          {item.toUpperCase()} ✦
        </span>
      ))}
    </motion.div>
  </div>
);

/* ── MAIN ── */
export default function Works() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const featured = [
    {
      title: "HeadGen AI",
      tech: "MERN Stack · Tailwind",
      img: require("../../Images/headGen.jpeg"),
      description:
        "AI-powered headshot generation platform that creates professional portraits with customizable features — delivered in seconds.",
      features: ["AI Headshots", "Stripe API", "Next.js", "Instant Delivery"],
      live: "https://headgen.ai/",
      code: "https://headgen.ai/",
    },
    {
      title: "Casham",
      tech: "React Native",
      img: require("../../Images/casham.jpg"),
      description:
        "Mobile payment app enabling instant P2P transfers, QR-code scanning, and seamless wallet management for everyday transactions.",
      features: ["QR Pay", "Wallet System", "Security", "P2P Transfer"],
      live: "https://play.google.com/store/apps/details?id=com.casham&hl=en",
      code: "https://play.google.com/store/apps/details?id=com.casham&hl=en",
    },
    {
      title: "3B Profiles",
      tech: "React Native + MERN",
      img: require("../../Images/3bProfiles.jpg"),
      description:
        "B2B distributor networking platform with order management, inventory tracking, and a streamlined supply-chain workflow.",
      features: ["Inventory Mgmt", "B2B Connect", "Order Flow"],
      live: "https://play.google.com/store/apps/details?id=com.pearl.bprofiles&pli=1",
      code: "https://play.google.com/store/apps/details?id=com.pearl.bprofiles&pli=1",
    },
  ];

  const archive = [
    {
      title: "Amazon Clone",
      tech: "React JS, Redux",
      img: require("../../Images/Amazon.png"),
      features: ["Product Catalog", "Shopping Cart", "User Auth"],
      live: "https://amazon-clon-tau.vercel.app/",
      code: "https://github.com/devsharma2208/Amazon-Clon",
    },
    {
      title: "Goibibo Clone",
      tech: "React JS",
      img: require("../../Images/Goibibo.png"),
      features: ["Flight Booking", "UI/UX"],
      live: "https://goibibo-clone-react-project-1-sobnc222vpo4.vercel.app/",
      code: "https://github.com/devsharma2208/Goibibo-Clone---React-Project-1---sobnc222vpo4",
    },
    {
      title: "Reddit Clone",
      tech: "React JS",
      img: require("../../Images/Reddit.png"),
      features: ["Subreddits", "Voting"],
      live: "https://reddit-react-clone-react-project-2-m2j8eo3lwprp.vercel.app/",
      code: "https://github.com/devsharma2208/Reddit-React-Clone---React-Project-2---m2j8eo3lwprp",
    },
    {
      title: "Star Portal",
      tech: "Next.js",
      img: require("../../Images/IntractiveWeb.png"),
      features: ["Animations", "GSAP"],
      live: "https://star-portal-wheat.vercel.app/",
      code: "https://github.com/devsharma2208/star_portal",
    },
    {
      title: "E-commerce Backend",
      tech: "Node.js · MongoDB",
      img: require("../../Images/backend1.jpg"),
      features: ["RESTful API", "JWT", "Express"],
      live: "https://github.com/devsharma2208/Full-Stack/tree/master/Backend",
      code: "https://github.com/devsharma2208/Full-Stack/tree/master/Backend",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap");

        * {
          user-select: none !important;
          -webkit-user-select: none !important;
          -webkit-touch-callout: none !important;
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
      `}</style>

      <CustomCursor />
      <Noise />

      <div className="text-white relative">
        <Header />

        {/* HERO */}
        <section
          ref={heroRef}
          className="min-h-screen flex flex-col items-center justify-center pt-[120px] relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1)_0%,transparent_70%)]" />

          <motion.div
            style={{
              y: heroY,
              opacity: heroOpacity,
            }}
            className="text-center z-[2] px-5"
          >
            <SectionLabel>Selected Works — 8 Projects</SectionLabel>

            <h1 className="text-[clamp(2.5rem,11vw,6.5rem)] leading-[0.85] my-9 tracking-[-2px] font-[Bebas_Neue]">
              ENGINEERING
              <br />
              <span className="bg-gradient-to-br from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                SYSTEMS
              </span>
            </h1>

            <p className="text-slate-500 max-w-[550px] mx-auto mb-11 text-lg leading-8">
              Building high-performance digital products with modern tech stacks
              and obsessive attention to detail.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <div className="w-[1px] h-[70px] bg-gradient-to-b from-violet-700 to-transparent mx-auto" />
            </motion.div>
          </motion.div>
        </section>

        <Ticker
          items={[
            "React Native",
            "Next.js",
            "MERN Stack",
            "Tailwind CSS",
            "Framer Motion",
            "Node.js",
            "Redux",
            "Stripe",
          ]}
        />

        {/* FEATURED */}
        <section className="max-w-[1200px] mx-auto my-24 px-6 grid gap-[70px]">
          <div>
            <SectionLabel>Premium Apps</SectionLabel>

            <h2 className="font-[Bebas_Neue] text-6xl mt-3">Featured Work</h2>
          </div>

          {featured.map((p, i) => (
            <FeaturedCard key={i} project={p} index={i} />
          ))}
        </section>

        {/* ARCHIVE */}
        <section className="max-w-[1200px] mx-auto my-24 px-6">
          <div className="mb-10">
            <SectionLabel>The Archive</SectionLabel>

            <h2 className="font-[Bebas_Neue] text-5xl mt-3">More Projects</h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
            {archive.map((p, i) => (
              <SmallCard key={i} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-40 px-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[radial-gradient(ellipse,rgba(124,58,237,0.05)_0%,transparent_70%)] z-0" />

          <h2 className="font-[Bebas_Neue] text-7xl relative z-[1]">
            Let's Build Something Great
          </h2>

          <p className="text-slate-500 mb-10 text-lg">
            Have a visionary project? Let's talk.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center relative z-[1] bg-white text-black px-11 py-4 rounded-full font-bold no-underline hover:scale-105 transition"
          >
            Work Together
            <FaArrowRight className="ml-3" />
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
}

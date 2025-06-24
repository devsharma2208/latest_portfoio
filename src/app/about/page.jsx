// Installation command (run this in your project root)
// npm install framer-motion

"use client";
import Button from "@/custom/Button/page";
import Header from "@/pages/Header/page";
import CircularProgress from "@/pages/Progress_bar/page";
import React, { useRef, useEffect, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import confetti from "canvas-confetti";

// Animation wrapper
const AnimatedCard = ({ children, direction = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 40 });
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateMaxScroll = () => {
      const container = containerRef.current;
      const scroll = scrollRef.current;
      if (container && scroll) {
        const max = scroll.scrollWidth - container.clientWidth;
        setMaxScroll(max);
      }
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const onWheel = (e) => {
      e.preventDefault();
      const next = x.get() - e.deltaY;
      if (next <= 0 && Math.abs(next) <= maxScroll) {
        x.set(next);
      }
    };
    container?.addEventListener("wheel", onWheel, { passive: false });
    return () => container?.removeEventListener("wheel", onWheel);
  }, [x, maxScroll]);

  const data1 = [
    { title: "First Name", value: "Dev" },
    { title: "Last Name", value: "Sharma" },
    { title: "D.O.B", value: "22-08-2001" },
    { title: "Nationality", value: "Indian" },
    { title: "Language", value: "English, Hindi" },
  ];
  const data2 = [
    { title: "Address", value: "Saharanpur, Uttar Pradesh" },
    { title: "Current Address", value: "Dehradun" },
    { title: "Phone", value: "+917668776421" },
    { title: "Email", value: "devsharmaelc@gmail.com" },
    { title: "Current Organisation", value: "Pearl Organisation" },
  ];
  const timeline = [
    {
      type: "experience",
      year: "Sep / 2024 - Present",
      title: "MERN Stack Developer & React Native Developer",
      company: "Pearl Organisation",
      description:
        "MERN Stack & React Native Developer with hands-on experience in building dynamic, scalable web and mobile applications. Successfully created a finance and society management application with seamless UI and efficient backend integration.",
    },
    {
      type: "education",
      year: "Dec / 2024 - Present",
      title: "MCA",
      company: "Uttranchal University",
      description:
        "Pursuing a Master of Computer Applications (MCA) degree at Uttranchal University, focusing on advanced software development, database management, and IT solutions.",
    },
    {
      type: "experience",
      year: "March / 2024 - Aug / 2024",
      title: "Front end Developer",
      company: "ByteWorld It Services",
      description:
        "Completed a comprehensive Full Stack Development Certification from Newton School, with hands-on experience in building responsive web applications using technologies like HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. Gained practical knowledge through real-world projects and collaborative coding environments.",
    },
    {
      type: "education",
      year: "Jan / 2023 - June / 2024",
      title: "Full Stack Development Certificate",
      company: "Newtown School",
      description:
        "Completed Full Stack course using HTML, CSS, JS, React, Node, Express, MongoDB.",
    },
  ];
  const skillsValue = {
    html: { key: "90" },
    css: { key: "90" },
    javascript: { key: "85" },
    react: { key: "90" },
    nextjs: { key: "80" },
    tailwindcss: { key: "85" },
    reactNative: { key: "80" },
    nodejs: { key: "80" },
    expressjs: { key: "75" },
    mongoDB: { key: "75" },
  };

  const launchConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: Math.random(), y: Math.random() * 0.6 },
        })
      );
    }, 250);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 bg-black z-10 pb-10">
        <Header />
        <div className="flex justify-center items-center">
          <div className="relative flex items-center justify-center my-10">
            <h1 className="text-8xl font-[900] text-gray-800">RESUME</h1>
            <h1 className="absolute top-6 text-5xl font-[900] text-gray-100 flex gap-5">
              <span>ABOUT</span> <span className="text-[#72b626]">ME</span>
            </h1>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing pl-20"
      >
        <motion.div
          ref={scrollRef}
          style={{ x: springX }}
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          className="flex gap-10 px-10 py-5 w-max"
        >
          <div className="min-w-[700px]">
            <h1 className="text-2xl font-[800] text-gray-100 mb-4">
              PERSONAL INFOS
            </h1>
            <div className="flex gap-20">
              <div className="space-y-5 mt-2">
                {data1.map((item, index) => (
                  <AnimatedCard direction="left">
                    <div key={index} className="font-[600] flex gap-2">
                      <h1 className="text-gray-200">{item.title}:</h1>
                      <h1 className="text-gray-400">{item.value}</h1>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
              <div className="space-y-5 mt-2">
                {data2.map((item, index) => (
                  <AnimatedCard direction="down">
                    <div key={index} className="font-[600] flex gap-2">
                      <h1 className="text-gray-200">{item.title}:</h1>
                      <h1 className="text-gray-400">{item.value}</h1>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <a href="/Dev-latest-cv.pdf" download onClick={launchConfetti}>
                <Button title="Download CV" />
              </a>
            </div>
          </div>

          <div className="min-w-[300px] space-y-4">
            <AnimatedCard direction="down">
              <div className="uppercase max-w-80 border border-gray-300 rounded-lg py-10 px-5">
                <h1 className="text-4xl font-[800] text-[#72b626]">
                  1<sup>+</sup>
                </h1>
                <h1 className="mt-2 font-bold text-gray-600">
                  ---- Year of Experience
                </h1>
              </div>
            </AnimatedCard>
            <AnimatedCard direction="up">
              <div className="uppercase max-w-80 border border-gray-300 rounded-lg py-10 px-5">
                <h1 className="text-4xl font-[800] text-[#72b626]">
                  10<sup>+</sup>
                </h1>
                <h1 className="mt-2 font-bold text-gray-600">
                  ---- Complete Projects
                </h1>
              </div>
            </AnimatedCard>
          </div>

          <div className="min-w-[800px] flex flex-col items-center gap-5">
            <AnimatedCard direction="left">
              <h1 className="text-2xl font-[800] text-gray-100 mb-4">SKILLS</h1>
            </AnimatedCard>
            <div className="flex gap-8">
              {["html", "css", "javascript", "react", "nextjs"].map((skill) => (
                <AnimatedCard direction="down">
                  <div key={skill} className="flex flex-col items-center gap-2">
                    <CircularProgress value={skillsValue[skill].key} />
                    <h1>{skill.toUpperCase()}</h1>
                  </div>
                </AnimatedCard>
              ))}
            </div>
            <div className="flex gap-8">
              {["tailwindcss", "nodejs", "expressjs", "mongoDB"].map(
                (skill) => (
                  <AnimatedCard direction="up">
                    <div
                      key={skill}
                      className="flex flex-col items-center gap-2"
                    >
                      <CircularProgress value={skillsValue[skill].key} />
                      <h1>{skill.replace(/([A-Z])/g, " $1").toUpperCase()}</h1>
                    </div>
                  </AnimatedCard>
                )
              )}
            </div>
          </div>

          <div className="bg-black text-white px-6 md:px-20 min-w-[800px]">
            <AnimatedCard direction="right">
              <h2 className="text-3xl font-bold text-center mb-12">
                EXPERIENCE & EDUCATION
              </h2>
            </AnimatedCard>
            <div className="grid md:grid-cols-2 gap-5">
              {timeline.map((item, index) => (
                <AnimatedCard direction="up">
                  <div key={index} className="relative pl-12 w-3xl">
                    <div className="absolute left-0 top-0 flex flex-col items-center">
                      <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center text-white text-lg z-10">
                        {item.type === "experience" ? (
                          <FaBriefcase />
                        ) : (
                          <FaGraduationCap />
                        )}
                      </div>
                      {index !== timeline.length && (
                        <div
                          className="bg-lime-500 h-20 mt-1"
                          style={{ width: "1px" }}
                        />
                      )}
                    </div>
                    <div className="mb-1">
                      <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-white">
                      {item.title}{" "}
                      <span className="text-gray-400 font-semibold">
                        — {item.company}
                      </span>
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm text-justify">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

"use client";
import Button from "@/custom/Button/page";
import Header from "@/pages/Header/page";
import CircularProgress from "@/pages/Progress_bar/page";
import React, { useRef, useEffect, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import confetti from "canvas-confetti";

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
  const [isMobile, setIsMobile] = useState(false);

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariant = (i) => {
    const directions = [
      { x: -50, y: 0 },
      { x: 50, y: 0 },
      { x: 0, y: 50 },
      { x: 0, y: -50 },
    ];
    const dir = directions[i % directions.length];

    return {
      hidden: { opacity: 0, ...dir },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6 },
      },
    };
  };

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateMaxScroll = () => {
      const container = containerRef.current;
      const scroll = scrollRef.current;
      if (container && scroll) {
        const max = scroll.scrollWidth - container.clientWidth;
        setMaxScroll(max);
      }
    };
    if (!isMobile) updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, [isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    const onWheel = (e) => {
      if (isMobile) return;
      e.preventDefault();
      const next = x.get() - e.deltaY;
      if (next <= 0 && Math.abs(next) <= maxScroll) {
        x.set(next);
      }
    };
    container?.addEventListener("wheel", onWheel, { passive: false });
    return () => container?.removeEventListener("wheel", onWheel);
  }, [x, maxScroll, isMobile]);

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
        "MERN Stack & React Native Developer with hands-on experience in building dynamic, scalable web and mobile applications.",
    },
    {
      type: "education",
      year: "Dec / 2024 - Present",
      title: "MCA",
      company: "Uttranchal University",
      description:
        "Pursuing MCA focused on advanced software development, database management, and IT solutions.",
    },
    {
      type: "experience",
      year: "March / 2024 - Aug / 2024",
      title: "Front end Developer",
      company: "ByteWorld It Services",
      description:
        "Built responsive web applications using HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.",
    },
    {
      type: "education",
      year: "Jan / 2023 - June / 2024",
      title: "Full Stack Development Certificate",
      company: "Newton School",
      description:
        "Completed Full Stack course using HTML, CSS, JS, React, Node, Express, MongoDB.",
    },
  ]; // your existing timeline array
  const [sortedTimeline, setSortedTimeline] = useState(timeline);

  useEffect(() => {
    const handleSort = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        const experience = timeline.filter(
          (item) => item.type === "experience"
        );
        const education = timeline.filter((item) => item.type === "education");
        setSortedTimeline([...experience, ...education]);
      } else {
        setSortedTimeline(timeline);
      }
    };

    handleSort();
    window.addEventListener("resize", handleSort);
    return () => window.removeEventListener("resize", handleSort);
  }, []);

  const launchConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
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
    <div className="min-h-screen text-white bg-black">
      <div className="sticky top-0 bg-black md:bg-transparent pb-10 z-50">
        <Header />

        <div className="flex justify-center items-center">
          <div className="relative flex items-center justify-center mt-24 md:mt-8 md:my-10">
            {/* RESUME Animated from different sides */}
            <motion.h1
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              className="md:text-8xl text-5xl font-[900] text-gray-800 tracking-[0.1rem] flex gap-1"
            >
              {"RESUME".split("").map((char, i) => (
                <motion.span key={i} variants={letterVariant(i)}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* ABOUT ME Animated from different sides */}
            <motion.h1
              className="absolute md:top-6 text-3xl md:text-5xl font-[900] text-gray-100 flex gap-2"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              {"ABOUT ME".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariant(i)}
                  className={
                    letter === "M" || letter === "E" ? "text-[#72b626]" : ""
                  }
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`w-full bg-black ${
          isMobile ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden"
        } cursor-grab active:cursor-grabbing pl-2 md:pl-20`}
      >
        <motion.div
          ref={scrollRef}
          style={isMobile ? {} : { x: springX }}
          drag={isMobile ? false : "x"}
          dragConstraints={isMobile ? {} : { left: -maxScroll, right: 0 }}
          className={`${
            isMobile ? "flex flex-col w-full" : "flex flex-row w-max"
          } gap-10 px-5 md:px-10 py-5`}
        >
          <div className="text-gray-200 text-xl sm:mt-0 mt-5 font-[sans] text-justify z-20  md:w-[400px] md:mr-10 pr-2">
            <AnimatedCard direction="down">
              <h1 className="text-xl md:text-xl font-[800] text-white mb-4">
                Jr. Software Developer @Pearl | Building Casham | React JS
                Developer | Crafting Exceptional User Experiences
              </h1>
            </AnimatedCard>
            <AnimatedCard direction="up">
              <p className="text-lg text-gray-300">
                A passionate developer with a keen eye for design and a knack
                for transforming ideas into engaging digital experiences. I am
                working on my skills everyday to grow in market. I bring
                creativity and functionality together to create web solutions
                that captivate and delight users. You can contact me anytime for
                any freelance projects like building your websites or portfolio.
              </p>
            </AnimatedCard>
          </div>
          <div className="min-w-full md:min-w-[700px]">
            <AnimatedCard direction="up">
              <h1 className="text-xl md:text-2xl font-[800] text-gray-100 mb-4">
                PERSONAL INFOS
              </h1>
            </AnimatedCard>
            <div className="flex md:gap-20 gap-3 md:flex-row flex-col">
              <div className="space-y-5 mt-2">
                {data1.map((item, index) => (
                  <AnimatedCard direction="left" key={index}>
                    <div className="font-[600] flex gap-2">
                      <h1 className="text-gray-200 md:text-lg text-sm">
                        {item.title}:
                      </h1>
                      <h1 className="text-gray-400 md:text-lg text-sm">
                        {item.value}
                      </h1>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
              <div className="space-y-5 mt-2">
                {data2.map((item, index) => (
                  <AnimatedCard direction="down" key={index}>
                    <div className="font-[600] flex gap-2">
                      <h1 className="text-gray-200 md:text-lg text-sm">
                        {item.title}:
                      </h1>
                      <h1 className="text-gray-400 md:text-lg text-sm">
                        {item.value}
                      </h1>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <a href="/Dev_Resume.pdf" download onClick={launchConfetti}>
                <Button title="Download CV" />
              </a>
            </div>
          </div>

          <div className="min-w-full md:min-w-[300px] space-y-4">
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

          <div className="min-w-full md:min-w-[800px] flex flex-col items-center gap-5">
            <AnimatedCard direction="left">
              <h1 className="text-xl md:text-2xl font-[800] text-gray-100 mb-4">
                SKILLS
              </h1>
            </AnimatedCard>

            {/* Desktop View */}
            <div className="hidden md:flex gap-8">
              {["html", "css", "javascript", "react", "nextjs"].map((skill) => (
                <AnimatedCard direction="down" key={skill}>
                  <div className="flex flex-col items-center gap-2">
                    <CircularProgress value={skillsValue[skill].key} />
                    <h1>{skill.toUpperCase()}</h1>
                  </div>
                </AnimatedCard>
              ))}
            </div>
            <div className="hidden md:flex gap-8">
              {["tailwindcss", "nodejs", "expressjs", "mongoDB"].map(
                (skill) => (
                  <AnimatedCard direction="up" key={skill}>
                    <div className="flex flex-col items-center gap-2">
                      <CircularProgress value={skillsValue[skill].key} />
                      <h1>{skill.replace(/([A-Z])/g, " $1").toUpperCase()}</h1>
                    </div>
                  </AnimatedCard>
                )
              )}
            </div>

            {/* Mobile Zig-Zag View */}
            <div className="flex md:hidden flex-col gap-6 w-full items-center">
              {(() => {
                const skills = [
                  "html",
                  "css",
                  "javascript",
                  "react",
                  "nextjs",
                  "tailwindcss",
                  "nodejs",
                  "expressjs",
                  "mongoDB",
                ];
                const chunks = [];
                let i = 0;
                let toggle = true;
                while (i < skills.length) {
                  if (toggle) {
                    chunks.push(skills.slice(i, i + 2));
                    i += 2;
                  } else {
                    chunks.push(skills.slice(i, i + 1));
                    i += 1;
                  }
                  toggle = !toggle;
                }
                return chunks.map((chunk, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      chunk.length === 1 ? "justify-center" : "justify-between"
                    } gap-4 w-full px-10`}
                  >
                    {chunk.map((skill) => (
                      <AnimatedCard direction="up" key={skill}>
                        <div className="flex flex-col items-center gap-2">
                          <CircularProgress value={skillsValue[skill].key} />
                          <h1>
                            {skill.replace(/([A-Z])/g, " $1").toUpperCase()}
                          </h1>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
                ));
              })()}
            </div>
          </div>

          <div className="min-w-full md:min-w-[800px] text-white px-0 md:px-10">
            <AnimatedCard direction="right">
              <h2 className="text-xl md:text-2xl font-[800] text-center mb-12">
                EXPERIENCE & EDUCATION
              </h2>
            </AnimatedCard>
            <div className="grid md:grid-cols-2 gap-5 w-full max-w-screen-lg">
              {sortedTimeline.map((item, index) => (
                <AnimatedCard direction="up" key={index}>
                  <div className="relative pl-12 w-full">
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
                    <div className="mb-1 ml-2">
                      <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-white ml-2">
                      {item.title}{" "}
                      <span className="text-gray-400 font-semibold">
                        — {item.company}
                      </span>
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm text-justify ml-2">
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

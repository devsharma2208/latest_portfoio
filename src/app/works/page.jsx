"use client";
import Header from "@/pages/Header/page";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useMotionValue, useSpring } from "framer-motion";

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
    { x: -40, y: 0 },
    { x: 40, y: 0 },
    { x: 0, y: 40 },
    { x: 0, y: -40 },
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

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isMobile) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    const onWheel = (e) => {
      e.preventDefault();
      const nextX = x.get() - e.deltaY * 2;
      x.set(Math.min(0, Math.max(-maxScroll, nextX)));
    };

    let autoScroll;
    if (!isHovered) {
      autoScroll = setInterval(() => {
        const next = x.get() - 1;
        if (Math.abs(next) >= maxScroll) x.set(-maxScroll);
        else x.set(next);
      }, 30);
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      clearInterval(autoScroll);
      el.removeEventListener("wheel", onWheel);
    };
  }, [x, isHovered, isMobile]);

  const projects = [
    {
      title: "HeadGen AI",
      tech: "MERN Stack, Tailwind CSS",
      img: require("../../Images/headGen.jpeg"),
      features: [
        "AI-Powered Headshots",
        "Customizable Features",
        "Ideal for Professionals",
      ],
      live: "https://headgen.ai/",
      code: "https://headgen.ai/",
    },
    {
      title: "Casham",
      tech: "React Native",
      img: require("../../Images/casham.jpg"),
      features: [
        "Instant payments between Casham users only",
        "Withdraw money & create vouchers",
        "Wallet top-up & QR payments",
        "Transaction history & tracking",
      ],
      live: "https://play.google.com/store/apps/details?id=com.casham&hl=en",
      code: "https://play.google.com/store/apps/details?id=com.casham&hl=en",
    },
    {
      title: "3B Profiles",
      tech: "React Native / Express js / MongoDB",
      img: require("../../Images/3bProfiles.jpg"),
      features: [
        "Connects distributors, sellers, and system managers.",
        "Simplifies order placement and tracking.",
        "Manages inventory with ease.",
        "Boosts growth through one smart platform.",
      ],
      live: "https://play.google.com/store/apps/details?id=com.pearl.bprofiles&pli=1",
      code: "https://play.google.com/store/apps/details?id=com.pearl.bprofiles&pli=1",
    },
    {
      title: "Goibibo Clone",
      tech: "React JS, Redux",
      img: require("../../Images/Goibibo.png"),
      features: [
        "Flights, Hotels, Bus Booking.",
        "User Authentication, Protected routes.",
        "Search & Booking features.",
      ],
      live: "https://goibibo-clone-react-project-1-sobnc222vpo4.vercel.app/",
      code: "https://github.com/devsharma2208/Goibibo-Clone---React-Project-1---sobnc222vpo4",
    },
    {
      title: "Reddit Clone",
      tech: "React JS",
      img: require("../../Images/Reddit.png"),
      features: [
        "Post, Comment, Like, Create Group.",
        "Authentication, Protected Routes.",
        "Dark Mode, Premium, Profile.",
      ],
      live: "https://reddit-react-clone-react-project-2-m2j8eo3lwprp.vercel.app/",
      code: "https://github.com/devsharma2208/Reddit-React-Clone---React-Project-2---m2j8eo3lwprp",
    },
    {
      title: "Amazon Clone",
      tech: "React JS, Redux",
      img: require("../../Images/Amazon.png"),
      features: ["Add to cart", "Auth & Protected routes", "Remove from cart"],
      live: "https://amazon-clon-tau.vercel.app/",
      code: "https://github.com/devsharma2208/Amazon-Clon",
    },
    {
      title: "E-commerce Backend",
      tech: "Node.js, Express.js, MongoDB",
      img: require("../../Images/backend1.jpg"),
      features: ["CRUD operations", "User login/signup", "Order handling"],
      live: "https://github.com/devsharma2208/Full-Stack/tree/master/Backend",
      code: "https://github.com/devsharma2208/Full-Stack/tree/master/Backend",
    },
    {
      title: "Star Portal",
      tech: "Next.js, Tailwind CSS, Redux",
      img: require("../../Images/IntractiveWeb.png"),
      features: [
        "User-Friendly Interface",
        "Success Stories",
        "Redux state management",
        "Others...",
      ],
      live: "https://star-portal-wheat.vercel.app/",
      code: "https://github.com/devsharma2208/star_portal",
    },
  ];

  const getDirection = (index) => {
    const directions = [
      { x: -100, y: 0 },
      { x: 100, y: 0 },
      { x: 0, y: 100 },
      { x: 0, y: -100 },
    ];
    return directions[index % directions.length];
  };

  return (
    <div className="min-h-screen text-white md:overflow-y-hidden">
      <div className="sticky top-0 bg-black md:bg-transparent z-50 pb-10">
        <Header />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-center items-center md:my-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariant}
              className="relative flex items-center justify-center mt-24 md:mt-0 md:my-0"
            >
              <motion.h1
                variants={containerVariant}
                className="md:text-8xl text-5xl font-[900] text-gray-800 tracking-[0.1rem] flex gap-1"
              >
                {"WORKS".split("").map((char, i) => (
                  <motion.span key={i} variants={letterVariant(i)}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.h1
                variants={containerVariant}
                className="absolute md:top-6 text-3xl md:text-5xl font-[900] text-gray-100 flex gap-0.5"
              >
                {"MY PORTFOLIO".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariant(i)}
                    className={char === " " ? "mx-2" : ""}
                  >
                    <span className={"PORTFOLIO".includes(char) ? "text-[#72b626]" : ""}>{char}</span>
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="overflow-x-hidden ml-0 md:ml-20"
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          style={{ x: isMobile ? 0 : springX }}
          className="flex flex-col md:flex-row md:w-max gap-10 px-5 py-5 md:h-[calc(100vh-200px)] overflow-y-hidden"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, ...getDirection(index) }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[400px] p-4 rounded-xl shadow-lg bg-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{project.tech}</p>
              <div className="relative group mb-3 w-full h-[200px]">
                <Image
                  src={project.img}
                  alt="project image"
                  width={400}
                  height={200}
                  className={`rounded-lg ${["Casham", "3B Profiles"].includes(project.title)
                    ? "object-contain"
                    : "object-cover"
                    } w-full h-full`}
                />
                <div className="absolute inset-0 bg-[#72b626] bg-opacity-80 text-white flex flex-col justify-center items-start p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <h4 className="font-medium mb-2 text-sm">Features:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  Live Demo <FontAwesomeIcon icon={faArrowRightLong} />
                </p>
                <div className="flex gap-4 text-lg">
                  <Link href={project.live} target="_blank">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Link>
                  <Link href={project.code} target="_blank">
                    <FontAwesomeIcon icon={faCode} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Works;

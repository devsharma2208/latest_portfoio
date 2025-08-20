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
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Blog__Modal from "@/custom/Blog__Modal/page";

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

const Blogs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const [isHovered, setIsHovered] = useState(false);

  const [open, setOpen] = useState(false);

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

  const blogs = [
    {
      title: "React Js for the Beginner's",
      date: "August 20, 2025",
      img: require("../../Images/react_begineers.png"),
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
    <div className="min-h-screen text-white md:overflow-y-hidden bg-black">
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
                {"POSTS".split("").map((char, i) => (
                  <motion.span key={i} variants={letterVariant(i)}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.h1
                variants={containerVariant}
                className="absolute md:top-6 text-3xl md:text-5xl font-[900] text-gray-100 flex gap-0.5"
              >
                {"MY BLOG".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariant(i)}
                    className={char === " " ? "mx-2" : ""}
                  >
                    <span
                      className={
                        char !== "M" && char !== "Y" && char !== " "
                          ? "text-[#72b626]"
                          : ""
                      }
                    >
                      {char}
                    </span>
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
          <div className="flex justify-center items-center gap-6 py-12">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`bg-white border shadow-md w-96 transition-all duration-300  rounded-xl
      ${index % 2 !== 0 ? "mt-[-30px] shadow-lg scale-105" : "mt-0"}
      hover:scale-105
      ${index % 2 === 0 ? "hover:-translate-y-3" : "hover:translate-y-3"}`}
              >
                <div className="relative w-full h-50">
                  <Image
                    src={blog.img}
                    alt={blog.title || "4K Image"}
                    fill
                    quality={100}
                    priority
                    className="object-cover rounded-tl-xl rounded-tr-xl"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-black">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{blog.date}</p>
                  <button
                    className="mt-3 text-green-600 font-medium cursor-pointer hover:font-bold"
                    onClick={() => setOpen(true)}
                  >
                    VIEW THESE RESOURCES
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          // <div
          //   className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          //   onClick={(e) => {
          //     if (e.target === e.currentTarget) {
          //       setOpen(false);
          //     }
          //   }}
          // >
          //   <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-[300px]">
          //     <h2 className="text-lg font-semibold text-black">Coming Soon 🚀</h2>
          //     <p className="text-gray-600 mt-2">
          //       This feature is under development.
          //     </p>
          //     <button
          //       onClick={() => setOpen(false)}
          //       className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
          //     >
          //       Close
          //     </button>
          //   </div>
          // </div>

          <Blog__Modal setIsOpen={setOpen} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blogs;

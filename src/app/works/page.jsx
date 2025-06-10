"use client";
import Header from "@/pages/Header/page";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Works = () => {
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

  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);

  const startAutoScroll = () => {
    const el = scrollRef.current;
    if (!el || autoScrollInterval.current) return;

    autoScrollInterval.current = setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollBy({
        left: e.deltaY * 5,
        behavior: "smooth",
      });
    };

    startAutoScroll();

    el.addEventListener("mouseenter", stopAutoScroll);
    el.addEventListener("mouseleave", startAutoScroll);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      stopAutoScroll();
      el.removeEventListener("mouseenter", stopAutoScroll);
      el.removeEventListener("mouseleave", startAutoScroll);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 bg-black z-10 pb-10">
        <Header />
        <div className="flex flex-col justify-center items-center mr-20 ml-30">
          <div className="w-full flex justify-center items-center my-8">
            <div className="relative flex items-center justify-center">
              <h1 className="text-8xl font-[900] text-gray-800 tracking-[0.2em]">
                WORKS
              </h1>
              <h1 className="absolute top-6 text-5xl font-[900] text-gray-100 flex gap-5">
                <span>MY</span>
                <span className="text-[#72b626]">PORTFOLIO</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="overflow-x-auto overflow-y-hidden ml-30 scrollbar-hide"
        ref={scrollRef}
      >
        <div className="flex w-max gap-10 px-10 py-5">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
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
                  className={`rounded-lg ${
                    project.title === "Casham" ||
                    project.title === "3B Profiles"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;

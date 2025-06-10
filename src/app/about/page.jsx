"use client";
import Button from "@/custom/Button/page";
import Header from "@/pages/Header/page";
import CircularProgress from "@/pages/Progress_bar/page";
import React, { useEffect, useRef } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const About = () => {
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
        "Frontend Developer with expertise in React.js, skilled in building responsive and user-centric web interfaces. Successfully developed the CRM system for PropertyDekho.com to streamline client and property management.",
    },
    {
      type: "education",
      year: "Jan / 2023 - June / 2024",
      title: "Full Stack Development Certificate",
      company: "Newtown School",
      description:
        "Completed a comprehensive Full Stack Development Certification from Newton School, with hands-on experience in building responsive web applications using technologies like HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. Gained practical knowledge through real-world projects and collaborative coding environments",
    },
  ];
  const button_name = {
    title: "Download CV",
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

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    const onWheel = (e) => {
      if (el) {
        e.preventDefault();
        el.scrollBy({
          left: e.deltaY * 5,
          behavior: "smooth",
        });
      }
    };

    el?.addEventListener("wheel", onWheel, { passive: false });

    return () => el?.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 bg-black z-10 pb-10">
        <Header />

        <div className="flex flex-col justify-center items-center mr-20 ml-30">
          <div className="w-full flex justify-center items-center my-8">
            <div className="relative flex items-center justify-center">
              <h1 className="text-8xl font-[900] text-gray-800">RESUME</h1>
              <h1 className="absolute top-6 text-5xl font-[900] text-gray-100 flex gap-5">
                <span>ABOUT</span> <span className="text-[#72b626]">ME</span>
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
          <div className="min-w-[700px]">
            <h1 className="text-2xl font-[800] text-gray-100 mb-4">
              PERSONAL INFOS
            </h1>
            <div className="flex gap-20">
              <div className="space-y-5 mt-2">
                {data1.map((item, index) => (
                  <div key={index} className="font-[600] flex gap-2">
                    <h1 className="text-gray-200">{item.title}:</h1>
                    <h1 className="text-gray-400">{item.value}</h1>
                  </div>
                ))}
              </div>
              <div className="space-y-5 mt-2">
                {data2.map((item, index) => (
                  <div key={index} className="font-[600] flex gap-2">
                    <h1 className="text-gray-200">{item.title}:</h1>
                    <h1 className="text-gray-400">{item.value}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Button title={button_name.title} />
            </div>
          </div>

          <div className="min-w-[300px] space-y-4">
            <div className="uppercase max-w-80 border border-gray-300 rounded-lg py-10 px-5">
              <h1 className="text-4xl font-[800] text-[#72b626]">
                1<sup>+</sup>
              </h1>
              <h1 className="mt-2 font-bold text-gray-600">
                ---- Year of Experience
              </h1>
            </div>
            <div className="uppercase max-w-80 border border-gray-300 rounded-lg py-10 px-5">
              <h1 className="text-4xl font-[800] text-[#72b626]">
                10<sup>+</sup>
              </h1>
              <h1 className="mt-2 font-bold text-gray-600">
                ---- Complete Projects
              </h1>
            </div>
          </div>

          <div className="min-w-[800px] flex flex-col items-center gap-5">
            <h1 className="text-2xl font-[800] text-gray-100 mb-4">SKILLS</h1>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.html.key} />
                <h1>HTML</h1>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.css.key} />
                <h1>CSS</h1>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.javascript.key} />
                <h1>JavaScript</h1>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.react.key} />
                <h1>React JS</h1>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.nextjs.key} />
                <h1>Next JS</h1>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.tailwindcss.key} />
                <h1>Tailwind CSS</h1>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.nodejs.key} />
                <h1>Node JS</h1>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.expressjs.key} />
                <h1>Express JS</h1>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={skillsValue.mongoDB.key} />
                <h1>MongoDB</h1>
              </div>
            </div>
          </div>

          <div className="bg-black text-white px-6 md:px-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              EXPERIENCE & EDUCATION
            </h2>
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-5">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
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
                    <p className="text-gray-400 mt-2 text-sm w-[90%] md:w-[100%] text-justify">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

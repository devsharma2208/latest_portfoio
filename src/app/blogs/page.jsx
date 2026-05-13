"use client";
import Header from "@/pages/Header/page";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaClock, FaCalendarAlt, FaTag } from "react-icons/fa";
import Blog__Modal from "@/custom/Blog__Modal/page";
import Footer from "@/custom/Footer/page";

// ✅ 用 import 代替 require
import reactImg from "../../Images/react_begineers.png";

/* ─────────────── Featured Post ─────────────── */
const FeaturedPost = ({ blog, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative w-full h-[340px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/[0.06] hover:border-purple-500/30 transition-all duration-700"
      onClick={onOpen}
    >
      <Image
        src={blog.img}
        alt={blog.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-[#07070f]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07070f]/60 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
        <span className="inline-flex items-center gap-1.5 mb-4 px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] text-purple-200 bg-purple-500/20 border border-purple-500/20 backdrop-blur-sm">
          <FaTag className="w-2.5 h-2.5" />
          {blog.tag}
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-white leading-[1.15] mb-4 max-w-3xl group-hover:text-purple-100 transition-colors duration-500">
          {blog.title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300/80 max-w-2xl leading-relaxed mb-5 hidden sm:block">
          {blog.description}
        </p>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt className="w-3 h-3 text-purple-400/60" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FaClock className="w-3 h-3 text-purple-400/60" />
              {blog.readTime}
            </span>
          </div>

          <span className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
            Read Article
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────── Blog List Card ─────────────── */
const BlogListCard = ({ blog, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ x: 6 }}
      className="group flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border border-white/[0.06] hover:border-purple-500/25 hover:bg-purple-500/[0.03] cursor-pointer transition-all duration-500"
      onClick={onOpen}
    >
      <div className="relative w-full sm:w-[200px] md:w-[240px] h-[140px] sm:h-auto flex-shrink-0 rounded-xl overflow-hidden">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, 240px"
        />
      </div>

      <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.12em] text-purple-300 bg-purple-500/15 border border-purple-500/15">
            {blog.tag}
          </span>
          <span className="text-[11px] text-slate-500 flex items-center gap-1">
            <FaClock className="w-2.5 h-2.5" />
            {blog.readTime}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2 group-hover:text-purple-200 transition-colors duration-400">
          {blog.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 hidden sm:block line-clamp-2">
          {blog.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-[11px] text-slate-600 flex items-center gap-1.5">
            <FaCalendarAlt className="w-2.5 h-2.5" />
            {blog.date}
          </span>
          <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.06] group-hover:bg-purple-500/15 group-hover:border-purple-500/25 transition-all duration-400">
            <FaArrowRight className="w-3 h-3 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-300" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────── Main Page ─────────────── */
const Blogs = () => {
  const [open, setOpen] = useState(false);

  const featuredBlog = {
    title: "React Js for the Beginner's",
    description:
      "A comprehensive guide to getting started with React.js — components, state management, props, hooks, and building your first real-world application from scratch.",
    date: "August 20, 2025",
    readTime: "8 min read",
    // ✅ 使用 import 的变量
    img: reactImg,
    tag: "Frontend",
  };

  const blogList = [
    {
      title: "Understanding MERN Stack Architecture",
      description:
        "How MongoDB, Express, React, and Node.js work together to form a full-stack ecosystem for modern web applications.",
      date: "Coming Soon",
      readTime: "10 min read",
      img: reactImg,
      tag: "Full Stack",
    },
    {
      title: "Building REST APIs with Express & MongoDB",
      description:
        "Step-by-step guide to designing scalable RESTful APIs using Express.js with MongoDB as your data layer.",
      date: "Coming Soon",
      readTime: "12 min read",
      img: reactImg,
      tag: "Backend",
    },
    {
      title: "Tailwind CSS: From Zero to Production",
      description:
        "Master utility-first CSS with Tailwind — from configuration and custom themes to responsive, production-grade UIs.",
      date: "Coming Soon",
      readTime: "7 min read",
      img: reactImg,
      tag: "Styling",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-white relative bg-[#07070f]">
      <AnimatePresence>
        {open && <Blog__Modal setIsOpen={setOpen} />}
      </AnimatePresence>

      <Header />

      <div className="pointer-events-none absolute top-10 left-1/3 w-[700px] h-[400px] bg-purple-600/[0.05] rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute bottom-40 right-10 w-[400px] h-[350px] bg-fuchsia-500/[0.03] rounded-full blur-[130px]" />

      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <span className="inline-block mb-6 px-5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] border border-purple-500/20 text-purple-300/80 bg-purple-500/[0.06]">
            Blog
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white mb-5">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            Thoughts, tutorials, and deep-dives into web development — from
            React fundamentals to full-stack architecture patterns.
          </p>
        </motion.div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-14">
        <FeaturedPost blog={featuredBlog} onOpen={() => setOpen(true)} />
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="border-t border-white/[0.06]" />
      </div>

      {/* LIST */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-14 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-2xl font-bold text-white mb-1">
            Recent Posts
          </h2>
          <p className="text-medium font-semibold text-slate-500">
            More articles on the way. Stay tuned.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {blogList.map((blog, index) => (
            <BlogListCard
              key={blog.title}
              blog={blog}
              index={index}
              onOpen={() => setOpen(true)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-slate-600">
            More articles coming soon. Subscribe to get notified →
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Blogs;
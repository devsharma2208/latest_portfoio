"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaUserTie, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/dev-sharma-007301173/",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: FaGithub,
      href: "https://github.com/devsharma2208",
      label: "GitHub",
      color: "#ffffff",
    },
    {
      icon: FaUserTie,
      href: "https://topmate.io/dev_sharma28",
      label: "Topmate",
      color: "#a78bfa",
    },
    {
      icon: FaEnvelope,
      href: "mailto:devsharmaelc@gmail.com",
      label: "Email",
      color: "#ec4899",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="border-t border-white/[0.06] py-12 px-6 lg:px-16 bg-black/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Branding + Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-8">
          {/* Branding */}
          <div>
            <p className="text-xl sm:text-2xl font-black tracking-wider text-white/90">
              DEV{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                SHARMA
              </span>
            </p>
            <p className="text-xs text-slate-600 mt-1 tracking-widest uppercase">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 group"
                  title={social.label}
                >
                  <Icon className="text-lg group-hover:text-white transition-colors duration-300" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-transparent my-8" />

        {/* Bottom Section: Copyright + Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-xs text-slate-600 tracking-wider">
            © {new Date().getFullYear()} Dev Sharma. All rights reserved.
          </p>

          <p className="text-xs text-slate-600 tracking-wider">
            Engineered with <span className="text-red-500">❤</span> &amp; Passion ✦
          </p>

          {/* Optional: Quick Links */}
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a
              href="https://github.com/devsharma2208"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Source
            </a>
            <span>•</span>
            <a
              href="mailto:devsharmaelc@gmail.com"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

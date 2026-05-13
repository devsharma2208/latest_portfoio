"use client";
import React, { useRef, useState, useEffect } from "react";
import Header from "@/pages/Header/page";
import emailjs from "@emailjs/browser";
import { IoIosMailOpen } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import Lottie from "lottie-react";
import successAnimation from "../../assests/animations/success.json";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Footer from "@/custom/Footer/page";
import { CustomCursor } from "@/custom/mouseGlow/page";

/* ─────────────── Custom Cursor Animation ─────────────── */


const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  // idle | sending | sent

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

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_lchhhli", "template_3x3hpn3", form.current, {
        publicKey: "bj00uJZXauMUVF1xD",
      })
      .then(
        () => {
          setStatus("sent");
          form.current.reset();
          launchConfetti();
          setTimeout(() => setStatus("idle"), 10000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("idle");
        }
      );
  };

  const contactInfo = [
    {
      icon: IoIosMailOpen,
      label: "MAIL ME",
      value: "devsharmaelc@mail.com",
      href: "mailto:devsharmaelc@mail.com",
    },
    {
      icon: IoCallSharp,
      label: "CALL ME",
      value: "+91 7668776421",
      href: "tel:+917668776421",
    },
    {
      icon: FaMapMarkerAlt,
      label: "LOCATION",
      value: "India",
      href: null,
    },
  ];

  return (
    // Added select-none to prevent text copying
    <div className="min-h-screen w-full pt-20 overflow-x-hidden text-white relative bg-[#07070f] select-none">
      <style jsx global>{`
        * { cursor: none !important; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #07070f; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #7c3aed; }
      `}</style>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* ═══════ Success Overlay ═══════ */}
      {status === "sent" && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex justify-center items-center overflow-hidden">
          <div className="max-w-[90vw] max-h-[90vh] overflow-hidden">
            <Lottie
              animationData={successAnimation}
              loop={false}
              style={{ width: 300, height: 300 }}
            />
          </div>
        </div>
      )}

      <Header />

      {/* ═══════ Background Glow ═══════ */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/[0.05] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-40 right-0 w-[500px] h-[400px] bg-fuchsia-500/[0.04] rounded-full blur-[140px]" />

      {/* ═══════ HERO TITLE ═══════ */}
      {/* Reduced pt-32 sm:pt-40 to pt-20 sm:pt-24 to reduce gap */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="inline-block mb-6 px-5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] border border-purple-500/20 text-purple-300/80 bg-purple-500/[0.06]">
            Contact
          </span>

          <h1 className="text-4xl sm:text-2xl lg:text-4xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-base sm:text-semibold text-slate-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you. Let&apos;s build something great together.
          </p>
        </motion.div>
      </section>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <section className="relative max-w-6xl mx-auto px-6 lg:px-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ────── Left: Contact Info ────── */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-bold text-slate-400 leading-relaxed">
                I&apos;m Dev Sharma, a passionate MERN Stack Developer focused
                on building scalable, user-friendly web apps. Always open to new
                opportunities and creative collaborations.
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full" />

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Wrapper
                      {...(item.href
                        ? {
                            href: item.href,
                            target: item.href.startsWith("http")
                              ? "_blank"
                              : undefined,
                            rel: item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined,
                          }
                        : {})}
                      className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/[0.04] transition-all duration-500 cursor-pointer"
                    >
                      {/* Icon */}
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 transition-all duration-500"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.1) 100%)",
                        }}
                      >
                        <Icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-300 truncate">
                          {item.value}
                        </p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Social hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <p className="text-xs text-slate-600 leading-relaxed">
                Prefer GitHub?{" "}
                <a
                  href="https://github.com/devsharma2208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400/70 hover:text-purple-300 underline underline-offset-2 transition-colors"
                >
                  Check my repos here
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* ────── Right: Form ────── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="relative p-7 sm:p-9 lg:p-10 rounded-3xl border border-white/[0.06] space-y-5"
              style={{
                background:
                  "linear-gradient(160deg, rgba(15,15,35,0.6) 0%, rgba(10,10,22,0.8) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              <input type="hidden" name="to_name" value="Dev Sharma" />

              {/* Subtle top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="h-[52px] px-4 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/[0.03] transition-all duration-400"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2 ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="dev@example.com"
                    required
                    className="h-[52px] px-4 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/[0.03] transition-all duration-400"
                  />
                </motion.div>
              </div>

              {/* Row 2: Subject */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="h-[52px] px-4 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/[0.03] transition-all duration-400"
                />
              </motion.div>

              {/* Row 3: Message */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/[0.03] transition-all duration-400 resize-none leading-relaxed"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                viewport={{ once: true }}
                className="pt-2"
              >
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative w-full h-[54px] rounded-xl font-bold text-sm text-white overflow-hidden transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/25"
                  style={{
                    background:
                      status === "sent"
                        ? "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"
                        : "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <span className="relative flex items-center justify-center gap-2.5">
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : status === "sent" ? (
                      "Message Sent ✓"
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <Footer />
    </div>
  );
};

export default Contact;
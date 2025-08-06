"use client";
import React, { useRef, useState } from "react";
import Button from "@/custom/Button/page";
import Header from "@/pages/Header/page";
import emailjs from "@emailjs/browser";
import { IoIosMailOpen } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import Lottie from "lottie-react";
import successAnimation from "../../assests/animations/success.json";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

const directions = [
  { x: -50, y: 0 },
  { x: 50, y: 0 },
  { x: 0, y: -50 },
  { x: 0, y: 50 },
];

const letterVariant = (i) => ({
  hidden: { opacity: 0, ...directions[i % directions.length] },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
});

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_lchhhli", "template_3x3hpn3", form.current, {
        publicKey: "bj00uJZXauMUVF1xD",
      })
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 4000);
          launchConfetti();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const button_name = {
    title: isSent ? "Message Sent ✅" : "Send Message",
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto text-white relative">
      {isSent && (
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

      <div className="sticky top-0 bg-black md:bg-transparent z-10 pb-10">
        <Header />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-center items-center md:my-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariant}
              className="relative flex items-center justify-center mt-24 md:mt-6 md:my-0"
            >
              <motion.h1
                variants={containerVariant}
                className="md:text-8xl text-5xl font-[900] text-gray-800 tracking-[0.1rem] flex gap-1"
              >
                {"CONTACT".split("").map((char, i) => (
                  <motion.span key={i} variants={letterVariant(i)}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.h1
                variants={containerVariant}
                className="absolute md:top-6 text-3xl md:text-5xl font-[900] text-gray-100 flex gap-1"
              >
                {"GET IN TOUCH".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariant(i)}
                    className={char === " " ? "mx-2" : ""}
                  >
                    <span
                      className={"TOUCH".includes(char) ? "text-[#72b626]" : ""}
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

      <div className="flex flex-col md:flex-row justify-between gap-20 mt-7 md:mt-0 px-5 md:px-10 w-full max-w-[1300px]  pb-10 md:pb-0 md:mx-16">
        <motion.div
          className="md:w-1/3 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="md:text-4xl text-2xl font-extrabold">
              DON'T BE SHY!
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mt-5 text-justify font-light text-gray-300">
              I'm Dev Sharma, a passionate MERN Stack Developer focused on
              building scalable, user-friendly web apps. I'm always open to new
              opportunities, exciting projects, and creative collaborations.
              Let’s connect and bring your ideas to life!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-5"
          >
            <IoIosMailOpen className="md:text-5xl text-3xl text-[#72b626]" />
            <div>
              <h1 className="font-semibold text-gray-400">MAIL ME</h1>
              <h2 className="font-bold">devsharmaelc@mail.com</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-5"
          >
            <IoCallSharp className="md:text-5xl text-3xl text-gray-900 bg-[#72b626] p-2 rounded-lg" />
            <div>
              <h1 className="font-semibold text-gray-400">CALL ME</h1>
              <h2 className="font-bold">+91 7668776421</h2>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="md:w-2/3 space-y-5"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="to_name" value="Dev Sharma" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="h-14 px-4 w-full border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#72b626]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="h-14 px-4 w-full border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#72b626]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="h-14 px-4 w-full border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#72b626]"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-4xl bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#72b626] resize-none"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="items-start w-full"
          >
            <Button title={button_name.title} />
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

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
          setTimeout(() => setIsSent(false), 4000); // hide after 4s
          launchConfetti();
          console.log("SUCCESS!");
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
    <div className="min-h-screen text-white relative">
     
      {isSent && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex justify-center items-center">
          <Lottie
            animationData={successAnimation}
            loop={false}
            style={{ width: 300, height: 300 }}
          />
        </div>
      )}

      <div className="sticky top-0 bg-black md:bg-transparent z-10 pb-10">
        <Header />
        <div className="flex flex-col justify-center items-center mr-20 md:ml-30 w-full md:w-auto">
          <div className="w-full flex justify-center items-center md:my-8">
            <div className="relative flex items-center justify-center mt-24 md:mt-6 md:my-0">
              <h1 className="md:text-8xl text-5xl font-[900] text-gray-800 tracking-[0.1rem]">
                CONTACT
              </h1>
              <h1 className="absolute md:top-6 text-3xl md:text-5xl font-[900] text-gray-100 flex gap-5">
                <span>GET</span>
                <span>IN</span>
                <span className="text-[#72b626]">TOUCH</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:pb-0 pb-10 md:flex-row justify-between gap-20 mt-7 md:mt-10 px-5 md:px-10 md:ml-20">
        <div className="md:w-1/3 space-y-6">
          <h1 className="md:text-4xl text-2xl font-extrabold">DON'T BE SHY!</h1>
          <p className="mt-5 text-justify font-light text-gray-300">
            Feel free to get in touch with me. I’m always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <div className="flex items-center gap-5">
            <IoIosMailOpen className="md:text-5xl text-3xl text-[#72b626]" />
            <div>
              <h1 className="font-semibold text-gray-400">MAIL ME</h1>
              <h2 className="font-bold">devsharmaelc@mail.com</h2>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <IoCallSharp className="md:text-5xl text-3xl text-gray-900 bg-[#72b626] p-2 rounded-lg" />
            <div>
              <h1 className="font-semibold text-gray-400">CALL ME</h1>
              <h2 className="font-bold">+91 7668776421</h2>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="md:w-2/3 space-y-5">
          <input type="hidden" name="to_name" value="Dev Sharma" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="h-14 px-4 w-full border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#72b626]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="h-14 px-4 w-full border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#72b626]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="h-14 px-4 w-full border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#72b626]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full px-4 py-3 border border-gray-600 rounded-4xl bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#72b626] resize-none"
          ></textarea>
          <div className="items-start w-full">
            <Button title={button_name.title} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

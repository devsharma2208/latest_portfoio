"use client";
import React, { useRef, useState } from "react";
import Button from "@/custom/Button/page";
import Header from "@/pages/Header/page";
import emailjs from "@emailjs/browser";
import { IoIosMailOpen } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lchhhli", // Replace with your service ID
        "template_3x3hpn3", // Replace with your template ID
        form.current,
        {
          publicKey: "bj00uJZXauMUVF1xD", // Replace with your public key
        }
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
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
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 bg-black z-10 pb-10">
        <Header />
        <div className="flex flex-col justify-center items-center mr-20 ml-30">
          <div className="w-full flex justify-center items-center my-8">
            <div className="relative flex items-center justify-center">
              <h1 className="text-8xl font-[900] text-gray-800 tracking-[0.1em]">
                CONTACT
              </h1>
              <h1 className="absolute top-6 text-5xl font-[900] text-gray-100 flex gap-5">
                <span>GET</span>
                <span>IN</span>
                <span className="text-[#72b626]">TOUCH</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-20 mt-10 px-10 ml-20">
        <div className="md:w-1/3 space-y-6">
          <h1 className="text-4xl font-extrabold">DON'T BE SHY!</h1>
          <p className="mt-5 text-justify font-light text-gray-300">
            Feel free to get in touch with me. I’m always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <div className="flex items-center gap-5">
            <IoIosMailOpen className="text-5xl text-[#72b626]" />
            <div>
              <h1 className="font-semibold text-gray-400">MAIL ME</h1>
              <h2 className="font-bold">devsharmaelc@mail.com</h2>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <IoCallSharp className="text-5xl text-gray-900 bg-[#72b626] p-2 rounded-lg" />
            <div>
              <h1 className="font-semibold text-gray-400">CALL ME</h1>
              <h2 className="font-bold">+91 7668776421</h2>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:w-2/3 space-y-5"
        >
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

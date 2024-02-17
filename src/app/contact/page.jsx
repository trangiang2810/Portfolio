"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col overflow-scroll lg:flex-row px-4 sp:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text container  */}
        <div className="py-5 md:py-8 lg:w-1/2 flex items-center justify-center text-4xl lg:text-6xl">
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </motion.div>
        </div>
        {/* form container  */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-auto lg:w-1/2 bg-pink-50 rounded-xl sm:text-xl text-lg flex flex-col my-[2%] sm:my-[5%] gap-7 sm:gap-8 justify-center lg:p-24 p-10 md:p-16"
        >
          <span>Dear Truong Giang,</span>
          <textarea
            row={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My email address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regrads!</span>
          <button className="bg-purple-200 hover:bg-gray-600 rounded font-semibold text-gray-600 hover:text-purple-200 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold text-lg">
              Your message has been sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-lg">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;

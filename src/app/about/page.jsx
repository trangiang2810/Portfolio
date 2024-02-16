"use client";
// import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const ExpercienceRef = useRef();
  // const isExpercienceRefInView = useInView(ExpercienceRef, { once: true });
  const isExperienceRefInView = useInView(ExpercienceRef, {
    margin: "-100px",
  });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER  */}
      <div className="h-full overflow-scroll lg:flex pb-40" ref={containerRef}>
        <div className="p-4 sp:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-16 md:gap-24 lg:gap-32 xl:gap-40 ">
          {/* intro CONTAINER  */}
          <div className="flex flex-col gap-4 justify-center">
            {/* intro TITLE  */}
            <div className="">
              <h1 className="text-xl text-gray-500">My intro</h1>
              <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl">
                About Me
              </h2>
            </div>
            {/* intro DESC  */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-5 sm:gap-8">
              <div className="md:text-lg">
                <p className="hang_indent">
                  I'm is Giang, a senior student with a passion for web
                  programming and is looking for internship opportunities in
                  this field. With solid basic knowledge of HTML, CSS and
                  JavaScript, along with the ability to use frameworks like
                  ReactJS, I am confident that I can contribute positively to
                  your project and learn from a professional working
                  environment. Willingness to learn, ability to work in a team,
                  and desire to constantly improve myself are qualities I bring
                  to the table. I look forward to the opportunity to participate
                  and contribute to your project.
                </p>
                <br />
                <p>
                  - Short-term goal: Train more missing skills during study and
                  work.
                </p>
                <p>
                  - Long-term goal: become a Fullstack Developer capable of
                  participating in the entire web system development process.
                </p>
              </div>
              <div className=" h-full relative flex items-center justify-center">
                <div className="lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full md:w-72 md:h-72 sm:h-60 sm:w-60 w-56 h-56 overflow-hidden bg-red-50 transform -scale-x-[1] ">
                  <Image
                    src="/avt.png"
                    alt="avata"
                    fill
                    className="object-contain flex justify-center items-center pt-4"
                  />
                </div>
              </div>
            </div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                esea: "easeInOut",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="58"
              viewBox="0 0 39 58"
              fill="none"
            >
              <rect
                x="1"
                y="1"
                width="37"
                height="56"
                rx="18.5"
                fill="url(#paint0_linear_10_39)"
                stroke="white"
                strokeWidth="2"
              />
              <g style={{ mixBlendMode: "luminosity" }}>
                <path
                  d="M17.9638 41.7472C18.5495 42.333 19.4993 42.333 20.0851 41.7472L29.631 32.2013C30.2168 31.6155 30.2168 30.6658 29.631 30.08C29.0452 29.4942 28.0955 29.4942 27.5097 30.08L19.0244 38.5652L10.5391 30.08C9.95335 29.4942 9.0036 29.4942 8.41781 30.08C7.83203 30.6658 7.83203 31.6155 8.41781 32.2013L17.9638 41.7472ZM17.5244 17.3134V40.6866H20.5244V17.3134H17.5244Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_10_39"
                  x1="19.5"
                  y1="0"
                  x2="19.5"
                  y2="58"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EC4899" stopOpacity="0.18" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0.18" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER  */}
          <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
            {/* SKILLS TITLE  */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              // transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST  */}
            <motion.div
              transition={{ delay: 0.2 }}
              initial={{ x: "-900px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className=" flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ReactJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NextJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Scss
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Styled Component
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Antd design
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Github/Gitlab
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
            </motion.div>
            {/* SKILLS SCROLL */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                esea: "easeInOut",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="58"
              viewBox="0 0 39 58"
              fill="none"
            >
              <rect
                x="1"
                y="1"
                width="37"
                height="56"
                rx="18.5"
                fill="url(#paint0_linear_10_39)"
                stroke="white"
                strokeWidth="2"
              />
              <g style={{ mixBlendMode: "luminosity" }}>
                <path
                  d="M17.9638 41.7472C18.5495 42.333 19.4993 42.333 20.0851 41.7472L29.631 32.2013C30.2168 31.6155 30.2168 30.6658 29.631 30.08C29.0452 29.4942 28.0955 29.4942 27.5097 30.08L19.0244 38.5652L10.5391 30.08C9.95335 29.4942 9.0036 29.4942 8.41781 30.08C7.83203 30.6658 7.83203 31.6155 8.41781 32.2013L17.9638 41.7472ZM17.5244 17.3134V40.6866H20.5244V17.3134H17.5244Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_10_39"
                  x1="19.5"
                  y1="0"
                  x2="19.5"
                  y2="58"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EC4899" stopOpacity="0.18" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0.18" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER  */}
          <div
            className="flex flex-col justify-center pb-48"
            ref={ExpercienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: "0.2" }}
              className="font-bold text-2xl pb-8"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST ITEM  */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=" flex justify-between h-48"
            >
              {/* Left  */}
              <div className="w-2/3 ">
                {/* job title  */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Part-time lecturer
                </div>
                {/* job desc  */}
                <ul className="p-4 text-sm italic list-disc">
                  <li>
                    Teaching web programming to students from 11 years old to 18
                    years old
                  </li>
                  <li>
                    Teaching knowledge: Wordpress, HTML, CSS, Bootstrap,
                    JavaScript, Python
                  </li>
                </ul>
                {/* job date  */}
                <div className="p-3 text-red-400 text-sm font-semibold flex justify-end">
                  November 2023 - Present
                </div>

                {/* job company  */}
                <div className="flex justify-end">
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit ">
                    Teky Holdings
                  </div>
                </div>
              </div>
              {/* center  */}
              <div className="w-1/6 flex justify-center">
                {/* LINE  */}
                <div className=" rounded relative  w-1 h-full bg-gray-600">
                  {/* LINE CIRCLE  */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right  */}
              <div className="w-2/3 "></div>
            </motion.div>

            {/* EXPERIENCE LIST ITEM  */}
            <motion.div
              initial={{ x: "300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=" flex justify-between h-48"
            >
              {/* Left  */}
              <div className="w-2/3 "></div>
              {/* center  */}
              <div className="w-1/6 flex justify-center">
                {/* LINE  */}
                <div className=" rounded relative  w-1 h-full bg-gray-600">
                  {/* LINE CIRCLE  */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right  */}
              <div className="w-2/3 ">
                {/* job title  */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Intern FrontEnd
                </div>
                {/* job desc  */}
                <ul className="p-4 text-sm italic list-disc">
                  <li>
                    First time: research on ReactJs, NextJs, Typescript, Antd
                    design
                  </li>
                  <li>Then join the company is project</li>
                  <li>Cut skins from figma compatible with all devices</li>
                  <li>Develop some functions in the project</li>
                  <li>
                    Write a report describing the errors encountered and how to
                    fix them during project participation.
                  </li>
                </ul>
                {/* job date  */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  March 2023 - May 2023
                </div>
                {/* job company  */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  CTI Group
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER  */}
        {/* <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div> */}
      </div>
    </motion.div>
  );
};

export default AboutPage;

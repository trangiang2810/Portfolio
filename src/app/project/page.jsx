"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  const items = [
    // {
    //   id: 1,
    //   // color: "from-blue-300 to-violet-300",
    //   color: "from-violet-300 to-purple-300",
    //   title: "Web Sell",
    //   desc: "Bán hàng nội thất ahihihihihih hihhhhhhhhhhi hih ih ih ih ihi hi hi hih ih i",
    //   img: "/pr1.png",
    //   link: "https://trangiang2810.github.io/Web-sales/",
    // },
    {
      id: 1,
      color: "from-purple-200 to-red-200",
      title: "Web Sell",
      desc: "Bán3 hàng nội thất ahihihihihih hihhhhhhhhhhi hih ih ih ih ihi hi hi hih ih i",
      img: "/pr1.png",
      link: "https://trangiang2810.github.io/Web-sales/",
    },
    {
      id: 2,
      color: "from-red-200 to-orange-200",
      title: "Cooky",
      desc: "Công thức nấu ăn ahihihihihih hihhhhhhhhhhi hih ih ih ih ihi hi hi hih ih i",
      img: "/pr2.png",
      link: "https://cooky-56cv.vercel.app/",
    },
    {
      id: 3,
      color: "from-orange-200 to-yellow-200",
      title: "Day Love",
      desc: "Bán3 hàng nội thất ahihihihihih hihhhhhhhhhhi hih ih ih ih ihi hi hi hih ih i",
      img: "/pr3.png",
      link: "https://github.com/trangiang2810/MyLove.git",
    },
  ];
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center">
          My project
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              esea: "easeInOut",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="71"
            viewBox="0 0 39 58"
            fill="none"
            className="mt-6"
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
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x: x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-200 " />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 md:gap-4 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                    {item.title}
                  </h1>
                  {/* <div className="relative w-80 h-56 md:w-96 md:h-64 lg:h-[350px] lg:w-[500px] xl:w-[600px] xl:h-[420px]"> */}
                  <div className="relative w-80 h-44 sm:h-80 sm:w-[560px] md:w-[680px] md:h-96 lg:h-[460px] lg:w-[800px] xl:w-[900px] xl:h-[500px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="lg:text-xl">{item.desc}</p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-3 md:text-lg bg-white hover:bg-gray-600 text-gray-600 hover:text-white font-semibold m-4 rounded">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen p-2 flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          I am happy to receive your review
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:h-[500px] md:w-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                TruongGiang -- Front-end Developer --
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-20 h-20 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full items-center justify-center flex"
          >
            Contact me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sp:px-8 md:px-12 lg:px-20 xl:px-36 overflow-scroll">
        {/* IMAGE  */}
        <div className="h-full lg:w-1/2 relative ">
          <Image
            src="/avt.png"
            alt="avata"
            fill
            className="object-contain p-6 md:p-10 lg:pr-14"
          />
        </div>
        {/* TEXT  */}
        <div className="h-full lg:w-1/2 flex flex-col gap-5 lg:gap-8 lg:justify-center p-4">
          <div className="flex flex-col gap-2">
            <div className="text-3xl md:text-4xl font-bold">
              <p className="">Hi,</p>
              <p className="">I{"'"}m Giang,</p>
              <p>Web Developer</p>
            </div>
            <h1 className="text-gray-500 tracking-widest ">
              <span className="text-gray-400">{"<>"}</span> Front End Developer
              <span className="text-gray-400">{" </>"}</span>
            </h1>
          </div>
          <div className="gap-2 flex flex-col">
            {/* <p>
              <span className="font-semibold pr-4">Name : </span>
              Tran Truong Giang
            </p> */}
            <p>
              <Link href="tel:0983345186">
                <span className="font-semibold pr-4">Phone : </span>
                0983345186
              </Link>
            </p>
            <p>
              <Link href="mailto:trantruonggiang2810@gmail.com">
                <span className="font-semibold pr-4">Email : </span>
                trantruonggiang2810@gmail.com
              </Link>
            </p>
          </div>
          <div className="w-full flex gap-4 ">
            {/* <input
              type="file"
              className="p-4 rounded-lg ring-black bg-black text-white"
            />
            Download CV */}
            {/* <a href="/CV.pdf" download>
              <button className="p-4 rounded-lg ring-black bg-black text-white">
                Download CV
              </button>
            </a> */}
            <Link href="/about">
              <button className="sm:p-4 p-2 rounded-lg ring-black bg-black text-white">
                About Me
              </button>
            </Link>
            <Link href="/contact">
              <button className="sm:p-4 p-2 border border-black rounded-lg ring-black">
                Contact Me
              </button>
            </Link>
          </div>
          {/* <div className="flex gap-1">
            <Link href="/">
              <Image src="/github2.png" alt="github" width={24} height={24} />
            </Link>
            <Link href="/">
              <Image src="/facebook2.png" alt="github" width={24} height={24} />
            </Link>
            <Link href="/">
              <Image src="/mail2.png" alt="github" width={24} height={24} />
            </Link>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

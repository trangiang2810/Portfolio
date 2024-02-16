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
          <div className="flex flex-col flex-row gap-4 justify-center">
            {/* intro TITLE  */}
            <div className="">
              <h1 className="text-xl text-gray-500">My intro</h1>
              <h2 className="font-bold text-2xl sm:text-4xl">About Me</h2>
            </div>
            {/* intro DESC  */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-5 sm:gap-8">
              <div className="lg:w-2/3 ">
                <p className="hang_indent">
                  My name is Giang, a senior student with a passion for web
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
              <div className=" lg:w-1/3 h-full relative">
                <div className="lg:w-80 lg:h-80 rounded-full md:w-72 md:h-72 sm:h-60 sm:w-60 w-56 h-56 overflow-hidden bg-red-50 transform -scale-x-[1] ">
                  <Image
                    src="/avt.png"
                    alt="avata"
                    fill
                    className="object-contain flex justify-center items-center"
                  />
                </div>
              </div>
            </div>
            {/* intro SIGN SVG */}
            {/* 
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="49"
                viewBox="0 0 78 49"
                fill="none"
              >
                <path
                  d="M5.92 48.82C4.32 48.82 2.96 48.34 1.84 47.38C0.68 46.46 0.0999997 45.22 0.0999997 43.66C0.0999997 42.1 0.84 40.28 2.32 38.2C3.8 36.12 6.3 33.96 9.82 31.72C10.62 31.16 11.46 30.66 12.34 30.22C13.26 29.78 14.2 29.32 15.16 28.84C15.4 28.72 15.58 28.66 15.7 28.66C15.86 28.66 15.94 28.72 15.94 28.84C15.94 29.12 15.66 29.42 15.1 29.74C13.18 30.7 11.54 31.7 10.18 32.74C8.86 33.82 7.64 35.08 6.52 36.52C5.92 37.28 5.28 38.16 4.6 39.16C3.96 40.2 3.42 41.22 2.98 42.22C2.5 43.22 2.26 44.12 2.26 44.92C2.26 46.6 3.06 47.44 4.66 47.44C5.34 47.44 6.14 47.24 7.06 46.84C7.98 46.48 8.98 45.88 10.06 45.04C12.78 42.92 14.7 40.56 15.82 37.96C16.94 35.4 17.5 32.4 17.5 28.96C17.5 26.4 17.26 23.56 16.78 20.44C16.34 17.24 16.1 14.18 16.06 11.26C15.86 12.5 15.52 14 15.04 15.76C14.6 17.48 14.06 19.12 13.42 20.68C12.78 22.24 12.06 23.58 11.26 24.7C10.5 25.82 9.52 26.38 8.32 26.38C7.48 26.38 6.76 25.96 6.16 25.12C5.6 24.28 5.32 23 5.32 21.28C5.32 20 5.54 18.48 5.98 16.72C6.42 14.96 7.02 13.26 7.78 11.62C8.54 9.94 9.38 8.56 10.3 7.48C11.26 6.36 12.22 5.8 13.18 5.8C13.86 5.8 14.34 6.08 14.62 6.64C14.94 7.16 15.1 7.7 15.1 8.26C15.1 8.7 15.02 9.08 14.86 9.4C14.7 9.72 14.46 9.88 14.14 9.88C13.82 9.84 13.58 9.7 13.42 9.46C13.3 9.18 13.18 8.92 13.06 8.68C12.94 8.4 12.72 8.26 12.4 8.26C11.76 8.26 11.14 8.68 10.54 9.52C9.98 10.32 9.46 11.38 8.98 12.7C8.54 13.98 8.18 15.34 7.9 16.78C7.66 18.22 7.54 19.54 7.54 20.74C7.54 21.86 7.66 22.78 7.9 23.5C8.18 24.22 8.6 24.6 9.16 24.64C9.84 24.68 10.5 24.24 11.14 23.32C11.78 22.4 12.36 21.22 12.88 19.78C13.44 18.34 13.92 16.82 14.32 15.22C14.76 13.58 15.12 12.06 15.4 10.66C15.72 9.22 15.94 8.1 16.06 7.3C16.38 5.18 16.68 3.84 16.96 3.28C17.24 2.68 17.54 2.38 17.86 2.38C18.14 2.38 18.38 2.64 18.58 3.16C18.82 3.68 18.94 4.16 18.94 4.6C18.94 4.92 18.92 5.14 18.88 5.26C18.4 7.9 18.16 10.6 18.16 13.36C18.16 14.52 18.2 15.68 18.28 16.84C18.36 17.96 18.46 19.08 18.58 20.2C18.82 22.52 18.94 24.68 18.94 26.68C18.94 30.76 18.52 34.2 17.68 37C16.88 39.84 15.82 42.12 14.5 43.84C13.18 45.6 11.76 46.86 10.24 47.62C8.76 48.42 7.32 48.82 5.92 48.82ZM28.9694 4.96C28.6094 4.96 28.3494 4.78 28.1894 4.42C28.0694 4.02 28.0094 3.74 28.0094 3.58C28.0094 2.94 28.1894 2.34 28.5494 1.78C28.9494 1.18 29.3894 0.859999 29.8694 0.819998H30.0494C30.5294 0.819998 30.8494 0.939999 31.0094 1.18C31.2094 1.38 31.3094 1.64 31.3094 1.96C31.3094 2.56 31.0494 3.22 30.5294 3.94C30.0094 4.62 29.4894 4.96 28.9694 4.96ZM25.9094 26.44C24.5494 26.44 23.6294 25.92 23.1494 24.88C22.6694 23.84 22.4294 22.64 22.4294 21.28C22.4294 19.92 22.5694 18.5 22.8494 17.02C23.1694 15.5 23.5094 14.12 23.8694 12.88C24.2694 11.64 24.5694 10.76 24.7694 10.24C25.2094 9.32 25.6494 8.54 26.0894 7.9C26.5294 7.22 27.0094 6.88 27.5294 6.88C27.8894 6.88 28.1494 7.02 28.3094 7.3C28.5094 7.54 28.6094 7.86 28.6094 8.26C28.6094 9.06 28.3894 9.88 27.9494 10.72C27.5094 11.52 27.1094 12.28 26.7494 13C25.9494 14.64 25.3094 16.1 24.8294 17.38C24.3894 18.66 24.1694 20.26 24.1694 22.18C24.1694 23.42 24.2894 24.32 24.5294 24.88C24.8094 25.44 25.1894 25.72 25.6694 25.72C26.3094 25.72 27.0494 25.36 27.8894 24.64C28.7294 23.88 29.5894 22.88 30.4694 21.64C31.3494 20.4 32.1294 19.06 32.8094 17.62C33.2494 16.7 33.5894 16.24 33.8294 16.24C33.9894 16.24 34.0694 16.4 34.0694 16.72C34.0694 17.16 33.8894 17.8 33.5294 18.64C33.2094 19.44 32.8094 20.26 32.3294 21.1C31.8894 21.94 31.4694 22.6 31.0694 23.08C30.3894 23.96 29.6094 24.74 28.7294 25.42C27.8494 26.1 26.9094 26.44 25.9094 26.44ZM33.6531 24.52C33.0131 24.52 32.4731 24.18 32.0331 23.5C31.7131 22.94 31.5531 22.28 31.5531 21.52C31.5531 20.44 31.7931 19.22 32.2731 17.86C32.7531 16.5 33.3931 15.18 34.1931 13.9C35.0331 12.62 35.9531 11.54 36.9531 10.66C37.9931 9.74 39.0531 9.2 40.1331 9.04C40.5331 9 41.0131 9.1 41.5731 9.34C42.1331 9.58 42.5931 9.88 42.9531 10.24C43.0331 9.84 43.0931 9.46 43.1331 9.1C43.1731 8.7 43.1931 8.32 43.1931 7.96C43.1931 6.84 43.0131 5.84 42.6531 4.96C42.2931 4.08 41.6531 3.5 40.7331 3.22C40.3731 3.1 39.9731 3.04 39.5331 3.04C39.2931 3.04 39.0331 3.08 38.7531 3.16C38.4731 3.2 38.1731 3.32 37.8531 3.52C37.5331 3.68 37.2131 3.94 36.8931 4.3C36.5731 4.62 36.3531 4.92 36.2331 5.2C36.1531 5.36 35.9531 5.72 35.6331 6.28C35.3131 6.8 35.0531 7.04 34.8531 7C34.6931 6.96 34.6131 6.82 34.6131 6.58C34.6131 6.46 34.6531 6.28 34.7331 6.04C34.9731 5.28 35.4331 4.64 36.1131 4.12C36.7931 3.56 37.5331 3.12 38.3331 2.8C39.1331 2.44 39.7931 2.24 40.3131 2.2C40.4331 2.2 40.5531 2.2 40.6731 2.2C40.7931 2.16 40.8931 2.14 40.9731 2.14C41.6131 2.14 42.1931 2.24 42.7131 2.44C43.2731 2.6 43.7131 2.82 44.0331 3.1C44.5531 3.5 44.9731 4.02 45.2931 4.66C45.6131 5.26 45.7731 6.02 45.7731 6.94C45.7731 7.22 45.7531 7.52 45.7131 7.84C45.6731 8.16 45.6131 8.48 45.5331 8.8C45.4131 9.44 45.2531 10.26 45.0531 11.26C44.8931 12.22 44.7131 13.22 44.5131 14.26C44.3531 15.3 44.2131 16.26 44.0931 17.14C44.0131 17.98 43.9731 18.58 43.9731 18.94C43.9731 19.34 44.0931 19.8 44.3331 20.32C44.6131 20.8 44.9731 21.04 45.4131 21.04C45.6531 21.04 45.9131 20.92 46.1931 20.68C46.5131 20.44 46.8331 20.04 47.1531 19.48C47.3531 19.16 47.5331 19 47.6931 19C47.8931 19 47.9931 19.12 47.9931 19.36C47.9931 19.68 47.8331 20.06 47.5131 20.5C46.7531 21.58 45.7931 22.12 44.6331 22.12C43.6731 22.12 42.9931 21.72 42.5931 20.92C41.9131 19.6 41.5731 18.42 41.5731 17.38C41.5731 16.3 41.5531 15.56 41.5131 15.16C41.3131 15.64 40.9331 16.4 40.3731 17.44C39.8131 18.44 39.1531 19.5 38.3931 20.62C37.6331 21.7 36.8331 22.62 35.9931 23.38C35.1531 24.14 34.3731 24.52 33.6531 24.52ZM34.6131 22.72C35.0131 22.72 35.4731 22.52 35.9931 22.12C36.5531 21.72 37.1331 21.1 37.7331 20.26C38.5331 19.1 39.2731 17.8 39.9531 16.36C40.6331 14.92 41.2531 13.52 41.8131 12.16C41.3331 11 40.7331 10.42 40.0131 10.42C39.3731 10.42 38.6931 10.76 37.9731 11.44C37.2531 12.12 36.5731 12.9 35.9331 13.78C35.1331 14.98 34.4931 16.18 34.0131 17.38C33.5731 18.58 33.3531 19.6 33.3531 20.44C33.3531 21.96 33.7731 22.72 34.6131 22.72ZM60.1159 25.78C59.5959 25.78 59.1359 25.46 58.7359 24.82C58.3359 24.14 58.1359 22.86 58.1359 20.98C58.1359 19.5 58.2559 17.88 58.4959 16.12C58.7359 14.32 58.9959 12.54 59.2759 10.78C59.5959 9.02 59.8759 7.46 60.1159 6.1C60.3559 4.7 60.4759 3.68 60.4759 3.04C60.4759 1.92 60.1359 1.36 59.4559 1.36C58.8159 1.36 58.1559 1.68 57.4759 2.32C56.8359 2.96 56.2159 3.74 55.6159 4.66C55.0559 5.58 54.5559 6.48 54.1159 7.36C53.7159 8.2 53.4559 8.82 53.3359 9.22C52.7759 10.78 52.3759 12.34 52.1359 13.9C51.8959 15.42 51.7759 17 51.7759 18.64C51.7759 19.32 51.7959 20.02 51.8359 20.74C51.9159 21.46 51.9759 22.2 52.0159 22.96C52.0959 23.36 51.9759 23.86 51.6559 24.46C51.3759 25.02 51.0359 25.3 50.6359 25.3C50.3559 25.3 50.1159 25.12 49.9159 24.76C49.7159 24.4 49.5759 24.08 49.4959 23.8C49.3359 23.32 49.2159 22.82 49.1359 22.3C49.0559 21.74 48.9759 21.26 48.8959 20.86C48.6159 19.22 48.3559 17.56 48.1159 15.88C47.8759 14.16 47.5359 12.5 47.0959 10.9C46.9759 10.46 46.8159 10 46.6159 9.52C46.4559 9 46.1959 8.58 45.8359 8.26C45.7559 8.18 45.6359 8.1 45.4759 8.02C45.3159 7.9 45.2359 7.8 45.2359 7.72C45.2359 7.56 45.4559 7.48 45.8959 7.48C46.3759 7.48 46.8559 7.72 47.3359 8.2C47.8159 8.68 48.2559 9.32 48.6559 10.12C49.1359 11.12 49.5359 12.18 49.8559 13.3C50.2159 14.42 50.4959 15.32 50.6959 16C50.9359 14.56 51.1959 13.28 51.4759 12.16C51.7559 11.2 52.1359 10.06 52.6159 8.74C53.0959 7.38 53.6959 6.06 54.4159 4.78C55.1359 3.46 55.9959 2.38 56.9959 1.54C57.9959 0.659999 59.1559 0.219999 60.4759 0.219999C62.3959 0.219999 63.3559 1.34 63.3559 3.58C63.3559 4.74 63.1559 6.02 62.7559 7.42C62.3559 8.78 61.9159 10.04 61.4359 11.2C60.9959 12.36 60.6959 13.16 60.5359 13.6C60.3359 14.16 60.1159 14.92 59.8759 15.88C59.6759 16.84 59.4959 17.84 59.3359 18.88C59.2159 19.92 59.1559 20.88 59.1559 21.76C59.1559 22.52 59.2359 23.16 59.3959 23.68C59.5959 24.16 59.8959 24.4 60.2959 24.4C60.6959 24.4 61.0559 24.22 61.3759 23.86C61.6959 23.46 61.9559 23.1 62.1559 22.78C62.3959 22.46 62.5159 22.4 62.5159 22.6C62.5959 23.2 62.3759 23.88 61.8559 24.64C61.3759 25.4 60.7959 25.78 60.1159 25.78ZM64.9239 48.82C63.3239 48.82 61.9639 48.34 60.8439 47.38C59.6839 46.46 59.1039 45.22 59.1039 43.66C59.1039 42.1 59.8439 40.28 61.3239 38.2C62.8039 36.12 65.3039 33.96 68.8239 31.72C69.6239 31.16 70.4639 30.66 71.3439 30.22C72.2639 29.78 73.2039 29.32 74.1639 28.84C74.4039 28.72 74.5839 28.66 74.7039 28.66C74.8639 28.66 74.9439 28.72 74.9439 28.84C74.9439 29.12 74.6639 29.42 74.1039 29.74C72.1839 30.7 70.5439 31.7 69.1839 32.74C67.8639 33.82 66.6439 35.08 65.5239 36.52C64.9239 37.28 64.2839 38.16 63.6039 39.16C62.9639 40.2 62.4239 41.22 61.9839 42.22C61.5039 43.22 61.2639 44.12 61.2639 44.92C61.2639 46.6 62.0639 47.44 63.6639 47.44C64.3439 47.44 65.1439 47.24 66.0639 46.84C66.9839 46.48 67.9839 45.88 69.0639 45.04C71.7839 42.92 73.7039 40.56 74.8239 37.96C75.9439 35.4 76.5039 32.4 76.5039 28.96C76.5039 26.4 76.2639 23.56 75.7839 20.44C75.3439 17.24 75.1039 14.18 75.0639 11.26C74.8639 12.5 74.5239 14 74.0439 15.76C73.6039 17.48 73.0639 19.12 72.4239 20.68C71.7839 22.24 71.0639 23.58 70.2639 24.7C69.5039 25.82 68.5239 26.38 67.3239 26.38C66.4839 26.38 65.7639 25.96 65.1639 25.12C64.6039 24.28 64.3239 23 64.3239 21.28C64.3239 20 64.5439 18.48 64.9839 16.72C65.4239 14.96 66.0239 13.26 66.7839 11.62C67.5439 9.94 68.3839 8.56 69.3039 7.48C70.2639 6.36 71.2239 5.8 72.1839 5.8C72.8639 5.8 73.3439 6.08 73.6239 6.64C73.9439 7.16 74.1039 7.7 74.1039 8.26C74.1039 8.7 74.0239 9.08 73.8639 9.4C73.7039 9.72 73.4639 9.88 73.1439 9.88C72.8239 9.84 72.5839 9.7 72.4239 9.46C72.3039 9.18 72.1839 8.92 72.0639 8.68C71.9439 8.4 71.7239 8.26 71.4039 8.26C70.7639 8.26 70.1439 8.68 69.5439 9.52C68.9839 10.32 68.4639 11.38 67.9839 12.7C67.5439 13.98 67.1839 15.34 66.9039 16.78C66.6639 18.22 66.5439 19.54 66.5439 20.74C66.5439 21.86 66.6639 22.78 66.9039 23.5C67.1839 24.22 67.6039 24.6 68.1639 24.64C68.8439 24.68 69.5039 24.24 70.1439 23.32C70.7839 22.4 71.3639 21.22 71.8839 19.78C72.4439 18.34 72.9239 16.82 73.3239 15.22C73.7639 13.58 74.1239 12.06 74.4039 10.66C74.7239 9.22 74.9439 8.1 75.0639 7.3C75.3839 5.18 75.6839 3.84 75.9639 3.28C76.2439 2.68 76.5439 2.38 76.8639 2.38C77.1439 2.38 77.3839 2.64 77.5839 3.16C77.8239 3.68 77.9439 4.16 77.9439 4.6C77.9439 4.92 77.9239 5.14 77.8839 5.26C77.4039 7.9 77.1639 10.6 77.1639 13.36C77.1639 14.52 77.2039 15.68 77.2839 16.84C77.3639 17.96 77.4639 19.08 77.5839 20.2C77.8239 22.52 77.9439 24.68 77.9439 26.68C77.9439 30.76 77.5239 34.2 76.6839 37C75.8839 39.84 74.8239 42.12 73.5039 43.84C72.1839 45.6 70.7639 46.86 69.2439 47.62C67.7639 48.42 66.3239 48.82 64.9239 48.82Z"
                  fill="black"
                />
              </svg>
            </div> */}

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

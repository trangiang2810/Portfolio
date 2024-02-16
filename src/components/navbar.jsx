import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,

      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,

      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/project", title: "Project" },
    { url: "contact", title: "Contact" },
  ];
  return (
    <div className="h-full flex items-center justify-between px-4 sp:px-8 md:px-12 lg:px-20 xl:px-28 text-xl">
      <div className="hidden md:flex gap-4 w-1/3 font-bold">
        {links.map((link, index) => (
          <Link
            className={`rounded p-1 ${
              pathName === link.url && "bg-black text-white"
            }`}
            href={link.url}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* LOGO */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center "
        >
          <span className="text-white">Tran Truong </span>
          <span className="w-12 h-8 bg-white mr-1 text-black flex justify-center items-center rounded-md ">
            Giang
          </span>
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu list  */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl h-screen z-40 "
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

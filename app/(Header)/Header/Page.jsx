"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useState } from "react";

import { useTheme } from "next-themes";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
import { PathNameContext } from "../../../components/providers/Theme";

const HeaderPage = () => {
  const path = useContext(PathNameContext);
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverTheme, setHovertheme] = useState(null);
  const { theme, systemTheme, setTheme } = useTheme();
  const links = [
    { name: "/Dark.png", theme: "dark" },
    { name: "/Light.png", theme: "light" },
    { name: "/system.png", theme: "system" },
  ];

  const ButtonVariant = {
    closed: {
      height: "1.6rem",
      transition: { duration: 0.4 },
    },

    open: {
      height: "3.7rem",
      transition: { when: "beforeChildren", duration: 0.4 },
    },
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    cycleOpen(!open);
  };

  const handleTheme = (newTheme) => {
    // setTheme(newTheme);
    cycleOpen(!open);

    if (newTheme === "system") {
      setHovertheme(" System Theme");
      setTheme(newTheme);
    } else if (newTheme === "light") {
      setHovertheme(" Light");
      setTheme(newTheme);
    } else if (newTheme === "dark") {
      setHovertheme(" Dark");
      setTheme(newTheme);
    }
  };
  {
    /* DF1B89 */
  }
  return path == "/Admin" ? null : (
    <div className="">
      <AnimatePresence>
        <motion.header
          key="parent"
          variants={ButtonVariant}
          initial="closed"
          animate={open ? "open" : "closed"}
          exit={{
            height: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="mx-auto w-full z-50 flex justify-center fixed top-0 "
        >
          <div className="cursor-pointer bg-[#343434]    hover:text-neutral-700 border-neutral-600 border border-t-0  w-[110px] flex-col overflow-hidden rounded-b-xl break-all ">
            <div
              onClick={handleClick}
              className="text-[12px] text-center mt-1 text-neutral-200 group-hover/sidebar:opacity-100 transition-all font-bold ease-out duration-700 "
            >
              {hoverTheme ? (
                <p className="transition-all font-bold ease-out duration-700">
                  {hoverTheme}
                </p>
              ) : (
                <p className="transition-all font-bold ease-out duration-700">
                  Switch Theme
                </p>
              )}
            </div>

            {/*  */}

            <div className="dark:bg-[#161616] bg-white overflow-hidden  h-fit rounded-xl mt-1">
              {open && (
                <div className="gap-x-1 flex justify-center">
                  {links.map(({ name, theme }, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <>
                        <motion.div
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          onMouseEnter={() => setActiveIndex(index)}
                          className=" relative rounded-md text-neutral-400 flex  transition-all ease-in duration-200    "
                        >
                          <Image
                            width={100}
                            height={100}
                            onClick={() => handleTheme(theme)}
                            onMouseEnter={() => setHovertheme(theme)}
                            onMouseLeave={() => setHovertheme(null)}
                            className="w-8 h-8 opacity-50 duration-500 transition-all ease-in hover:opacity-100 object-cover rounded-full"
                            src={name}
                            alt=""
                          />
                        </motion.div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </motion.header>
      </AnimatePresence>

      <nav
        className={`flex ${
          path === "/Resume" && "flex-row-reverse"
        }  justify-between items-center w-full  px-4 pt-10 max-w-6xl mx-auto`}
      >
        <Link href={"/Admin"} className="flex gap-x-3 items-center">
          <Image
            width={300}
            height={300}
            className="w-12 h-12 rounded-full object-cover"
            src="/profile.png"
            alt=""
          />

          <div>
            <h4 className="text-xs ">Mubashir Shaikh</h4>
            <p className="text-[#828282] text-xs">Software Developer</p>
          </div>
        </Link>

        <div>
          <Link
            // href={"https://www.canva.com/design/DAFz93fvUzY/view"}
            href={`${path === "/Resume" ? "/" : "/Resume"}`}
            className="flex w-44 items-center justify-between border border-neutral-600 rounded-full p-2 px-5"
          >
            {path === "/Resume" && <PiArrowLeftThin />}
            <span className="text-xs">
              {path == "/Resume" ? "Back to Homepage" : "View resume@latest"}
            </span>
            {path !== "/Resume" && <PiArrowRightThin />}
          </Link>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
      </div>
    </div>
  );
};

export default HeaderPage;

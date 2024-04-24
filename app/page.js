"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  PiArrowUpRight,
  PiArrowDownThin,
  PiGithubLogoThin,
  PiLinkedinLogoBold,
  PiHandSwipeLeft,
  PiQuestion,
  PiSpinner,
  PiArrowDown,
  PiCheckCircle,
} from "react-icons/pi";

import { IoIosMailUnread } from "react-icons/io";

import { RiTwitterXLine } from "react-icons/ri";

import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
import { sendMessage } from "./lib/requesthandler";
import ResumeComponent from "./components/ResumeComponent";
// import Resume from "./Resume/page";

const skillsArray = [
  "React",
  "NodeJs",
  "Tailwind",
  "MongoDb",
  "Express",
  "PHP",
  "NextJs",
  "Java",
  "JS",
  "SQL",
  "Python",
  "React Native",
];

const sideProjects = [
  {
    avatar: "/MoviePass.png",
    link: "https://drive.google.com/file/d/1oDxp8oRBh20pQYZ0Qvi4L_x2R_LgPlJd/view?usp=sharing",
    description:
      " MoviePass.com is a user-friendly movie seat booking platform with secure authentication, sleek modern UI, responsive design, dynamic real-time data using MS SQL, seamless seat selection, integrated payment methods, and QR code generation for efficient ticket retrieval ",
  },
  {
    avatar: "/Proptiger.png",
    link: "https://github.com/sk-py/Proptiger",
    description:
      "Integrated React Router for client-side routing. Where Potential Buyers can Connect with Channel Partners as per their requirements.(My first react project)",
  },
  {
    avatar: "/Java.png",
    link: "https://github.com/sk-py/JavaIO",
    description:
      "Developed a Java I/O project that supports two-way file sharing of any type between devices connected via LAN/WLAN",
  },
  {
    avatar: "/Expo.png",
    link: "https://github.com/sk-py/Meshflow",
    description:
      "Built a Job Searching app using React Native on Expo. Used Rapid Api for realtime data and job updates (My first Application)",
  },
  {
    avatar: "/Campscape.png",
    link: "https://github.com/sk-py/Campscape/",
    description:
      "A basic camping website built using HTML and CSS only.(My first website)",
  },
  {
    avatar: "/END.jpg",
    link: "",
    description: "  ",
  },
];

function Homepage() {
  const { theme } = useTheme();
  const [Open, setOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const constraintRef = useRef(null);
  const initialValue = {
    email: "",
    subject: "",
    message: "",
  };
  const [MessageData, setMessageData] = useState(initialValue);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMessageData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await sendMessage(MessageData);
    if (res.status === 200) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
    setMessageData(initialValue);
    setIsLoading(false);
  };

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className=" w-full  px-4 pt-8 max-w-6xl mx-auto relative ">
      <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs text-white">Location</p>
              <p className="text-xs text-white">Mumbai</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <motion.img
            whileHover={{ translateY: 100, scale: 3, translateX: -30 }}
            className="h-full w-full duration-300 transition-all ease-in-out object-cover"
            src={theme == "dark" ? "/map.jpg" : "/map.jpg"}
            alt=""
          />
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40  ">
          <div className=" absolute w-full p-2">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Status</p>
              <div>
                <span>
                  <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                    <span
                      className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-400 animate-ping dark:bg-lime-500 bg-green-600`}
                    ></span>
                    <span
                      className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 sm:mt-1 top-4  " />
            <div className="w-full h-full flex items-center justify-center flex-col">
              <p className="text-xs font-semibold max-sm:mt-1 mt-2">
                New opportunities are welcomed, and I'm available for work.
                <br /> Feel free to reach out and connect with me!
              </p>

              <button
                onClick={() => scrolltoHash("contactMe")}
                className="text-xs flex w-full items-center justify-between border hover:bg-slate-100 dark:hover:bg-zinc-700 dark:border-neutral-600 border-neutral-400/60  mt-3 max-sm:mt-2 rounded-full p-1 mb-1 px-2 dark:bg-neutral-700/40 sm:w-full"
              >
                <span>Contact me</span>
                <PiArrowDown />
              </button>
            </div>
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 "
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs ">
                Mubashir Shaikh - Sk-py
              </p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold  leading-5">
              Full-Stack dev evolving into backend wizard. Crafted web chats,
              job boards and many interesting projects. Explored PHP, ASP.NET,
              Java, Python for college gigs. However, my primary focus nowadays
              is on the MERN Stack. Git savvy, version control maestro. Let's
              code the future together!
            </p>
          </div>
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Experience & Education</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden  scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-16 px-2  ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2018 -- 2019
              </p>
              <div>
                <h4 className="text-xs font-bold">
                  Secondary Education [ SSC ]
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Completed SSC (10th) - <b>70%</b>
                </p>
              </div>
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3 px-2 relative ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2019 -- 2021
              </p>
              <div>
                <h4 className="text-xs font-bold">High School [ HSC ]</h4>
                <p className="text-[11px] text-neutral-500">
                  Completed High School (11th and 12th) - <b>80%</b>
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2021 -- 2024
              </p>
              <div>
                <h4 className="text-xs font-bold">
                  BCA [ Bachelor of Computer Applications ]
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Enrolled in<b> BCA from KKSU </b>.
                  <br /> Anticipated completion of BCA degree in 2024.
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400 text-center  text-xs w-20 shrink-0  ">
                3 mos
              </p>
              <div>
                <h4 className="text-xs font-bold">TCR Innovations</h4>
                <p className="text-[11px] text-neutral-500">
                  <b> Full Stack Development Intern / Trainee </b>
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400 text-center  text-xs w-20 shrink-0  ">
                2 mos
              </p>
              <div>
                <h4 className="text-xs font-bold">
                  Freelancing in collaboration
                </h4>
                <p className="text-[11px] text-neutral-500">
                  <b>
                    Engaged in a short-term collaboration with an international
                    freelancing team.
                    <br />
                    Acquired foundational skills in WordPress during project
                    execution, gaining initial exposure to website development
                    without delving into extensive manual coding.
                  </b>
                </p>
              </div>
            </div>

            <div className="px-2 my-3 mb-9">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>
        <div className=" dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden ">
          <div className=" absolute w-full p-2 z-20 ">
            <p className="text-xs">Featured Work</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          <div className="overflow-y-auto h-[340px] overflow-hidden  scroll-smooth relative ">
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1 relative">
              <Link
                href={"https://github.com/sk-py/Peers"}
                target="_blank"
                className="flex justify-between items-center p-2  gap-x-2 mt-14"
              >
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full  object-contain"
                  src="/image.png"
                  alt=""
                />

                <div className="w-[80%] flex flex-col justify-center text-left">
                  <b className="text-xs">Peers</b>
                  <p className="text-xs">
                    Developed a real-time communication app, Peers.
                    <br /> Using the MERN stack and Socket.io inspired by
                    Whatsapp and Telegram.
                  </p>
                </div>

                {/* <ul className="menu">
                  <a href="#0"></a>
                </ul> */}
              </Link>
            </div>
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <Link
                href={"https://github.com/sk-py/Aura-Hackathon-GFG"}
                target="_blank"
                className="flex justify-between items-center p-2  gap-x-2 mt-4"
              >
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-contain"
                  src="/JobTrek.png"
                  alt=""
                />

                <div className="w-[80%] flex flex-col justify-center text-left">
                  <b className="text-xs">JobTrek</b>
                  <p className="text-xs">
                    A Full Stack job board Web-Application.
                    <br /> Built in collaboration for a hackathon within 24 hrs.
                  </p>
                </div>
              </Link>
            </div>
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1 max-h-fit  relative">
              <Link
                href={"https://github.com/sk-py/Final_Php"}
                target="_blank"
                className="flex justify-between items-center p-2  gap-x-2 mt-4"
              >
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-contain"
                  src="/Dealio.png"
                  alt=""
                />

                <div className="w-[80%] flex flex-col justify-center text-left">
                  <b className="text-xs">Deal.io</b>
                  <p className="text-xs">
                    Developed Full Stack Ads listing website using PHP & MySql.
                  </p>
                </div>
              </Link>
            </div>
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1 max-h-fit  relative">
              <Link
                href={"https://github.com/sk-py/apex-gymnasium"}
                target="_blank"
                className="flex justify-between items-center p-2  gap-x-2 mt-4"
              >
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-contain"
                  src="/Apex.png"
                  alt=""
                />

                <div className="w-[80%] flex flex-col justify-center text-left">
                  <b className="text-xs">Apex Gymnasium</b>
                  <p className="text-xs">
                    A landing page built using React and Framer Motion of a
                    gymnasium.
                  </p>
                </div>
              </Link>
            </div>

            <div className="px-2 my-3 mb-10">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
          </div>
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-14 transition-all ease-in duration-200" />
          {/* <Products /> */}
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[150px] col-span-2  relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Get in touch</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="flex items-center justify-center h-full">
            <div className="flex justify-center items-center gap-x-3 sm:my-6 sm:mt-8 px-2">
              <Tooltip showArrow={true} content="X (Twitter)" color="#161616">
                <Link
                  href={"https://twitter.com/shaikh597"}
                  target="_blank"
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <RiTwitterXLine className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="GitHub" color="#161616">
                <Link
                  href={"https://github.com/sk-py"}
                  target="_blank"
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiGithubLogoThin className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="LinkedIn" color="#161616">
                <Link
                  href={"https://www.linkedin.com/in/mubashir-shaikh-/"}
                  target="_blank"
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiLinkedinLogoBold className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="E-mail" color="#161616">
                <Link
                  href={"mailto:shaikh56742@gmail.com"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <IoIosMailUnread className="text-xl" />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        {/* ----------- Side Projects ---------- */}
        <div className="dark:bg-[#1E1E1E] overflow-x-hidden bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg min-h-[250px] max-h-fit col-span-2 row-span-3 md:row-span-2 ">
          <div className=" w-full px-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs ml-1">Side projects</p>
              <p className="text-neutral-400 items-center cursor-pointer ">
                <PiQuestion title="Tip - Drag gently" className="text-xl " />
              </p>
            </div>
            <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1   " />
          </div>
          <div
            ref={constraintRef}
            className="overflow-hidden relative w-full h-full"
          >
            <motion.div
              id="card"
              drag="x"
              transition={{ stiffness: 50 }}
              dragElastic={6}
              dragMomentum={true}
              dragConstraints={constraintRef}
              // { right: 600, left: 0, right: -1 }
              className="w-max h-full flex justify-center items-center"
            >
              {sideProjects.map((project, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex lg:w-[520px] md:w-[370px] w-[400px] h-full flex-col py-10 items-center mt-8 p-4 md:ml-4 gap-y-8 cursor-grab "
                  >
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.avatar}
                        width={100}
                        height={100}
                        className="rounded-3xl lg:mt-10 mt-2 bg-white"
                        alt="Side Project Icon"
                      />
                    </Link>
                    <span className="p-1 w-full lg:w-[90%] text-center lg:text-md text-sm ">
                      {project.description}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <PiHandSwipeLeft className="absolute  animate-pulse top-4 text-2xl left-[48%]" />
          </div>
        </div>
        <div className="dark:bg-[#1E1E1E] h-72 bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2  relative  overflow-hidden scrollbar-hide  ">
          <div className=" absolute w-full flex-col p-2 z-20 flex justify-between">
            <span className="w-full flex flex-row justify-between">
              <p className="text-xs dark:text-neutral-300 text-neutral-900 ">
                Currently on
              </p>
              <p className="text-xs text-neutral-400 flex ">
                Learning<span className="animate-indeterminate-bar">....</span>
              </p>
            </span>
            <div className="w-full h-[0.9px] dark:bg-neutral-500 bg-neutral-400/60 mt-2 top-7 animate-indeterminate-bar  " />
          </div>
          {/* <div className=" bg-gradient-to-r absolute z-10 from-white via-white dark:from-[#1e1e1ede] dark:via-[#1e1e1ed0] to-transparent left-0 w-8 h-full transition-all ease-in duration-200" /> */}
          <Link
            href={"https://nextjs.org/"}
            target="_blank"
            className="w-full h-full flex items-center justify-center  "
          >
            <Image
              width={350}
              height={350}
              className="duration-300 dark:hover:bg-white dark:hover:p-20 dark:hover:rounded-md hover:scale-110 cursor-pointer transition-all ease-in-out object-cover"
              src={"/next.svg"}
              alt=""
            />
          </Link>
          {/* <div className="w-full h-full"></div> */}

          <div className=" bg-gradient-to-l absolute z-10 from-white via-white dark:from-[#1e1e1ede] dark:via-[#1e1e1e83] to-transparent right-0 w-12 h-full transition-all ease-in duration-200" />
        </div>
        {/* <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg z-20 h-44 relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Any Queries..?</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-10 flex flex-col items-center w-full px-2 ">
            <textarea
              cols={14}
              rows={4}
              onChange={handleChange}
              value={Message}
              className=" scrollbar-hide w-full rounded-xl text-sm p-1 dark:placeholder:text-neutral-500 placeholder:text-neutral-700 outline-none border dark:border-neutral-600 border-neutral-400/60 indent-2 dark:bg-neutral-900"
              type="email"
              placeholder="Message...."
            />
            <button
              onClick={handleSubmit}
              className="text-xs  w-full  border dark:border-neutral-600 border-neutral-400/60  mt-2 rounded-full p-1 px-2 hover:dark:bg-neutral-600 dark:bg-neutral-700/40"
            >
              <span>Contact me</span>
            </button>
          </div>
        </div> */}
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44  p-2">
          <div>
            <div className="flex items-center gap-x-2 mt-3">
              <Image
                height={400}
                width={400}
                className="w-8 h-8 rounded-full scale-110 object-cover"
                src="/Sk2.png"
                alt=""
              />
              <div className="">
                <p className="text-xs">Sk-py</p>
                {/* <p className="text-xs">A.k.a Mubashir</p> */}
              </div>
            </div>
            <p className="text-xs mt-3">
              Lorem, ipsum{" "}
              <b>
                Hey there! This is just some random text. Any clever suggestions
                to add a dash of excitement to this space?{" "}
              </b>
              https://chat.openai.com/share/61081a03-42ae-4c4a-ba6f-e7b3279d1cc0
            </p>
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2"
        >
          <div>
            <div className="flex items-center gap-x-2 mt-3">
              <Image
                height={400}
                width={400}
                className="w-8 h-8 rounded-full scale-110 object-cover"
                src="/Sk2.png"
                alt=""
              />

              <div className="">
                <p className="text-xs">Sk-py</p>
                <p className="text-xs">A.k.a Mubashir</p>
              </div>
            </div>
            <p className="text-xs mt-3">
              Whether you're here for the code, curious about collaboration, or
              you're on the lookout for a passionate developer, you're in the
              right place! Feel free to reach out
              <a href="https://drive.google.com/file/d/1TxWOsfCGHmrp1r67YYj_8GexbPN1mB2X/view?usp=sharing">
                😉
              </a>
            </p>
          </div>
        </motion.div>
        <div className="  rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  lg:h-44 h-max sm:h-max p-2 relative "
          >
            <div className=" absolute w-full p-2 z-20">
              <p className="text-xs">Efficient knowledge of</p>
              <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className="mt-9 overflow-hidden flex-wrap items-center lg:mt-11 w-full flex gap-1 ">
              {skillsArray.map((skill, index) => {
                return (
                  <span
                    key={index}
                    className="p-1 dark:bg-neutral-600 rounded-md px-2 text-xs border border-neutral-300"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
          <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 overflow-y-scroll scrollbar-hide border-neutral-400/60 shadow-xl rounded-lg lg:h-44 md:h-44 h-48 p-2 relative z-40">
            <div>
              <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">Resume</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
              </div>
            </div>
            {/* <div className="mt-24 w-full">
              <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                <span>View</span>
                <PiArrowUpRight />
              </button>
              <button className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                <span>Download</span>
                <PiArrowDownThin />
              </button>
            </div> */}
            <div className="mt-8 h-fit overflow-y-scroll scrollbar-hide">
              {/* <Resume width={"85%"} lgWidth={"85%"} /> */}
              <ResumeComponent />
            </div>
            <Link
              href={"/Resume"}
              className="text-xs mb-1 w-full flex items-center p-1 text-black dark:text-neutral-50 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-600 dark:hover:bg-neutral-500 rounded-xl cursor-pointer justify-center "
            >
              View
            </Link>
            <Link
              href={
                "https://drive.google.com/uc?export=download&id=1iE0OXy69bc64Dv0Sukvc3NK6ZAiWy0Wt"
                
              }
              className="text-xs w-full flex items-center p-1 text-black dark:text-neutral-50 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-600 dark:hover:bg-neutral-500 rounded-xl cursor-pointer justify-center "
            >
              Download
            </Link>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#222222] bg-white border dark:border-neutral-500 border-neutral-400/60 shadow-xl mt-2 rounded-lg z-20 h-max relative">
        <div className=" absolute w-full p-2 z-20">
          <p className="text-xs">Any Queries..?</p>
          <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
        </div>

        <div className="mt-10 flex flex-col items-center w-full px-2 gap-y-2 ">
          <form className="flex w-full justify-around">
            <input
              type="text"
              className="w-[49%] dark:bg-neutral-900  bg-neutral-100 outline-none dark:placeholder:text-neutral-500 placeholder:text-neutral-700 text-sm indent-1 p-1 rounded-lg border border-neutral-600"
              placeholder="Email or name (prefer email)"
              onChange={handleChange}
              name="email"
              required={true}
              value={MessageData.email}
              id=""
            />
            <input
              type="text"
              className="w-[49%] dark:bg-neutral-900 bg-neutral-100  outline-none dark:placeholder:text-neutral-500 placeholder:text-neutral-700 text-sm indent-1 p-1 rounded-lg border border-neutral-600"
              placeholder="Subject :"
              onChange={handleChange}
              required={true}
              value={MessageData.subject}
              name="subject"
              id=""
            />
          </form>
          <textarea
            cols={14}
            rows={4}
            onChange={handleChange}
            value={MessageData.message}
            required={true}
            name="message"
            className=" scrollbar-hide w-full rounded-xl text-sm p-1  bg-neutral-100 dark:placeholder:text-neutral-500 placeholder:text-neutral-700 outline-none border dark:border-neutral-600 border-neutral-400/60 indent-2 dark:bg-neutral-900"
            type="email"
            placeholder="Message...."
          />
          <button
            type="submit"
            disabled={
              !MessageData.email || !MessageData.subject || !MessageData.message
            }
            onClick={handleSubmit}
            className="text-xs  w-full cursor-pointer  border dark:border-neutral-600 border-neutral-400/60  my-2  rounded-full p-1 px-2 hover:bg-neutral-100 hover:dark:bg-neutral-600 dark:bg-neutral-700/40"
          >
            <span
              id="contactMe"
              className="w-full flex items-center justify-center p-1"
            >
              {IsLoading ? (
                <PiSpinner className="animate-spin text-medium" />
              ) : (
                "Contact me"
              )}
            </span>
          </button>
        </div>
      </div>
      {Open && (
        <span className="sticky bg-black border border-neutral-500 dark:bg-white dark:text-black dark:font-bold  text-white items-center text-sm gap-2 rounded-lg px-6 w-max bottom-1 my-2 flex lg:left-[45%] md:left-[39%] left-[29%]  z-50 p-2">
          <PiCheckCircle className="text-xl" /> Sent Successfully
        </span>
      )}
    </div>
  );
}

export default Homepage;

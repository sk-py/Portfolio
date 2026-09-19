import { PiArrowDown, PiArrowUpRight, PiGithubLogoThin, PiLinkedinLogoBold } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoIosMailUnread } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import SectionHeader from "@/components/custom/section-header";
import About from "@/components/home/about-dialog";
import ContactForm from "@/components/home/contact-form";

const skillsArray = [
  "React.js",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Docker",
  "MongoDB",
  "Linux",
  "Tailwind CSS",
  "BullMQ",
  "Redis",
  "GitHub Actions",
  "Git",
  "WebSockets",
] as const;

const sideProjects = [
  {
    avatar: "/images/MoviePass.png",
    link: "https://youtu.be/o6pAryubI1s?si=MHSIxMMKkd8c3F4j",
    title: "MoviePass",
    description:
      "Movie seat booking platform with authentication, responsive UI, live seat availability, MS SQL data, payment integration, and QR-based ticket retrieval.",
  },
  {
    avatar: "/images/Proptiger.png",
    link: "https://proptiger.vercel.app/",
    title: "Proptiger",
    description:
      "React project using client-side routing to connect property buyers with channel partners based on their requirements.",
  },
  {
    avatar: "/images/Java.png",
    link: "https://github.com/sk-py/JavaIO",
    title: "Java I/O",
    description:
      "Java I/O project for transferring files of different types between devices connected over a LAN or WLAN.",
  },
  {
    avatar: "/images/Expo.png",
    link: "https://github.com/sk-py/Meshflow",
    title: "Meshflow",
    description:
      "React Native and Expo job search app that consumes RapidAPI data to display job listings and updates.",
  },
  {
    avatar: "/images/Campscape.png",
    link: "https://github.com/sk-py/Campscape/",
    title: "Campscape",
    description:
      "Simple camping website built with HTML and CSS. One of my early projects while learning web development.",
  },
] as const;

const featuredWork = [
  {
    avatar: "/images/bastion-icon.png",
    title: "Bastion",
    link: "https://bastion.skpy.in",
    description:
      "Self-hosted browser SSH gateway with live shell reattachment, RBAC, encrypted credentials, SFTP, session recording, and streamed file transfers.",
    stack: "Node.js • TypeScript • React • PostgreSQL • WebSockets • Docker",
  },
  {
    avatar: "/images/actibot.png",
    title: "Actibot",
    link: "https://actibot.actifyzone.com/",
    description:
      "Document Q&A proof of concept using Docling, FastAPI, Node.js, OpenAI embeddings, PostgreSQL with pgvector and HNSW, and LangChain memory.",
    stack: "Python • FastAPI • Node.js • PostgreSQL • pgvector • LangChain",
  },
  {
    avatar: "/images/actify-geotrack.webp",
    title: "Actify GeoTrack",
    link: "https://apps.apple.com/in/app/actify-geotrack/id6742871082",
    description:
      "Production mobile app with 100+ Play Store downloads for HRMS attendance workflows, geo-location and QR-based attendance, approvals, and HR portal integration.",
    stack: "React Native • Expo • REST APIs • Geo-location • QR",
  },
  {
    avatar: "/images/image.png",
    title: "Peers",
    link: "https://github.com/sk-py/Peers",
    description:
      "Real-time chat application built with the MERN stack and Socket.io, focused on live messaging and event-driven communication.",
    stack: "React • Node.js • MongoDB • Socket.io",
  },
] as const;

const aboutMilestones = [
  {
    title: "The spark",
    text: "In college, I built a simple site listing products by hand in HTML, then wondered how visitors could add their own listings. That question led me to PHP and a barter-trade site called Swappify, which grew into an OLX-style marketplace, Dealio, that took off across my college.",
  },
  {
    title: "Going deeper",
    text: "That curiosity pulled me into the MERN stack and REST APIs, then a 24-hour hackathon where I built a job board's backend from scratch. From there I explored real-time systems with Socket.io before picking up React Native with Expo.",
  },
  {
    title: "Into production",
    text: "I shipped my first production mobile app, then expanded into Next.js and full-stack web development, building HRMS, CRM, and e-commerce features end to end rather than treating the frontend and backend as separate jobs.",
  },
  {
    title: "Systems and AI",
    text: "I built Actibot, a document Q&A system using pgvector, LangChain, and FastAPI, and started paying closer attention to how the UI, APIs, databases, and infrastructure underneath all fit together as one system.",
  },
  {
    title: "Into infrastructure",
    text: "A production security incident pushed me into DevOps: Linux, Nginx, CI/CD, and secure server access with Tailscale. I later built Bastion, a self-hosted SSH gateway, from scratch to handle server access properly.",
  },
  {
    title: "Where I'm heading",
    text: "I'm deepening Docker and Kubernetes now, moving toward platform engineering. I like owning a system end to end not just the parts that are visible.",
  },
];


const experienceData = [
  {
    logo: "/images/actify.jpg",
    organization: "Actify Inc",
    period: "May 2024 – Present",
    role: "Software Developer",
    description:
      "Full-stack development across React, Next.js, React Native, Node.js, TypeScript, and PostgreSQL. Worked on HRMS, CRM, e-commerce, and admin portals, along with APIs, deployments, and production support on Linux and Azure.",
  },
  {
    logo: "/images/freelancer.png",
    organization: "Freelance Collaboration",
    period: "Short-term",
    role: "Web Development",
    description:
      "Worked with an international freelancing team on short-term website projects and gained practical exposure to WordPress and client-driven delivery.",
  },
  {
    logo: "/images/tcr.jpg",
    organization: "TCR Innovation",
    period: "Aug to Dec 2023",
    role: "Full Stack Development Intern / Trainee",
    description:
      "Built REST APIs and worked with MongoDB to support application data flows.",
  },
  {
    logo: "/images/kksu.png",
    organization: "KKSU",
    period: "2021 to 2024",
    role: "Bachelor of Computer Applications",
    description:
      "Bachelor of Computer Applications with coursework in software development, Core Java, networking, and Python.",
  },
] as const;



export default function Homepage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mubashir Shaikh",
    "jobTitle": "Software Developer",
    "url": "https://skpy.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/sk-py",
      "https://www.linkedin.com/in/mubashir-shaikh-/",
      "https://twitter.com/shaikh597"
    ],
    "knowsAbout": [
      "React.js", "Next.js", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Linux"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Sahyog College - Kavikuluguru Kalidas Sanskrit University KKSU"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Actify Inc"
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid grid-flow-row-dense grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">

        {/* Location (CSS Hover instead of Framer Motion) */}
        <div className="group relative h-40 overflow-hidden rounded-lg border bg-black border-neutral-400/60 shadow-xl dark:border-neutral-600">
          <div className="absolute z-10 w-full p-2 mix-blend-difference text-white">
            <div className="flex items-center justify-between">
              <p className="text-xs">Location</p>
              <p className="text-xs">Mumbai</p>
            </div>
            <div className="mt-1 h-px w-full bg-white/30" />
          </div>
          <img
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[3] group-hover:translate-y-20 group-hover:-translate-x-10"
            src="/images/map.jpg"
            alt="Map view of Mumbai"
          />
        </div>

        {/* Status */}
        <div className="relative h-40 rounded-lg border border-neutral-400/60 bg-white shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e] overflow-hidden">
          <SectionHeader title="Status" detail="Available" ping />
          <div className="flex h-full flex-col justify-between pb-3 pt-10">
            <div className="px-1">
              <p className="mt-1.5 text-xs font-sans font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
                Seeking full-stack roles. Deep frontend experience balanced with capable backend skills.
              </p>
            </div>
            <a
              href="#contactMe"
              className="group w-[96%] self-center flex cursor-pointer items-center justify-between rounded-lg bg-neutral-200 px-3 py-2 text-xs font-medium text-black transition-all hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-600"
            >
              <span>Let's talk</span>
              <PiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <About milestones={aboutMilestones} />

        {/* Experience and education */}
        <div className="relative h-[340px] overflow-hidden rounded-lg border border-neutral-400/60 bg-white shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e] sm:col-span-2 sm:row-span-2">
          <SectionHeader title="Experience & Education" />
          <div className="relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-accent-foreground px-3 pb-8 pt-16">
            <div className="relative">
              <div className="absolute left-[3px] top-3 w-0.5 h-[80%] bg-neutral-300 dark:bg-neutral-700" />
              {experienceData.map((item) => (
                <div key={item.organization} className="relative flex gap-3 pb-5 last:pb-0">
                  <div className="relative z-10 flex w-2 justify-center">
                    <div className="mt-3 flex h-2 w-2 items-center justify-center rounded-full border-px border-white bg-neutral-500 dark:border-[#1e1e1e] dark:bg-neutral-300">
                      <div className="h-1 w-1 rounded-full bg-neutral-900 dark:bg-neutral-800" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900">
                        <Image src={item.logo} alt={`${item.organization} logo`} width={44} height={44} className="h-full w-full object-contain" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-xs font-bold">{item.organization}</h4>
                          <span className="shrink-0 text-right text-[10px] text-neutral-400">{item.period}</span>
                        </div>
                        <p className="mt-1 text-[11px] font-semibold text-neutral-400">{item.role}</p>
                        <p className="mt-1 text-[11px] leading-4 text-neutral-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent dark:from-[#1e1e1e]" />
        </div>

        {/* Featured work */}
        <div className="relative h-[340px] overflow-hidden rounded-lg border border-neutral-400/60 bg-white shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e] sm:col-span-2 sm:row-span-2">
          <SectionHeader title="Featured Work" detail="Selected projects" />
          <div className="relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-accent-foreground px-2 pb-8 pt-14">
            {featuredWork.map((project, index) => (
              <div key={project.title} className={`rounded-md bg-[#f5f5f5] px-1 dark:bg-[#1b1b1b] ${index > 0 ? "mt-3" : ""}`}>
                <Link href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-2">
                  <Image width={56} height={56} className="h-14 w-14 shrink-0 rounded-xl object-contain" src={project.avatar} alt={`${project.title} project icon`} />
                  <div className="min-w-0 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <b className="text-xs">{project.title}</b>
                      <PiArrowUpRight className="shrink-0 text-sm text-neutral-400" />
                    </div>
                    <p className="mt-1 text-[11px] leading-4">{project.description}</p>
                    <p className="mt-1 text-[10px] text-neutral-500">{project.stack}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent dark:from-[#1e1e1e]" />
        </div>

        {/* Socials */}
        <div className="relative h-36 rounded-lg border border-neutral-400/60 bg-white shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e] sm:col-span-2">
          <SectionHeader title="Socials" detail="Find me online" />
          <div className="flex h-full items-center justify-center gap-3 pt-5">
            {/* Keeping tooltip triggers identical */}
            <Tooltip>
              <TooltipTrigger>
                <Link href="https://twitter.com/shaikh597" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-400/60 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800">
                  <RiTwitterXLine className="text-xl" />
                </Link>
              </TooltipTrigger>
              <TooltipContent><p>X (Twitter)</p></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href="https://github.com/sk-py" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-400/60 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800">
                  <PiGithubLogoThin className="text-xl" />
                </Link>
              </TooltipTrigger>
              <TooltipContent><p>GitHub</p></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href="https://www.linkedin.com/in/mubashir-shaikh-/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-400/60 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800">
                  <PiLinkedinLogoBold className="text-xl" />
                </Link>
              </TooltipTrigger>
              <TooltipContent><p>LinkedIn</p></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href="mailto:shaikh56742@gmail.com" target="_blank" rel="noreferrer" aria-label="Email" className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-400/60 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800">
                  <IoIosMailUnread className="text-xl" />
                </Link>
              </TooltipTrigger>
              <TooltipContent><p>Email</p></TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Side projects */}
        <div className="relative min-h-[250px] overflow-hidden rounded-lg border border-neutral-400/60 bg-white shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e] sm:col-span-2 sm:row-span-2">
          <SectionHeader title="Legacy projects" detail="Scroll to explore" />
          <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent-foreground scrollbar-track-transparent pt-12 pb-4 px-2">
            {sideProjects.map((project) => (
              <div key={project.title} className="flex h-full w-[85vw] sm:w-[370px] lg:w-[480px] shrink-0 snap-center flex-col items-center justify-center gap-5 px-4">
                <Link href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <Image src={project.avatar} width={100} height={100} className="rounded-3xl bg-white object-contain drop-shadow-md" alt={`${project.title} project icon`} />
                </Link>
                <div className="max-w-[90%] text-center">
                  <p className="mb-2 text-xs font-semibold">{project.title}</p>
                  <span className="text-sm leading-5 text-neutral-600 dark:text-neutral-300">{project.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning */}
        <div className="relative h-72 overflow-hidden rounded-lg border border-neutral-400/60 bg-white shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e] sm:col-span-2">
          <SectionHeader title="Currently learning" detail="Docker, Kubernetes, platform engineering" />
          <Link href="https://www.docker.com/resources/kubernetes-and-docker/" target="_blank" rel="noreferrer" className="flex h-full flex-col items-center justify-center gap-4 px-5 pt-7 text-center">
            <Image width={250} height={250} loading="eager" className="duration-300 hover:scale-110 cursor-pointer transition-all ease-in-out object-cover" src="/images/docker-engine-kubernetes.avif" alt="Kubernetes" />
            <p className="max-w-md text-xs leading-5 text-neutral-500 dark:text-neutral-400">
              Going deeper into containers, Kubernetes, deployment workflows, observability, and the infrastructure needed to run applications reliably.
            </p>
          </Link>
        </div>

        {/* Work style */}
        <div className="h-44 rounded-lg border border-neutral-400/60 bg-white p-3 shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e]">
          <p className="text-xs text-neutral-400">What I build</p>
          <div className="mt-2 h-px bg-neutral-400/40 dark:bg-neutral-700" />
          <p className="mt-4 text-xs font-semibold leading-5">
            Product-facing web apps, mobile workflows, APIs, real-time features, background services, and internal tools that need to run reliably in production.
          </p>
        </div>

        <div className="h-44 rounded-lg border border-neutral-400/60 bg-white p-3 shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e]">
          <p className="text-xs text-neutral-400">How I work</p>
          <div className="mt-2 h-px bg-neutral-400/40 dark:bg-neutral-700" />
          <p className="mt-4 text-xs font-semibold leading-5">
            I like owning a feature from data modeling and API design through UI implementation, deployment, production debugging, and the fixes that follow a release.
          </p>
        </div>

        {/* Tech and resume */}
        <div className="grid grid-cols-1 gap-2 sm:col-span-2 sm:grid-cols-2">
          <div className="relative overflow-y-scroll scrollbar-thin scrollbar-thumb-accent-foreground scrollbar-track-accent h-44 rounded-lg border border-neutral-400/60 bg-white p-2 shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e]">
            <SectionHeader title="Tech I use" ping />
            <div className="mt-9 flex flex-wrap items-center gap-1">
              {skillsArray.map((skill) => (
                <span key={skill} className="rounded-md border border-neutral-300 bg-neutral-100 px-2 py-1 text-xs dark:border-neutral-600 dark:bg-neutral-700">{skill}</span>
              ))}
            </div>
          </div>

          <div className="dark:bg-[#1E1E1E] group bg-white border dark:border-neutral-600 overflow-hidden shadow-xl rounded-lg lg:h-44 md:h-44 h-48 p-1 flex flex-col relative z-40">
            <SectionHeader title="Resume" />

            <Link href={"/resume"} className=" flex-1 mt-10 mb-2 relative w-full overflow-hidden rounded border border-neutral-200 dark:border-neutral-700 cursor-pointer">
              <Image
                src="/images/resume-thumb.jpg"
                alt="Resume Thumbnail"
                sizes="auto"
                fill
                className="object-cover object-top opacity-80 transition-all duration-[1500ms] ease-in-out group-hover:object-bottom group-hover:opacity-100"
              />
            </Link>

            <div className="flex gap-2 shrink-0">
              <Link
                href="/resume"
                className="text-xs w-full flex items-center p-1.5 font-medium text-black dark:text-neutral-50 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-lg cursor-pointer justify-center transition-colors"
              >
                View
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=1iE0OXy69bc64Dv0Sukvc3NK6ZAiWy0Wt"
                className="text-xs w-full flex items-center p-1.5 font-medium text-black dark:text-neutral-50 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-lg cursor-pointer justify-center transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PiX } from "react-icons/pi";
import SectionHeader from "@/components/custom/section-header";

type Milestone = {
  title: string;
  text: string;
};

export default function About({ milestones }: { milestones: Milestone[] }) {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowAbout(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (showAbout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showAbout]);

  return (
    <>
      <div className="relative min-h-40 rounded-lg border border-neutral-400/60 bg-white shadow-xl dark:border-neutral-600 dark:bg-[#1e1e1e] sm:col-span-2">
        <SectionHeader
          title="About"
          detail="Mubashir Shaikh • Sk-py"
          actionText="Read more"
          onClick={() => setShowAbout(true)}
        />
        <div className="flex h-full flex-col justify-center px-2 pt-12 md:pt-8 sm:pt-10 pb-3">
          <p className="text-xs font-semibold leading-5 text-neutral-800 dark:text-neutral-200">
            Full-stack developer with 2+ years of hands-on experience building
            production web and mobile applications. I work mainly with React,
            Next.js, React Native, Node.js, TypeScript, and PostgreSQL, while
            also working across APIs, background jobs, AI systems, and
            Linux-based deployments.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showAbout && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onPointerDown={(e) =>
              e.target === e.currentTarget && setShowAbout(false)
            }
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              className="relative max-h-[80vh] scrollbar-thin sm:scrollbar-thumb-accent-foreground w-full max-w-2xl overflow-y-auto rounded-xl border border-neutral-600 bg-[#1e1e1e] p-5 shadow-2xl"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="sticky -top-6 -mx-5  mb-6 flex items-center justify-between border-b border-neutral-700 bg-[#1e1e1e] z-50 px-5 py-4 backdrop-blur">
                <div>
                  <p className="text-xs text-neutral-400">About</p>
                  <h2 className="mt-1 text-sm font-semibold text-white">
                    From a college HTML page to building infrastructure
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAbout(false)}
                  className="rounded-full border border-neutral-600 p-2 text-neutral-300 transition-colors hover:bg-neutral-800"
                >
                  <PiX />
                </button>
              </div>

              {/* Journey timeline */}
              <div className="relative">
                <div className="absolute left-0 top-0 rounded-full h-[calc(100%-4.8rem)] sm:h-[calc(100%-3.5rem)] w-1 bg-neutral-700" />
                {milestones.map((m, i) => (
                  <div key={m.title} className="relative flex gap-3 pb-6 last:pb-0">
                    <div className="relative z-10 flex w-1 shrink-0 justify-center">
                        <div className="h-1 w-1 rounded-full bg-neutral-100" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-white">
                        {String(i + 1).padStart(2, "0")} {m.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-neutral-400">
                        {m.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 border-t border-neutral-700 pt-5">
                <p className="mb-3 text-xs font-semibold text-neutral-200">
                  Areas I work across
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Product development",
                    "Backend systems",
                    "Real-time features",
                    "AI / RAG",
                    "Mobile apps",
                    "Deployment",
                    "Infrastructure",
                    "Security",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-neutral-600 bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { useRef, useState, useTransition, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PiCheckCircle, PiSpinner } from "react-icons/pi";
import { submitContactForm } from "@/app/actions/contact";
import SectionHeader from "@/components/custom/section-header";
import { Turnstile } from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";

export default function ClientContact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const { resolvedTheme } = useTheme();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!turnstileToken) {
      setErrorMessage("Please complete the security check.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result.error) {
        setErrorMessage(result.error);
      } else if (result.success) {
        formRef.current?.reset();
        setShowSuccess(true);
        // Reset the turnstile token state after successful submission
        setTurnstileToken("");
        setTimeout(() => setShowSuccess(false), 3000);
      }
    });
  };

  return (
    <>
      <div id="contactMe" className="relative mt-2 rounded-lg border border-neutral-400/60 bg-white shadow-xl dark:border-neutral-500 dark:bg-[#222222]">
        <SectionHeader title="Get in touch" detail="Have a project or role in mind?" />
        <div className="px-2 pb-2 pt-11">
          <form ref={formRef} className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <input
                type="email"
                name="email"
                aria-label="Your email address"
                className="w-full rounded-lg border border-neutral-600 bg-neutral-100 p-2 text-sm outline-none dark:bg-neutral-900 dark:placeholder:text-neutral-500"
                placeholder="Your email"
                required
              />
              <input
                type="text"
                name="subject"
                aria-label="Message subject"
                className="w-full rounded-lg border border-neutral-600 bg-neutral-100 p-2 text-sm outline-none dark:bg-neutral-900 dark:placeholder:text-neutral-500"
                placeholder="Subject"
                required
              />
            </div>
            <textarea
              rows={4}
              name="message"
              aria-label="Message content"
              required
              className="w-full resize-y rounded-xl border border-neutral-400/60 bg-neutral-100 p-2 text-sm outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:placeholder:text-neutral-500"
              placeholder="Write a message"
            />
            <div className="flex justify-center my-2">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken("")}
                onError={() => setErrorMessage("Security check failed. Please reload the page.")}
                options={{
                  theme: resolvedTheme === "dark" ? "dark" : "light",
                }}
              />
            </div>
            {errorMessage && <p className="text-xs text-center text-red-500" aria-live="polite">{errorMessage}</p>}
            <button
              type="submit"
              disabled={isPending}
              className="flex w-full cursor-pointer items-center justify-center rounded-full border border-neutral-400/60 px-2 py-2 text-xs transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/40 dark:hover:bg-neutral-600"
            >
              {isPending ? <PiSpinner className="animate-spin text-base" /> : "Send message"}
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-4 left-1/2 z-[110] flex -translate-x-1/2 items-center gap-2 rounded-lg border border-neutral-500 bg-black px-5 py-2 text-sm text-white shadow-xl dark:bg-white dark:text-black"
          >
            <PiCheckCircle className="text-lg" />
            Sent successfully
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParticleTextEffect } from "@/src/components/ui/particle-text-effect";

const TITLE = "Abloom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.27,
      delayChildren: 1.0,
    },
  },
};

const charVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const rightContentVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 3.0,
    },
  },
};

const scrollVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 4.5, duration: 1.1 },
  },
};

export function HeroScrollSequence() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          suppressHydrationWarning
        >
          <source src="/videos/Hero-section.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center text-center justify-end w-full h-full pb-24 lg:pb-10 mx-auto max-w-5xl">
                <h1 className="font-serif font-light text-white tracking-wide whitespace-nowrap mb-6 lg:mb-8" style={{ fontSize: 'clamp(3.5rem, 12vw, 13.5rem)', lineHeight: 0.85 }}>
                  ABLOOM
                </h1>
              <div className="text-white drop-shadow-lg flex flex-col items-center">
                <p className="font-sans text-[18px] lg:text-[22px] font-normal tracking-[0.25em] text-white uppercase mb-4 sm:mb-6">
                  AWESOMELY BLOSSOM WITH NATURE
                </p>
              </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
        <video
          autoPlay
          muted
          playsInline
          loop={false}
          className="absolute inset-0 w-full h-full object-cover"
          suppressHydrationWarning
        >
          <source src="/videos/Hero-section.webm" type="video/webm" />
        </video>

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center justify-end w-full h-full pb-24 lg:pb-10 mx-auto max-w-5xl">
          <div className="mb-6 lg:mb-8 w-full max-w-[800px] flex justify-center">
            <ParticleTextEffect words={[TITLE]} startDelay={2000} />
          </div>

          <motion.div
            className="text-white drop-shadow-lg flex flex-col items-center"
            variants={rightContentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="font-sans text-[18px] lg:text-[22px] font-normal tracking-[0.25em] text-white uppercase mb-4 sm:mb-6">
              AWESOMELY BLOSSOM WITH NATURE
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

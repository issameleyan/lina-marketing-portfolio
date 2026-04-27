"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const AUTO_PLAY_INTERVAL = 3000;
export type FeatureCarouselItem = {
  id: string;
  label: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

type FeatureCarouselProps = {
  features: FeatureCarouselItem[];
};

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % features.length) + features.length) % features.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused || features.length < 2) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused, features.length]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = features.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:p-8">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-border/40">
        <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:px-8 bg-primary">
          <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-primary via-primary/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-primary via-primary/80 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            <div className="w-full max-w-md space-y-3 py-10">
            {features.map((feature, index) => {
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={feature.id}
                  animate={{ opacity: isActive ? 1 : 0.75, scale: isActive ? 1 : 0.985 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-4 md:py-6 lg:py-5 rounded-full transition-all duration-700 text-left group border",
                      isActive
                        ? "bg-background text-primary border-black border-2 z-10 shadow-lg"
                        : "bg-transparent text-background/70 border-background/30 hover:border-background/50 hover:text-background"
                    )}
                  >
                    <div className={cn("flex items-center justify-center transition-colors duration-500", isActive ? "text-primary" : "text-background/60")}>
                      <feature.icon size={22} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight whitespace-nowrap">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-full relative bg-secondary/30 flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-border/20">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {features.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                  className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-background bg-background origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive ? "grayscale-0 blur-0" : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-10 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-[#d5a294] text-white px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide w-fit shadow-lg mb-3 border border-white/20">
                          {index + 1} • {feature.label}
                        </div>
                        <p className="text-white font-medium text-xl md:text-2xl leading-tight drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;

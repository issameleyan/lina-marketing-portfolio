"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  items: string[];
  buttonText: string;
  glowColor?: string;
  onButtonClick?: () => void;
  isFeatured?: boolean;
}

export function FeatureCard({
  title,
  description,
  items,
  buttonText,
  glowColor = "terracotta",
  onButtonClick,
  isFeatured = false
}: FeatureCardProps) {
  const glowColorMap: Record<
    string,
    { glow: string; button: string; check: string; accent: string }
  > = {
    terracotta: {
      glow: "bg-[#d5a294]/40",
      button: "from-[#d5a294] to-[#c18b7d]",
      check: "bg-[#d5a294]",
      accent: "#d5a294"
    },
    violet: {
      glow: "bg-violet-600/40",
      button: "from-violet-600 to-fuchsia-400",
      check: "bg-violet-600",
      accent: "#7C3AED"
    },
  };

  const selected = glowColorMap[glowColor] || glowColorMap.terracotta;

  return (
    <motion.div
      whileHover={{ scale: isFeatured ? 1.08 : 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className={cn("relative h-full", isFeatured && "z-10")}
    >
      {/* Featured Aura (Replaces Rotating Rectangle) */}
      {isFeatured && (
        <>
          <motion.div
            className="absolute -inset-6 rounded-[40px] opacity-10 -z-30 blur-xl"
            style={{ backgroundColor: selected.accent }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Floating Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full -z-20 opacity-40"
              style={{ backgroundColor: selected.accent }}
              animate={{
                y: [0, -100, 0],
                x: [0, (i - 1) * 40, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut",
              }}
              className={cn(
                "absolute",
                i === 0 ? "top-0 left-0" : i === 1 ? "bottom-20 right-0" : "top-40 -left-4"
              )}
            />
          ))}
        </>
      )}

      <motion.div
        className={cn(
          "absolute -inset-4 rounded-3xl blur-2xl -z-20 opacity-20",
          isFeatured ? "bg-[#d5a294]/30 scale-105" : "bg-[#d5a294]/10"
        )}
        animate={{
          scale: isFeatured ? [1.05, 1.15, 1.05] : [1, 1.05, 1],
          opacity: isFeatured ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <Card className={cn(
        "relative w-80 min-h-[480px] rounded-3xl p-8 flex flex-col gap-7 overflow-hidden h-full transition-all duration-500",
        isFeatured 
          ? "bg-[#d5a294] text-black border-[#d5a294]/40 ring-1 ring-[#d5a294]/10 scale-105 shadow-xl shadow-[#d5a294]/20" 
          : "bg-[#f7f7f3] text-black border-[#d5a294]/30 border shadow-lg"
      )}>
        {/* Simple Static Gradient for texture */}
        <div className={cn(
          "absolute inset-0 -z-10 opacity-20 bg-linear-to-br from-white/20 to-transparent",
          !isFeatured && "from-[#d5a294]/10"
        )} />

        {/* Title + Description */}
        <div className="text-right">
          <h3 className={cn("text-2xl font-bold transition-all text-black", isFeatured && "text-3xl")}>{title}</h3>
          <p className={cn("text-sm mt-2 leading-relaxed text-black/70", isFeatured && "text-black/80")}>{description}</p>
        </div>

        <hr className={cn("border-current opacity-10", isFeatured ? "border-black" : "border-[#d5a294]")} />

        {/* Feature List */}
        <CardContent className="p-0 flex flex-col gap-4 text-right">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 justify-start"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-5 h-5 rounded-full shrink-0 transition-transform duration-300",
                  isFeatured ? "bg-white" : "bg-[#d5a294]",
                  isFeatured && "scale-110"
                )}
              >
                <Check className={cn("w-3 h-3", isFeatured ? "text-[#d5a294]" : "text-white")} />
              </span>
              <span className={cn("text-sm font-medium transition-colors text-black/90", isFeatured && "text-black")}>{item}</span>
            </motion.div>
          ))}
        </CardContent>

        <div className="mt-auto">
            {/* Button */}
            <motion.div whileTap={{ scale: 0.95 }}>
            <Button
                onClick={onButtonClick}
                className={cn(
                  "w-full h-12 rounded-xl text-base font-bold shadow-lg cursor-pointer transition-all",
                  isFeatured 
                    ? "bg-white text-[#d5a294] hover:bg-white/90 shadow-white/20" 
                    : "bg-[#d5a294] text-white hover:brightness-110 shadow-[#d5a294]/20",
                  isFeatured && "h-14 text-lg"
                )}
            >
                {buttonText}
            </Button>
            </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}

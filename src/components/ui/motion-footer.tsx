"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  
  /* Dynamic Variables using standard shadcn/tailwind v4 tokens */
  --pill-bg-1: color-mix(in oklch, var(--primary) 5%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--primary) 2%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--primary) 15%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--primary) 20%, transparent);
  
  --pill-bg-1-hover: color-mix(in oklch, var(--primary) 15%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--primary) 5%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--primary) 40%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--primary) 20%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--primary) 30%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--primary) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--primary) 80%, transparent)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, color-mix(in oklch, var(--primary) 10%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--primary) 10%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Theme-adaptive Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    color-mix(in oklch, var(--primary) 25%, transparent) 0%, 
    color-mix(in oklch, var(--secondary) 15%, transparent) 40%, 
    transparent 70%
  );
}

/* Glass Pill Theming (Secondary Style) */
.footer-glass-pill {
  background: #f7f7f3;
  border: 1px solid #d5a294;
  color: #d5a294;
  box-shadow: none;
  border-radius: 9999px;
  overflow: hidden;
  isolation: isolate;
  backface-visibility: hidden;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: #ffffff;
  border-color: #d5a294;
  box-shadow: 0 0 20px rgba(213, 162, 148, 0.3);
}

/* Primary Pill Style (Earthy Terracotta) */
.footer-primary-pill {
  background: linear-gradient(145deg, #d5a294 0%, #c18b7d 100%);
  color: white;
  border: none;
  box-shadow: none;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-weight: 800;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-primary-pill:hover {
  box-shadow: 0 0 25px rgba(213, 162, 148, 0.6);
  transform: scale(1.05);
  color: white;
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--primary) 15%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--primary) 20%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 40%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--primary) 30%, transparent));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE (Zero Dependency)
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.14,
            y: y * 0.14,
            rotationX: 0,
            rotationY: 0,
            scale: 1.015,
            ease: "power2.out",
            duration: 0.25,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "power3.out",
            duration: 0.35,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    },[]);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer will-change-transform", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>هنا لينا</span> <span className="text-primary/60">✦</span>
    <span>محتوى يعبّر عن مشروعك</span> <span className="text-secondary/60">✦</span>
    <span>تسويق يساعده على النمو</span> <span className="text-primary/60">✦</span>
    <span>رسائل واضحة</span> <span className="text-secondary/60">✦</span>
    <span>تأثير مستدام</span> <span className="text-primary/60">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    // React strict mode compatible GSAP context cleanup
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current, artRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: (i) => i === 2 ? 0.3 : 1, // Art has lower opacity
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* 
        The "Curtain Reveal" Wrapper:
        It sits in standard flow. Because it has clip-path, its contents
        are ONLY visible within its bounding box. 
      */}
      <div
        ref={wrapperRef}
        className="relative h-[60vh] w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* The actual footer stays fixed to the viewport underneath everything */}
        <footer className="fixed bottom-0 left-0 flex h-[60vh] w-full flex-col justify-between overflow-hidden bg-background text-foreground cinematic-footer-wrapper">
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            LINA
          </div>



          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-10 w-full max-w-5xl mx-auto">
            {/* New Line Art Illustration */}
            <div 
              ref={artRef}
              className="absolute -left-10 md:left-0 bottom-0 w-40 md:w-64 lg:w-[380px] pointer-events-none z-0 transform translate-y-10"
              style={{ filter: 'grayscale(0.5) contrast(1.1)' }}
            >
              <img 
                src="/footer_line_art_writing.png" 
                alt="Content Writing Line Art" 
                className="w-full h-auto object-contain"
              />
            </div>

            <h2
              ref={headingRef}
              className="text-5xl md:text-7xl font-black footer-text-glow tracking-tighter mb-4 text-center"
            >
              هنا <span className="text-primary">لينا</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-center max-w-2xl font-medium">
              محتوى يعبّر عن مشروعك، وتسويق يساعده على النمو.
            </p>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Secondary Text Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
                <MagneticButton as="a" href="#services" className="footer-glass-pill px-6 py-3 rounded-full text-foreground/80 font-medium text-sm hover:text-primary">
                  الخدمات
                </MagneticButton>
                <MagneticButton as="a" href="#portfolio" className="footer-glass-pill px-6 py-3 rounded-full text-foreground/80 font-medium text-sm hover:text-primary">
                  معرض الأعمال
                </MagneticButton>
                <MagneticButton as="a" href="#contact" className="footer-primary-pill px-8 py-3 rounded-full text-white font-bold text-sm">
                  تواصل معنا
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 items-center gap-6" dir="ltr">
            
            {/* Copyright - Left on Desktop, Bottom on Mobile */}
            <div className="text-muted-foreground text-[10px] md:text-xs font-semibold tracking-widest uppercase order-3 md:order-1 text-center md:text-left">
              © {new Date().getFullYear()} Huna Lina. All rights reserved.
            </div>

            {/* "Made with Love" Badge - Centered on Desktop, Top on Mobile */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="footer-glass-pill px-6 py-3 rounded-full flex items-center gap-2 cursor-default border-primary/30">
                <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">Crafted with</span>
                <span className="animate-footer-heartbeat text-sm md:text-base text-[#f28fd6]">❤</span>
                <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">by</span>
                <span className="text-[#3D0026] font-black text-xs md:text-sm tracking-normal ml-1">Lina</span>
              </div>
            </div>

            {/* Back to top - Right on Desktop, Middle on Mobile */}
            <div className="flex justify-center md:justify-end order-2 md:order-3">
              <MagneticButton
                as="button"
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full footer-primary-pill flex items-center justify-center text-[#3D0026] group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </MagneticButton>
            </div>

          </div>
        </footer>
      </div>
    </>
  );
}

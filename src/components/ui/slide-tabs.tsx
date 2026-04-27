import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const SlideTabs = ({ onTabChange }: { onTabChange: (id: string) => void }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  const tabs = [
    { id: "hero", label: "الرئيسية" },
    { id: "services", label: "خدماتنا" },
    { id: "testimonials", label: "آراء العملاء" },
    { id: "contact", label: "تواصل معنا" }
  ];

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);


  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
            const { width } = selectedTab.getBoundingClientRect();
            setPosition({
                left: selectedTab.offsetLeft,
                width,
                opacity: 1,
            });
        }
      }}
      className="relative mx-auto flex w-fit rounded-full border border-primary/20 bg-white/70 backdrop-blur-md p-1 dark:bg-black/70 shadow-lg"
    >
      {tabs.map((tab, i) => (
         <Tab
            key={tab.id}
            ref={(el) => (tabsRef.current[i] = el)}
            setPosition={setPosition}
            onClick={() => {
              setSelected(i);
              onTabChange(tab.id);
            }}
          >
            {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef<HTMLLIElement, any>(({ children, setPosition, onClick }, ref) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!ref || typeof ref === 'function' || !ref.current) return;
        const target = ref.current;
        const { width } = target.getBoundingClientRect();
        setPosition({
          left: target.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-semibold text-foreground md:px-6 md:py-3 md:text-base transition-colors"
    >
      {children}
    </li>
  );
});

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-9 md:h-12 rounded-full bg-primary/20 shadow-[inset_0_1px_4px_rgba(255,171,208,0.5)]"
    />
  );
};

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react"; // RTL Arrow

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-6 overflow-hidden rounded-[2rem] border border-primary/10 shadow-sm transition-all duration-300 ease-in-out group hover:shadow-xl hover:shadow-primary/20",
  {
    variants: {
      variant: {
        default: "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-foreground",
        primary: "bg-primary/10 dark:bg-primary/20 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, description, href, icon, ...props }, ref) => {
    
    const cardAnimation = {
      hover: {
        scale: 1.02,
        transition: { duration: 0.3 },
      },
    };

    const arrowAnimation = {
        hover: {
            x: -5,
            transition: { duration: 0.3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" as const },
        }
    }

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full gap-4">
          <div className="p-4 bg-primary/10 w-fit rounded-2xl text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-4">{description}</p>
          <a
            href={href}
            aria-label={`Learn more about ${title}`}
            className="mt-auto flex items-center w-fit text-sm font-semibold text-primary group-hover:opacity-80"
          >
            اكتشف المزيد
            <motion.div variants={arrowAnimation}>
                <ArrowLeft className="mr-2 h-4 w-4" />
            </motion.div>
          </a>
        </div>
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };

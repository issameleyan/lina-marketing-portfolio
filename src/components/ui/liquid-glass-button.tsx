"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-primary-foreground hover:bg-destructive/90",
        cool: "dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 from-primary to-primary/85 shadow-md shadow-primary/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 text-primary-foreground dark:text-primary-foreground dark:border-t-0 dark:border-primary/50 dark:ring-white/5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, liquidbuttonVariants, LiquidButton }

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-all duration-300 justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-[color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#d5a294]",
  {
    variants: {
      variant: {
        default: "bg-[#d5a294] text-white shadow-none hover:shadow-[0_0_25px_rgba(213,162,148,0.6)] hover:scale-105 active:scale-95",
        primary: "bg-[#d5a294] text-white shadow-none hover:shadow-[0_0_25px_rgba(213,162,148,0.6)] hover:scale-105 active:scale-95",
        secondary: "bg-[#f7f7f3] border border-[#d5a294] text-[#d5a294] shadow-none hover:shadow-[0_0_20px_rgba(213,162,148,0.3)] hover:bg-white hover:scale-105 active:scale-95",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border border-[#d5a294] bg-transparent text-[#d5a294] hover:bg-[#d5a294]/5 hover:shadow-[0_0_15px_rgba(213,162,148,0.2)]",
        ghost: "hover:bg-[#d5a294]/10 text-[#d5a294]",
        link: "text-[#d5a294] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 text-xs gap-1.5 px-4",
        lg: "h-12 rounded-full px-8",
        xl: "h-14 rounded-full px-10 text-base",
        xxl: "h-16 rounded-full px-12 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        "relative group",
        liquidbuttonVariants({ variant, size, className })
      )}
      {...props}
    >
      {asChild ? children : (
        <>
          {/* Subtle Inner Highlight/Bevel */}
          <div className="absolute inset-0 z-0 h-full w-full rounded-full 
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.1)] 
              opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
            {children}
          </div>
        </>
      )}
    </Comp>
  )
}

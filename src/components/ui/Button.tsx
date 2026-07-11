import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base = [
      "relative inline-flex items-center justify-center whitespace-nowrap",
      "text-sm font-medium tracking-[-0.01em] overflow-hidden",
      "rounded-md transition-all duration-200 cursor-pointer",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-40",
      "active:scale-[0.97]",
    ].join(" ")

    const variants: Record<string, string> = {
      default: [
        "text-[#09090b] font-semibold",
        "shadow-[0_1px_2px_rgb(0,0,0,0.4),inset_0_1px_0_rgb(255,255,255,0.25)]",
        "hover:shadow-[0_2px_8px_rgb(245,158,11,0.35),inset_0_1px_0_rgb(255,255,255,0.25)]",
        "hover:brightness-110",
      ].join(" "),
      outline: [
        "border border-border/70 bg-transparent text-foreground",
        "hover:border-border hover:bg-surface-raised",
        "shadow-[0_1px_2px_rgb(0,0,0,0.2)]",
      ].join(" "),
      ghost: "hover:bg-border/30 text-foreground",
      link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
    }

    const sizes: Record<string, string> = {
      default: "h-9 px-4 py-2",
      sm:      "h-8 px-3 text-xs rounded-md",
      lg:      "h-12 px-8 text-[15px] rounded-lg",
      icon:    "h-9 w-9",
    }

    // Gradient for default variant applied via style to stay precise
    const isDefault = variant === "default"

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        style={isDefault ? {
          background: "linear-gradient(135deg, #fb923c 0%, #f59e0b 55%, #fbbf24 100%)",
        } : undefined}
        {...props}
      >
        {/* Shine sweep on hover (default only) */}
        {isDefault && (
          <span
            className="pointer-events-none absolute inset-0 -skew-x-12 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        )}
        {props.children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }

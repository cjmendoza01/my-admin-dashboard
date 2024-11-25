import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  customSize?: "default" | "sm" | "lg"; 
  variant?: "default" | "outline" | "ghost";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", customSize = "default", ...props }, ref) => {
    const baseStyles =
      "rounded-md border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50";

    const variantStyles = {
      default: "border-input bg-background",
      outline: "border-2 border-primary",
      ghost: "bg-transparent border-none",
    };

    const sizeStyles = {
      default: "h-10",
      sm: "h-8 text-sm",
      lg: "h-12 text-lg",
    };

    return (
      <input
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[customSize], className)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

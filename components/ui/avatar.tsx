import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, className, ...props }) => (
  <div
    className={cn(
      "relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-200",
      className
    )}
    {...props}
  >
    {src ? (
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    ) : (
      <span className="text-sm font-medium text-gray-500">{fallback}</span>
    )}
  </div>
);

export const AvatarFallback: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("flex h-full w-full items-center justify-center", className)} {...props}>
    {children}
  </div>
);

export const AvatarImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  ...props
}) => <img className={cn("h-full w-full object-cover", className)} {...props} />;

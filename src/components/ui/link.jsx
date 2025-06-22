import { cn } from "@/lib/utils";

export function Link({ children, href, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props["aria-label"] || `${children} (opens in new tab)`}
      className={cn("underline hover:text-accent-foreground", className)}
      {...props}
    >
      {children}
    </a>
  );
}

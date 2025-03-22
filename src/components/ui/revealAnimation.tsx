"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
}

export function RevealAnimation({ children, className }: RevealAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observedElement = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (observedElement) {
      observer.observe(observedElement);
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cn("reveal-animation", className)}>
      {children}
    </div>
  );
}

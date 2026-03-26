"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "fade";

interface AnimateInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export default function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial: Record<Direction, string> = {
    up: "translate-y-10 opacity-0",
    left: "-translate-x-10 opacity-0",
    right: "translate-x-10 opacity-0",
    fade: "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 translate-x-0 opacity-100" : initial[direction]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

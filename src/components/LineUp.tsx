"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface LineUpProps {
  children: ReactNode;
  className?: string;
}

export default function LineUp({ children, className = "" }: LineUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <span
              key={i}
              className="block transition-all duration-700 ease-out"
              style={{
                transform: visible ? "translateY(0)" : "translateY(120%)",
                opacity: visible ? 1 : 0,
                transitionDelay: visible ? `${200 + i * 160}ms` : "0ms",
              }}
            >
              {child}
            </span>
          ))
        : (
            <span
              className="block transition-all duration-700 ease-out"
              style={{
                transform: visible ? "translateY(0)" : "translateY(120%)",
                opacity: visible ? 1 : 0,
                transitionDelay: visible ? "200ms" : "0ms",
              }}
            >
              {children}
            </span>
          )}
    </div>
  );
}

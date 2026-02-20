"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ProjectData } from "@/types/project";

interface Props {
  data: ProjectData["sections"]["gallery"];
}

export default function GallerySection({ data }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePanel, setActivePanel] = useState(-1);
  const [, setSmoothProgress] = useState(0);
  const imgsRef = useRef<HTMLImageElement[]>([]);

  const updateScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect.bottom <= 0 || rect.top >= vh) return;

    const total = rect.height - vh;
    if (total <= 0) return;

    const scrolled = Math.min(Math.max(-rect.top, 0), total);
    const rawProgress = scrolled / total;

    setSmoothProgress((prev) => {
      const alpha = 0.2;
      const newProgress = prev + (rawProgress - prev) * alpha;

      imgsRef.current.forEach((img) => {
        if (!img) return;
        const speed = parseFloat(img.dataset.speed || "0");
        const moveY = newProgress * speed * 600 * -1;
        img.style.transform = `translate3d(0, ${moveY}px, 0)`;
      });

      let idx = 0;
      if (newProgress > 0.15 && newProgress <= 0.37) idx = 1;
      else if (newProgress > 0.37 && newProgress <= 0.6) idx = 2;
      else if (newProgress > 0.6 && newProgress <= 0.83) idx = 3;
      else if (newProgress > 0.83) idx = 4;

      if (rect.top <= 80 && rect.bottom > 0) {
        setActivePanel(idx);
      }

      return newProgress;
    });
  }, []);

  useEffect(() => {
    let raf: number;
    const loop = () => {
      updateScroll();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [updateScroll]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#323230] relative"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute w-full top-0 h-full">
          <div className="h-[500vh] relative">
            {data.images.map((img, i) => (
              <img
                key={i}
                ref={(el) => {
                  if (el) imgsRef.current[i] = el;
                }}
                src={img.src}
                alt=""
                data-speed={img.speed}
                className={`absolute opacity-25 will-change-transform ${img.className}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {data.textPanels.map((panel, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-1000 ease-out ${
                activePanel === i
                  ? "opacity-100 blur-0"
                  : "opacity-0 blur-[5px]"
              }`}
            >
              <div className="flex gap-[1rem] kb text-[3rem]">
                {panel.cols.map((col, j) => (
                  <div
                    key={j}
                    className="text-[#B1AC99] tracking-[0.2rem]"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      position: "relative",
                      top: panel.cols.length > 1
                        ? j === 0
                          ? "-1.2rem"
                          : "1.2rem"
                        : "0",
                    }}
                  >
                    {col}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

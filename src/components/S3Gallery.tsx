"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const images = [
  { src: "/images/s3_img_1.png", className: "w-[23rem] top-[20vh] left-[5.8%]", speed: 5.2 },
  { src: "/images/s3_img_2.png", className: "w-[20rem] top-[53vh] right-[-10%]", speed: 4.2 },
  { src: "/images/s3_img_3.png", className: "w-[27.5rem] top-[80vh] left-[-1%]", speed: 4.3 },
  { src: "/images/s3_img_4.png", className: "w-[17.2rem] top-[110vh] right-0", speed: 4.6 },
  { src: "/images/s3_img_5.png", className: "w-[16rem] top-[135vh] left-[5%]", speed: 4.4 },
  { src: "/images/s3_img_6.png", className: "w-[18rem] top-[170vh] right-0", speed: 5.4 },
  { src: "/images/s3_img_7.png", className: "w-[22.4rem] top-[200vh] left-0", speed: 4.2 },
  { src: "/images/s3_img_8.png", className: "w-[26.4rem] top-[220vh] right-[-18%]", speed: 5.4 },
  { src: "/images/s3_img_9.png", className: "w-[27.2rem] top-[280vh] left-[2%]", speed: 4.7 },
  { src: "/images/s3_img_10.png", className: "w-[15.2rem] top-[280vh] right-[-5%]", speed: 5.2 },
  { src: "/images/s3_img_11.png", className: "w-[18.6rem] top-[350vh] left-[10%]", speed: 4.6 },
  { src: "/images/s3_img_13.png", className: "w-[24rem] top-[360vh] right-0", speed: 5.4 },
  { src: "/images/s3_img_14.png", className: "w-[25.3rem] top-[390vh] left-[20%]", speed: 4.6 },
  { src: "/images/s3_img_15.png", className: "w-[25rem] top-[420vh] right-[4%]", speed: 4.3 },
];

const textPanels = [
  { cols: ["대한민국을 바꾼", "강남시대의 시작"] },
  { cols: ["최신 트렌드와", "소비 문화를 누리는"] },
  { cols: ["선망의 대상"] },
  { cols: ["대한민국을", "대표하는 부촌"] },
  { cols: ["대한민국 압구정"] },
];

export default function S3Gallery() {
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

      // Update parallax
      imgsRef.current.forEach((img) => {
        if (!img) return;
        const speed = parseFloat(img.dataset.speed || "0");
        const moveY = newProgress * speed * 600 * -1;
        img.style.transform = `translate3d(0, ${moveY}px, 0)`;
      });

      // Update text panel
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
        {/* Background images with parallax */}
        <div className="absolute w-full top-0 h-full">
          <div className="h-[500vh] relative">
            {images.map((img, i) => (
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

        {/* Text panels */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {textPanels.map((panel, i) => (
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

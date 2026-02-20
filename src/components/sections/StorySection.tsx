"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import LineUp from "../LineUp";
import { ProjectData } from "@/types/project";

interface Props {
  data: ProjectData["sections"]["story"];
}

export default function StorySection({ data }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const [showBox, setShowBox] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.bottom <= 0 || rect.top >= vh) return;

      if (step === 0 && rect.top <= 0) {
        setStep(1);
      }

      if (step >= 1 && rect.top <= -vh * 0.3) {
        if (step < 2) {
          setStep(2);
          setTimeout(() => setShowArrow(true), 1000);
        }

        const extraScroll = Math.max(-vh * 0.3 - rect.top, 0);
        const unit = vh;
        setShowBox(extraScroll >= unit && extraScroll < unit * 2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [step]);

  const overlayLines = data.overlayText.split("\n");

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#EAE9E5]"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen max-w-[89.33%] mx-auto pt-[10rem] pb-[8.6rem]">
        <LineUp className="pl-[2.2rem] mb-[3.5rem] relative">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%]"
            style={{ background: "var(--fcp)" }}
          />
          {data.title.map((line, i) => (
            <span key={i} className="block kb text-[2.5rem] font-semibold">
              {line}
            </span>
          ))}
        </LineUp>

        <div
          className="absolute left-1/2 transition-all duration-800 ease-out overflow-hidden"
          style={{
            top: step >= 2 ? 0 : "23rem",
            width: step >= 2 ? "100vw" : "33.5rem",
            height: step >= 2 ? "100vh" : step >= 1 ? "42rem" : "0",
            transform: "translateX(-50%)",
            backgroundImage:
              step >= 2
                ? `url(${data.paintingBg})`
                : `url(${data.paintingImage})`,
            backgroundSize: step >= 2 ? "cover" : "100%",
            backgroundPosition: step >= 2 ? "bottom" : "top",
            backgroundRepeat: "no-repeat",
            transformOrigin: "top center",
          }}
        >
          <div
            className={`absolute top-[35vh] left-1/2 -translate-x-1/2 w-full max-w-[91.2%] text-center transition-opacity duration-400 ${
              showBox ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={data.overlayBgImage}
                alt=""
                fill
                className="object-cover absolute inset-0"
              />
            </div>
            <div className="relative z-10 py-[3rem] pb-[10rem]">
              <div className="kb text-[3.5rem] font-bold text-white pb-[2.3rem]">
                {data.overlayTitle}
              </div>
              <div className="text-[1.6rem] text-white leading-relaxed">
                {overlayLines.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-[6%] flex items-center gap-[1rem] text-[1.4rem] text-white transition-opacity duration-400 ${
              showArrow ? "opacity-100" : "opacity-0"
            }`}
            style={{ animation: "scroll-bounce 0.9s infinite ease-in-out alternate" }}
          >
            스크롤을 내려주세요
            <Image src={data.scrollArrowImage} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import LineUp from "./LineUp";

export default function S2History() {
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

      // Step 1: section top hits viewport top
      if (step === 0 && rect.top <= 0) {
        setStep(1);
      }

      // Step 2: painting goes fullscreen
      if (step >= 1 && rect.top <= -vh * 0.3) {
        if (step < 2) {
          setStep(2);
          setTimeout(() => setShowArrow(true), 1000);
        }

        // Text box visibility based on extra scroll
        const extraScroll = Math.max(-vh * 0.3 - rect.top, 0);
        const unit = vh;
        setShowBox(extraScroll >= unit && extraScroll < unit * 2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [step]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#EAE9E5]"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen max-w-[89.33%] mx-auto pt-[10rem] pb-[8.6rem]">
        {/* Title */}
        <LineUp className="pl-[2.2rem] mb-[3.5rem] relative">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%]"
            style={{ background: "var(--fcp)" }}
          />
          <span className="block kb text-[2.5rem] font-semibold">
            권력과 여유,
          </span>
          <span className="block kb text-[2.5rem] font-semibold">
            부와 풍류를 상징하는
          </span>
          <span className="block kb text-[2.5rem] font-semibold">
            이름이 되다.
          </span>
        </LineUp>

        {/* Painting */}
        <div
          className="absolute left-1/2 transition-all duration-800 ease-out overflow-hidden"
          style={{
            top: step >= 2 ? 0 : "23rem",
            width: step >= 2 ? "100vw" : "33.5rem",
            height: step >= 2 ? "100vh" : step >= 1 ? "42rem" : "0",
            transform: "translateX(-50%)",
            backgroundImage:
              step >= 2
                ? "url(/images/s2_paint_2.png)"
                : "url(/images/s2_paint_1.png)",
            backgroundSize: step >= 2 ? "cover" : "100%",
            backgroundPosition: step >= 2 ? "bottom" : "top",
            backgroundRepeat: "no-repeat",
            transformOrigin: "top center",
          }}
        >
          {/* Text overlay box */}
          <div
            className={`absolute top-[35vh] left-1/2 -translate-x-1/2 w-full max-w-[91.2%] text-center transition-opacity duration-400 ${
              showBox ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/s2_paint_3.png"
                alt=""
                fill
                className="object-cover absolute inset-0"
              />
            </div>
            <div className="relative z-10 py-[3rem] pb-[10rem]">
              <div className="kb text-[3.5rem] font-bold text-white pb-[2.3rem]">
                압구정.
              </div>
              <div className="text-[1.6rem] text-white leading-relaxed">
                {`'압구정'은 조선 초기 권력자였던 한명회가`}
                <br />
                자신의 권세를 누리며 즐겨 찾았던
                <br />
                정자에서 유래한 이름으로,
                <br />
                {`명나라 사신 예겸이 '갈매기와 친하게 지내는`}
                <br />
                {`정자'라는 뜻으로 지었다고 전해집니다.`}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-[6%] flex items-center gap-[1rem] text-[1.4rem] text-white transition-opacity duration-400 ${
              showArrow ? "opacity-100" : "opacity-0"
            }`}
            style={{ animation: "scroll-bounce 0.9s infinite ease-in-out alternate" }}
          >
            스크롤을 내려주세요
            <Image src="/images/s2_arr.svg" alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

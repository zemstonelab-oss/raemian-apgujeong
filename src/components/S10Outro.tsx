"use client";

import { useRef, useEffect, useState } from "react";

export default function S10Outro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const checkPosition = () => {
      const el = sectionRef.current;
      if (!el || step >= 2) return;

      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 0) {
        if (step === 0) {
          setStep(1);
          setTimeout(() => setStep(2), 500);
        }
      }
    };

    window.addEventListener("scroll", checkPosition, { passive: true });
    checkPosition();
    return () => window.removeEventListener("scroll", checkPosition);
  }, [step]);

  return (
    <section
      ref={sectionRef}
      className="h-screen relative"
      style={{
        backgroundImage: "url(/images/s10_bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute w-full top-[22%] text-center">
        <div
          className="ot text-[2.4rem] font-bold pb-[1rem] transition-all duration-1000"
          style={{
            color: "var(--fcp)",
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? "translateY(0)" : "translateY(4rem)",
            fontSize: step >= 2 ? "1.3rem" : "2.4rem",
          }}
        >
          Beyond Expectations
        </div>
        <div
          className="text-[2rem] leading-[2.8rem] transition-all duration-1000"
          style={{
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? "translateY(0)" : "translateY(4rem)",
          }}
        >
          과거의 압구정을 넘어서는 건
          <br />
          오직 <b style={{ color: "var(--fcp)" }}>압구정 삼성</b> 입니다
        </div>
      </div>
    </section>
  );
}

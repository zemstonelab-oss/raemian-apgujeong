"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const masks = [
  { src: "/images/s1_mask_1.png", duration: 1500, zoom: true },
  { src: "/images/s1_mask_2.png", duration: 1500, zoom: true },
  { src: "/images/s1_mask_3.png", duration: 1500, zoom: true },
  { src: "/images/s1_mask_5.png", duration: 3000, zoom: false },
  { src: "/images/s1_mask_6.png", duration: 0, zoom: false },
];

export default function S1Hero() {
  const [currentMask, setCurrentMask] = useState(0);
  const [percHidden, setPercHidden] = useState(false);
  const [textStep, setTextStep] = useState(0); // 0=none, 1=beyond, 2=main, 3=apgujeong
  const [lineOn, setLineOn] = useState(false);
  const [notsOn, setNotsOn] = useState(false);
  const [percProgress, setPercProgress] = useState(0);

  useEffect(() => {
    // Start progress bar
    setTimeout(() => setPercProgress(100), 50);

    // Play mask sequence
    let timeout: NodeJS.Timeout;
    const playSequence = (idx: number) => {
      if (idx >= masks.length - 1) {
        // Last mask - show text sequence
        setTimeout(() => setTextStep(1), 500);
        setTimeout(() => setTextStep(2), 2000);
        setTimeout(() => setTextStep(3), 4500);
        setTimeout(() => setLineOn(true), 5000);
        setTimeout(() => setNotsOn(true), 6500);
        return;
      }

      if (idx === 3) {
        setPercHidden(true);
      }

      timeout = setTimeout(() => {
        setCurrentMask(idx + 1);
        playSequence(idx + 1);
      }, masks[idx].duration);
    };

    playSequence(0);
    return () => clearTimeout(timeout);
  }, []);

  const totalPercDuration = 1500 * 3 + 10 * 2; // ~4520ms

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Progress bar */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 right-[8%] z-10 flex flex-col items-center gap-[2rem] transition-opacity duration-300 ${
          percHidden ? "opacity-0" : ""
        }`}
      >
        <div
          className="kb text-[1.5rem] font-bold"
          style={{ color: "var(--fcp)", writingMode: "vertical-rl" }}
        >
          대한민국
        </div>
        <div className="relative bg-[#E6E6E6] h-[40rem] w-[2px]">
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.8rem] h-[1px] z-[1]"
            style={{ background: "var(--fcp)" }}
          />
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[0.8rem] h-[1px] z-[1]"
            style={{ background: "var(--fcp)" }}
          />
          <span
            className="block w-full transition-all"
            style={{
              background: "var(--fcp)",
              height: `${percProgress}%`,
              transitionDuration: `${totalPercDuration}ms`,
              transitionTimingFunction: "linear",
            }}
          />
        </div>
        <div
          className="kb text-[1.5rem] font-bold"
          style={{ color: "var(--fcp)", writingMode: "vertical-rl" }}
        >
          압구정
        </div>
      </div>

      {/* Masks */}
      <AnimatePresence>
        {masks.map((mask, idx) =>
          idx <= currentMask && idx < masks.length - 1 ? (
            idx === currentMask ? (
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: mask.zoom ? 1 : 0.8 }}
                animate={{ opacity: 1, scale: mask.zoom ? 3 : 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: mask.duration / 1000, ease: "easeOut" },
                }}
              >
                <Image
                  src={mask.src}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ) : null
          ) : null
        )}
      </AnimatePresence>

      {/* Last mask (s1_mask_6) - always visible after reaching it */}
      {currentMask >= 4 && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/s1_mask_6.png"
            alt=""
            fill
            className="object-cover"
            priority
          />

          {/* Text 1: Beyond Expectations */}
          <motion.div
            className="absolute top-[30%] w-full text-center -translate-y-1/2 kb text-[2.2rem] font-bold leading-[2.6rem]"
            style={{ color: "var(--fcp)" }}
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{
              opacity: textStep === 1 ? 1 : 0,
              filter: textStep === 1 ? "blur(0px)" : "blur(5px)",
            }}
            transition={{ duration: 0.8 }}
          >
            Beyond Expectations
          </motion.div>

          {/* Text 2: Main message */}
          <motion.div
            className="absolute top-[30%] w-full text-center -translate-y-1/2 text-[1.8rem] leading-[2.6rem]"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{
              opacity: textStep === 2 ? 1 : 0,
              filter: textStep === 2 ? "blur(0px)" : "blur(5px)",
            }}
            transition={{ duration: 0.8 }}
          >
            과거의 압구정을 넘어서는 건
            <br />
            오직 <b style={{ color: "var(--fcp)" }}>압구정 삼성</b> 입니다
          </motion.div>

          {/* Text 3: APGUJEONG / SAMSUNG */}
          <motion.div
            className="absolute top-[30%] w-full text-center -translate-y-1/2"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{
              opacity: textStep === 3 ? 1 : 0,
              filter: textStep === 3 ? "blur(0px)" : "blur(5px)",
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[2.5rem] font-bold pb-[1.4rem]">
              APGUJEONG / SAMSUNG
            </div>
            <div className="flex items-center justify-center gap-[0.4rem]">
              <span className="kb text-[1.3rem]">압구정</span>
              <span
                className="h-[1px] bg-black transition-all duration-800"
                style={{ width: lineOn ? "24.5rem" : "0" }}
              />
              <span className="kb text-[1.3rem]">삼성</span>
            </div>
            <div
              className={`flex items-center justify-center text-[1.4rem] gap-[1rem] mt-[3rem] transition-opacity duration-200 ${
                notsOn ? "opacity-100" : "opacity-0"
              }`}
            >
              스크롤을 내려주세요
              <Image
                src="/images/s1_arr.svg"
                alt=""
                width={18}
                height={18}
                className="animate-bounce"
              />
            </div>
          </motion.div>

          {/* Bottom text */}
          <motion.div
            className="absolute bottom-[6rem] left-1/2 -translate-x-1/2 max-w-[18.4rem]"
            initial={{ opacity: 0, bottom: "2rem" }}
            animate={{ opacity: 1, bottom: "6rem" }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/s1_bot_txt.png"
              alt=""
              width={184}
              height={40}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

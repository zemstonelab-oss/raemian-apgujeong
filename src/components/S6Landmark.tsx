"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import LineUp from "./LineUp";

export default function S6Landmark() {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, amount: 0.3 });

  return (
    <section className="overflow-hidden">
      {/* Zoom-out aerial image */}
      <motion.div
        ref={imgRef}
        className="h-[60vh] overflow-hidden"
        style={{
          backgroundImage: "url(/images/s6_img.png)",
          backgroundPosition: "center bottom",
          backgroundSize: isInView ? "100%" : "200%",
          transition: "background-size 1s ease-out",
        }}
      />

      {/* Text */}
      <div className="flex flex-col items-center text-center mb-[14rem]">
        <div className="w-[7rem] h-[0.4rem]" style={{ background: "var(--fcp)" }} />
        <LineUp className="mt-[5rem] mb-[3rem]">
          <span className="block text-[2.2rem] font-bold">
            <span style={{ color: "var(--fcp)" }}>대한민국의 세계적 랜드마크 입지</span>
            <br />
            오직, 압구정뿐입니다.
          </span>
        </LineUp>
        <LineUp>
          <span className="block text-[1.6rem] text-[#585656]">
            강남의 도시적 모습과 한강의 자연,
            <br />
            다양한 생활 인프라가 어우러지는
            <br />
            서울의 최고 프리미엄 지구.
            <br />
            압구정은 이제 세계적 랜드마크가 됩니다.
          </span>
        </LineUp>
      </div>

      {/* Marquee slider */}
      <div className="overflow-hidden pointer-events-none">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          <Image
            src="/images/s6_marque.png"
            alt=""
            width={2000}
            height={300}
            className="h-[26vh] w-auto max-w-none"
          />
          <Image
            src="/images/s6_marque.png"
            alt=""
            width={2000}
            height={300}
            className="h-[26vh] w-auto max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

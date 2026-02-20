"use client";

import Image from "next/image";
import LineUp from "./LineUp";

export default function S4WorldClass() {
  return (
    <section className="sticky top-0 z-0" style={{ height: "150vh" }}>
      <div
        className="sticky top-0 h-screen relative"
        style={{
          backgroundImage: "url(/images/s4_bg.png)",
          backgroundPosition: "bottom",
          backgroundSize: "120%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full left-1/2 -translate-x-1/2 text-center pt-[20vh]">
          <LineUp className="text-center">
            <span className="block text-[2.2rem] ot" style={{ color: "var(--fcp)" }}>
              WORLD CLASS PLAN
            </span>
            <span className="block text-[2.2rem] font-bold mb-[5rem]">
              삼성, 압구정의 가치를 보다.
            </span>
            <span className="block text-[1.6rem]">
              삼성은 압구정의 현재를 통해
              <br />
              더 큰 미래가치를 내다봅니다.
            </span>
          </LineUp>
        </div>

        <div
          className="absolute bottom-[5.2rem] left-1/2 -translate-x-1/2"
          style={{ animation: "scroll-bounce 0.9s infinite ease-in-out alternate" }}
        >
          <Image src="/images/s4_arr.svg" alt="" width={24} height={24} />
        </div>
      </div>
    </section>
  );
}

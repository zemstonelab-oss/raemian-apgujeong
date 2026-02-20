"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import LineUp from "./LineUp";

const panels = [
  {
    title: ["초고층 빌딩 숲 뉴욕,", "맨해튼의 주거 랜드마크를", "연구하다."],
    boxes: [
      {
        subt: "432 Park Avenue",
        tit: "432 파크애비뉴",
        wrt: "맨해튼 중심부 미드타운 이스트 지역에 위치한 초고층 럭셔리 주상복합 건물로, 세계에서 가장 높은 주거용 빌딩 중 하나이며 뉴욕의 스카이라인을 상징하는 랜드마크입니다.",
        img: "/images/s7_img_1.png",
      },
      {
        subt: "35 Hudson Yards",
        tit: "35 허드슨 야드",
        wrt: "뉴욕 맨해튼 허드슨 야드 개발지구에 위치한 92층 초고층 복합 프리미엄 건물로, 세계적인 건축가와 디자이너들이 참여한 이 건물은 뉴욕의 새로운 중심지에서 최고급 라이프스타일을 제공합니다.",
        img: "/images/s7_img_2.png",
      },
    ],
  },
  {
    title: ["자연과 접한", "런던 나이츠 브리지의", "고급 주거단지를 연구하다."],
    boxes: [
      {
        subt: "One Hyde Park",
        tit: "원 하이드 파크",
        wrt: "하이드 파크의 자연과 나이츠 브리지의 도시적 세련미가 공존하는 세계 최고급 주거 단지 중 하나로, 런던의 부와 권력을 상징하는 주거 랜드마크입니다.",
        img: "/images/s7_img_3.png",
      },
    ],
  },
];

function FadeUpBox({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default function S7Overseas() {
  return (
    <section className="bg-[#F9F9F9] py-[2rem]">
      {panels.map((panel, pi) => (
        <div key={pi}>
          <div className="py-[4rem]">
            <LineUp className="max-w-[89.33%] mx-auto mb-[3rem] pl-[2.2rem] relative">
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%]"
                style={{ background: "var(--fcp)" }}
              />
              {panel.title.map((line, li) => (
                <span key={li} className="block text-[2.5rem] font-semibold">
                  {line}
                </span>
              ))}
            </LineUp>

            {panel.boxes.map((box, bi) => (
              <FadeUpBox key={bi}>
                <div className="max-w-[92%] mx-auto bg-white p-[1.2rem] shadow-[0_0.2rem_2rem_rgba(0,0,0,0.08)] border border-[#E6E6E6] mb-[1rem]">
                  <div className="pb-[3rem]">
                    <div className="ot text-[1.5rem] font-bold py-[0.8rem] pb-[0.5rem]" style={{ color: "var(--fcs)" }}>
                      {box.subt}
                    </div>
                    <div className="text-[2.2rem] font-medium pb-[1.5rem]">
                      {box.tit}
                    </div>
                    <div className="text-[1.4rem] opacity-50">{box.wrt}</div>
                  </div>
                  <div className="relative w-full aspect-[3/2]">
                    <Image src={box.img} alt={box.tit} fill className="object-cover" />
                  </div>
                </div>
              </FadeUpBox>
            ))}
          </div>
          {pi < panels.length - 1 && (
            <div className="h-[0.5rem] bg-black/[0.03]" />
          )}
        </div>
      ))}
    </section>
  );
}

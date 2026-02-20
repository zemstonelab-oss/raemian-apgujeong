"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const tabs = [
  {
    title: (
      <>
        자연 환경 프리미엄을 누리는
        <br />
        한강과 서울숲 조망권
      </>
    ),
    desc: (
      <>
        한강뷰와 더불어 녹지 비율이 높은
        <br />
        공원형 열린 단지로 계획되는 압구정
      </>
    ),
    images: ["/images/s5_t1_1.jpg", "/images/s5_t1_2.jpg", "/images/s5_t1_3.jpg"],
  },
  {
    title: (
      <>
        강남 등
        <br />
        광역 업무 지구 배후
      </>
    ),
    desc: (
      <>
        강남, 신사, 역삼, 삼성 등이 포함된
        <br />
        강남업무지구(GBC)등 개발호재
      </>
    ),
    images: ["/images/s5_t2_1.jpg", "/images/s5_t2_2.jpg", "/images/s5_t2_3.jpg"],
  },
  {
    title: (
      <>
        우수한 생활,
        <br />
        상업 환경 인프라
      </>
    ),
    desc: (
      <>
        신사와 청담을 포함하는 강남 핵심 상권으로, 의료,
        <br />
        쇼핑, 교육 등 소비력과 입지 경쟁력을 갖춘 인프라
      </>
    ),
    images: ["/images/s5_t3_1.jpg", "/images/s5_t3_2.jpg", "/images/s5_t3_3.jpg"],
  },
];

export default function S5Features() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative z-10 rounded-t-[1.5rem] overflow-hidden bg-white">
      {/* Title area */}
      <div className="max-w-[89.33%] mx-auto flex flex-col items-center">
        <div className="w-[7rem] h-[0.4rem]" style={{ background: "var(--fcp)" }} />
        <div className="text-[2.5rem] font-semibold py-[3.6rem] pb-[3rem]">
          압구정 입지 종합 분석
        </div>

        {/* Tabs */}
        <div className="flex justify-center w-full border-y gap-[0.5rem]" style={{ borderColor: "rgba(175,134,100,0.5)", background: "#EAE6E2" }}>
          {["KEY FEATURE 1", "KEY FEATURE 2", "KEY FEATURE 3"].map((label, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="text-[1.3rem] leading-[1.8rem] py-[0.8rem] text-center transition-all"
              style={{
                width: "calc((100% - 1rem) / 3)",
                opacity: activeTab === i ? 1 : 0.3,
                background: activeTab === i ? "#AE8563" : "transparent",
                color: activeTab === i ? "#fff" : "inherit",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      {tabs.map((tab, i) => (
        <div key={i} className={activeTab === i ? "block" : "hidden"}>
          <div className="max-w-[89.33%] mx-auto">
            <div className="text-[2.2rem] font-medium pt-[2.9rem] pb-[2rem]">
              {tab.title}
            </div>
            <div className="text-[1.6rem] opacity-50 mb-[3rem]">{tab.desc}</div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            speed={700}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: `.tab-prev-${i}`,
              nextEl: `.tab-next-${i}`,
            }}
            className="relative"
          >
            {tab.images.map((src, j) => (
              <SwiperSlide key={j}>
                <div className="relative w-full aspect-[4/3]">
                  <Image src={src} alt={`슬라이드${j + 1}`} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
            <button
              className={`tab-prev-${i} swiper-button-prev !w-[3.8rem] !h-[3.8rem] !top-1/2 !-translate-y-1/2 rounded-full`}
              style={{ backgroundImage: "url(/images/s5_prev.svg)", backgroundSize: "contain" }}
            />
            <button
              className={`tab-next-${i} swiper-button-next !w-[3.8rem] !h-[3.8rem] !top-1/2 !-translate-y-1/2 rounded-full`}
              style={{ backgroundImage: "url(/images/s5_next.svg)", backgroundSize: "contain" }}
            />
          </Swiper>
        </div>
      ))}
    </section>
  );
}

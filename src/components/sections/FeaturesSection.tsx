"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProjectData } from "@/types/project";

interface Props {
  data: ProjectData["sections"]["features"];
}

export default function FeaturesSection({ data }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative z-10 rounded-t-[1.5rem] overflow-hidden bg-white">
      <div className="max-w-[89.33%] mx-auto flex flex-col items-center">
        <div className="w-[7rem] h-[0.4rem]" style={{ background: "var(--fcp)" }} />
        <div className="text-[2.5rem] font-semibold py-[3.6rem] pb-[3rem]">
          {data.sectionTitle}
        </div>

        <div className="flex justify-center w-full border-y gap-[0.5rem]" style={{ borderColor: "rgba(175,134,100,0.5)", background: "#EAE6E2" }}>
          {data.tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="text-[1.3rem] leading-[1.8rem] py-[0.8rem] text-center transition-all"
              style={{
                width: `calc((100% - ${(data.tabs.length - 1) * 0.5}rem) / ${data.tabs.length})`,
                opacity: activeTab === i ? 1 : 0.3,
                background: activeTab === i ? "var(--fcp)" : "transparent",
                color: activeTab === i ? "#fff" : "inherit",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {data.tabs.map((tab, i) => {
        const titleLines = tab.title.split("\n");
        const descLines = tab.description.split("\n");
        return (
          <div key={i} className={activeTab === i ? "block" : "hidden"}>
            <div className="max-w-[89.33%] mx-auto">
              <div className="text-[2.2rem] font-medium pt-[2.9rem] pb-[2rem]">
                {titleLines.map((line, j) => (
                  <span key={j}>
                    {j > 0 && <br />}
                    {line}
                  </span>
                ))}
              </div>
              <div className="text-[1.6rem] opacity-50 mb-[3rem]">
                {descLines.map((line, j) => (
                  <span key={j}>
                    {j > 0 && <br />}
                    {line}
                  </span>
                ))}
              </div>
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
                style={{ backgroundImage: `url(${data.prevImage})`, backgroundSize: "contain" }}
              />
              <button
                className={`tab-next-${i} swiper-button-next !w-[3.8rem] !h-[3.8rem] !top-1/2 !-translate-y-1/2 rounded-full`}
                style={{ backgroundImage: `url(${data.nextImage})`, backgroundSize: "contain" }}
              />
            </Swiper>
          </div>
        );
      })}
    </section>
  );
}

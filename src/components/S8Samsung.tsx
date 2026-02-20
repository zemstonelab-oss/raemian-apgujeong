"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import LineUp from "./LineUp";

const buildings = [
  { num: 828, img: "/images/s8_img_1.png", t1: "세계 최고층", t2: "부르즈 칼리파", t3: "163층" },
  { num: 678, img: "/images/s8_img_2.png", t1: "동남아 최고층", t2: "메르데카118", t3: "118층" },
  { num: 508, img: "/images/s8_img_3.png", t1: "대만 최고층", t2: "타이베이101", t3: "101층" },
  { num: 462, img: "/images/s8_img_4.png", t1: "유럽 최고층", t2: "라흐타 센터", t3: "87층" },
  { num: 452, img: "/images/s8_img_5.png", t1: "세계 최고층 쌍둥이 타워", t2: "페트로나스 타워", t3: "88층" },
  { num: 265, img: "/images/s8_img_6.png", t1: "국내 최초 초고층 주상복합", t2: "타워팰리스", t3: "69층" },
  { num: 202, img: "/images/s8_img_7.png", t1: "한강변 최고층 아파트", t2: "레미안 첼리투스", t3: "56층" },
];

export default function S8Samsung() {
  const [currentNum, setCurrentNum] = useState(678);
  const [displayNum, setDisplayNum] = useState(678);
  const [isChanging, setIsChanging] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [autoplayStarted, setAutoplayStarted] = useState(false);

  // Animate number
  const displayNumRef = useRef(displayNum);
  displayNumRef.current = displayNum;

  useEffect(() => {
    if (currentNum === displayNumRef.current) return;
    setIsChanging(true);
    const start = displayNumRef.current;
    const end = currentNum;
    const duration = 600;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(start + (end - start) * progress);
      setDisplayNum(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsChanging(false), 150);
      }
    };
    requestAnimationFrame(animate);
  }, [currentNum]);

  // Start autoplay when section is in view
  useEffect(() => {
    if (isInView && !autoplayStarted && swiperRef.current) {
      setTimeout(() => {
        swiperRef.current?.autoplay?.start();
        setAutoplayStarted(true);
      }, 2000);
    }
  }, [isInView, autoplayStarted]);

  return (
    <section ref={sectionRef} className="bg-[#F9F9F9] overflow-hidden">
      {/* Title */}
      <div className="pt-[6rem] pb-[1rem]">
        <LineUp className="max-w-[89.33%] mx-auto pl-[2.2rem] relative">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%]"
            style={{ background: "var(--fcp)" }}
          />
          <span className="block text-[2.5rem] font-semibold">
            삼성의 세계 최고 기술력으로
          </span>
          <span className="block text-[2.5rem] font-semibold">
            더 안전하게, 더 빠르게
          </span>
        </LineUp>

        <LineUp className="text-center mt-[5rem] mb-[2rem]">
          <span className="block text-[2.2rem] font-bold" style={{ color: "var(--fcp)" }}>
            삼성이 건설한 세계적인 랜드마크
          </span>
        </LineUp>

        <LineUp className="text-center">
          <span className="block text-[1.6rem] opacity-50">
            삼성은 세계 최고 높이의 빌딩을 비롯 다수의
          </span>
          <span className="block text-[1.6rem] opacity-50">
            초고층 프로젝트 성공으로 기술력을 입증했습니다.
          </span>
        </LineUp>
      </div>

      {/* Slider area */}
      <motion.div
        className="relative pt-[2rem]"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          speed={700}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".build-prev",
            nextEl: ".build-next",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.autoplay?.stop();
          }}
          onSlideChange={(swiper) => {
            const slide = swiper.slides[swiper.activeIndex];
            const num = parseInt(slide?.getAttribute("data-num") || "0");
            if (num) setCurrentNum(num);
          }}
        >
          {buildings.map((b, i) => (
            <SwiperSlide key={i} data-num={b.num}>
              <div className="relative pb-[8rem]">
                <div className="relative w-full aspect-[3/4] max-h-[50vh]">
                  <Image src={b.img} alt={b.t2} fill className="object-contain" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pt-[1rem]">
                  <div className="text-[1.3rem]">{b.t1}</div>
                  <div className="text-[1.5rem] font-semibold py-[0.2rem]">{b.t2}</div>
                  <div className="text-[1.3rem] opacity-50">{b.t3}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button
            className="build-prev swiper-button-prev !w-[3.8rem] !h-[3.8rem] !bottom-[1rem] !top-auto !left-[4rem] !right-auto !m-0"
            style={{ backgroundImage: "url(/images/s8_prev.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          />
          <button
            className="build-next swiper-button-next !w-[3.8rem] !h-[3.8rem] !bottom-[1rem] !top-auto !right-[4rem] !left-auto !m-0"
            style={{ backgroundImage: "url(/images/s8_next.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          />
        </Swiper>

        {/* Number display */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-0 text-[10rem] font-bold text-[#DDDDDD] transition-transform duration-300 ${
            isChanging ? "scale-105" : ""
          }`}
        >
          <span>{displayNum}</span>M
        </div>

        {/* Bottom gradient bar */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[32rem] w-full h-[5.8rem] rounded-full"
          style={{
            background: "linear-gradient(180deg, rgba(229,182,143,1) 40%, rgba(175,134,101,1) 100%)",
          }}
        />
      </motion.div>

      {/* Landmark area */}
      <div className="pt-[7rem] pb-[3rem] mt-[11rem] border-t-[5px] border-black/[0.03]">
        <LineUp className="text-center">
          <span className="block ot text-[2.2rem]" style={{ color: "var(--fcp)" }}>
            WORLD LANDMARK SKYLINE
          </span>
        </LineUp>
        <LineUp className="text-center mt-[2rem] mb-[4rem]">
          <span className="block text-[1.6rem] opacity-50">
            랜드마크의 기준이 되는 스카이라인 설계
          </span>
          <span className="block text-[1.6rem] opacity-50">
            다수의 초고층 프로젝트 성공으로 입증된
          </span>
          <span className="block text-[1.6rem] opacity-50">
            70층 압구정 랜드마크 건설의 완벽한 파트너입니다.
          </span>
        </LineUp>

        <motion.div
          className="max-w-[92%] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/images/s8_land_img.png"
            alt="World Landmark Skyline"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

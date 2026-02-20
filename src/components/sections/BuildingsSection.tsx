"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import LineUp from "../LineUp";
import { ProjectData } from "@/types/project";

interface Props {
  data: ProjectData["sections"]["buildings"];
}

export default function BuildingsSection({ data }: Props) {
  const [currentNum, setCurrentNum] = useState(data.items[1]?.num || data.items[0]?.num || 0);
  const [displayNum, setDisplayNum] = useState(currentNum);
  const [isChanging, setIsChanging] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [autoplayStarted, setAutoplayStarted] = useState(false);

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
      <div className="pt-[6rem] pb-[1rem]">
        <LineUp className="max-w-[89.33%] mx-auto pl-[2.2rem] relative">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%]"
            style={{ background: "var(--fcp)" }}
          />
          {data.title.map((line, i) => (
            <span key={i} className="block text-[2.5rem] font-semibold">
              {line}
            </span>
          ))}
        </LineUp>

        <LineUp className="text-center mt-[5rem] mb-[2rem]">
          <span className="block text-[2.2rem] font-bold" style={{ color: "var(--fcp)" }}>
            {data.accentTitle}
          </span>
        </LineUp>

        <LineUp className="text-center">
          {data.description.map((line, i) => (
            <span key={i} className="block text-[1.6rem] opacity-50">
              {line}
            </span>
          ))}
        </LineUp>
      </div>

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
          {data.items.map((b, i) => (
            <SwiperSlide key={i} data-num={b.num}>
              <div className="relative pb-[8rem]">
                <div className="relative w-full aspect-[3/4] max-h-[50vh]">
                  <Image src={b.image} alt={b.name} fill className="object-contain" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pt-[1rem]">
                  <div className="text-[1.3rem]">{b.label}</div>
                  <div className="text-[1.5rem] font-semibold py-[0.2rem]">{b.name}</div>
                  <div className="text-[1.3rem] opacity-50">{b.floors}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button
            className="build-prev swiper-button-prev !w-[3.8rem] !h-[3.8rem] !bottom-[1rem] !top-auto !left-[4rem] !right-auto !m-0"
            style={{ backgroundImage: `url(${data.prevImage})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          />
          <button
            className="build-next swiper-button-next !w-[3.8rem] !h-[3.8rem] !bottom-[1rem] !top-auto !right-[4rem] !left-auto !m-0"
            style={{ backgroundImage: `url(${data.nextImage})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          />
        </Swiper>

        <div
          className={`absolute left-1/2 -translate-x-1/2 top-0 text-[10rem] font-bold text-[#DDDDDD] transition-transform duration-300 ${
            isChanging ? "scale-105" : ""
          }`}
        >
          <span>{displayNum}</span>M
        </div>

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[32rem] w-full h-[5.8rem] rounded-full"
          style={{
            background: "linear-gradient(180deg, rgba(229,182,143,1) 40%, rgba(175,134,101,1) 100%)",
          }}
        />
      </motion.div>

      <div className="pt-[7rem] pb-[3rem] mt-[11rem] border-t-[5px] border-black/[0.03]">
        <LineUp className="text-center">
          <span className="block ot text-[2.2rem]" style={{ color: "var(--fcp)" }}>
            {data.skylineTitle}
          </span>
        </LineUp>
        <LineUp className="text-center mt-[2rem] mb-[4rem]">
          {data.skylineDescription.map((line, i) => (
            <span key={i} className="block text-[1.6rem] opacity-50">
              {line}
            </span>
          ))}
        </LineUp>

        <motion.div
          className="max-w-[92%] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src={data.skylineImage}
            alt={data.skylineTitle}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import LineUp from "../LineUp";
import { ProjectData } from "@/types/project";

interface Props {
  data: ProjectData["sections"]["technology"];
}

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

export default function TechnologySection({ data }: Props) {
  const [modalOpen, setModalOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#323230]">
      <div className="py-[10rem]">
        <div className="max-w-[89.33%] mx-auto">
          <LineUp className="pl-[2.2rem] relative leading-[3.2rem]">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%]"
              style={{ background: "var(--fcp)" }}
            />
            {data.title.map((line, i) => (
              <span key={i} className="block text-[2.5rem] font-semibold text-white">
                {line}
              </span>
            ))}
          </LineUp>

          <LineUp className="pt-[3rem] pb-[5rem]">
            {data.description.map((line, i) => (
              <span key={i} className="block text-[1.6rem] text-white opacity-50 leading-[2rem]">
                {line}
              </span>
            ))}
          </LineUp>

          {data.tabs.map((tab, i) => (
            <FadeUpBox key={i}>
              <div className={i > 0 ? "mt-[4rem]" : "mb-[4rem]"}>
                <div className="mb-[1.6rem]">
                  <div className="text-[1.3rem] font-medium text-[#E4C2A7] pb-[0.2rem]">
                    {tab.label} <span className="ot">{tab.techLabel}</span>
                  </div>
                  <div className="text-[1.8rem] font-bold text-white">
                    {tab.title}
                  </div>
                </div>
                <div className="relative w-full">
                  <Image src={tab.titleImage} alt="" width={800} height={100} className="w-full h-auto" />
                </div>
                {tab.images.map((img, j) => (
                  <div key={j} className="mt-[1.6rem] relative w-full">
                    <Image src={img.src} alt="" width={800} height={400} className="w-full h-auto" />
                    {img.caption && (
                      <p className="text-[1.3rem] text-white opacity-80 pt-[1rem]">
                        {img.caption.split("\n").map((line, k) => (
                          <span key={k}>
                            {k > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                ))}
                <div
                  className="flex items-center p-[1.2rem] mt-[1rem]"
                  style={{ background: "linear-gradient(90deg, #555552 0%, #656560 100%)" }}
                >
                  <div className="text-[1.5rem] font-medium text-white">
                    {tab.detail.title}
                  </div>
                  <button
                    className="ml-auto"
                    onClick={() => setModalOpen(i)}
                  >
                    <Image src="/images/apgujeong/s9_ico.svg" alt="" width={24} height={24} />
                  </button>
                </div>
              </div>
            </FadeUpBox>
          ))}
        </div>
      </div>

      {modalOpen !== null && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setModalOpen(null)}
          />
          <motion.div
            className="absolute bottom-0 w-full max-h-[80vh] overflow-auto bg-[#323230] rounded-t-[1.5rem] p-[1.5rem]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-[89.33%] mx-auto py-[2.5rem] relative">
              <button
                className="absolute top-0 right-0 w-[3rem]"
                onClick={() => setModalOpen(null)}
              >
                <Image src="/images/apgujeong/s9_close.svg" alt="닫기" width={30} height={30} />
              </button>

              {(() => {
                const tab = data.tabs[modalOpen];
                return (
                  <>
                    <div className="mb-[3rem]">
                      <div className="text-[1.2rem] font-semibold text-[#E4C2A7]">
                        {tab.label} {tab.techLabel}
                      </div>
                      <div className="text-[2.2rem] font-bold text-white py-[0.2rem] pb-[1.5rem]">
                        {tab.detail.title}
                      </div>
                      <div className="text-[1.5rem] text-white opacity-50 leading-[2.2rem]">
                        {tab.detail.description}
                      </div>
                    </div>
                    <Image src={tab.detailImage} alt="" width={800} height={600} className="w-full h-auto" />
                  </>
                );
              })()}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import LineUp from "./LineUp";

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

export default function S9Design() {
  const [modalOpen, setModalOpen] = useState<string | null>(null);

  return (
    <section className="bg-[#323230]">
      <div className="py-[10rem]">
        <div className="max-w-[89.33%] mx-auto">
          <LineUp className="pl-[2.2rem] relative leading-[3.2rem]">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%]"
              style={{ background: "var(--fcp)" }}
            />
            <span className="block text-[2.5rem] font-semibold text-white">
              삼성의 조망특화 설계로
            </span>
            <span className="block text-[2.5rem] font-semibold text-white">
              더 넓고 아름답게
            </span>
          </LineUp>

          <LineUp className="pt-[3rem] pb-[5rem]">
            <span className="block text-[1.6rem] text-white opacity-50 leading-[2rem]">
              삼성의 혁신적인 생각과 축적된 설계 기술,
            </span>
            <span className="block text-[1.6rem] text-white opacity-50 leading-[2rem]">
              첨단 시뮬레이션을 활용한 조망 특화 설계로 각
            </span>
            <span className="block text-[1.6rem] text-white opacity-50 leading-[2rem]">
              세대에 최고의 조망을 선사합니다.
            </span>
          </LineUp>

          {/* Tech Box 1 */}
          <FadeUpBox>
            <div className="mb-[4rem]">
              <div className="mb-[1.6rem]">
                <div className="text-[1.3rem] font-medium text-[#E4C2A7] pb-[0.2rem]">
                  조망특화 설계 <span className="ot">TECH 01</span>
                </div>
                <div className="text-[1.8rem] font-bold text-white">
                  한남4구역 재개발 한강 조망 시뮬레이션
                </div>
              </div>
              <div className="relative w-full">
                <Image src="/images/s9_pop_txt_1.png" alt="" width={800} height={100} className="w-full h-auto" />
              </div>
              <div className="mt-[1.6rem] relative w-full">
                <Image src="/images/s9_pop_img_11.png" alt="" width={800} height={400} className="w-full h-auto" />
              </div>
              <div className="mt-[1.6rem] relative w-full">
                <Image src="/images/s9_pop_img_12.png" alt="" width={800} height={400} className="w-full h-auto" />
              </div>
              <div
                className="flex items-center p-[1.2rem] mt-[1rem]"
                style={{ background: "linear-gradient(90deg, #555552 0%, #656560 100%)" }}
              >
                <div className="text-[1.5rem] font-medium text-white">
                  파라메트릭 자동배치 시스템
                </div>
                <button
                  className="ml-auto"
                  onClick={() => setModalOpen("1")}
                >
                  <Image src="/images/s9_ico.svg" alt="" width={24} height={24} />
                </button>
              </div>
            </div>
          </FadeUpBox>

          {/* Tech Box 2 */}
          <FadeUpBox>
            <div>
              <div className="mb-[1.6rem]">
                <div className="text-[1.3rem] font-medium text-[#E4C2A7] pb-[0.2rem]">
                  조망특화 설계 <span className="ot">TECH 02</span>
                </div>
                <div className="text-[1.8rem] font-bold text-white">
                  여의도대교아파트 재건축 한강 조망 시뮬레이션
                </div>
              </div>
              <div className="relative w-full">
                <Image src="/images/s9_pop_txt_2.png" alt="" width={800} height={100} className="w-full h-auto" />
              </div>
              <div className="mt-[1.6rem] relative w-full">
                <Image src="/images/s9_pop_img_21.png" alt="" width={800} height={400} className="w-full h-auto" />
                <p className="text-[1.3rem] text-white opacity-80 pt-[1rem]">
                  한강을 향해 열린 가로배치와 단지 레벨의 상향을 통해<br />
                  한강 조망 세대를 최대화
                </p>
              </div>
              <div className="mt-[1.6rem] relative w-full">
                <Image src="/images/s9_pop_img_22.png" alt="" width={800} height={400} className="w-full h-auto" />
                <p className="text-[1.3rem] text-white opacity-80 pt-[1rem]">
                  다각적인 분석과 시뮬레이션을 통한<br />
                  조망 간섭이 최소화된 최적의 시야각 확보
                </p>
              </div>
              <div
                className="flex items-center p-[1.2rem] mt-[1rem]"
                style={{ background: "linear-gradient(90deg, #555552 0%, #656560 100%)" }}
              >
                <div className="text-[1.5rem] font-medium text-white">
                  BIM 공종 통합설계
                </div>
                <button
                  className="ml-auto"
                  onClick={() => setModalOpen("2")}
                >
                  <Image src="/images/s9_ico.svg" alt="" width={24} height={24} />
                </button>
              </div>
            </div>
          </FadeUpBox>
        </div>
      </div>

      {/* Modals */}
      {modalOpen && (
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
                <Image src="/images/s9_close.svg" alt="닫기" width={30} height={30} />
              </button>

              {modalOpen === "1" && (
                <>
                  <div className="mb-[3rem]">
                    <div className="text-[1.2rem] font-semibold text-[#E4C2A7]">
                      조망특화 설계 TECH 01
                    </div>
                    <div className="text-[2.2rem] font-bold text-white py-[0.2rem] pb-[1.5rem]">
                      파라메트릭 자동배치 시스템
                    </div>
                    <div className="text-[1.5rem] text-white opacity-50 leading-[2.2rem]">
                      조합 원안설계 대비 한강조망세대를 극대화한 한남4구역 재개발, 여의도대교 재건축과 같이 삼성은 주변의 자연환경을 최고의 프리미엄으로 바꾸는 특화 설계를 통해 조합원님의 재산가치를 극대화시켜드립니다
                    </div>
                  </div>
                  <Image src="/images/s9_box_1.png" alt="" width={800} height={600} className="w-full h-auto" />
                </>
              )}

              {modalOpen === "2" && (
                <>
                  <div className="mb-[3rem]">
                    <div className="text-[1.2rem] font-semibold text-[#E4C2A7]">
                      조망특화 설계 TECH 02
                    </div>
                    <div className="text-[2.2rem] font-bold text-white py-[0.2rem] pb-[1.5rem]">
                      BIM 공종 통합설계
                    </div>
                    <div className="text-[1.5rem] font-medium text-white pb-[0.5rem]">
                      BIM(Building Information Modeling)란
                    </div>
                    <div className="text-[1.5rem] text-white opacity-50 leading-[2.2rem]">
                      설계부터 시공까지 기존 2차원 방식에서 벗어나 3차원 기반으로 프로젝트를 관리하여 설계~시공 리스크 제거 및 고품질을 확보하는 건설 기술입니다
                    </div>
                  </div>
                  <Image src="/images/s9_box_2.png" alt="" width={800} height={600} className="w-full h-auto" />
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

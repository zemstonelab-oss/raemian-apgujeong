"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import LineUp from "../LineUp";
import { ProjectData } from "@/types/project";

interface Props {
  data: ProjectData["sections"]["cases"];
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

export default function CasesSection({ data }: Props) {
  return (
    <section className="bg-[#F9F9F9] py-[2rem]">
      {data.panels.map((panel, pi) => (
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

            {panel.items.map((box, bi) => (
              <FadeUpBox key={bi}>
                <div className="max-w-[92%] mx-auto bg-white p-[1.2rem] shadow-[0_0.2rem_2rem_rgba(0,0,0,0.08)] border border-[#E6E6E6] mb-[1rem]">
                  <div className="pb-[3rem]">
                    <div className="ot text-[1.5rem] font-bold py-[0.8rem] pb-[0.5rem]" style={{ color: "var(--fcs)" }}>
                      {box.subtitle}
                    </div>
                    <div className="text-[2.2rem] font-medium pb-[1.5rem]">
                      {box.name}
                    </div>
                    <div className="text-[1.4rem] opacity-50">{box.description}</div>
                  </div>
                  <div className="relative w-full aspect-[3/2]">
                    <Image src={box.image} alt={box.name} fill className="object-cover" />
                  </div>
                </div>
              </FadeUpBox>
            ))}
          </div>
          {pi < data.panels.length - 1 && (
            <div className="h-[0.5rem] bg-black/[0.03]" />
          )}
        </div>
      ))}
    </section>
  );
}

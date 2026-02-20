"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import LineUp from "../LineUp";
import { ProjectData } from "@/types/project";

interface Props {
  data: ProjectData["sections"]["landmark"];
}

export default function LandmarkSection({ data }: Props) {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, amount: 0.3 });

  const descLines = data.description.split("\n");

  return (
    <section className="overflow-hidden">
      <motion.div
        ref={imgRef}
        className="h-[60vh] overflow-hidden"
        style={{
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundPosition: "center bottom",
          backgroundSize: isInView ? "100%" : "200%",
          transition: "background-size 1s ease-out",
        }}
      />

      <div className="flex flex-col items-center text-center mb-[14rem]">
        <div className="w-[7rem] h-[0.4rem]" style={{ background: "var(--fcp)" }} />
        <LineUp className="mt-[5rem] mb-[3rem]">
          <span className="block text-[2.2rem] font-bold">
            <span style={{ color: "var(--fcp)" }}>{data.accentText}</span>
            <br />
            {data.title}
          </span>
        </LineUp>
        <LineUp>
          <span className="block text-[1.6rem] text-[#585656]">
            {descLines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </span>
        </LineUp>
      </div>

      <div className="overflow-hidden pointer-events-none">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          <Image
            src={data.marqueeImage}
            alt=""
            width={2000}
            height={300}
            className="h-[26vh] w-auto max-w-none"
          />
          <Image
            src={data.marqueeImage}
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

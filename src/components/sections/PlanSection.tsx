"use client";

import Image from "next/image";
import LineUp from "../LineUp";
import { ProjectData } from "@/types/project";

interface Props {
  data: ProjectData["sections"]["plan"];
}

export default function PlanSection({ data }: Props) {
  const descLines = data.description.split("\n");

  return (
    <section className="sticky top-0 z-0" style={{ height: "150vh" }}>
      <div
        className="sticky top-0 h-screen relative"
        style={{
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundPosition: "bottom",
          backgroundSize: "120%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full left-1/2 -translate-x-1/2 text-center pt-[20vh]">
          <LineUp className="text-center">
            <span className="block text-[2.2rem] ot" style={{ color: "var(--fcp)" }}>
              {data.subtitle}
            </span>
            <span className="block text-[2.2rem] font-bold mb-[5rem]">
              {data.title}
            </span>
            <span className="block text-[1.6rem]">
              {descLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </span>
          </LineUp>
        </div>

        <div
          className="absolute bottom-[5.2rem] left-1/2 -translate-x-1/2"
          style={{ animation: "scroll-bounce 0.9s infinite ease-in-out alternate" }}
        >
          <Image src={data.arrowImage} alt="" width={24} height={24} />
        </div>
      </div>
    </section>
  );
}

"use client";

import S1Hero from "@/components/S1Hero";
import S2History from "@/components/S2History";
import S3Gallery from "@/components/S3Gallery";
import S4WorldClass from "@/components/S4WorldClass";
import S5Features from "@/components/S5Features";
import S6Landmark from "@/components/S6Landmark";
import S7Overseas from "@/components/S7Overseas";
import S8Samsung from "@/components/S8Samsung";
import S9Design from "@/components/S9Design";
import S10Outro from "@/components/S10Outro";

export default function Home() {
  return (
    <main className="max-w-[880px] mx-auto min-h-screen">
      <S1Hero />
      <S2History />
      <S3Gallery />
      <div className="relative">
        <S4WorldClass />
        <S5Features />
      </div>
      <S6Landmark />
      <S7Overseas />
      <S8Samsung />
      <S9Design />
      <S10Outro />
    </main>
  );
}

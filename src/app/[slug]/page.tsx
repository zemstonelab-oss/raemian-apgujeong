"use client";

import { useParams } from "next/navigation";
import { getProject } from "@/data/projects";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import GallerySection from "@/components/sections/GallerySection";
import PlanSection from "@/components/sections/PlanSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import LandmarkSection from "@/components/sections/LandmarkSection";
import CasesSection from "@/components/sections/CasesSection";
import BuildingsSection from "@/components/sections/BuildingsSection";
import TechnologySection from "@/components/sections/TechnologySection";
import OutroSection from "@/components/sections/OutroSection";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-[2rem]">프로젝트를 찾을 수 없습니다.</h1>
      </main>
    );
  }

  const { sections, theme } = project;

  return (
    <main
      className="max-w-[880px] mx-auto min-h-screen"
      style={{
        "--fcp": theme.primaryColor,
        "--fcs": theme.secondaryColor,
      } as React.CSSProperties}
    >
      <HeroSection data={sections.hero} />
      <StorySection data={sections.story} />
      <GallerySection data={sections.gallery} />
      <div className="relative">
        <PlanSection data={sections.plan} />
        <FeaturesSection data={sections.features} />
      </div>
      <LandmarkSection data={sections.landmark} />
      <CasesSection data={sections.cases} />
      <BuildingsSection data={sections.buildings} />
      <TechnologySection data={sections.technology} />
      <OutroSection data={sections.outro} />
    </main>
  );
}

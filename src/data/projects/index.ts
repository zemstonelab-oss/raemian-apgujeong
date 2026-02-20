import apgujeong from "./apgujeong";
import seongsu from "./seongsu";
import { ProjectData } from "@/types/project";

const projects: ProjectData[] = [apgujeong, seongsu];

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export { projects };

import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="max-w-[880px] mx-auto min-h-screen flex flex-col items-center justify-center gap-[2rem] p-[2rem]">
      <h1 className="text-[3rem] font-bold">래미안 프로모션</h1>
      <div className="flex flex-col gap-[1rem] w-full max-w-[40rem]">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/${project.slug}`}
            className="block p-[2rem] border border-[#E6E6E6] rounded-[1rem] hover:shadow-lg transition-shadow"
          >
            <div className="text-[2rem] font-semibold">{project.meta.title}</div>
            <div className="text-[1.4rem] opacity-50 mt-[0.5rem]">{project.meta.description}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

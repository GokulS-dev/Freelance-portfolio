import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProjectsArchive } from "@/components/project/ProjectsArchive";

export const metadata: Metadata = {
  title: "My Work — Gokul | Freelance Web & Mobile App Developer",
  description:
    "Explore websites, business applications and digital solutions designed and developed by Gokul.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsArchive />
      </main>
      <Footer />
    </>
  );
}

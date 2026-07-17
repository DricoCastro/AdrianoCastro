"use client";
import ProjectsCarousel from "./components/Carousel";

export const ProjectsSection = () => {
  return (
    <div
      id="projects-section"
      className={`
      w-full
      lg:px-48
      px-[15px]
      flex
      flex-col
      items-center
      justify-center
      pt-14
      pb-28
    `}
    >
      <ProjectsCarousel />
    </div>
  );
};

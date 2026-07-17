import { AboutMeSection } from "./aboutMe";
import { CertificatesSection } from "./awards";
import { MeSection } from "./me";
import { ProjectsSection } from "./project";

export const Home = () => {
  return (
    <div
      className={`
    w-full
    flex 
    flex-col 
    items-center 
    justify-between
    min-h-screen
    `}
    >
      <MeSection />
      <ProjectsSection />
      <CertificatesSection />
      <AboutMeSection />
    </div>
  );
};

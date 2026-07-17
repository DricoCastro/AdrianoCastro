"use client";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslations } from "next-intl";

const brokeLine: string = "%0A";

export const MeSection = () => {
  const t = useTranslations("Hero");

  function onTapInsta() {
    window.open("https://www.instagram.com/dricocastro_1/?igshid=OGQ5ZDc2ODk2ZA");
  }
  function onTapGit() {
    window.open("https://github.com/DricoCastro");
  }
  function onTapWpp() {
    window.open(`https://api.whatsapp.com/send?phone=5531975113020&text=😀 Olá,${brokeLine}podemos conversar?`);
  }
  function onTapLinkedin() {
    window.open("https://www.linkedin.com/in/adriano-castro-b72027201/");
  }

  return (
    <div
      id="me-section"
      className="lg:px-48 lg:pt-[140px] pt-[100px] md:flex-row px-[15px] flex flex-col items-center justify-center w-full bg-blackPearl text-white min-h-screen"
    >
      {/* Left: Text */}
      <div className="md:items-start md:justify-center md:text-left md:w-2/3 md:py-0 pb-12 w-full flex items-center justify-center text-center flex-col">
        <span className="text-royalBlue font-medium text-2xl animate-fade-in-up">
          {t("hello")}
        </span>
        <h1 className="md:text-6xl text-4xl font-bold md:mt-3.5 mt-2.5 animate-fade-in-up-delay-1">
          {t("name")}
        </h1>
        <div className="mt-4 animate-fade-in-up-delay-2">
          <span
            className="inline-block text-sm font-semibold tracking-wide px-4 py-1.5 rounded-full border border-royalBlue/40 text-royalBlue"
            style={{ backgroundColor: "rgba(52,68,241,0.10)" }}
          >
            {t("role")}
          </span>
        </div>
        <p className="md:w-5/6 md:text-justify text-base font-medium text-center mt-8 w-full text-white/70 leading-relaxed animate-fade-in-up-delay-3">
          {t("description")}
        </p>
        <div className="flex flex-row md:gap-x-5 gap-x-8 mt-10 animate-fade-in-up-delay-4">
          <GitHubIcon onClick={onTapGit} className="cursor-pointer hover:text-royalBlue transition-colors duration-300 md:text-2xl text-3xl" />
          <LinkedInIcon onClick={onTapLinkedin} className="cursor-pointer hover:text-royalBlue transition-colors duration-300 md:text-2xl text-3xl" />
          <WhatsAppIcon onClick={onTapWpp} className="cursor-pointer hover:text-royalBlue transition-colors duration-300 md:text-2xl text-3xl" />
          <InstagramIcon onClick={onTapInsta} className="cursor-pointer hover:text-royalBlue transition-colors duration-300 md:text-2xl text-3xl" />
          <EmailOutlinedIcon className="cursor-pointer hover:text-royalBlue transition-colors duration-300 md:text-2xl text-3xl" />
        </div>
      </div>

      {/* Right: Photo — contained within the padded layout */}
      <div className="md:w-2/5 flex items-center justify-center w-full animate-fade-in-up-delay-2">
        <Image
          src="/images/profile.png"
          alt="Adriano Castro"
          width={480}
          height={720}
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            width: "100%",
            height: "auto",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%), " +
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%), " +
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            maskComposite: "intersect",
          }}
        />
      </div>
    </div>
  );
};

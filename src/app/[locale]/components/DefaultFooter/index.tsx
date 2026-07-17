"use client";

import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useTranslations } from "next-intl";

const logoLetterWhite = require("../../../../../public/svgs/AC-white.svg");

export const DefaultFooter = () => {
  const t = useTranslations("Header");
  const brokeLine: string = "%0A";

  function onTapInsta() {
    window.open(
      "https://www.instagram.com/dricocastro_1/?igshid=OGQ5ZDc2ODk2ZA"
    );
  }
  function onTapGit() {
    window.open("https://github.com/DricoCastro");
  }
  function onTapWpp() {
    window.open(
      `https://api.whatsapp.com/send?phone=5531975113020&text=😀 Olá,${brokeLine}podemos conversar?`
    );
  }
  function onTapLinkedin() {
    window.open("https://www.linkedin.com/in/adriano-castro-b72027201/");
  }
  return (
    <div
      className={`
    w-full
    lg:px-48
    px-[15px]
    flex
    flex-col
    items-center
    justify-center
    bg-codGray
    text-gray
    py-16
  `}
    >
      <Image
        width={90}
        height={90}
        src={logoLetterWhite}
        alt="logoLetterWhite"
      />
      <a
        className={`
       text-white
       `}
      >
        Adriano Castro S.A © Copyright 2024
      </a>

      <div
        className={`
        flex
        flex-row
        md:gap-x-14
        gap-x-8
        mt-14
        `}
      >
        <GitHubIcon
          onClick={onTapGit}
          className={`
          cursor-pointer
          text-white
          hover:text-royalBlue
          md:text-2xl
            text-3xl
          `}
        />

        <LinkedInIcon
          onClick={onTapLinkedin}
          className={`
          cursor-pointer
          text-white
          hover:text-royalBlue
          md:text-2xl
            text-3xl
          `}
        />

        <WhatsAppIcon
          onClick={onTapWpp}
          className={` 
           cursor-pointer 
           text-white
           hover:text-royalBlue
           md:text-2xl
            text-3xl
           `}
        />

        <InstagramIcon
          onClick={onTapInsta}
          className={` 
          cursor-pointer 
          text-white
          hover:text-royalBlue 
          md:text-2xl
            text-3xl
          `}
        />

        <EmailOutlinedIcon
          className={` 
            cursor-pointer 
            text-white
            hover:text-royalBlue
            md:text-2xl
            text-3xl
            `}
        />
      </div>

      <div
        className={`
       w-full
        flex
        flex-row
        flex-wrap
        items-center
        justify-center
        md:justify-between
        gap-x-6
        gap-y-3
        mt-14
     `}
      >
        <a
          href="#me-section"
          className={`
          hover:underline
       cursor-pointer
       uppercase
     `}
        >
          {t("home")}
        </a>
        <a
          href="#projects-section"
          className={`
          hover:underline
       cursor-pointer
       uppercase
     `}
        >
          {t("projects")}
        </a>
        <a
          href="#certificates-section"
          className={`
          hover:underline
       cursor-pointer
       uppercase
     `}
        >
          {t("certificates")}
        </a>
        <a
          href="#aboutMe-section"
          className={`
          hover:underline
       cursor-pointer
       uppercase
     `}
        >
          {t("aboutMe")}
        </a>
        <a
          onClick={onTapWpp}
          className={`
          text-royalBlue
          hover:underline
       cursor-pointer
       uppercase
     `}
        >
          {t("letsTalk")}
        </a>
      </div>
    </div>
  );
};

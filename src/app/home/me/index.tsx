"use client";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const dricoImage = require("../../../../public/svgs/drico-image.svg");
const brokeLine: string = "%0A";

export const MeSection = () => {
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
      id="me-section"
      className={`
      lg:px-48 lg:pt-12
      md:flex-row
      px-[15px]
      flex
      flex-col
      items-center
      justify-center
      w-full
      bg-blackPearl
      text-white
  `}
    >
      <div
        className={`
        md:items-start
        md:justify-center
        md:text-justify
        md:w-2/3
        md:py-0
        pt-10
        pb-12
        w-full
        flex
        items-center
        justify-center
        text-center
        flex-col
      `}
      >
        <a
          className={`
          text-2xl
          font-medium
        `}
        >
          Hello, I’m
        </a>

        <a
          className={`
          md:text-6xl	
          text-4xl
          font-bold
          md:mt-3.5
          mt-2.5
        `}
        >
          Adriano Castro
        </a>

        <a
          className={`
          text-2xl
          font-bold
          md:mt-3.5
          mt-2.5
        `}
        >
          Web and Mobile Developer
        </a>

        <a
          className={`
          md:w-5/6
          md:text-justify
          text-base
          font-medium
          text-center
          mt-8
          w-full
        `}
        >
          👋🏻 Welcome, this is my website that I use to introduce myself and show
          my qualities, specialties and my experiences acquired in my journey
          here as a developer. Have a great experience and, if you feel
          comfortable, you can contact me through the social networks below. 😃
        </a>
        <div
          className={`
        flex
        flex-row
        md:gap-x-5
        gap-x-8
        mt-8
        `}
        >
          <GitHubIcon
            onClick={onTapGit}
            className={`
          cursor-pointer
          hover:text-royalBlue
          md:text-2xl
            text-3xl
          `}
          />

          <LinkedInIcon
            onClick={onTapLinkedin}
            className={`
          cursor-pointer
          hover:text-royalBlue
          md:text-2xl
            text-3xl
          `}
          />

          <WhatsAppIcon
            onClick={onTapWpp}
            className={` 
           cursor-pointer 
           hover:text-royalBlue
           md:text-2xl
            text-3xl
           `}
          />

          <InstagramIcon
            onClick={onTapInsta}
            className={` 
          cursor-pointer 
          hover:text-royalBlue 
          md:text-2xl
            text-3xl
          `}
          />
          <EmailOutlinedIcon
            className={` 
            cursor-pointer 
            hover:text-royalBlue
            md:text-2xl
            text-3xl
            `}
          />
        </div>
      </div>

      <div
        className={`
        md:w-2/5
        flex
        items-center
        justify-center
        w-full
        `}
      >
        <Image src={dricoImage} alt="profileImg" width={350} />
      </div>
    </div>
  );
};

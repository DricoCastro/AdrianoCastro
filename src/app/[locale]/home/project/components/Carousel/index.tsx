import React, { Component } from "react";
import Slider from "react-slick";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./StylesArrow.module.css";
import ProjectsData from "./data";
import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslations } from "next-intl";

export default function ProjectsCarousel() {
  const t = useTranslations("Projects");

  const projectCarousel = ProjectsData.map((project, i) => {
    function OnTapProjectLink() {
      window.open(`${project.link}`);
    }
    return (
      <div
        key={i}
        className={`
        w-full
        m-auto
        px-2 md:px-6
        `}
      >
        <div
          className={`
          flex
          flex-col
          md:flex-row
          items-stretch
          justify-center
          gap-8 md:gap-12
          md:mb-10
          mb-6
          `}
        >
          {/* Image Container */}
          <div
            className={`
            w-full
            md:w-1/2
            h-80 md:h-[400px]
            flex
            items-center
            justify-center
            bg-raven
            rounded-2xl
            overflow-hidden
            shadow-lg hover:shadow-xl
            transition-all duration-300
            group
            `}
          >
            <Image 
              width={project.name === "NAVIA" ? 450 : 320} 
              height={project.name === "NAVIA" ? 350 : 250} 
              src={project.image} 
              alt={`${project.name} logo`} 
              className={`
                object-contain
                transition-transform duration-500
                ${project.name === "NAVIA" ? "scale-110 group-hover:scale-[1.15]" : "group-hover:scale-105"}
                p-4 md:p-8
              `}
            />
          </div>

          {/* Text Container */}
          <div
            className={`
            w-full
            md:w-1/2
            flex
            flex-col
            items-start
            justify-between
            py-2 md:py-6
            `}
          >
            <a
              onClick={OnTapProjectLink}
              className={`
               text-2xl md:text-3xl
               font-bold
               flex
               items-center
               cursor-pointer
               transition-colors
               hover:text-royalBlue
               `}
            >
              <LinkIcon className="mr-3 opacity-70" />
              {project.name}
            </a>
            
            <p className={`
              text-base md:text-lg 
              leading-relaxed 
              opacity-80
            `}>
              {t(project.i18nKey as any)}
            </p>
            
            <div
              className={`
               flex
               flex-wrap
               items-center
               justify-start
               gap-3
               mt-2
               w-full
               `}
            >
              <span className="px-4 py-2 bg-royalBlue/10 text-royalBlue rounded-full text-sm md:text-base font-semibold">
                {project.projectLanguage1}
              </span>
              <span className="px-4 py-2 bg-royalBlue/10 text-royalBlue rounded-full text-sm md:text-base font-semibold">
                {project.projectLanguage2}
              </span>
              <span className="px-4 py-2 bg-royalBlue/10 text-royalBlue rounded-full text-sm md:text-base font-semibold">
                {project.projectLanguage3}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function PreviousArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function Carousel() {
    const configCarousel = {
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            nextArrow: <div />,
            prevArrow: <div />,
          },
        },
      ],
    };
    return (
      <div
        className={`
        w-full
        h-auto
        m-auto
        flex-col
        `}
      >
        <div
          className={`
          w-full
          flex
          flex-col
          items-center
          justify-center
          gap-y-14
          mb-14
          `}
        >
          <a
            className={`
            text-lg
           font-semibold
           tracking-widest
           underline 
          decoration-royalBlue
           decoration-2
            `}
          >
            {t("badge").toUpperCase()}
          </a>
          <a
            className={`
            tracking-wide
            text-2xl	
           font-semibold
            `}
          >
            {t("title")}
          </a>
        </div>
        <Slider {...configCarousel}>{projectCarousel}</Slider>
      </div>
    );
  }

  return (
    <div
      className={`
        mt-[40px]
        w-full
        flex
        h-auto
        items-center
        justify-center
        `}
    >
      <Carousel />
    </div>
  );
}

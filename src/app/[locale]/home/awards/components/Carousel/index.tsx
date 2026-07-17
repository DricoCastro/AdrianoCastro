"use client";

import React from "react";
import Slider from "react-slick";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./StylesArrow.module.css";
import Image from "next/image";
import certificateData from "./data";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslations } from "next-intl";

export default function CertificatesCarousel() {
  const t = useTranslations("Certificates");

  const certificateCarousel = certificateData.map((certificate, i) => {
    function onTapCertificateLink() {
      window.open(`${certificate.link}`);
    }

    return (
      <div key={i} className="m-auto h-auto">
        <div
          className={`
            m-auto
            flex
            flex-col
            items-center
            justify-center
            text-center
            py-10
            px-4
            bg-white
            md:mx-6
            mx-0
            gap-y-8
            lg:mb-14
            mb-16
          `}
        >
          <Image width={65} height={0} src={certificate.image} alt="logo" />

          {/* Translated title */}
          <a className="text-lg font-semibold">
            {t(certificate.titleKey as any)}
          </a>

          {/* Translated description: "Completed all studies... X hours" */}
          <a className="text-base font-normal">
            {`" ${t("completedWith")} ${certificate.hours} ${t("hours")} "`}
          </a>

          {/* Certificate link */}
          <a
            onClick={onTapCertificateLink}
            className={`
              text-base
              font-medium
              flex
              items-center
              cursor-pointer
              hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-royalBlue
            `}
          >
            <LinkIcon className="origin-center -rotate-45 text-base" />
            {t("certificate")}
          </a>

          <Image
            width={120}
            height={25}
            src={certificate.platformImage}
            alt="logo"
          />
        </div>
      </div>
    );
  });

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return <div className={clsx(className, styles.arrows)} style={style} onClick={onClick} />;
  }

  function PreviousArrow(props: any) {
    const { className, style, onClick } = props;
    return <div className={clsx(className, styles.arrows)} style={style} onClick={onClick} />;
  }

  const configCarousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          nextArrow: <div />,
          prevArrow: <div />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          nextArrow: <div />,
          prevArrow: <div />,
        },
      },
    ],
  };

  return (
    <div
      className={`
        mt-10
        w-full
        flex
        h-auto
        items-center
        justify-center
        justify-self-center
      `}
    >
      <div className="flex w-full h-auto m-auto flex-col">
        <Slider {...configCarousel}>{certificateCarousel}</Slider>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const AboutMeSection = () => {
  const t = useTranslations("AboutMe");

  return (
    <div
      id="aboutMe-section"
      className="w-full lg:px-48 px-[15px] flex flex-col items-center justify-center bg-gray-50 py-28 overflow-hidden"
    >
      {/* Title Section */}
      <div className="w-full flex flex-col items-center justify-center gap-y-4 mb-16 animate-fade-in-up">
        <h3 className="text-lg font-bold tracking-widest underline decoration-royalBlue decoration-2 uppercase text-codGray">
          {t("badge")}
        </h3>
        <h2 className="tracking-wide text-2xl font-semibold w-full text-center text-codGray mt-4">
          {t("title")}
        </h2>
      </div>

      {/* Fluid Grid Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Row 1: Intro Text & Portrait */}
        <div className="order-1 md:order-1 md:col-span-1 lg:col-span-7 bg-white p-8 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center gap-6 animate-slide-in-left">
          <p className="text-xl md:text-2xl leading-relaxed text-codGray font-medium">
            {t("intro")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("tech")}
          </p>
        </div>

        <div className="order-2 md:order-2 md:col-span-1 lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[450px] animate-slide-in-right group w-full">
          <Image 
            src="/images/about1.jpg" 
            alt="Adriano Castro professional portrait" 
            fill 
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700" 
          />
        </div>

        {/* Row 2: Presentation Photo & Current Role */}
        <div className="order-4 md:order-3 md:col-span-1 lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[450px] animate-slide-in-left group w-full">
          <Image 
            src="/images/about2.jpg" 
            alt="Adriano Castro presenting NAVIA" 
            fill 
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700" 
          />
        </div>

        <div className="order-3 md:order-4 md:col-span-1 lg:col-span-7 bg-codGray text-white rounded-3xl p-8 lg:p-14 shadow-2xl flex flex-col justify-center relative overflow-hidden group animate-slide-in-right h-full">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-royalBlue to-transparent opacity-30 rounded-bl-full group-hover:scale-125 transition-transform duration-700"></div>
          
          <h4 className="text-royalBlue font-bold tracking-widest mb-4 uppercase text-sm z-10">{t("currentRoleBadge")}</h4>
          <p className="text-2xl md:text-4xl font-semibold leading-tight z-10">
            {t("currentRoleLead")} <span className="text-royalBlue">{t("currentRolePlatform")}</span> {t("currentRoleAt")} <span className="text-royalBlue">{t("currentRoleCompany")}</span>.
          </p>
          <p className="text-gray-300 mt-6 text-lg md:text-xl leading-relaxed z-10">
            {t("currentRoleDesc")}
          </p>
        </div>

        {/* Row 3: Experiences & Event Photo */}
        <div className="order-5 md:order-5 md:col-span-1 lg:col-span-7 bg-white p-8 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center gap-6 animate-slide-in-left">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t("secultPrefix")} <strong className="text-codGray">{t("secultName")}</strong>{t("secultSuffix")}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t("expPrefix")} <strong className="text-codGray">{t("smarthow")}</strong> {t("smarthowDesc")} <strong className="text-codGray">{t("gs3")}</strong> {t("gs3Desc")}
          </p>
        </div>

        <div className="order-6 md:order-6 md:col-span-1 lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[450px] animate-slide-in-right group w-full">
          <Image 
            src="/images/about3.jpg" 
            alt="Adriano Castro at an event" 
            fill 
            className="object-cover object-left group-hover:scale-105 transition-transform duration-700" 
          />
        </div>

      </div>
    </div>
  );
};

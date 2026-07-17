"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";

const logoLetterWhite = require("../../../../../public/svgs/AC-white.svg");

export const DefaultHeader = () => {
  const brokeLine: string = "%0A";
  const router = useRouter();
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerClosing, setDrawerClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const openDrawer = useCallback(() => {
    setDrawerClosing(false);
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerClosing(true);
    setTimeout(() => {
      setDrawerOpen(false);
      setDrawerClosing(false);
    }, 280);
  }, []);

  function onTapHome() {
    router.push("/");
    closeDrawer();
  }

  function onTapWpp() {
    window.open(
      `https://api.whatsapp.com/send?phone=5531975113020&text=😀 Olá,${brokeLine}podemos conversar?`
    );
  }

  const navLinks = [
    { label: t("home"), href: "#me-section" },
    { label: t("projects"), href: "#projects-section" },
    { label: t("certificates"), href: "#certificates-section" },
    { label: t("aboutMe"), href: "#aboutMe-section" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    closeDrawer();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`
          header-base
          fixed top-0 left-0 right-0
          z-50
          lg:px-48 py-5
          px-[15px]
          flex
          items-center
          justify-between
          text-white
          ${isScrolled ? "header-scrolled" : "header-transparent"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            width={isScrolled ? 50 : 60}
            style={{
              cursor: "pointer",
              transition: "width 0.35s ease",
            }}
            src={logoLetterWhite}
            alt="letterLogo"
            onClick={onTapHome}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="flex-row items-center gap-x-10 max-lg:hidden flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`
                cursor-pointer
                text-sm
                font-bold
                tracking-wider
                uppercase
                hover:before:scale-x-100 hover:before:origin-left 
                relative 
                before:w-full before:h-[2px] before:origin-right 
                before:transition-transform before:duration-500 
                before:scale-x-0 before:bg-royalBlue 
                before:absolute before:left-0 before:bottom-[-4px]
                transition-colors duration-300
                hover:text-white/90
              `}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <button
            onClick={onTapWpp}
            className="btn-cta-gradient"
          >
            <span className="uppercase">{t("letsTalk")}</span>
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={openDrawer}
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[6px] group"
          aria-label="Open menu"
        >
          <span className="block w-6 h-[2px] bg-white transition-all duration-300 group-hover:bg-royalBlue" />
          <span className="block w-6 h-[2px] bg-white transition-all duration-300 group-hover:bg-royalBlue" />
          <span className="block w-4 h-[2px] bg-white transition-all duration-300 group-hover:bg-royalBlue ml-auto" />
        </button>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div
            className={`drawer-overlay ${drawerClosing ? "drawer-overlay-closing" : ""}`}
            onClick={closeDrawer}
          />

          {/* Drawer Panel */}
          <div className={`drawer-panel ${drawerClosing ? "drawer-panel-closing" : ""}`}>
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Image
                width={45}
                src={logoLetterWhite}
                alt="letterLogo"
                style={{ cursor: "pointer" }}
                onClick={onTapHome}
              />
              <button
                onClick={closeDrawer}
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Drawer Nav Links */}
            <nav className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    px-6 py-4
                    text-white/80
                    text-base
                    font-semibold
                    tracking-wider
                    border-b border-white/5
                    hover:bg-white/5
                    hover:text-white
                    transition-all duration-300
                  `}
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${index * 0.06}s forwards`,
                    opacity: 0,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Drawer CTA */}
            <div className="px-6 mt-4" style={{
              animation: `fadeInUp 0.4s ease-out ${navLinks.length * 0.06}s forwards`,
              opacity: 0,
            }}>
              <button
                onClick={onTapWpp}
                className="btn-cta-gradient w-full text-center uppercase"
              >
                <span>{t("letsTalk")}</span>
              </button>
            </div>

            {/* Drawer Footer */}
            <div className="mt-auto px-6 py-6 border-t border-white/10 flex flex-col items-center gap-4">
              <LanguageSwitcher direction="up" />
              <p className="text-white/40 text-xs text-center">
                © 2024 Adriano Castro
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

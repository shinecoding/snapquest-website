"use client";

import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        className="font-medium hover:text-gray-400 transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-0 transition-colors ${
        isScrolling ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#!"
          className={`text-lg font-bold ${
            isScrolling ? "text-gray-800" : "text-white"
          }`}
        >
          SnapQuest
        </a>

        {/* 데스크탑 메뉴 */}
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem>Docs</NavItem>
        </ul>

        {/* 데스크탑 소셜 + 버튼 */}
        {/* <div className="hidden gap-2 lg:flex lg:items-center">
          {["twitter", "facebook", "instagram"].map((icon) => (
            <button
              key={icon}
              aria-label={icon}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                isScrolling
                  ? "text-gray-800 hover:bg-gray-200"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <i className={`fa-brands fa-${icon} text-base`} />
            </button>
          ))}
          <a
            href="#!"
            className={`rounded px-4 py-1.5 text-sm font-medium transition ${
              isScrolling
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
          >
            Blocks
          </a>
        </div> */}

        {/* 모바일 메뉴 토글 */}
        <button
          onClick={handleOpen}
          className={`ml-auto inline-block rounded p-2 lg:hidden ${
            isScrolling
              ? "text-gray-800 hover:bg-gray-200"
              : "text-white hover:bg-white/20"
          }`}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="container mx-auto mt-4 rounded-lg border-t border-gray-200 bg-white px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem>Docs</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            {["twitter", "facebook", "instagram"].map((icon) => (
              <button
                key={icon}
                aria-label={icon}
                className="flex h-8 w-8 items-center justify-center rounded-full text-gray-800 hover:bg-gray-200"
              >
                <i className={`fa-brands fa-${icon} text-base`} />
              </button>
            ))}
            <a
              href="#!"
              className="ml-auto rounded bg-gray-800 px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
            >
              Blocks
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

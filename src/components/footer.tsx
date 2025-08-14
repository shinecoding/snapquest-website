"use client";

import Image from "next/image";
import React from "react";

const LINKS = ["About Us", "Press", "Blog"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          {/* 왼쪽 정보 영역 */}
          <div className="text-center md:text-left">
            <a
              href="#!"
              className="mb-4 block text-xl font-semibold text-white hover:text-gray-300"
            >
              SnapQuest
            </a>
            <p className="mb-12 font-normal text-white">
              Form Habits That Pay Off
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <a
                    href="#!"
                    className={`py-1 font-medium text-white transition-colors hover:text-gray-300 ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 앱 다운로드 영역 */}
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <h6 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Get the app
            </h6>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-white px-4 py-2 text-gray-900 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Image
                  width={24}
                  height={24}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-white px-4 py-2 text-gray-900 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Image
                  width={24}
                  height={24}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="android"
                />
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* 하단 영역 */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <p className="text-center font-normal text-white opacity-75">
            &copy; {CURRENT_YEAR}{" "}
            <a href="#" className="hover:underline">
              SnapQuest
            </a>
          </p>

          <div className="flex gap-2">
            {[
              "twitter",
              "linkedin",
              "facebook",
              "github",
              "dribbble",
            ].map((icon) => (
              <button
                key={icon}
                type="button"
                aria-label={icon}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white opacity-75 transition hover:bg-white/10"
              >
                <i
                  className={`fa-brands fa-${icon} text-2xl not-italic`}
                  aria-hidden="true"
                ></i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

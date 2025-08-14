"use client";
import Image from "next/image";

export function FixedPlugin() {
  return (
    <a
      href="https://www.material-tailwind.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 hidden items-center gap-1 rounded border border-blue-gray-50 bg-white px-3 py-1 text-sm font-medium shadow hover:bg-gray-50 md:flex"
    >
      <Image
        width={20}
        height={20}
        className="h-5 w-5"
        alt="SnapQuest"
        src="/logos/logo-apple.png"
      />
      SnapQuest
    </a>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "../components/info-card";

const OPTIONS = [
  {
    title: "10,000+",
    description: "Completed Quests",
  },
  {
    title: "500+",
    description: "Active Quest Groups",
  },
  {
    title: "24/7",
    description: "Progress Tracking",
  },
  {
    title: "5/5",
    description: "User Satisfactions",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/iphone.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <h2 className="mb-4 text-3xl font-bold text-blue-gray-900">
            Mobile Convenience
          </h2>
          <p className="mb-5 px-4 text-left text-xl text-gray-500 lg:px-0">
            Track your quests, upload proof snaps, and check progress anytime,
            anywhere.
          </p>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;

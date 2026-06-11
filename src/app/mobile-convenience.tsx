"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "../components/info-card";

const OPTIONS = [
  {
    title: "AI-Powered",
    description: "Personalised habit engine",
  },
  {
    title: "On-Chain",
    description: "Smart Contract securedstakes",
  },
  {
    title: "AR-Enabled",
    description: "Proof you can't fake",
  },
  {
    title: "Gamified",
    description: "Real life, game rules",
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
          className="col-span-1 mx-auto h-auto w-1/2 object-contain lg:w-10/12"
          alt="SnapQuest mobile app"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <h2 className="mb-4 text-3xl font-bold text-blue-gray-900">
            Built Different. By Design.
          </h2>
          <p className="mb-5 px-4 text-left text-xl text-gray-500 lg:px-0">
            Give yourself an unfair
            advantage over your old self.
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

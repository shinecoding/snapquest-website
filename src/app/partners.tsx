"use client";

import React from "react";
import Image from "next/image";

const PARTNERS = [
  { name: "Seoul Clinic", img: "/partners/seoul-clinic.jpg" },
  { name: "Kulture Class", img: "/partners/kulture-class.jpg" },
  { name: "Grid Club", img: "/partners/grid-club.jpg" },
];

export function Partners() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-bold uppercase text-blue-gray-900">
            Partners
          </p>
          <h1 className="mb-4 text-4xl font-bold text-blue-gray-900">
            Who We Work With
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {PARTNERS.map(({ name, img }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <Image
                src={img}
                alt={name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
              <p className="font-normal text-gray-500">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;

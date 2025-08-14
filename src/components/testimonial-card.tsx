import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-lg bg-white p-6 shadow-sm">
      <Image
        src={img}
        alt={client}
        width={64}
        height={64}
        className="mb-3 h-16 w-16 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800">{client}</h3>
      <p className="mb-3 text-sm font-medium text-gray-600">{title}</p>
      <p className="mb-5 text-gray-500 italic">&ldquo;{feedback}&ldquo;</p>
    </div>
  );
}

export default TestimonialCard;

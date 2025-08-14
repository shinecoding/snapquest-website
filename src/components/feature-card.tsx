import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="bg-transparent shadow-none">
      <div className="grid justify-start">
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-blue-gray-900">{title}</h3>
        <p className="font-normal text-gray-500">{children}</p>
      </div>
    </div>
  );
}

export default FeatureCard;

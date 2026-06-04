"use client";

import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function SocialImpact() {
  return (
    <section className="bg-white px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-bold uppercase text-blue-gray-900">
            Social Impact
          </p>
          <h1 className="mb-4 text-4xl font-bold text-blue-gray-900">
            Built with Purpose
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-500">
            SnapQuest is more than a habit app. It is a platform built to make
            a meaningful contribution to society, supporting mental health
            accessibility and environmental sustainability through everyday
            actions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Mental Health */}
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
              <HeartIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Mental Health
            </h3>
            <div className="mb-6 rounded-xl bg-indigo-50 p-6">
              <p className="text-5xl font-black text-indigo-600">£12.13B</p>
              <p className="mt-1 text-sm font-medium text-indigo-400">
                NHS Mental Health Investment (MHIS) 2024/25
              </p>
            </div>
            <p className="leading-relaxed text-gray-500">
              Many people with ADHD, ADD, depression, anxiety, burn out, and PTSD lack accessible,
              everyday tools to manage low mood, procrastination, and stress.
              Considering that the NHS in England spent £12.13 billion on mental
              health investment (MHIS) in the 2024/25 financial year, a
              research based, everyday mobile support tool like SnapQuest could help
              reduce the burden on the NHS. This could also benefit those who
              may not actively seek NHS support but continue to struggle with
              daily functioning in silence.
            </p>
          </div>

          {/* Sustainability */}
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <rect x="11" y="14" width="3" height="8" rx="1"/>
                <path d="M11 14C13 14 11 5 0 3C1 10 5 15 13 14Z"/>
                <path d="M12 14C12 14 11 5 24 3C23 10 19 14 12 14Z"/>
              </svg>
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Sustainability
            </h3>
            <div className="mb-6 rounded-xl bg-indigo-50 p-6">
              <p className="text-5xl font-black text-indigo-600">£6.7B</p>
              <p className="mt-1 text-sm font-medium text-indigo-400">
                DESNZ Annual Expenditure 2024/25
              </p>
            </div>
            <p className="leading-relaxed text-gray-500">
              The UK government is legally committed to reaching net zero by
              2050 under the Climate Change Act 2019 and is spending £6.7
              billion a year on DESNZ (Department for Energy Security and Net
              Zero). But systemic change starts with individual habits. SnapQuest
              enables users to create and join environment themed quests,
              turning sustainable behaviours into daily actions that are tracked,
              proven, and shared. The platform gives people a way to contribute to a healthier
              planet not through guilt, but through fun and rewarding engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialImpact;

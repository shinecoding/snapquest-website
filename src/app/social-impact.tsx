"use client";

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
            a meaningful contribution to society, supporting everyday
            motivation and environmental sustainability through everyday
            actions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Mindfulness */}
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
              <HeartIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Mindfulness
            </h3>
            <div className="mb-6 rounded-xl bg-indigo-50 p-6">
              <p className="text-5xl font-black text-indigo-600">964K</p>
              <p className="mt-1 text-sm font-medium text-indigo-400">
                UK Health and Safety Executive (HSE) 2024/25
              </p>
            </div>
            <p className="leading-relaxed text-gray-500">
              According to the UK Health and Safety Executive (HSE), 964,000 workers experienced work-related stress, depression or anxiety in 2024/25, resulting in 22.1 million working days lost. SnapQuest helps busy professionals address this growing wellbeing challenge through simple, engaging mindfulness practices that can become sustainable daily habits. SnapQuest is designed to support presence, recovery, and personal wellbeing beyond the workday.
            </p>
          </div>

          {/* Sustainability */}
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <rect x="11" y="14" width="3" height="8" rx="1" />
                <path d="M11 14C13 14 11 5 0 3C1 10 5 15 13 14Z" />
                <path d="M12 14C12 14 11 5 24 3C23 10 19 14 12 14Z" />
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

"use client";

import React from "react";

import {
  SparklesIcon,
  ShieldCheckIcon,
  CameraIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: SparklesIcon,
    title: "AI Habit Engine",
    children:
      "Our proprietary AI model learns your schedule, energy patterns, and past behaviour to deliver personalised nudges at exactly the right moment, before your discipline runs out. It also recommends quests calibrated to your current level, so the challenge is always hard enough to matter but not so hard you quit.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Blockchain-Secured Stakes",
    children:
      "Stakes are held on-chain. Transparent, secure, and fully yours. No intermediary holds your money. Smart contracts automatically redistribute rewards after a quest closes.",
  },
  {
    icon: CameraIcon,
    title: "AR Real Life Gameplay",
    children:
      "Stop tracking life. Start playing it. SnapQuest turns your everyday routine into a real game through AR. Habits become quests and progress feels fun. Be the hero of your own story.",
  },
  {
    icon: TrophyIcon,
    title: "Social Accountability",
    children:
      "Your quest members are not just bystanders. They share the same goal, stake, risk that you have. That means they have every reason to watch you closely and call you out when you slip.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <p className="mb-2 font-bold uppercase text-blue-gray-900">
          The Edge You&apos;ve Been Missing
        </p>
        <h1 className="mb-4 text-4xl font-bold text-blue-gray-900">
          Why SnapQuest Works
        </h1>
        <p className="mx-auto w-full px-4 text-lg leading-relaxed text-gray-500 lg:w-11/12 lg:px-8">
          Built on behavioural psychology research and powered by AI, Blockchain,
          and AR, SnapQuest is the habit system designed for people who approach
          self-improvement the same way they approach their portfolio: with
          strategy, accountability, and skin in the game.
        </p>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;

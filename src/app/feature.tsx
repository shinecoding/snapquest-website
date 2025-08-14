"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Financial Motivation",
    children:
      "Put down a small deposit when joining a quest. Finish it all, get your money back, plus bonuses from others who didn’t. Miss it, lose part of your stake.",
  },
  {
    icon: HeartIcon,
    title: "Social Accountability",
    children:
      "Join group quests with people chasing the same goals. Your proof snaps are visible to the group, making it much harder to slack off.",
  },
  {
    icon: LockClosedIcon,
    title: "Photo Proof Verification",
    children:
      "Upload a quick snap to prove you did the task. No loopholes, no excuses.",
  },
  {
    icon: LightBulbIcon,
    title: "Gamified Progress",
    children:
      "Feel the satisfaction of completing quests in real life.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Your Habit Quest
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Why SnapQuest Works
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Built on proven principles of behavioural science, SnapQuest combines social accountability, financial stakes, and gamification to turn intentions into consistent actions — and make habit building stick.
        </Typography>
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

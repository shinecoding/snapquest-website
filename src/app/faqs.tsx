"use client";

import React from "react";

const FAQS = [
  {
    title: "What happens when I complete a quest?",
    desc: "Complete every check-in and your full stake is returned to you, plus a bonus share from those who did not finish. If you staked in crypto, it is fully redeemable at the end of the quest with no delays.",
  },
  {
    title: "What happens if I miss a day?",
    desc: "Missing a check-in means you forfeit a portion of your stake. The forfeited amount is redistributed to quest members who stayed consistent, so everyone has real skin in the game.",
  },
  {
    title: "How does photo verification work?",
    desc: "Snap a quick photo that proves you completed the task: your running shoes, your open book, or your salad bowl. Photos are shared within your quest group, so everyone stays honest.",
  },
  {
    title: "Can I create a private quest just for my team?",
    desc: "Absolutely. You can start a private quest and invite specific people, perfect for colleagues running a 30-day productivity challenge or a group of friends building side-project habits together.",
  },
  {
    title: "Is my money safe?",
    desc: "Yes. Cash stakes are processed securely through Stripe and held in-app until the quest ends. Crypto stakes are locked in a smart contract with no intermediary involved. Either way, funds are only redistributed once the quest closes.",
  },
  {
    title: "What if someone fakes their proof snap?",
    desc: "Any member can flag a suspicious check-in directly in the app. Our staff reviews every report and takes action accordingly. Quests are built on trust, and we take that seriously.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-gray-900">
            Frequently asked questions
          </h1>
          <p className="mx-auto mb-24 text-lg leading-relaxed text-gray-500 lg:w-3/5">
            Everything you need to know about getting started, staying
            accountable, and making your stake work for you.
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-xl bg-transparent p-0 shadow-none"
            >
              <h4 className="pb-6 text-2xl font-semibold text-blue-gray-900">
                {title}
              </h4>
              <div className="pt-2">
                <p className="font-normal text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;

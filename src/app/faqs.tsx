"use client";


const FAQS = [
  {
    title: "What happens when I complete a quest?",
    desc: "Complete every check-in and credits are returned to your balance. You may also receive a reward bonus.",
  },
  {
    title: "What happens if I miss a day?",
    desc: "Missing a check-in reduces your credits based on your success rate.",
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
    desc: "Payments are processed securely through Apple, Google, or Stripe. SnapQuest does not hold your money.",
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
          <p className="mx-auto mb-24 max-w-2xl text-center text-lg leading-relaxed text-gray-500">
            Everything you need to know about quests, Rewards, and vouchers.
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

"use client";

import TestimonialCard from "@/components/testimonial-card";
import { UserIcon } from "@heroicons/react/24/solid";


const TESTIMONIALS = [
  {
    feedback:
      "I'd been trying to wake up at 5 AM for two years. The AI notifications nudged me at the right moment and got me to take the snap each morning. I didn't miss a single day for 30 days. The group kept me from making excuses.",
    client: "Jamie L.",
    title: "Product Manager",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "After two years of 80-hour weeks I hit a wall. No energy, no routine, nothing outside of work. I started a simple sleep and exercise quest just to feel human again. Three months later those habits are the reason I can still do this job.",
    client: "Ryan K.",
    title: "Investment Analyst",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "I had tried every productivity app out there. None of them made me feel anything when I skipped a day. SnapQuest did, because I was financially motivated and my group could see my progress. That combination changed my behaviour in a way no notification ever could.",
    client: "Priya M.",
    title: "Lawyer",
    img: "/image/avatar3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <h2 className="mb-2 text-3xl font-bold text-blue-gray-900">
            What Users Say
          </h2>
          {/* <p className="mb-10 max-w-3xl text-center text-gray-600"> */}
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-500">
            Real people, real habits. See how SnapQuest helped busy
            professionals and side hustlers turn intentions into daily action.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;

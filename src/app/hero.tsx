"use client";

import Image from "next/image";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Real Life. Game Rules.
            </p>
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
              Hack Your Brain. <br /> Level Up Your Life.
            </h1>

            <p className="mb-7 pr-0 text-white/80 md:pr-16 xl:pr-28">
              Built for ambitious dreamers. SnapQuest uses behavioural psychology,
              AI, Smart Contract, and AR to turn your daily habits into a real life game with
              financial stakes.
            </p>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
              Get the app
            </h6>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-6 py-3 font-medium text-gray-900 shadow transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="Google Play"
                  className="w-6 h-6"
                />
                Google Play
              </a>
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-6 py-3 font-medium text-gray-900 shadow transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="App Store"
                  className="w-6 h-6"
                />
                App Store
              </a>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="SnapQuest app"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-500">
            Form Habits That Pay Off
          </p>
          <h3 className="mb-3 text-3xl font-bold text-blue-gray-900">
            Your Brain Has a Cheat Code.
          </h3>
          <p className="max-w-none font-normal text-gray-500 lg:w-5/12">
            SnapQuest is built on decades of behavioural psychology research.
            Financial commitment, social accountability, and immediate feedback
            are among the most reliable drivers of lasting habit change. We
            engineered all three into one app.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;

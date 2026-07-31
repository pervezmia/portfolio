import Image from "next/image";
import { HeroActions } from "./HeroActions";

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-5xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8">
      <div className="text-center lg:text-left">
        <span className="inline-flex rounded-full border border-neutral-200 px-4 py-1 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          Available for freelance work
        </span>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I'm Pervez —
          <br />
          I build full-stack web apps that work.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600 lg:mx-0 dark:text-neutral-400">
          Independent developer working with Next.js, Express.js, and
          MongoDB. I turn ideas into deployed, working products — from
          booking systems to online learning platforms.
        </p>

        <div className="mt-8 flex justify-center lg:justify-start">
          <HeroActions />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500 lg:justify-start dark:text-neutral-500">
          <span>Next.js</span>
          <span>·</span>
          <span>Express.js</span>
          <span>·</span>
          <span>MongoDB</span>
          <span>·</span>
          <span>Better Auth</span>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="relative aspect-square w-64 overflow-hidden rounded-3xl border border-neutral-200 sm:w-80 dark:border-neutral-800">
          <Image
            src="https://i.ibb.co.com/MySvrZfq/pervez.jpg"
            alt="Pervez, full-stack developer"
            fill
            sizes="(min-width: 640px) 320px, 256px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
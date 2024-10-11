"use client";

import { BentoGridThird } from "./BentoGrid";
import Quiz from "./Quiz";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "About Me",
      value: "product",
      content: (
        <div className="relative min-h-[850px] w-full rounded-2xl bg-gradient-to-r from-red-500 to-yellow-500 p-8 text-xl font-bold text-white md:text-4xl">
          <p className="pl-8 lowercase">About Me.</p>
          <BentoGridThird />
        </div>
      ),
    },
    {
      title: "Brain Buzz",
      value: "brain-buzz",
      content: (
        <div className="relative min-h-[850px] w-full overflow-hidden rounded-2xl bg-gradient-to-r from-slate-700 to-slate-600 p-8">
          <p className="pl-8 text-xl font-bold lowercase text-white md:text-4xl">
            Brain Buzz.
          </p>
          <Quiz />
        </div>
      ),
    },
  ];

  return (
    <div className="b justify-center[perspective:1000px] relative mx-auto flex h-[20rem] w-screen max-w-5xl flex-col items-center md:h-[60rem]">
      <Tabs tabs={tabs} />
    </div>
  );
}

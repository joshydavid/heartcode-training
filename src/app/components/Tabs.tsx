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
        <div className="relative min-h-[850px] w-full rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-500 p-8 text-xl font-bold text-white md:text-4xl">
          <p className="pl-8 lowercase">About Me.</p>
          <BentoGridThird />
        </div>
      ),
    },
    {
      title: "Brain Buzz",
      value: "brain-buzz",
      content: (
        <div className="relative min-h-[850px] w-full overflow-hidden rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 p-8">
          <p className="pl-8 text-xl font-bold lowercase text-white md:text-4xl">
            Brain Buzz.
          </p>
          <Quiz />
        </div>
      ),
    },
    // {
    //   title: "Random",
    //   value: "random",
    //   content: (
    //     <div className="relative min-h-[850px] w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-300 to-violet-900 p-8 text-xl font-bold text-white md:text-4xl">
    //       <p className="pl-8 lowercase">Random.</p>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="b relative mx-auto flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[60rem]">
      <Tabs tabs={tabs} />
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { LampDemo } from "./components/Lamp";
import { LANDING_URL } from "./helper";

export default function Home() {
  const router = useRouter();
  return (
    <div className="cursor-pointer" onClick={() => router.push(LANDING_URL)}>
      <LampDemo>Dive In.</LampDemo>
    </div>
  );
}

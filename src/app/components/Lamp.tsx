"use client";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamps";

interface iLampDemo {
  children: React.ReactNode;
}

export function LampDemo({ children }: iLampDemo) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center font-mono text-4xl font-light text-transparent md:text-7xl"
      >
        {children}
      </motion.h1>
    </LampContainer>
  );
}

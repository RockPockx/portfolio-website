"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      A web developer passionate in building clean, responsive, and user-friendly websites. I focus on front-end development and WordPress, turning designs into seamless digital experiences.
      </p>

      <p className="mb-3">
      My core stack
        is{" "}
        <span className="font-medium">
          Tailwind, Alpine, Laravel, and Livewire
        </span>
        . I also utilize <span className="font-medium">WordPress</span> to build user-friendly websites. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}

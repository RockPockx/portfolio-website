import React from "react";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaServer } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import nikelandingpageImg from "@/public/nikelandingpage.png"
import kontakamiImg from "@/public/kontakami.png";
import hamparanImg from "@/public/hamparan.png";
import anugerahlestariImg from "@/public/anugerahlestari.png";
import bptImg from "@/public/bpt.png";
import moneloImg from "@/public/monelo.png";
import carneImg from "@/public/carne.png";
import heirImg from "@/public/heir.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School Student",
    description:
      "I started learning about programming in high school. My first programming language is C++.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Introduced to Front-End",
    description:
      "I learned about front-end development and created some projects. I used HTML, CSS, and JavaScript for the first time. I also learned about responsive design and accessibility.",
    icon: React.createElement(FaHtml5),
    date: "2022",
  },
  {
    title: "Advanced Front-End",
    description:
      "I worked on some advanced front-end projects. I used React, Bootstrap, Tailwind CSS for the first time. I participated in a national web development competition with a team. I also learned about version control using Git and GitHub.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Introduced to Back-End",
    description:
      "I participated in LKS (Lomba Kompetensi Siswa) and created RESTful API using PHP and Laravel. Then, I started to learn more about scripting languages, API, databases and server. ",
    icon: React.createElement(FaServer),
    date: "2023",
  },
  {
    title: "Web Developer Internship",
    description:
      "I got an opportunity to have an internship at one of the best branding agency in Jakarta. There, I learned about WordPress, Elementor, and Figma. I also learned about SEO, Google Analytics, Google Tag Manager, and Google Search Console. I also got the chance to sharpen my Laravel skills by creating custom websites and e-commerce websites.",
    icon: React.createElement(FaUserTie),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Kontakami",
    description:
      "A company profile website for a leading call-center service solution in Indonesia. Made with modern and sleek design, also including SEO-based articles.",
    tags: ["Tailwind", "Laravel", "SEO"],
    imageUrl: kontakamiImg,
  },
  {
    title: "Anugerah Lestari",
    description:
      "A modern and visually stunning company profile website for a trusted weighing system solution. Made with a admin dashboard for easy content management.",
    tags: ["Laravel", "Tailwind"],
    imageUrl: anugerahlestariImg,
  },
  {
    title: "Blue Power Technology",
    description:
      "A professional company profile website for a trusted IT solution. Made with the best plugins to ensure maximum performance and security.",
    tags: ["WordPress", "Elementor"],
    imageUrl: bptImg,
  },
  {
    title: "Heir Care Studio",
    description:
      "A sleek and modern website for a hair salon. Made with a user-friendly layout and integration to a booking system.",
    tags: ["WordPress", "Elementor"],
    imageUrl: heirImg,
  },
  {
    title: "Hamparan Stone",
    description:
      "An elegant website for a trusted natural stone supplier. Made with a custom design, SEO-based articles, and full admin dashboard.",
    tags: ["Laravel", "Tailwind", "Livewire"],
    imageUrl: hamparanImg,
  },
  {
    title: "Carne Ristorante",
    description:
      "A luxurious Italian dining website. Made with a table reservation and membership system",
    tags: ["WordPress", "Elementor"],
    imageUrl: carneImg,
  },
  {
    title: "Monelo Digital Agency",
    description:
      "A creative digital agency website. Made with a compact design and SEO-based articles.",
    tags: ["WordPress", "Elementor", "SEO", "Google Tag Manager", "Google Search Console"],
    imageUrl: moneloImg,
  },
  {
    title: "Nike Landing Page",
    description:
      "Fully responsive Nike landing page made with React and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    imageUrl: nikelandingpageImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "PHP",
  "MySQL",
  "Laravel",
  "Tailwind",
  "Alpine.js",
  "Livewire",
  "WordPress",
  "Elementor",
  "Figma",
  "Git",
  "Google Analytics (GA4)",
  "SEO",
  "Google Tag Manager (GTM)",
  "Google Search Console (GSC)",

] as const;

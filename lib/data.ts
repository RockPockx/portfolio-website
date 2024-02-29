import React from "react";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    location: "Jakarta",
    description:
      "I started learning about programming in high school. I tried to create a plain website using HTML and it amazes me. My first programming language is C++ but I switched to JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Jakarta",
    description:
      "I worked as a front-end developer for some projects. I used React, Next.js, and Tailwind.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Jakarta",
    description:
      "I'm now a full-stack developer working for some projects. I used Express and MongoDB for a back-end project. I also used Flutter and Firebase for a mobile app project. ",
    icon: React.createElement(FaNode),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Company Profile",
    description:
      "I made a simple and interactive company profile website. It has a contact form and a services section.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Suara Nusantara",
    description:
      "An informative website about the muscial instruments of Indonesia. It has an image gallery and articles section. It also has a dark mode feature.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Next API",
    description:
      "RESTful API made with Next.js and Prisma ORM.",
    tags: ["Next.js", "MySQL", "Prisma"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "MySQL",
  "Prisma",
  "PHP",
  "Python",
] as const;

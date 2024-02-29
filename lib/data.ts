import React from "react";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaServer } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import suaranusantaraImg from "@/public/suaranusantara.png";
import companyprofileImg from "@/public/companyprofile.png";
import regImg from "@/public/reg.png";

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
      "I participated in LKS (Lomba Kompetensi Siswa) and created RESTful API using PHP and Laravel. Then, I also started learning about PHP, databases and SQL. ",
    icon: React.createElement(FaServer),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    description:
      "Now, I'm a full-stack developer working for some projects. I used Express and MongoDB for a back-end project. I also used Flutter and Firebase for a mobile app project. ",
    icon: React.createElement(FaUserTie),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Company Profile",
    description:
      "I made a simple and interactive company profile website. It has a contact form and a services section.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: companyprofileImg,
  },
  {
    title: "Suara Nusantara",
    description:
      "An informative website about the musical instruments of Indonesia. It has an image gallery and articles section. It also has a dark mode feature.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: suaranusantaraImg,
  },
  {
    title: "Next API",
    description:
      "RESTful API made with Next.js and Prisma ORM.",
    tags: ["Next.js", "MySQL", "Prisma"],
    imageUrl: regImg,
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

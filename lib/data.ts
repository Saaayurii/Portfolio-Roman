import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import expo from "@/public/expo.jpg";
import Roman from "@/public/Roman.png";
import Films from "@/public/Films.png";

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
    title: "Донецкий государственный университет",
    location: "Донецк, Украина",
    description:
      "Я начал обучение в вузе. И сейчас уже на 2 курсе ИВТ.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Мобильный инженер",
    location: "Волгоград, Россия",
    description:
      "На Pedant.ru я работал в качестве инженера. Моя работа включала в себя диагностику, модульный ремонт телефонов, планшетов и ноутбуков.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Волгоград, Россия",
    description:
      "Сейчас я работаю в качестве фрилансера full-stack разработчика. Мой стек включает React, Next.js, TypeScript, Tailwind, SCSS и PostgreSQL. Я готов для роста в крупной компании.",
    icon: React.createElement(FaReact),
    date: "2024 - сейчас",
  },
] as const;

export const projectsData = [
  {
    title: "RomanBank",
    description:
      "Это простая банковская система, которая позволяет осуществлять базовые банковские операции.",
    tags: ["JavaScript", "PostgreSQL", "Nest.js", "SCSS"],
    imageUrl: Roman,
  },
  {
    title: "RomanFilms",
    description: 
      "Веб-приложение разработано с использованием навейших технологий.      Кинотеатр для просмотра фильмов.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "TypeScript", "Redux",],
    imageUrl: Films,
  },
  {
    title: "Historical App",
    description:
      "Я работал над этим проектом в течение 2 месяцев. Пользователи могут путешествовать по историческим местам Донецка.",
    tags: ["React-Native", "Expo.js", "CSS", "Android Studio"],
    imageUrl: expo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

import {
  netflix,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nullclass,
  newsindia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN-Stack Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "NULLCLASS",
    icon: nullclass,
    iconBg: "#fff",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },


];


const projects = [
  {
    name: "Netflix",
    description:
      "Web-based platform that allows users to watch webseries | movies | documentation etc. User authentication  and fetching data from The Movie Database (TMDB) ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "TMDB Api",
        color: "pink-text-gradient",
      },
      {
        name: "Netlify",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/arunmauryaosm/netflix",
    demo_link: "https://main-netflix.netlify.app/"
  },
  {
    name: "News India",
    description:
      "Web application that enables users to search for latest news, according there choice there is feature where they can filter accordingly. Like - Sports , Science , Entertaiment etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "news-api",
        color: "green-text-gradient",
      },
      {
        name: "infinite scrollbar",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: newsindia,
    source_code_link: "https://github.com/arunmauryaosm/newsindia",
    demo_link: "https://newsind.netlify.app/"
  },

];

export { services, technologies, experiences,  projects };

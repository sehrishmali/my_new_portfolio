
import React, { useEffect } from 'react';
import Heading from './Heading';
import Card from './Card';
// import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const data: Project[] = [
  {
    id: 0,
    title: "Todo List",
    desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/IMG_20241019_225350_036.jpg",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js & TypeScript powered website to track time with an interactive countdown feature.",
    img: "/IMG_20241020_152623_307.jpg",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A Next.js & TypeScript based tool for fetching and displaying real-time weather data.",
    img: "/IMG_20241020_152912_390-Copy.jpg",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="projects" className="container pt-32 ml-6" data-aos="zoom-in-up">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import { useLocation } from 'react-router-dom';

import "./Home.scss";

import Master from "../components/master/Master";
import Projects from "../components/projects/Projects";

import tricor from "../assets/dev-projects/tricor.png";
import lawvu from "../assets/dev-projects/lawvu.png";
import yoominii from "../assets/dev-projects/yoominii.png";
import canit from "../assets/dev-projects/canit.png";
import rmm from "../assets/dev-projects/rmm.png";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import CaseStudies from "../components/case-studies/CaseStudies";
import AboutMe from "../components/about-me/AboutMe";
import Footer from "../components/footer/Footer";
import Skills from '../components/skills/Skills';
import Work from '../components/work/Work';
import { useEffect } from 'react';

export default function Home({ setIsDesign }: { setIsDesign: (design: boolean) => void }): JSX.Element { 
  const location = useLocation();

  useEffect(() => {
    setIsDesign(location.pathname === "/design");
  }, [location.pathname]);


  return (
    <div>
      <Master />
      <div className="showcase-container">
        <div className="showcase-wrapper">
          <img className="showcase" src={tricor} alt="" />
          <img className="showcase" src={lawvu} alt="" />
          <img className="showcase" src={canit} alt="" />
        </div>
      </div>
      <Content />
      <AboutMe />
      <Footer />
    </div>
  );
}

const Content = (): JSX.Element => {
  const location = useLocation();
  if (location.pathname === "/design") {
    const projects = [
      {
        title: "Name",
        description:
          "some text to explain the project some text to explain the project",
        image: img1,
        link: "",
        year: "2023"
      },
      {
        title: "Name",
        description:
          "some text to explain the project some text to explain the project",
        image: lawvu,
        link: "",
        year: "2023"
      },
      {
        title: "Name",
        description:
          "some text to explain the project some text to explain the project",
        image: img3,
        link: "",
        year: "2023"
      },
    ];
    return (
      <>
        <Projects projects={ projects } />
        <CaseStudies />
      </>
    )
  }

  const projects = [
    {
      title: "Tricor Project",
      description:
        "As a software engineer with Dave Clark, I played a pivotal role in the development of the Tricor project—an international, cutting-edge software designed to facilitate seamless corporate onboarding for global companies. As a full stack engineer on this project, I leveraged a robust tech stack comprising ReactJS, ExpressJS, NodeJS, MS Azure, Tailwind, and Stroybook. My responsibilities included implementing solutions across the entire software spectrum, contributing to its functionality and user experience, thereby enhancing the platform's efficiency and effectiveness in streamlining corporate onboarding processes on a global scale.",
      image: tricor,
      link: "https://www.tricorglobal.com/",
      year: "2023"
    },
    {
      title: "LawVu Project",
      description:
        "As a software engineer at LawVu, I was integral to the continuous development of the primary LawVu software project. LawVu serves as a global solution for empowering large corporations' in-house legal teams in managing their legal operations. My role involved utilizing a tech stack inclusive of Angular, Storybook, MS Azure, and .NET. I contributed significantly to enhancing and evolving this essential tool, ensuring it met the diverse and critical needs of corporate legal departments worldwide.",
      image: lawvu,
      link: "https://lawvu.com/",
      year: "2022"
    },
    {
      title: "Yoominii Project",
      description:
        "The Yoominii project is a personal endeavor featuring an ecommerce website developed using Angular, AWS services, and integrated with Stripe for seamless transactions.",
      image: yoominii,
      link: "https://www.yoominii.com/",
      year: "2022"
    },
    {
      title: "CanIT Limited Landing page",
      description:
        "While at CanIT Limited, I undertook various projects, one of which involved the design and development of the primary landing page utilizing VueJS.",
      image: canit,
      link: "https://canit.co.nz/",
      year: "2021"
    },
    {
      title: "RMM Landing page",
      description:
        "During my time at CanIT Limited, I designed and developed Riccarton Mall Motels' landing page, leveraging VueJS for this project. Riccarton Mall Motels is a prominent motel establishment situated in Christchurch.",
      image: rmm,
      link: "https://rmm.co.nz/",
      year: "2021"
    },
  ];

  return (
    <>
      <Work />
      <Projects projects={ projects } />
      <Skills />
    </>
  )
}
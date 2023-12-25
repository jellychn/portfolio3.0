import "./Home.scss";

import Master from "../components/master/Master";
import Projects from "../components/projects/Projects";

import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import CaseStudies from "../components/case-studies/CaseStudies";
import AboutMe from "../components/about-me/AboutMe";
import Footer from "../components/footer/Footer";

export default function Home(): JSX.Element {
  return (
    <div>
      <Master />
      <div className="showcase-container">
        <div className="showcase-wrapper">
          <img className="showcase" src={img1} alt="" />
          <img className="showcase" src={img2} alt="" />
          <img className="showcase" src={img3} alt="" />
        </div>
      </div>
      <Projects />
      <CaseStudies />
      <AboutMe />
      <Footer />
    </div>
  );
}

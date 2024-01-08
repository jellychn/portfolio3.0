import "./AboutMe.scss";

import speachBubble from "../../assets/speech-bubble.svg";
import profile from "../../assets/profile.jpg";
import { useLocation } from "react-router-dom";
import Tooltip from "../tooltip/Tooltop";
import { DesignDecisionsContext, IsDesignContext } from "../../App";
import { useContext } from "react";

export default function AboutMe(): JSX.Element {
  const isDesign = useContext(IsDesignContext);
  const designDecisions = useContext(DesignDecisionsContext);
  const backgroundMsg = "Incorporating a granular texture background in different sections adds depth and character to the design, elevating its visual appeal. This textured background not only introduces flavor but also serves as an effective method to denote transitions between sections, contributing to a more visually engaging and cohesive design.";
  return (
    <div className="about-me" id="about-me">
      <div className="wrapper">
        <div className="content tooltip-wrapper">
          {isDesign && designDecisions &&
            <Tooltip message={ backgroundMsg } position="right" />
          }
          <div className="profile-image-container">
            <div className="profile-image">
              <img className="speach-bubble" src={speachBubble} alt="" />
              <img className="profile" src={profile} alt="" />
            </div>
          </div>
          <div className="text-content">
            <Content isDesign={isDesign} designDecisions={designDecisions} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Content = ({ isDesign, designDecisions }: { isDesign: boolean; designDecisions: boolean }): JSX.Element => {
  const location = useLocation();

  const highlightMsg = "Emphasizing critical wording serves to break monotony and provides users with key points to grasp while reading. This highlighting technique helps draw attention to essential information, making it stand out and aiding users in focusing on pivotal points within the content.";

  if (location.pathname === "/design") {
    return (
      <>
        <h2>About Me</h2>
        <p>
          Hey there! I'm Jerry, a seasoned{" "}
          <span className="highlight tooltip-wrapper">
            {isDesign && designDecisions &&
              <Tooltip message={ highlightMsg } right="0px" top="-65px" />
            }
            software engineer</span> with a dynamic
          background spanning over 4 years in the tech industry. My journey in
          software engineering has been an incredible learning curve, allowing
          me to hone my skills in coding and problem-solving.
        </p>
        <p>
          Beyond the lines of code, I've developed a deep passion for design—its
          aesthetics, functionality, and the human experience it creates. This
          fascination has steered my interests toward the captivating world of{" "}
          <span className="highlight">UX/UI design</span>.
        </p>
        <p>
          Driven by a desire to bridge the gap between technology and
          user-centric design, I'm currently on a path to explore and immerse
          myself in the realm of UX/UI. I firmly believe that creating seamless,
          intuitive experiences is not just a profession but an art form that
          merges innovation with empathy.
        </p>
        <p>
          My background in software engineering provides me with a solid
          technical foundation, while my enthusiasm for design fuels my
          creativity and attention to detail. I'm excited to leverage this
          unique blend of skills as I embark on this new chapter, seeking
          opportunities to contribute my expertise and learn from the forefront
          of UX/UI design.
        </p>
        <p>
          Let's <span className="highlight">collaborate</span> and craft
          meaningful, user-centric experiences together!
        </p>
      </>
    );
  }

  return (
    <>
      <h2>About Me</h2>
      <p>
        Hi I'm Jerry, a dedicated <span className="highlight">software engineer</span> with a rich experience
        spanning over 4 years in the dynamic tech landscape. Over this period,
        I've delved into the intricate world of coding, problem-solving, and
        software development.
      </p>
      <p>
        My journey as a software engineer has been an exhilarating adventure,
        allowing me to immerse myself in diverse projects, learn various
        programming languages, and tackle complex challenges head-on. I thrive
        in crafting elegant solutions that not only meet functional requirements
        but also prioritize efficiency and scalability.
      </p>
      <p>
        My expertise lies in
         <span className="highlight"> Full stack development</span>, and I've had the privilege
        of contributing to amazing companies and overseas projects.
      </p>
      <p>
        Driven by an insatiable curiosity and a passion for continuous learning,
        I am always eager to explore emerging technologies and methodologies
        that push the boundaries of what's possible in the realm of software
        development. Whether it's optimizing code for performance, collaborating
        with cross-functional teams, or architecting robust systems, I am
        committed to delivering high-quality solutions that make a tangible
        difference.
      </p>
      <p>Let's <span className="highlight">collaborate</span> and craft meaningful, scalable software together!</p>
    </>
  );
};

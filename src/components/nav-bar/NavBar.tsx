import "./NavBar.scss";

import upArrow from "../../assets/up-arrow.svg";
import home from "../../assets/home.svg";
import { useContext, useEffect, useState } from "react";
import Tooltip from "../tooltip/Tooltop";
import { DesignDecisionsContext, IsDesignContext } from "../../App";

export default function NavBar(): JSX.Element {
  const isDesign = useContext(IsDesignContext);
  const designDecisions = useContext(DesignDecisionsContext);
  const [showUp, setShowUp] = useState<boolean>(false);

  const handleScroll = () => {
    const main = document.getElementById("main");
    const position = window.pageYOffset;
    if (main && position > main?.offsetHeight) {
      setShowUp(true);
    } else {
      setShowUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    if (showUp) {
      const el = document.getElementById("main");
      console.log(el);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navBarMsg =
    "To enhance user experience, label the most crucial navigation links with the names of respective sections, reducing user guesswork. Additionally, consider using universal icons where applicable to complement and reinforce these labels for easier comprehension and navigation.";

  return (
    <div className="nav-bar tooltip-wrapper">
      {isDesign && designDecisions &&
        <Tooltip message={ navBarMsg } right="-65px" top="8px" />
      }
      <div
        className={showUp ? "content-left active" : "content-left"}
        onClick={scrollToTop}
      >
        <img src={upArrow} alt="" className={showUp ? "show" : "hidden"} />
      </div>
      <div className="content">
        <Links isDesign={isDesign} />
      </div>
      <div className="content-right">
        <img src={home} alt="" className="hidden" />
      </div>
    </div>
  );
}

type LinksProps = {
  isDesign: boolean;
};

const Links = ({ isDesign }: LinksProps): JSX.Element => {
  const scrollToView = (section: string): void => {
    const el = document.getElementById(section);
    console.log(el);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  if (isDesign) {
    return (
      <>
        <div className="link" onClick={() => scrollToView("projects")}>
          Projects
        </div>
        <div className="link" onClick={() => scrollToView("case-studies")}>
          Case studies
        </div>
        <div className="link" onClick={() => scrollToView("about-me")}>
          About me
        </div>
      </>
    );
  }

  return (
    <>
      <div className="link" onClick={() => scrollToView("work")}>
        Work
      </div>
      <div className="link" onClick={() => scrollToView("projects")}>
        Projects
      </div>
      <div className="link" onClick={() => scrollToView("skills")}>
        Skills
      </div>
      <div className="link" onClick={() => scrollToView("about-me")}>
        About me
      </div>
    </>
  );
};

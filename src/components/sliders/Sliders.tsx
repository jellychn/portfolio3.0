import "./Sliders.scss";

import Slider from "../slider/Slider";

import dev from "../../assets/dev.svg";
import design from "../../assets/design.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Tooltip from "../tooltip/Tooltop";
import { DesignDecisionsContext, IsDesignContext } from "../../App";

export default function Sliders({
  setDesignDecisions,
}: {
  setDesignDecisions: (toggle: boolean) => void;
}): JSX.Element {
  const isDesign = useContext(IsDesignContext);
  const designDecisions = useContext(DesignDecisionsContext);
  const [checkedDev, setCheckedDev] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    initDevChacked();
  }, [location.pathname]);

  const navigate = useNavigate();

  const initDevChacked = (): void => {
    if (location.pathname === "/dev") {
      setCheckedDev(true);
    } else {
      setCheckedDev(false);
    }
  };

  const toggleDevChecked = (): void => {
    if (location.pathname === "/dev") {
      navigate("/design");
      setCheckedDev(false);
    } else {
      navigate("/dev");
      setCheckedDev(true);
    }

    setDesignDecisions(false);
    scrollToTop();
  };

  const toggleDesignDecisionsChecked = (): void => {
    setDesignDecisions(!designDecisions);
  };

  const scrollToTop = (): void => {
    const el = document.getElementById("main");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const switchMsg =
    "Incorporate universally recognized switch buttons alongside descriptive text to ensure users have a clear understanding of their functionality. This combination helps in providing visual cues and textual clarification for users, facilitating better comprehension of the switch button's purpose and operation.";

  return (
    <div className="sliders">
      <Slider
        image={dev}
        id="dev"
        name="Dev"
        checked={checkedDev}
        toggle={toggleDevChecked}
      />
      <div className="space" />
      <div className="tooltip-wrapper">
        {isDesign && designDecisions && (
          <Tooltip
            message={switchMsg}
            top="65px"
            right="50px"
            position="left"
          />
        )}
        {isDesign && (
          <Slider
            image={design}
            id="design"
            name="Design Decisions"
            checked={designDecisions}
            toggle={toggleDesignDecisionsChecked}
          />
        )}
      </div>
    </div>
  );
}

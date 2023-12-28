import "./Master.scss";

import logo from "../../assets/logo.svg";
import scissors from "../../assets/scissors.svg";
import paperPlane from "../../assets/paper-plane.svg";
import { useContext } from "react";
import Tooltip from "../tooltip/Tooltop";
import { DesignDecisionsContext, IsDesignContext } from "../../App";

export default function Main(): JSX.Element {
  const isDesign = useContext(IsDesignContext);
  const designDecisions = useContext(DesignDecisionsContext);
  const helloWorld1 = "print () {";
  const helloWorld2 = "Hello World";
  const helloWorld3 = "}";
  const quote = "{ Technical with a sprinkle of elegance }";

  const squareMsg = "Apply shadow effects to shapes for a dynamic touch.";
  const helloWorldMsg = "Utilize diverse shades and varying color intensities strategically to guide the user's focus. More prominent colors draw greater attention, indicating areas of higher importance or focus within the design or interface.";

  return (
    <div className="main" id="main">
      <img className="logo" src={logo} alt="" />
      <div className="wrapper">
        <div className="section">
          <div className="name-container">
            <div className="hello-world-container tooltip-wrapper">
              {isDesign && designDecisions &&
                <Tooltip message={ helloWorldMsg } right="60px" />
              }
              <h2>{helloWorld1}</h2>
              <div className="hello-world-wrapper">
                <span className="tab" />
                <h2>{helloWorld2}</h2>
              </div>
              <h2>{helloWorld3}</h2>
            </div>
            <div className="name-wrapper">
              <div className="square tooltip-wrapper">
                {isDesign && designDecisions &&
                  <Tooltip message={ squareMsg } right="-65px" bottom="0px" />
                }
              </div>
              <div className="text">
                <h1>Hi, I'm Jerry</h1>
                <SubTitles isDesign={isDesign} />
              </div>
              <div className="container-20">
                <h3>20px</h3>
                <div className="square-20" />
              </div>
            </div>
            <div className="quote-container">
              <h2>{quote}</h2>
              <div className="container-5">
                <div className="square-5" />
                <h3>5px</h3>
              </div>
            </div>
          </div>
        </div>
        <img className="paper-plane" src={paperPlane} alt="" />
      </div>
      <img className="scissors" src={scissors} />
    </div>
  );
}

type SubTitlesProps = {
  isDesign: boolean;
};

const SubTitles = ({ isDesign }: SubTitlesProps): JSX.Element => {
  if (isDesign) {
    return (
      <>
        <h2>UX / UI</h2>
        <h3>Software engineer</h3>
      </>
    );
  }

  return (
    <>
      <h2>Software engineer</h2>
      <h3>UX / UI</h3>
    </>
  );
};
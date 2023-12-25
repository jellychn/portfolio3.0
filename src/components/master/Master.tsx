import "./Master.scss";

import logo from "../../assets/logo.svg";
import paperPlane from "../../assets/paper-plane.svg";

export default function Main(): JSX.Element {
  const helloWorld1 = "print () {";
  const helloWorld2 = "Hello World";
  const helloWorld3 = "}";
  const quote = "{ Technical with a sprinkle of elegance }";
 
  return (
    <div className="main">
      <img className="logo" src={logo} alt="" />
      <div className="wrapper">
        <div className="section">
          <div className="name-container">
            <div className="hello-world-container">
              <h2>{helloWorld1}</h2>
              <div className="hello-world-wrapper">
                <span className="tab" />
                <h2>{helloWorld2}</h2>
              </div>
              <h2>{helloWorld3}</h2>
            </div>
            <div className="name-wrapper">
              <div className="square" />
              <div className="text">
                <h1>Hi, I'm Jerry</h1>
                <h2>UX / UI</h2>
                <h3>Software engineer</h3>
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
        <div className="circle">
          <img className="paper-plane" src={paperPlane} alt="" />
        </div>
      </div>
    </div>
  );
}

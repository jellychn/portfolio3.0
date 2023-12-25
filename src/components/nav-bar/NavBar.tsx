import "./NavBar.scss";

import upArrow from "../../assets/up-arrow.svg";
import home from "../../assets/home.svg";

export default function NavBar(): JSX.Element {
    return (
        <div className="nav-bar">
            <div className="content-left">
                <img src={upArrow} />
            </div>
            <div className="content">
                <div className="link">Projects</div>
                <div className="link">Case studies</div>
                <div className="link">About me</div>
            </div>
            <div className="content-right">
                <img src={home} />
            </div>
        </div>
    )
}
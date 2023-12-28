import "./Footer.scss";

import logo from "../../assets/logo-inverse.svg";
import linkedIn from "../../assets/linked-in.svg"
export default function Footer(): JSX.Element {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="section">
                    <img className="logo-footer" src={ logo } alt="" />
                    <div className="divider" />
                    <div className="socials-container">
                        <a href="https://www.linkedin.com/in/jerry-chen-3235171b4/" target="_blank">
                            <img className="socials" src={ linkedIn } alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
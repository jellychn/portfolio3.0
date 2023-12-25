import "./Footer.scss";

import logo from "../../assets/logo-inverse.svg";
import linkedIn from "../../assets/linked-in.svg"
import email from "../../assets/email.svg";

export default function Footer(): JSX.Element {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="section">
                    <img className="logo-footer" src={ logo } />
                    <div className="divider" />
                    <div className="socials-container">
                        <img className="socials" src={ linkedIn } />
                        <img className="socials" src={ email } />
                    </div>
                </div>
            </div>
        </div>
    )
}
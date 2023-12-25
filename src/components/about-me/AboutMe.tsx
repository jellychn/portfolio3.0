import "./AboutMe.scss";

import speachBubble from "../../assets/speech-bubble.svg";
import profile from "../../assets/profile.jpg";

export default function AboutMe(): JSX.Element {
    return (
        <div className="about-me">
            <div className="wrapper">
                <div className="content">
                    <div className="profile-image-container">
                        <div className="profile-image">
                            <img className="speach-bubble" src={ speachBubble } />
                            <img className="profile" src={ profile } />
                        </div>
                    </div>
                    <div className="text-content">
                        <h2>About Me</h2>
                        <p>
                            Hey there! I'm Jerry, a seasoned <span className="highlight">software engineer</span> with a dynamic background spanning over 3 years in the tech industry. My journey in software engineering has been an incredible learning curve, allowing me to hone my skills in coding and problem-solving.
                        </p>
                        <p>
                            Beyond the lines of code, I've developed a deep passion for design—its aesthetics, functionality, and the human experience it creates. This fascination has steered my interests toward the captivating world of <span className="highlight">UX/UI design</span>.
                        </p>
                        <p>
                            Driven by a desire to bridge the gap between technology and user-centric design, I'm currently on a path to explore and immerse myself in the realm of UX/UI. I firmly believe that creating seamless, intuitive experiences is not just a profession but an art form that merges innovation with empathy.
                        </p>
                        <p>
                            My background in software engineering provides me with a solid technical foundation, while my enthusiasm for design fuels my creativity and attention to detail. I'm excited to leverage this unique blend of skills as I embark on this new chapter, seeking opportunities to contribute my expertise and learn from the forefront of UX/UI design.
                        </p>
                        <p>
                            Let's <span className="highlight">collaborate</span> and craft meaningful, user-centric experiences together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
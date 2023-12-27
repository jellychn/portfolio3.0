import "./Work.scss";

import daveClark from "../../assets/dave-clark.svg";
import lawvu from "../../assets/lawvu.svg";
import canit from "../../assets/canit.svg";

export default function Work(): JSX.Element {
    const work = [
        {
            time: "March 2023 - Present",
            city: "Auckland,",
            country: "New Zealand",
            company: "Dave Clark Design",
            title: "Software engineer",
            image: daveClark,
            link: false,
            dark: true,
            url: "https://www.daveclarkdesign.com/en-nz"
        },
        {
            time: "Jan 2022 - March 2023",
            city: "Tauranga,",
            country: "New Zealand",
            company: "LawBu",
            title: "Software engineer",
            image: lawvu,
            link: true,
            dark: true,
            url: "https://lawvu.com/"
        },
        {
            time: "Oct 2020 - Jan 2022",
            city: "Christchurch,",
            country: "New Zealand",
            company: "CanIT",
            title: "Software engineer",
            image: canit,
            link: true,
            dark: false,
            url: "https://canit.co.nz/"
        } 
    ];

    return (
        <div className="work" id="work">
            <div className="wrapper">
                <h2 className="sub-title-right">Work</h2>
                <div className="job-container">
                    {
                        work.map(job => {
                            return (
                                <div className="job">
                                    {
                                        job.link && (
                                            <div className="job-link" />
                                        )
                                    }
                                <div className="job-left">
                                    <p className="time">{ job.time }</p>
                                    <p>{ job.city }</p>
                                    <p>{ job.country }</p>
                                </div>
                                <div className="divider" />
                                <div className="job-right">
                                    <div className="content">
                                        <h3>
                                            { job.company }
                                        </h3>
                                        <h4>
                                            { job.title }
                                        </h4>
                                        <a href={ job.url } target="_blank">
                                            <button className="link">Link</button>
                                        </a>
                                    </div>
                                    <div className={ job.dark ? "job-image-dark" : "job-image-light"}>
                                        <img src={ job.image } alt="" />
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
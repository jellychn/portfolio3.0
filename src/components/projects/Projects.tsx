import { useLocation } from "react-router-dom";
import Tooltip from "../tooltip/Tooltop";
import { useContext } from "react";
import { DesignDecisionsContext, IsDesignContext } from "../../App";

export default function Projects({ projects }: { projects: Project[] }): JSX.Element {
  const isDesign = useContext(IsDesignContext);
  const designDecisions = useContext(DesignDecisionsContext);

  const headerMsg =
    "Ensure subheaders are formatted in a larger size compared to the content text. This distinction aids users in identifying the beginning of a new section more easily.";

  return (
    <div className="projects" id="projects">
      <div className="wrapper">
        <div className="section">
          <div className="tooltip-wrapper">
            <h1
              className={
                isDesign
                  ? "sub-title-right"
                  : "sub-title-left"
              }
            >
              {isDesign && designDecisions &&
                <Tooltip message={ headerMsg } right="0px" top="-50px" position="left" />
              }
              Projects
            </h1>
          </div>
          <div>
            {projects.map((project: Project) => (
              <Project project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Project: React.FC<{ project: Project }> = ({ project }) => {
  const location = useLocation();
  if (location.pathname === "/design") {
    return (
      <div>
        <div className="project">
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={ project.link } target="_blank">
              <button>See Project</button>
            </a>
          </div>
          <span className="divider" />
          <img src={project.image} alt="" style={{ marginLeft: "152px" }} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="project">
        <img src={project.image} alt="" style={{ marginRight: "152px" }}  />
        <span className="divider" />
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <h4>{project.year}</h4>
          <a href={ project.link } target="_blank">
            <button>See Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  year: string;
};

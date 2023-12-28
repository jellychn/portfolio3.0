import { useContext } from "react";
import img2 from "../../assets/img-2.jpg";
import Tooltip from "../tooltip/Tooltop";
import { DesignDecisionsContext, IsDesignContext } from "../../App";

export default function CaseStudies(): JSX.Element {
  const isDesign = useContext(IsDesignContext);
  const designDecisions = useContext(DesignDecisionsContext);
  const projects: Project[] = [
    {
      title: "Case Study",
      description:
        "",
      image: img2,
      link: "",
      disabled: true
    }
  ];

  const spaceMsg = "Increasing the spacing between sections acts as a visual indicator, effectively distinguishing between different sections without solely relying on background color changes. Additionally, swapping the section direction provides further cues to users, subtly hinting at transitions between sections within the layout or design.";

  return (
    <div className="projects" id="case-studies">
      <div className="wrapper">
        <div className="section">
          <div className="tooltip-wrapper">
            <h1 className="sub-title-left">
              {isDesign && designDecisions &&
                <Tooltip message={ spaceMsg } top="-45px" position="right" />
              }
              Case Studies
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

const Project: React.FC<{ project: Project }> = ({ project }) => (
  <div>
    <div className="project">
      <img src={project.image} alt="" style={{ marginRight: "152px" }}  />
      <span className="divider" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button disabled={project.disabled} className={ project.disabled ? "disabled" : "" }>See Study</button>
      </div>
    </div>
  </div>
);

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  disabled: boolean;
};

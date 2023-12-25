import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";

export default function CaseStudies(): JSX.Element {
    const projects: Project[] = [
        {
            title: "Name",
            description: "some text to explain the project some text to explain the project",
            image: img1,
            link: ""
        },
        {
            title: "Name",
            description: "some text to explain the project some text to explain the project",
            image: img2,
            link: ""
        }
    ];

    return (
        <div className="projects">
        <div className="wrapper">
          <div className="section">
            <h1 className="sub-title-left">Case Studies</h1>
            <div>
                {projects.map((project: Project) => 
                    <Project project={project} />
                )
                }
            </div>
          </div>
        </div>
      </div>
    );
}

const Project: React.FC<{ project: Project }> = ({ project }) => (
    <div>
    <div className="project">
    <img src={ project.image } />
    <span className="divider" />
        <div className="project-content">
            <h3>{ project.title }</h3>
            <p>{ project.description }</p>
            <button>See Project</button>
        </div>
    </div>
</div>
);


type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
};
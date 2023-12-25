import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";

export default function Projects(): JSX.Element {
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
        },
        {
            title: "Name",
            description: "some text to explain the project some text to explain the project",
            image: img3,
            link: ""
        }
    ];

    return (
        <div className="projects">
        <div className="wrapper">
          <div className="section">
            <h1 className="sub-title-right">Projects</h1>
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
        <div className="project-content">
            <h3>{ project.title }</h3>
            <p>{ project.description }</p>
            <button>See Project</button>
        </div>
        <span className="divider" />
        <img src={ project.image } />
    </div>
</div>
);

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
};
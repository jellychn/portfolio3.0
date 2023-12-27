import "./Skills.scss";

import react from "../../assets/skills/react.svg";
import angular from "../../assets/skills/angular.svg";
import vue from "../../assets/skills/vue.svg";
import scss from "../../assets/skills/sass.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import storybook from "../../assets/skills/storybook.svg";

import node from "../../assets/skills/node.svg";
import aws from "../../assets/skills/aws.svg";
import azure from "../../assets/skills/azure.svg";

import javascript from "../../assets/skills/javascript.svg";
import typescript from "../../assets/skills/typescript.svg";
import python from "../../assets/skills/python.svg";

export default function Skills(): JSX.Element {
    const FE_frameworks: Skill[] = [
        {
            image: react,
            name: "ReactJS"
        },
        {
            image: angular,
            name: "Angular"
        },
        {
            image: vue,
            name: "VueJS"
        }
    ];
    const FE_tools: Skill[] = [
        {
            image: scss,
            name: "SCSS"
        },
        {
            image: tailwind,
            name: "Tailwind"
        },
        {
            image: storybook,
            name: "Storybook"
        }
    ];
    const BE_tools: Skill[] = [
        {
            image: node,
            name: "NodeJS"
        },
        {
            image: aws,
            name: "AWS"
        },
        {
            image: azure,
            name: "MS Azure"
        }
    ];
    const languages: Skill[] = [
        {
            image: javascript,
            name: "JavaScript"
        },
        {
            image: typescript,
            name: "TypeScript"
        },
        {
            image: python,
            name: "Python"
        }
    ];
  return (
    <div className="skills" id="skills">
      <div className="wrapper">
        <h2 className="sub-title-center">SKILLS</h2>
        <SkillSection skillSection={ FE_frameworks } />
        <SkillSection skillSection={ FE_tools } />
        <div className="space" />
        <SkillSection skillSection={ BE_tools } />
        <div className="space" />
        <SkillSection skillSection={ languages } />
      </div>
    </div>
  );
}

type SkillSectionProps = {
    skillSection: Skill[];
};

const SkillSection: React.FC<SkillSectionProps> = ({ skillSection }): JSX.Element => {
  return (
    <div className="skills-container">
      <div className="skills-section">
        {skillSection.map((s: { image: any; name: string }) => (
          <div className="skill">
            <div className="skill-image">
              <img src={s.image} alt="" />
            </div>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

type Skill = {
    name: string;
    image: string;
};
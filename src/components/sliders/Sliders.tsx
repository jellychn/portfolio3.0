import "./Sliders.scss";

import Slider from "../slider/Slider";

import dev from "../../assets/dev.svg";
import design from "../../assets/design.svg";

export default function Sliders(): JSX.Element {
    return (
        <div className="sliders">
            <Slider image={ dev } id="dev" name="Dev" />
            <div className="space" />
            <Slider image={ design } id="design" name="Design Decisions" />
        </div>
    )
}
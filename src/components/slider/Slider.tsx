import { useState } from "react";
import "./Slider.scss";

export default function Slider({
  image,
  id,
  name
}: {
  image: string;
  id: string;
  name: string;
}): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  const toggle = (): void => {
    setChecked(!checked);
  };

  return (
    <div className="slider-container">
        <h3 className="name">{name}</h3>
        <div className="toggle-slider">
        <input type="checkbox" id={id} checked={checked} onChange={toggle} />
        <label htmlFor={id} className="slider">
            <img src={image} alt={id} />
        </label>
        </div>
    </div>
  );
}

import "./Slider.scss";

export default function Slider({
  image,
  id,
  name,
  checked,
  toggle
}: {
  image: string;
  id: string;
  name: string;
  checked: boolean;
  toggle: () => void;
}): JSX.Element {
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

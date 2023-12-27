import { useState } from "react";
import "./Tooltip.scss";

export default function Tooltip({
  message,
  top,
  right,
  bottom,
  left,
  position
}: {
  message: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  position?: string;
}): JSX.Element {
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  const getPosition = (): string => {
    if (position === "left") {
        return "-100";
    }

    if (position === "right") {
        return "0";
    }

    return "-50";
  }

  return (
    <div
      className="tooltip"
      style={{ top: top, right: right, bottom: bottom, left: left }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tooltip-image" />
      {showMessage && (
        <div className="message" style={{ transform: `translate(${getPosition()}%, 25px)` }}>
            { message }
        </div>
      )}
    </div>
  );
}

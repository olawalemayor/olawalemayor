import React, { CSSProperties, Fragment, useState } from "react";
import { SocialIcon } from "react-social-icons";

interface IconsProp {
  url: string;
  direction: string;
  hint?: string;
}

export default function Icons({ direction, url, hint }: IconsProp) {
  const [iconClass, setIconClass] = useState("icon");
  const [showHint, setShowHint] = useState(false);

  function setHover() {
    setIconClass("icon hovered-icon");
    setShowHint(true);
  }

  function removeHover() {
    setIconClass("icon");
    setShowHint(false);
  }

  const setOrientation = (): CSSProperties => {
    return direction === "horizontal"
      ? { display: "inline" }
      : { display: "block" };
  };

  return (
    <Fragment>
      <div
        className={iconClass}
        onMouseEnter={setHover}
        onMouseLeave={removeHover}
        style={setOrientation()}
      >
        <SocialIcon url={url} />
        {hint && showHint && <div className="social-icon-hint">{hint}</div>}
      </div>
    </Fragment>
  );
}

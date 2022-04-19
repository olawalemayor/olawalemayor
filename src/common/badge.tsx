import React, { CSSProperties } from "react";

interface BadgeProps {
  content: string;
  color?: string;
}

export default function Badge({ content, color }: BadgeProps) {
  const colorBadge = (): CSSProperties => {
    if (color) {
      if (
        color === "red" ||
        color === "blue" ||
        color === "green" ||
        color === "purple" ||
        color === "black"
      )
        return getBadgeStyling(color, "#fff");
      else if (color === "yellow" || color === "white" || color === "lightblue")
        return getBadgeStyling(color, "#000");
      else return getBadgeStyling("black", "white");
    }
    return getBadgeStyling("black", "white");
  };
  return (
    <span className="badge" style={colorBadge()}>
      {content}
    </span>
  );
}

const getBadgeStyling = (color: string, textColor: string): CSSProperties => {
  return {
    color: textColor,
    border: `1px solid ${textColor}`,
    backgroundColor: color,
    borderRadius: "10px",
    maxWidth: "max-content",
    padding: ".1rem .5rem",
    margin: ".2rem",
  };
};

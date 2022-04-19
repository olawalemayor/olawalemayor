import React, { CSSProperties, Fragment, useState } from "react";
import Badge from "./badge";

interface Props {
  imageUrl: string;
  name: string;
  description: string;
  projectLink?: string;
  githubLink?: string;
  skills: any[];
}

export default function PortfolioGrid({
  imageUrl,
  name,
  description,
  projectLink,
  githubLink,
  skills,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const getPortfolioStyle = (): CSSProperties => {
    const backgroundImageStyle: CSSProperties = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
    };
    const boxStyle: CSSProperties = {
      height: "300px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 3px 10px 1px #bbb",
      textAlign: "center",
    };

    return { ...boxStyle, ...backgroundImageStyle };
  };

  return (
    <Fragment>
      <div className="hide-desktop">
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <br />
      </div>

      <div
        className="portfolio-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={getPortfolioStyle()} className="mob-portfolio">
          {isHovered && (
            <div className="portfolio-inner">
              <h5>{name}</h5>
              <span className="d-block">{description}</span>
            </div>
          )}
        </div>

        <div className="skills-container">
          {skills.map((skill) => (
            <Badge content={skill.name} color={skill.color} key={skill.name} />
          ))}
        </div>

        <div className="links">
          {projectLink && (
            <button>
              <a href={projectLink}>Project</a>
            </button>
          )}
          {githubLink && (
            <button>
              <a href={githubLink}>GitHub</a>
            </button>
          )}
        </div>
      </div>

      <hr className="hide-desktop separator" />
    </Fragment>
  );
}

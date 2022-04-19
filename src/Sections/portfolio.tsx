import React from "react";
import PortfolioGrid from "../common/portfolioGrid";
import { getPortfolioContent } from "../shared/contentService";

export default function Portfolio() {
  const portfolios = getPortfolioContent();

  return (
    <div id="portfolio">
      <h2 className="mob-header">PORTFOLIO</h2>
      <p>
        Over the course of my career, I have executed some interesting projects
      </p>
      <br />
      <p>
        Appart from the enviroment you're currently on, here are some other
        projects I've worked on:
      </p>
      <div className="portfolio-grid">
        {portfolios.map(
          ({
            id,
            name,
            description,
            githubLink,
            imageUrl,
            projectLink,
            skills,
          }) => (
            <PortfolioGrid
              key={id}
              name={name}
              description={description}
              imageUrl={imageUrl}
              githubLink={githubLink}
              projectLink={projectLink}
              skills={skills}
            />
          )
        )}
      </div>
    </div>
  );
}

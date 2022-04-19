import React from "react";
import Badge from "../common/badge";
import profileImage from "../assets/images/profile_400x400.jpg";
import { getHomeContent } from "../shared/contentService";

const { firstname, lastname, description, skills, other_description } =
  getHomeContent();

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="content">
        <img
          src={profileImage}
          alt={`${firstname.toUpperCase()} ${lastname.toUpperCase()}`}
        />
        <h1>{`${firstname.toUpperCase()} ${lastname.toUpperCase()}`}</h1>
        <div className="description">{description}</div>
        <h2 className="skills-heading">SKILLS:</h2>
        <div className="skills skills-container">
          {skills.map(({ content, color }) => (
            <Badge content={content} color={color} key={content} />
          ))}
        </div>
        <div className="other-description">{other_description}</div>
      </div>
    </div>
  );
}

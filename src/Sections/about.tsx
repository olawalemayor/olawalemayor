import React from "react";
import aboutImg from "../assets/images/aabout-img.jpg";

export default function About() {
  return (
    <div id="about">
      <div className="about-content">
        <div className="about-section">
          <h4 className="section-header">ABOUT ME</h4>
          <p className="section-text">
            Hi, I am Olawale Olufisoye, a graduate of Systems Engineering at the
            University of Lagos, Akoka, Yaba. I have web development experience
            with Angular, React, Node and Express, Git and WordPress.
            <br />
            <br /> I have some programming experience with Python, C#, Java and
            Kotlin as well as using web management and deployment tools such as
            Putty, cPanel, FileZilla, Netlify, Heroku, Firebase and AWS
            <br />
            <br /> I also have some exprience in Computer-Aided-Design(ing)
            using softwares such as Autodesk Inventor, Inventor Fusion &
            Autodesk Maya.
          </p>
        </div>

        <div className="about-section">
          <h4 className="section-header">THE JOURNEY SO FAR</h4>
          <p className="section-text">
            I started out my development career journey in 2018 learning to
            develop Android applications using Java by undergoing a course
            sponsored by sponsored by Google Africa Developer Scholarship (GADS)
            <br />
            <br />
            I started working after the coronavirus lockdown and started
            developing web applications and feature requests on ERPs using
            Python. I took courses sponsored by GADS to learn and use Angular to
            aid my skills in web development, I also added React to my skillset.
            <br />
            <br />
            Between 2020 and now, I have worked both as a Full stack developer
            and Webmaster and have gained several skillset and experiences to
            aid my journey.
            <br />
            <br /> I have some passion for Machine Learning and would likely be
            venturing into the field in future. You can see more information
            about me in my{" "}
            <a href="https://drive.google.com/file/d/1qdAbcwha1igO4yR-uDjFgSdzXTeFkcGP/view?usp=sharing">
              resume here
            </a>
          </p>
        </div>
      </div>

      <div className="about-img hide-mobile">
        <img src={aboutImg} alt="Olawale Mayor" />
      </div>
    </div>
  );
}

import React, { Fragment, useContext, useRef } from "react";
import { Home, About, Portfolio, Contact } from "../Sections";
import Mobilenavbar from "./mobilenavbar";
import AppContext from "../context/appContext";

export default function Container() {
  const toggleMobileMenu = useContext(AppContext);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <Fragment>
      <div className="container">
        <div className="navbar">
          <Mobilenavbar brand="OLAWALE MAYOR" action={toggleMobileMenu} />
        </div>

        <div className="section" ref={homeRef}>
          <Home />
        </div>
        <div className="section" ref={aboutRef}>
          <About />
        </div>
        <div className="section portfolio-dark" ref={portfolioRef}>
          <Portfolio />
        </div>
        <div className="section" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </Fragment>
  );
}

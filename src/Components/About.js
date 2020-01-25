import React from "react";
import aboutStyle from "./about.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

// SVG logos
import cssLogo from "../images/CSS.svg";
import htmlLogo from "../images/html.svg";
import javascriptLogo from "../images/javascript.svg";
import nodeLogo from "../images/node.svg";
import reactLogo from "../images/react.svg";
import photoshopLogo from "../images/photoshop.svg";
import illustratorLogo from "../images/illustrator.svg";

const About = () => {
  return (
    <div id="about" className={aboutStyle.container}>
      <div className={aboutStyle.about}>
        <p>
          I'm Steven, a full stack web developer from Melbourne, Australia. I
          studied computer science at Deakin University and applied science at
          RMIT. I love creating beautiful and function web sites and
          applications.
          <br />
          <br />
          Below you can see some samples of my work. If you are interested in
          working with me or simply want to ask a question, you're welcome to{" "}
          <Link
            className={aboutStyle.link}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            contact me.
          </Link>
        </p>
      </div>
      <div className={aboutStyle.skills}>
        Skills
        <div className={aboutStyle.logos}>
          <img
            className={`${aboutStyle.logo} ${aboutStyle.html}`}
            src={htmlLogo}
            alt="html logo"
          />
          <img
            className={`${aboutStyle.logo} ${aboutStyle.css}`}
            src={cssLogo}
            alt="css logo"
          />
          <img
            className={`${aboutStyle.logo} ${aboutStyle.javascript}`}
            src={javascriptLogo}
            alt="javascript logo"
          />
          <img
            className={`${aboutStyle.logo} ${aboutStyle.react}`}
            src={reactLogo}
            alt="react logo"
          />
          <img
            className={`${aboutStyle.logo} ${aboutStyle.node}`}
            src={nodeLogo}
            alt="node logo"
          />
          <img
            className={`${aboutStyle.logo} ${aboutStyle.photoshop}`}
            src={photoshopLogo}
            alt="photoshop logo"
          />
          <img
            className={`${aboutStyle.logo} ${aboutStyle.illustrator}`}
            src={illustratorLogo}
            alt="illustrator logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

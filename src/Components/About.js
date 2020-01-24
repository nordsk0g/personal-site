import React from "react";
import aboutStyle from "./about.module.scss";

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          officiis voluptates voluptas labore eligendi sit quisquam corrupti
          quae? Quidem quibusdam quo modi amet voluptatem ad necessitatibus
          fuga, praesentium fugit sapiente aspernatur repudiandae at magnam
          quisquam aliquam voluptatibus expedita, adipisci illo voluptates
          ratione assumenda, ex maiores! Amet sequi numquam earum perferendis.
          {/* I'm Steven, a full-stack web developer from Melbourne, Australia. I
        studied computer science at Deakin University and applied science at
        RMIT. I love web design because it blends function and form together
        aswell as the technology rapidly evolving every year. This gives the
        designer more power to let their creativity run wild. */}
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          error enim ipsa, aliquid suscipit quam illum necessitatibus fuga
          numquam magni exercitationem fugiat quia quod reprehenderit cumque
          consectetur eum? Deleniti, repudiandae!
          {/* Below you can see some samples of my work. If you are interested in
        working together with me or simply want to ask a question, you're
        welcome to <a href="#">contact me.</a> */}
        </p>
      </div>
      <div className={aboutStyle.technologies}>
        <h1>Technologies</h1>
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

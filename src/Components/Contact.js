import React from "react";
import { ReactSVG } from "react-svg";
import contactStyle from "./contact.module.scss";

// Logos
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

const Contact = () => {
  return (
    <div id="contact" className={contactStyle.container}>
      <div className={contactStyle.contact}>
        <a href="mailto:schr@outlook.com.au" className={contactStyle.email}>
          schr@outlook.com.au
        </a>
        <div className={contactStyle.logos}>
          <a
            href="https://github.com/nordsk0g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactSVG src={github} className={contactStyle.logo} />
          </a>
          <a
            href="https://www.linkedin.com/in/steven-christian-522749169/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactSVG src={linkedin} className={contactStyle.logo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

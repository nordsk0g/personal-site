import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import _ from "lodash";
import headerStyles from "./header.module.scss";

const Header = props => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        const isTop = window.scrollY > 40;
        const isMobile = window.innerWidth > 450;
        const header = document.getElementById("header");
        if (isTop && isMobile) {
          header.classList.add(headerStyles.scrolled);
        } else {
          header.classList.remove(headerStyles.scrolled);
        }
      }, 100)
    );
  }, []);
  return (
    <header id="header" className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navBar}>
          <Link
            className={headerStyles.textLink}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className={headerStyles.navItem}>Home</li>
          </Link>
          <Link
            className={headerStyles.textLink}
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className={headerStyles.navItem}>About</li>
          </Link>
          <Link
            className={headerStyles.textLink}
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className={headerStyles.navItem}>Projects</li>
          </Link>
          <Link
            className={headerStyles.textLink}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className={headerStyles.navItem}>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import aboutStyle from "./about.module.scss";

const About = () => {
  return (
    <div id="about" className={aboutStyle.container}>
      <p className={aboutStyle.about}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt officiis
        voluptates voluptas labore eligendi sit quisquam corrupti quae? Quidem
        quibusdam quo modi amet voluptatem ad necessitatibus fuga, praesentium
        fugit sapiente aspernatur repudiandae at magnam quisquam aliquam
        voluptatibus expedita, adipisci illo voluptates ratione assumenda, ex
        maiores! Amet sequi numquam earum perferendis.
        {/* I'm Steven, a full-stack web developer from Melbourne, Australia. I
        studied computer science at Deakin University and applied science at
        RMIT. I love web design because it blends function and form together
        aswell as the technology rapidly evolving every year. This gives the
        designer more power to let their creativity run wild. */}
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente error
        enim ipsa, aliquid suscipit quam illum necessitatibus fuga numquam magni
        exercitationem fugiat quia quod reprehenderit cumque consectetur eum?
        Deleniti, repudiandae!
        {/* Below you can see some samples of my work. If you are interested in
        working together with me or simply want to ask a question, you're
        welcome to <a href="#">contact me.</a> */}
      </p>
    </div>
  );
};

export default About;

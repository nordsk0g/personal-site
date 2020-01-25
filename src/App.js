import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div id="home">
      <Header home="home" about="about" projects="projects" contact="contact" />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

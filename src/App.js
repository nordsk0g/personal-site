import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";

function App() {
  return (
    <div id="home">
      <Header home="home" about="about" projects="projects" contact="contact" />
      <Banner />
      <About />
    </div>
  );
}

export default App;

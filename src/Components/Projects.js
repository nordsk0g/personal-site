import React from "react";
import { Link } from "react-scroll";
import projectsStyles from "./projects.module.scss";
import toDoListImage from "../images/todolist.png";
import sortingVisualiserImage from "../images/sortingvisualiser.png";

const Projects = () => {
  return (
    <div id="projects" className={projectsStyles.container}>
      <a
        className={projectsStyles.cardLink}
        href="https://nordsk0g.github.io/todo-list-app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${projectsStyles.card} ${projectsStyles.todo}`}>
          <img
            src={toDoListImage}
            alt="To-do List App"
            className={projectsStyles.image}
          />
          <div className={projectsStyles.description}>To-Do List App</div>
        </div>
      </a>
      <a
        className={projectsStyles.cardLink}
        href="https://nordsk0g.github.io/sorting-visualiser/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${projectsStyles.card} ${projectsStyles.sorting}`}>
          <img
            src={sortingVisualiserImage}
            alt="Sorting Visualiser"
            className={projectsStyles.image}
          />
          <div className={projectsStyles.description}>Sorting Visualiser</div>
        </div>
      </a>
    </div>
  );
};

export default Projects;

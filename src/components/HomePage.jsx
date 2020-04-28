import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";

const Projects = () => {
  return (
    <main>
      <Heading level={2} text='Projects' />

      <ProjectCard />
    </main>
  );
};

export default Projects;

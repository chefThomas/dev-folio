import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";
import Developer from "./Developer";

const Projects = () => {
  return (
    <main>
      <Heading level={1} text='Projects' />
      <Developer />
      <ProjectCard />
    </main>
  );
};

export default Projects;

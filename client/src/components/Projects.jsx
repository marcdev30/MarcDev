import React from "react";
import Project from "./Project";
import projects from "../data/projects";

function Projects() {
	return (
		<div class="cards">
			{projects.map(project => (
				<Project
					title={project.title}
					description={project.description}
					img={project.img}
					website={project.website}
					code={project.code}
				/>
			))}
		</div>
	);
}

export default Projects;

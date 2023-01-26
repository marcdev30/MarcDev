import React from "react";
import Skill from "./Skill";
import skills from "../data/skills";

function Skills() {
	return (
		<div class="cards" id="cards">
			{skills.map(skill => (
				<Skill key={skill.id} img={skill.img} />
			))}
		</div>
	);
}

export default Skills;

import React from "react";

function Skill(props) {
	return (
		<div class="card skill">
			<img
				class="card-img-top"
				src={`img/${props.img}`}
				alt="Skill image"
			/>
		</div>
	);
}

export default Skill;

import React from "react";

function Project(props) {
	return (
		<div class="card project-card">
			<img
				src={`img/${props.img}`}
				alt=""
				class="card-img-top project-img"
			/>
			<div class="card-body">
				<h5 class="card-title project-title">{props.title}</h5>
				<p class="card-text project-description">{props.description}</p>
				<a
					class="btn btn-primary live"
					href={props.website}
					target="_blank"
				>
					Live website
				</a>
				<a class="btn btn-primary" href={props.code} target="_blank">
					Source code
				</a>
			</div>
		</div>
	);
}

export default Project;

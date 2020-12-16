import React from 'react'

const Character = (props) => {
	return(
		<div className="character-card" onClick={() => {props.handleClick(props.data.id)}}>
			<img src={props.data.image} alt={props.data.name} />

			<div className="character-info">
				<h5>{props.data.name}</h5>
				<h6>{props.data.info}</h6>
			</div>
		</div>
	)
}

export default Character
import React from 'react';

const Card = (props) => { //props in an object property passed from index.js
	const {name, email, id} = props; //destructuring so you wont need props.name but only name or you can straight up replace props in parameter with {name, email id}
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> {/*inline border, border 3, padding 3, margin 2, grow animation, border width 2, border shadow 5*/}						
			<img alt = "Robot Card" src={'https://robohash.org/'+id+'?200x200'} />
			<div>						{/* or {$props.id} to get picture from id number of robot*/}
				<h2>{name}</h2> {/*curly brackets to tell JSX that it is a js expression*/}
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
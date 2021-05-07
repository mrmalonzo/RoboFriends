import React from "react";


const Scroll = (props) =>{ //we just need this scroll to render whatever it wraps around
	return (
		<div style={{overflowY:"scroll", border: '5px solid black', height: "700px"}}> {/*we can create a seperate css that is scrollable or we can use jsx styling that returns an object*/}
			{props.children}
		</div>
	);
} 

export default Scroll;


import React from "react";


const SearchBox = ({searchChange}) =>{

	return(
		<div className="pa2">
			<input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search Robots" onChange={searchChange}/>{/* onChange is an html attribute*/}
		</div> //everytime the onchange event occurs, call the searchchange method
	);

}
 
export default SearchBox;
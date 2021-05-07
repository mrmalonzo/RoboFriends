import React from "react";
import Card from './Card';

const CardList = ({robots}) =>{ //returns the multiple card children object. This is the parent
	if(true){
		throw new Error("NOOO!"); //throw an error
	}
	const cardComponent = robots.map((user,i) =>{ //loop na parang for each, user gets per object and 2nd parameter is index 
		return <Card 
			key={user.id} 
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}
		/> //rereturn mo bale yung object na card na nagawa mo sa loop sa cardComponent
			// we have to add a key so react will know if ever this card is removed and they wont need to change the whole DOM, better na unique ang key so id
	}) //parang for each ang map, always returns something
	return(
		<div>
			{cardComponent} 
  		</div>
  	);
} //can be cleaner if we remove card component and instead diretso ng ilagay ang map don

export default CardList;

// foundation of map is: const Sample = array.map(x => x*2)
// 	sample will multiply all the array numbers by 2		
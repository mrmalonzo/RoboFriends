import React, { Component } from "react";
import CardList from "../Components/CardList";
// import {robots} from "./robots";
import SearchBox from "../Components/SearchBox";
import './App.css';
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

		//smart component if it typically has class syntax
class App extends Component{ //dapat class na pag may state
	
	constructor(){ //para sa paggawa ng states
		super(); //this is required to call the constructor of component just like in java
		this.state = { //this will be your state to make the app interactive
					robots: [],//dati robots lang, //since attribute na ng state yung robot, maalter mo na siya
					searchField: '' //empty array of robots to make it more realistic
			} //state is something that can chaneg and affect our app, usually in the parent component
	}

	componentDidMount(){ //a method of react that is read as the last part at mounting 
		// this.setState({robots: robots});
		// fetch("https://jsonplaceholder.typicode.com/users").then(response => { //fetch it in the website 
		// 	return response.json(); //convert response into a json file
		// }).then(users =>{ //then get the user in the json
		// 	this.setState({robots:users}) //set the robots state into the user
		// })

		 //shorter version //fetch is a tool used to request something on a server
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users =>this.setState({robots:users}));
	} //will be called automatically by react in mounting part

	//use this syntax whenever you create your own method to make sure that the "this" refers to this object by this class
	onSearchChange = (event) =>{ //function that makes an event whenever the search changes
		this.setState({searchField: event.target.value}) //a built in method when you want to change state, and not this.state =. You will change the value of the searchField depending on the event value of the keyboard typed in the searchbox
		
		// console.log(event.target.value); //to console.log the value of the search bar
	}

	render(){ //laging may render ang class
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()) //this basically compares all the name of the robots on the array to the searchField attribute of the state, toLower to remove capitalization. includes is a method of a string
		}); //alter mo yung state ng robot attribute depending on the kayword in the searchbar
		if (this.state.robots.length === 0){ //if its taking long to load the robot
			return <h1 className="tc">Loading</h1> //put here a loading bar while you get data in server
		}else{ //if it is loaded
			console.log(filteredRobots); //filtered robots is the array of objects of array that is being filtered according to the searchbar
			return(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>{/* this because class na, basically passing the method on search chaneg*/}
					{/*<CardList robots={this.state.robots}/>{ access robots from the state and it becomes a prop}*/}
					<Scroll> {/*wrap my carlist in scroll so it can be scrollable*/}
						<ErrorBoundary> {/*wrap this with error boundary so there is something that will show when an error occurs on cardlist*/}
							<CardList robots={filteredRobots}/> {/*now pass the updated filtered robots here instead of this.state.robots*/}
						</ErrorBoundary>
					</Scroll> {/*carlist will be the child of scroll that can be accessed in the props*/}
				</div>
			);
		}
		

	}
	
}

export default App;

//lifecycle are built in methods react that can be used 

//constructor -> render -> component did mount -> render (whenever something is updating, render is rerun)
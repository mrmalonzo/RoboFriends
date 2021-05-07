import React, {Component} from "react";


class ErrorBoundary extends Component{ //userful when app is in production

	constructor(props){
		super(props);
		this.state ={
			hasError: false
		}
	}

	componentDidCatch(error, info){ //new react method that is like try catch, when any error comes, this is run. Has error and info for parameters automatically
		this.setState({hasError:true});
	} //if there is an error, make it true

	render(){
		 if(this.state.hasError){ //render h1 if there is an error
		 	return <h1>Oooops. That is not good</h1>
		 }
		 return this.props.children //if there is no error, render the children which is the object that it wraps over
	}

}

export default ErrorBoundary;
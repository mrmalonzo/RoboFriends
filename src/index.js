import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import {robots} from "./robots"; //destructuring because only export was used, so if there are 2 or more, {robots, cats}
// import CardList from "./CardList"; //will be the parent object of the card to prevent using too many card functions.
import App from "./Containers/App";

ReactDOM.render(
  <React.StrictMode>
	{/*<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/> {/*brackets to let them say that it is a js expression*/}
	{/*<CardList robots={robots}/>*/ /*import parent cardlist that has children of cards*/}
  <App />
  </React.StrictMode>, //pass the robots array as a robots parameter in cardslist
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

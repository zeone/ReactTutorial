import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";

// class WhoAmI extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			years: 26,
// 			nationality: "UA",
// 		};
// 		this.nextYear = this.nextYear.bind(this);
// 		//or
// 		//this.nextYear =()=>	this.setState((state) => ({ years: ++state.years }));
// 	}
// 	//nextYear = () => this.setState((state) => ({ years: ++state.years }));

// 	nextYear() {
// 		console.log(1);
// 		this.setState((state) => ({ years: ++state.years }));
// 	}

// 	render() {
// 		const { name, surname, link } = this.props;
// 		const { years } = this.state;
// 		return (
// 			<>
// 				<button onClick={this.nextYear}>++</button>
// 				<h1>
// 					My name is {name}, surname- {surname}, years ={years}
// 				</h1>
// 				<a href={link}>My profile</a>
// 			</>
// 		);
// 	}
// }

// const All = () => {
// 	return (
// 		<>
// 			<WhoAmI name="Jon" surname="smith" link="i.ua" />
// 			<WhoAmI name="Sam" surname="smith" link="i.ua" />
// 			<WhoAmI name="Nicolya" surname="smith" link="i.ua" />
// 		</>
// 	);
// };

ReactDOM.render(<App />, document.getElementById("root"));

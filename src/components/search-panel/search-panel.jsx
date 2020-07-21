import React, { Component } from "react";
import "./search-panel.css";
export default class SerachPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: "",
		};
		this.onUpdateSearch=	this.onUpdateSearch.bind(this);
	}

	onUpdateSearch(e) {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	}
	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Поиск по записям"
				onChange={this.onUpdateSearch}
			/>
		);
	}
}

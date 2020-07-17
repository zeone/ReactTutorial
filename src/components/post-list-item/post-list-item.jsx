import React, { Component } from "react";
import "./post-list-item.sass";

export default class PostListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			import: false,
			like: false,
		};
		this.onImportant = this.onImportant.bind(this);
		this.onLike = this.onLike.bind(this);
	}
	onImportant() {
		this.setState(({ important }) => ({
			important: !important,
		}));
	}

	onLike() {
		this.setState(({ like }) => ({
			like: !like,
		}));
	}
	render() {
		const { label } = this.props;
		const { important, like } = this.state;
		let classNames = "app-list-item d-flex justify-content-between";
		if (important) classNames += " important";
		if (like) classNames += " like";

		return (
			<div className={classNames}>
				<span onClick={this.onLike} className="app-list-item-label">
					{label}
				</span>
				<div className="d-flex justify-contenc-center align-items-center">
					<button
						className="btn-star btn-sm"
						type="button"
						onClick={this.onImportant}>
						<i className="fa fa-star" />
					</button>
					<button className="btn-trash btn-sm" type="button">
						<i className="fa fa-trash-o" />
					</button>
					<i className="fa fa-heart" />
				</div>
			</div>
		);
	}
}

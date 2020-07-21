import React, { Component } from "react";
import "./post-list-item.sass";

export default class PostListItem extends Component {
	render() {
		const {
			label,
			onDelete,
			onToggleImportant,
			onToggleLike,
			important,
			like,
		} = this.props;
		let classNames = "app-list-item d-flex justify-content-between";
		if (important) classNames += " important";
		if (like) classNames += " like";

		return (
			<div className={classNames}>
				<span onClick={onToggleLike} className="app-list-item-label">
					{label}
				</span>
				<div className="d-flex justify-contenc-center align-items-center">
					<button
						className="btn-star btn-sm"
						type="button"
						onClick={onToggleImportant}>
						<i className="fa fa-star" />
					</button>
					<button onClick={onDelete} className="btn-trash btn-sm" type="button">
						<i className="fa fa-trash-o" />
					</button>
					<i className="fa fa-heart" />
				</div>
			</div>
		);
	}
}

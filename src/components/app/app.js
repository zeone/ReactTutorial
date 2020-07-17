import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SerachPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					label: "Going to learn React",
					important: true,
					id: 1,
				},
				{
					label: "Where is my money",
					important: false,
					id: 2,
				},
				{
					label: "I want to sleep",
					important: false,
					id: 3,
				},
			],
		};
		this.maxId = 4;
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
	}
	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((r) => r.id === id);
			const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
			return { data: newArr };
		});
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	}
	render() {
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SerachPanel />
					<PostStatusFilter />
				</div>
				<PostList posts={this.state.data} onDelete={this.deleteItem} />
				<PostAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

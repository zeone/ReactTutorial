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
					like: false,
				},
				{
					label: "Where is my money",
					important: false,
					id: 2,
					like: false,
				},
				{
					label: "I want to sleep",
					important: false,
					id: 3,
					like: false,
				},
			],
			term: "",
			filter: "all",
		};
		this.maxId = 4;
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLike = this.onToggleLike.bind(this);
		this.searchPost = this.searchPost.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);
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
	onToggleImportant(id) {
		this.togglePostField(id, "important");
	}

	onToggleLike(id) {
		this.togglePostField(id, "like");
	}

	togglePostField(id, fieldName) {
		this.setState(({ data }) => {
			const index = data.findIndex((el) => el.id === id);
			const post = data[index];
			post[fieldName] = !post[fieldName];
			const newItem = { ...post };
			const newArr = [
				...data.slice(0, index),
				newItem,
				...data.slice(index + 1),
			];
			return {
				data: newArr,
			};
		});
	}

	searchPost(items, term) {
		if (!term || !term.length) return items;
		return items.filter(
			(it) => it.label.toUpperCase().indexOf(term.toUpperCase()) > -1
		);
	}

	filterPost(items, filter) {
		if (filter === "like") return items.filter((el) => el.like);
		return items;
	}
	onUpdateSearch(term) {
		this.setState({ term });
	}
	onFilterSelect(filter) {
		this.setState({ filter });
	}
	render() {
		const { data, term, filter } = this.state;
		const liked = data.filter((r) => r.like).length,
			total = data.length;

		return (
			<div className="app">
				<AppHeader total={total} liked={liked} />
				<div className="search-panel d-flex">
					<SerachPanel onUpdateSearch={this.onUpdateSearch} />
					<PostStatusFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<PostList
					posts={this.filterPost(this.searchPost(data, term), filter)}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLike={this.onToggleLike}
				/>
				<PostAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

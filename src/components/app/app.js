import React from "react";
import AppHeader from "../app-header/app-header";
import SerachPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";

const App = () => {
	const data = [
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
	];

	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SerachPanel />
				<PostStatusFilter />
			</div>{" "}
			<PostList posts={data} />
			<PostAddForm />
		</div>
	);
};

export default App;

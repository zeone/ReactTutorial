import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

const PostList = ({ posts }) => {
	const elements = posts.map((p) => {
		const { id, ...itemProps } = p;
		return (
			<li key={p.id} className="list-group-item">
				<PostListItem {...itemProps} />
			</li>
		);
	});
	return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;

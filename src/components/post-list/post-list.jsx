import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import { ListGroup } from "reactstrap";
import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
	const elements = posts.map((p) => {
		const { id, ...itemProps } = p;
		return (
			<li key={p.id} className="list-group-item">
				<PostListItem
					{...itemProps}
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLike={() => onToggleLike(id)}
				/>
			</li>
		);
	});
	return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;

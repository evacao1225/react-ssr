import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
	return (
		<div id="left-nav-bar">
			<Link to="/">Home</Link>
			<Link to="/top5movies">Top 5 Movies</Link>
			<Link to="/top5js">Top 5 Javascript Projects</Link>
		</div>
	);
}

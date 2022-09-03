import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
const Header = () => {
	return (
		<header className="header-container">
			<nav className="nav-list">
				<a href="/">
					<h2>Playground</h2>
				</a>

				<div>
					<Link to="/style">style</Link>
					<Link to="/server">server</Link>
					<Link to="/module">module</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;

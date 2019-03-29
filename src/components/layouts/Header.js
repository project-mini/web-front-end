import React from "react";
import { Link } from "react-router-dom";

import "bulma/css/bulma.css";

const Header = () => {
	return (
		<nav
			className="navbar is-info"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="container">
				<div className="navbar-brand">
					<Link className="navbar-item" to="/">
						ALTERFOSS
					</Link>
				</div>
				<div className="navbar-menu">
					<div className="navbar-end">
						<Link className="navbar-item" to="/alternative">
							Alternatives
						</Link>
						<Link className="navbar-item" to="/top">
							Top Alternatives
						</Link>
						<Link className="navbar-item" to="/license">
							License Check
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;

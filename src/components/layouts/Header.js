import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "bulma/css/bulma.css";

class Header extends React.Component {
	componentDidMount() {
		axios.defaults.headers.common["Authorization"] = localStorage.getItem(
			"jwtToken"
		);
	}

	logout = () => {
		localStorage.removeItem("jwtToken");
		window.location.reload();
	};

	render() {
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
							{localStorage.getItem("jwtToken") && (
								<Link className="navbar-item" to="/proprietary">
									Add Proprietary
								</Link>
							)}
							{!localStorage.getItem("jwtToken") && (
								<Link className="navbar-item" to="/login">
									Login
								</Link>
							)}
							{localStorage.getItem("jwtToken") && (
								<a onClick={this.logout} className="navbar-item">
									Logout
								</a>
							)}
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;

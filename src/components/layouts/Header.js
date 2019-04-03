// This component dynamically renders the header based on if user is logged in or not

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "bulma/css/bulma.css";

class Header extends React.Component {
	componentDidMount() {
		axios.defaults.headers.common["Authorization"] = localStorage.getItem(
			"jwtToken"
		); //For setting the authorization token to store the jwt token store in local storage
	}

	logout = () => {
		localStorage.removeItem("jwtToken");
		// This removes the token from the local storage making the session invalid and logging us out
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
							<Link className="navbar-item" to="/top">
								Top Alternatives
							</Link>
							<Link className="navbar-item" to="/license">
								License Check
							</Link>
							{/* Dynamically generated nav bar items */}
							{localStorage.getItem("jwtToken") && (
								<Link className="navbar-item" to="/addproprietary">
									Add Proprietary
								</Link>
							)}
							{localStorage.getItem("jwtToken") && (
								<Link className="navbar-item" to="/addsearch">
									Add Alternative
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

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "bulma/css/bulma.css";

class Login extends React.Component {
	state = {
		email: "",
		password: "",
		success: false
	};

	componentWillMount() {
		axios.defaults.headers.common["Authorization"] = localStorage.getItem(
			"jwtToken"
		);
		if (localStorage.getItem("jwtToken")) {
			this.props.history.push("/");
		}
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password
		};

		axios
			.post(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/login/`,
				user
			)
			.then(response => {
				localStorage.setItem("jwtToken", response.data.token);
				this.props.history.push("/");
			})
			.catch(error => {
				console.log(error);
				if (error.response.status === 400) {
					window.location.reload();
				}
			});
	};

	render() {
		return (
			<section className="hero is-fullheight">
				<div className="hero-body">
					<div className="container has-text-centered">
						<div className="column is-4 is-offset-4">
							<h3 className="title has-text-grey">Login</h3>
							<p className="subtitle has-text-grey">Please login to proceed.</p>
							<div className="box">
								<form onSubmit={this.onSubmit}>
									<div className="field">
										<div className="control">
											<input
												className="input is-large"
												type="email"
												placeholder="Email"
												name="email"
												value={this.state.email}
												onChange={this.onChange}
												autoFocus=""
												required
											/>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<input
												className="input is-large"
												type="password"
												placeholder="Password"
												name="password"
												value={this.state.password}
												onChange={this.onChange}
												required
											/>
										</div>
									</div>
									<button
										type="submit"
										className="button is-block is-info is-large is-fullwidth"
									>
										Login
									</button>
								</form>
							</div>
							<p className="has-text-grey">
								<Link to="/register">Or Sign Up Here!</Link> &nbsp;·&nbsp;
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Login;

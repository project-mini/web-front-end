import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import "bulma/css/bulma.css";

class Register extends React.Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		status: "",
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
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		};

		axios
			.post(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/signup/`,
				user
			)
			.then(response => {
				this.setState({ success: true });
			})
			.catch(error => {
				if (error.response.status === 400) {
					this.setState({ status: error.response.status });
				}
			});
	};

	render() {
		const { status, success } = this.state;
		if (status === 400 || success) {
			return <Redirect to="/login" push={true} />;
		}
		return (
			<section className="hero is-fullheight">
				<div className="hero-body">
					<div className="container has-text-centered">
						<div className="column is-4 is-offset-4">
							<h3 className="title has-text-grey">Register</h3>
							<p className="subtitle has-text-grey">
								Enter given details to register.
							</p>
							<div className="box">
								<form onSubmit={this.onSubmit}>
									<div className="field">
										<div className="control">
											<input
												className="input is-large"
												type="text"
												placeholder="First Name"
												name="firstName"
												value={this.state.firstName}
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
												type="text"
												placeholder="Last Name"
												name="lastName"
												value={this.state.lastName}
												onChange={this.onChange}
												required
											/>
										</div>
									</div>
									<div className="field">
										<div className="control">
											<input
												className="input is-large"
												type="email"
												placeholder="Email"
												name="email"
												value={this.state.email}
												onChange={this.onChange}
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

									<button className="button is-block is-info is-large is-fullwidth">
										Register
									</button>
								</form>
							</div>
							<p className="has-text-grey">
								Already have an account? <Link to="/login">Log In Here!</Link>{" "}
								&nbsp;·&nbsp;
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Register;

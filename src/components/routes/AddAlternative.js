import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import "bulma/css/bulma.css";

class AddAlternative extends React.Component {
	state = {
		name: "",
		shortDescription: "",
		handle: "",
		license: "",
		success: false
	};

	componentWillMount() {
		axios.defaults.headers.common["Authorization"] = localStorage.getItem(
			"jwtToken"
		);
		if (!localStorage.getItem("jwtToken")) {
			this.props.history.push("/");
		}
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const software = {
			name: this.state.name,
			shortDescription: this.state.shortDescription,
			handle: this.state.handle,
			license: this.state.license
		};

		axios
			.post(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/alternatives/`,
				software
			)
			.then(response => {
				this.setState({ success: true });
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const optionDisplay = () => {
			return this.props.software.tags.map(tag => {
				return (
					<option key={tag} value={tag}>
						{tag.toUpperCase()}
					</option>
				);
			});
		};
		if (this.state.success) {
			return <Redirect to="/" push={true} />;
		}
		return (
			<section className="hero is-fullheight">
				<div className="hero-body">
					<div className="container has-text-centered">
						<div className="column is-8 is-offset-2">
							<h3 className="title has-text-grey">Alternative Software</h3>
							<p className="subtitle has-text-grey">
								Enter the Free / Open Source Software Details.
							</p>
							<div className="box">
								<form onSubmit={this.onSubmit}>
									<div className="field">
										<div className="control">
											<input
												className="input is-large"
												type="text"
												placeholder="Software Name"
												name="name"
												value={this.state.name}
												onChange={this.onChange}
												autoFocus=""
												required
											/>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<textarea
												className="input is-large"
												placeholder="Software Short Description"
												name="shortDescription"
												value={this.state.shortDescription}
												onChange={this.onChange}
												required
											/>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<input
												className="input is-large"
												type="text"
												placeholder="License"
												name="license"
												value={this.state.license}
												onChange={this.onChange}
												required
											/>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<div className="select is-large">
												<select
													name="handle"
													value={this.state.handle}
													onChange={this.onChange}
													required
												>
													<option value="" disabled selected>
														Select a Tag
													</option>
													{optionDisplay()}
												</select>
											</div>
										</div>
									</div>

									<button
										type="submit"
										className="button is-block is-info is-large is-fullwidth"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default AddAlternative;

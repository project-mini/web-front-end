import React from "react";
import axios from "axios";

import "bulma/css/bulma.css";

class LicenseCheck extends React.Component {
	state = {
		software: [],
		search: "",
		isFetched: false
	};

	onChange = e => {
		this.setState({ search: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		axios
			.post(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/alternatives/license/`,
				{
					search: this.state.search
				}
			)
			.then(response => {
				this.setState({ software: response.data, isFetched: true });
				console.log(this.state.software);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		if (this.state.isFetched) {
			let i = 1;
			return (
				<div style={{ marginTop: "10px" }}>
					<table className="table is-striped is-hoverable is-fullwidth">
						<thead>
							<tr>
								<th>No. </th>
								<th>Software Name</th>
								<th>License</th>
							</tr>
						</thead>
						<tbody>
							{this.state.software.map(software => {
								return (
									<tr key={software._id}>
										<th>{i++}</th>
										<td>{software.name}</td>
										<td>
											<a href={software.licenseLink}>{software.license}</a>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			);
		} else {
			return (
				<div>
					<section className="hero is-medium is-info ">
						<div className="hero-body">
							<div className="container">
								<h1 className="title">License Check</h1>
								<h2 className="subtitle">
									Enter name of the software whose license you want to find.
								</h2>
								<form onSubmit={this.onSubmit}>
									<div className="field has-addons">
										<div className="control">
											<input
												className="input"
												type="text"
												name="search"
												onChange={this.onChange}
												value={this.state.search}
											/>
										</div>
										<div className="control">
											<button className="button is-primary" type="submit">
												Search
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</section>
				</div>
			);
		}
	}
}

export default LicenseCheck;

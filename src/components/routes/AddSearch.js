import React from "react";
import axios from "axios";

import AddAlternative from "./AddAlternative";

class AddSearch extends React.Component {
	state = {
		software: [],
		search: "",
		isFetched: false,
		isClicked: false,
		temp: ""
	};

	onChange = e => {
		this.setState({ search: e.target.value });
	};

	onClick = (e, software) => {
		this.setState({ temp: software, isClicked: true });
	};

	onSubmit = e => {
		e.preventDefault();

		axios
			.post(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/proprietary/search/`,
				{
					search: this.state.search
				}
			)
			.then(response => {
				this.setState({ software: response.data, isFetched: true });
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	render() {
		if (this.state.isClicked) {
			return <AddAlternative software={this.state.temp} />;
		} else if (this.state.isFetched) {
			let i = 1;
			return (
				<div style={{ marginTop: "10px" }}>
					<table className="table is-striped is-hoverable is-fullwidth">
						<thead>
							<tr>
								<th>No. </th>
								<th>Software Name</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							{this.state.software.map(software => {
								return (
									<tr
										onClick={e => this.onClick(e, software)}
										key={software.name}
									>
										<th>{i++}</th>
										<td>{software.name}</td>
										<td>{software.shortDescription}</td>
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
					<section className="hero is-info is-fullheight">
						<div className="hero-body">
							<div className="container">
								<div className="columns">
									<div className="column is-half">
										<h2 className="subtitle">
											Enter the proprietary softwares name whose alternative you
											want to add and select it.
										</h2>
										<br />
										<form onSubmit={this.onSubmit}>
											<div className="field has-addons">
												<div className="control">
													<input
														className="input is-medium"
														type="text"
														search="search"
														onChange={this.onChange}
														value={this.state.search}
													/>
												</div>
												<div className="control">
													<button
														type="submit"
														className="button is-medium is-primary"
													>
														Search
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			);
		}
	}
}

export default AddSearch;

// Home Page and the place where we can search the alternatives of a given proprietary software

import React from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";

import Alternative from "./Alternative";
import un from "../../static/images/un.png";

class Home extends React.Component {
	state = {
		software: [],
		search: "",
		temp: "",
		isClicked: false,
		isFetched: false
	};

	onChange = e => {
		// Two way binding of the form
		this.setState({ search: e.target.value });
	};

	onClick = (e, software) => {
		// What happens when the user clicks on a proprietary software
		this.setState({ temp: software, isClicked: true });
	};

	onSubmit = e => {
		e.preventDefault();

		// Sends a post request to the API and gets back the list of matched proprietary softwares
		axios
			.post(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/proprietary/search/`,
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
		if (this.state.isClicked) {
			// Go to alternative component if a proprietary software is clicked
			return <Alternative software={this.state.temp} />;
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
							{/* Generated the list of matched proprietary Softwares */}
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
										<Fade left>
											<h1 className="title">AlterFOSS</h1>
											<h2 className="subtitle">
												One place for people adopting Free and Open Source
												Softwares.
											</h2>
											<br />
											<form onSubmit={this.onSubmit}>
												<div className="field has-addons">
													<div className="control">
														{/* Form to get the name of the proprietary software to be searched */}
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
										</Fade>
									</div>
									{/* Animating the components */}
									<Fade right cascade>
										<div className="column is-half">
											<figure className="image is-medium">
												<img src={un} alt="Illustration" />
											</figure>
											<figure className="image is-medium">
												<img src={un} alt="Illustration" />
											</figure>
											<figure className="image is-medium">
												<img src={un} alt="Illustration" />
											</figure>
										</div>
									</Fade>
								</div>
							</div>
						</div>
					</section>
				</div>
			);
		}
	}
}

export default Home;

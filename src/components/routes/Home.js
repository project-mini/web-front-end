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
				console.log(this.state.software);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	render() {
		if (this.state.isClicked) {
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

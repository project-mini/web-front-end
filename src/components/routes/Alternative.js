// Shows the list of all the alternatives of a given proprietary software

import React from "react";
import axios from "axios";

import CustomCard from "../layouts/CustomCard";

import "bulma/css/bulma.css";

class Alternative extends React.Component {
	state = {
		soft: []
	};

	componentDidMount() {
		// Get the list of all alternatives of a proprietary software from the api
		axios
			.get(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/alternatives/${
					this.props.software._id
				}`
			)
			.then(res => {
				this.setState({ soft: res.data });
				console.log(this.state.soft);
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<br />
				<div className="container">
					<div className="columns">
						<div className="column is-one-fifth">
							<figure className="image is-4by3">
								<img
									src="https://bulma.io/images/placeholders/480x480.png"
									alt="Placeholder"
								/>
							</figure>
						</div>
						<div className="column is-four-fifth">
							<section className="section">
								<div className="container">
									<h1 className="title">{this.props.software.name}</h1>
									<h2 className="subtitle">
										{this.props.software.shortDescription}
									</h2>
								</div>
							</section>
						</div>
					</div>
					<br />
					<div className="columns is-multiline">
						{this.state.soft.map(value => {
							return (
								<div className="column is-one-third">
									{/* Rendering all the possible alternative cards by passing each card detail to CustomCard Component */}
									<CustomCard key={value._id} software={value} />
								</div>
							);
						})}
					</div>
				</div>
				<br />
			</div>
		);
	}
}

export default Alternative;

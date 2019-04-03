// Card to show the alternative to the proprietary software with the up vote feature

import React from "react";
import Axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faIgloo } from "@fortawesome/free-solid-svg-icons";

import "bulma/css/bulma.css";

library.add(faIgloo, faHeart);

class CustomCard extends React.Component {
	state = {
		color: "Black",
		upVotes: this.props.software.upVotes
	};
	upVote = () => {
		// If user have up voted the software then it will appear blue
		if (this.state.color === "Black") {
			this.setState({ color: "DodgerBlue", upVotes: this.state.upVotes + 1 });
			// Sending a put request when user up votes the software
			Axios.put(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/alternatives/upvote/${
					this.props.software._id
				}`
			).then(res => {
				console.log("Up Vote");
				this.upVotes++;
			});
		} else {
			// If user hasn't up voted the software then it will appear black
			this.setState({ color: "Black", upVotes: this.state.upVotes - 1 });
			// Sending a put request when user un up votes the software

			Axios.put(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/alternatives/unupvote/${
					this.props.software._id
				}`
			).then(res => {
				console.log("Down Vote");
			});
		}
	};
	render() {
		return (
			<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
						<img
							src="https://bulma.io/images/placeholders/1280x960.png"
							alt="Placeholder"
						/>
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<p className="title is-4">{this.props.software.name}</p>
							<p className="subtitle is-6">{this.props.software.license}</p>
						</div>
					</div>
					<div className="content">{this.props.software.shortDescription}</div>
					<footer className="card-footer">
						<div
							className="card-footer-item"
							style={{ color: this.state.color }}
						>
							{this.state.upVotes}&nbsp;&nbsp;
							{/* Let the user up vote only if the user is logged in  */}
							<button
								onClick={localStorage.getItem("jwtToken") && this.upVote}
								style={{
									backgroundColor: "Transparent",
									backgroundRepeat: "no-repeat",
									border: "none",
									cursor: "pointer",
									overflow: "hidden",
									outline: "none"
								}}
							>
								<FontAwesomeIcon
									color={this.state.color}
									icon="heart"
									size="lg"
								/>
							</button>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default CustomCard;

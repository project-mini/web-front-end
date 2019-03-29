import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faIgloo } from "@fortawesome/free-solid-svg-icons";
import "bulma/css/bulma.css";
import Axios from "axios";

library.add(faIgloo, faHeart);

class CustomCard extends React.Component {
	upVote = () => {
		Axios.put(
			`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/alternatives/upvote/${
				this.props.software._id
			}`
		).then(res => {
			window.location.reload();
			console.log("Up Vote");
		});
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

					<div className="content">{this.props.software.name}</div>
					<footer className="card-footer">
						<div className="card-footer-item" style={{ color: "red" }}>
							{this.props.software.upVotes}&nbsp;&nbsp;
							<button
								onClick={this.upVote}
								style={{
									backgroundColor: "Transparent",
									backgroundRepeat: "no-repeat",
									border: "none",
									cursor: "pointer",
									overflow: "hidden",
									outline: "none"
								}}
							>
								<FontAwesomeIcon color="red" icon="heart" size="lg" />
							</button>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default CustomCard;

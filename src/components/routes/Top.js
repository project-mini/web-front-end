import React from "react";
import axios from "axios";

import "bulma/css/bulma.css";

class Top extends React.Component {
	state = {
		soft: []
	};

	componentDidMount() {
		axios
			.get(
				`${"https://cors-anywhere.herokuapp.com/"}https://dry-dusk-50998.herokuapp.com/api/alternatives/`
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
		let i = 1;
		return (
			<div className="container">
				<br />
				<table className="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Software Name</th>
							<th>Up Votes</th>
							<th>License</th>
						</tr>
					</thead>
					<tbody>
						{this.state.soft.map(software => {
							return (
								<tr key={i}>
									<th>{i++}</th>
									<td>
										<a href="https://fsf.org" title="FSF">
											{software.name}
										</a>
									</td>
									<td>{software.upVotes}</td>
									<td>{software.license}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Top;

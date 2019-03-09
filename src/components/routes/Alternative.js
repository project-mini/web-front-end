import React, { Component } from 'react'
import CustomCard from '../layouts/CustomCard'

import 'bulma/css/bulma.css'

export default class Alternative extends Component {
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
									<h1 className="title">Windows Media Player</h1>
									<h2 className="subtitle">Default media player of windows.</h2>
								</div>
							</section>
						</div>
					</div>
					<br />
					<div className="columns">
						<div className="column is-one-third">
							<CustomCard />
						</div>
						<div className="column is-one-third">
							<CustomCard />
						</div>
						<div className="column is-one-third">
							<CustomCard />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

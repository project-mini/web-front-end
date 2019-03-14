import React from 'react'
import CustomCard from '../layouts/CustomCard'

import 'bulma/css/bulma.css'

const Alternative = () => {
	const x = [1, 2, 3, 4, 5, 6]

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
				<div className="columns is-multiline">
					{x.map(value => {
						return (
							<div className="column is-one-third">
								<CustomCard key={value} />
							</div>
						)
					})}
				</div>
			</div>
			<br />
		</div>
	)
}

export default Alternative

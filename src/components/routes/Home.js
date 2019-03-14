import React from 'react'
import Fade from 'react-reveal/Fade'

import un from '../../static/images/un.png'

const Home = props => {
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
									<div className="field has-addons">
										<div className="control">
											<input
												className="input is-medium"
												type="text"
												placeholder="Find Alternative Of ..."
											/>
										</div>
										<div className="control">
											<button className="button is-medium is-primary">
												Search
											</button>
										</div>
									</div>
								</Fade>
							</div>
							<Fade right cascade>
								<div className="column is-half">
									<figure class="image is-medium">
										<img src={un} alt="Illustration" />
									</figure>
									<figure class="image is-medium">
										<img src={un} alt="Illustration" />
									</figure>
									<figure class="image is-medium">
										<img src={un} alt="Illustration" />
									</figure>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home

import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faIgloo } from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.css'

library.add(faIgloo, faHeart)

const CustomCard = () => {
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
						<p className="title is-4">VLC</p>
						<p className="subtitle is-6">GPLv3</p>
					</div>
				</div>

				<div className="content">
					Fully featured media player and media streamer.
				</div>
				<footer class="card-footer">
					<div class="card-footer-item" style={{ color: 'red' }}>
						23&nbsp;&nbsp;
						<button
							style={{
								backgroundColor: 'Transparent',
								backgroundRepeat: 'no-repeat',
								border: 'none',
								cursor: 'pointer',
								overflow: 'hidden',
								outline: 'none',
							}}
						>
							<FontAwesomeIcon color="red" icon="heart" size="lg" />
						</button>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default CustomCard

import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer" style={{ flexShrink: 0 }}>
					<div className="content has-text-centered">
						<p>
							<strong>AlterFOSS</strong> by Nikit Singh, Karan Pratap Singh and
							Mohammed Sadiq . The source code is licensed under{' '}
							<a href="https://opensource.org/licenses/GPL-3.0">GPLv3</a>. The
							website content is licensed under{' '}
							<a href="http://creativecommons.org/licenses/by-sa/4.0/">
								CC-BY-SA 4.0
							</a>.
						</p>
					</div>
				</footer>
			</div>
		)
	}
}

import React from 'react'

import 'bulma/css/bulma.css'

const LicenseCheck = () => {
	return (
		<div>
			<section class="hero is-medium is-info ">
				<div class="hero-body">
					<div class="container">
						<h1 class="title">License Checker</h1>
						<h2 class="subtitle">
							Enter name of the software whose license you want to find.
						</h2>
						<div class="field has-addons">
							<div class="control">
								<input class="input" type="text" placeholder="Software Name" />
							</div>
							<div class="control">
								<button class="button is-primary">Search</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default LicenseCheck

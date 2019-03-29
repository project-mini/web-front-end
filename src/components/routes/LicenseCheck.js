import React from "react";

import "bulma/css/bulma.css";

const LicenseCheck = () => {
	return (
		<div>
			<section className="hero is-medium is-info ">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">License Check</h1>
						<h2 className="subtitle">
							Enter name of the software whose license you want to find.
						</h2>
						<div className="field has-addons">
							<div className="control">
								<input
									className="input"
									type="text"
									placeholder="Software Name"
								/>
							</div>
							<div className="control">
								<button className="button is-primary">Search</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LicenseCheck;

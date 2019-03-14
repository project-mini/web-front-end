import React from 'react'

import 'bulma/css/bulma.css'

const Top = () => {
	const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	return (
		<div className="container">
			<br />
			<table className="table is-striped is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Position</th>
						<th>Software Name</th>
						<th>Likes</th>
						<th>License</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{x.map((val, index) => {
						return (
							<tr key={index}>
								<th>{val}</th>
								<td>
									<a href="https://fsf.org" title="FSF">
										Docker
									</a>
								</td>
								<td>3000</td>
								<td>GPLv3</td>
								<td>Cloud</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Top

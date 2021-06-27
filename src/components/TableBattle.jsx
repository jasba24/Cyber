import React from "react"
import json from "../data.json"

export default function TableBattle() {
	const data = json.data
	return (
		<div>
			<table>
				<thead>
					{data.map(d => (
						<tr key={d}>
							<td>{d.timestamp}</td>
							{d.sensor1.number < 100 ? <td>No danger</td> : <td>Danger</td>}
							{d.sensor2 > 100 ? <td>No danger</td> : <td>Danger</td>}
							{d.sensor3 > 100 ? <td>No danger</td> : <td>Danger</td>}
						</tr>
					))}
				</thead>
				<tbody>
					<tr>
						<td>Result</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

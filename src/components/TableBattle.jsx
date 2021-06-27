import React from "react"
import json from "../data.json"

export default function TableBattle() {
	const data = json.data
	return (
		<div>
			<table>
				<thead>
					{data.map(d => (
						<tr key={d}>{d}</tr>
					))}
				</thead>
				<tbody>
					<tr>Result</tr>
				</tbody>
			</table>
		</div>
	)
}

import React from "react"
import json from "../../data.json"
import "../../assets/scss/components/tableSensor/tableSensor.scss"

export default function TableSensor() {
	const data = Object.values(json)
	return (
		<table className="tableSensor">
			<thead className="tableSensor__head">
				<tr>
					{data[0].data.map((d, i) => (
						<td key={i}>{d.timestamp}</td>
					))}
				</tr>
			</thead>
			<tbody className="tableSensor__body"></tbody>
		</table>
	)
}

import React from "react"
import "../../assets/scss/components/tableSensor/tableSensor.scss"

export default function TableSensor({ data }) {
	return (
		<table className="tableSensor">
			<thead className="tableSensor__head">
				<tr>
					{data.map((dato, index) => (
						<td key={index}>{dato.alert_timestamp}</td>
					))}
				</tr>
			</thead>
			<tbody className="tableSensor__body"></tbody>
		</table>
	)
}

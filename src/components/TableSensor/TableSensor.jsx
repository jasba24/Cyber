import React from "react"
import json from "../../data.json"
import "../../assets/scss/components/tableSensor/tableSensor.scss"

export default function TableSensor() {
	const checkSensor = () => {
		const data = json.data
		data.map((d, i) => {
			if (d.alert_damage || d.alert_ship) {
				return console.log(Object.keys(json))
			}
		})
	}
	const data = Object.values(json)
	checkSensor()
	return (
		<table className="tableSensor">
			<thead className="tableSensor__head">
				<tr></tr>
			</thead>
			<tbody className="tableSensor__body"></tbody>
		</table>
	)
}

import React from "react"
import Star from "../Star/Star"
import GraphSensor from "../GraphSensor/GraphSensor"
import TableSensor from "../TableSensor/TableSensor"
import "../../assets/scss/components/inicio/inicio.scss"
// import API from '../../jsonPrueba/prueba.json';
import json from "../../data.json"

const Inicio = () => {
	let datosDamage = 0
	let dataFilter

	const data = json.data
	const checkSensor = () => {
		dataFilter = data.map((d, i) => {
			if (d.alert_damage) {
				datosDamage++
			}

			return d
		})
	}

	checkSensor()

	// const apiPrueba = "https://pokeapi.co/api/v2/pokemon/ditto"
	// useEffect(() => {
	// 	pedirDatosApi()
	// }, [])

	// const pedirDatosApi = async () => {
	// 	const responseApi = await fetch(apiPrueba)
	// 	const datosApi = await responseApi.json()
	// 	setDatos(datosApi)
	// }

	const totalNaves = data.length
	const navesAveriadas = datosDamage
	const calcularNavesAveriadas = (nTotal, nAveriadas) => {
		const porcentajeNavesAveriadas = (nAveriadas * 100) / nTotal
		return porcentajeNavesAveriadas
	}

	const navesAveriadasPorcentaje = calcularNavesAveriadas(
		totalNaves,
		navesAveriadas
	)

	return (
		<section className="inicio">
			<GraphSensor navesAveriadasPorcentaje={navesAveriadasPorcentaje} />
			<Star />
			<TableSensor data={dataFilter}></TableSensor>
		</section>
	)
}

export default Inicio

import React, { useState, useEffect } from 'react';
import Star from '../Star/Star';
import GraphSensor from '../GraphSensor/GraphSensor';
import TableSensor from "../TableSensor/TableSensor"
import '../../assets/scss/components/inicio/inicio.scss';
// import API from '../../jsonPrueba/prueba.json';

const Inicio = () => {
  const [datos, setDatos] = useState('');
  const apiPrueba = 'https://pokeapi.co/api/v2/pokemon/ditto';
  useEffect(() => {
    pedirDatosApi();
  }, []);

  const pedirDatosApi = async () => {
    const responseApi = await fetch(apiPrueba);
    const datosApi = await responseApi.json();
    setDatos(datosApi);
    console.log(datosApi.base_experience);
    console.log(datosApi.order);
    // console.log(datosApi)
  };

  const totalNaves = datos.order;
  const navesAveriadas = datos.base_experience;
  const calcularNavesAveriadas = (nTotal, nAveriadas) => {
    const porcentajeNavesAveriadas = (nAveriadas * 100) / nTotal;
    return porcentajeNavesAveriadas;
  };

  const navesAveriadasPorcentaje = calcularNavesAveriadas(
    totalNaves,
    navesAveriadas
  );

  return (
    <section className='inicio'>
      <GraphSensor navesAveriadasPorcentaje={navesAveriadasPorcentaje} />
      <Star />
      <TableSensor></TableSensor>
    </section>
  );
};

export default Inicio;

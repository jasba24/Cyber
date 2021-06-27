import React, { useState, useEffect } from 'react';
import Star from '../Star/Star';
import GraphSensor from '../GraphSensor/GraphSensor';
import TableSensor from '../TableSensor/TableSensor';
import '../../assets/scss/components/inicio/inicio.scss';
// import API from '../../jsonPrueba/prueba.json';
import json from '../../data.json';

const Inicio = () => {
  // const [datos, setDatos] = useState({});
  const [datosDamage, setDatosDamage] = useState(0);
  // const [data,]

  // const checkSensor = () => {
  // };
  const data = json.data;
  const dataFilter = data.map((d, i) => {
    return d;
  });

  useEffect(() => {
    dataFilter.map((item, index) => {
      if (item.alert_damage) {
        console.log(index);
        setDatosDamage(datosDamage + 1);
      }
    });
  }, []);
  // const data = Object.values(json);
  // checkSensor();
  const apiPrueba = 'https://pokeapi.co/api/v2/pokemon/ditto';
  useEffect(() => {
    pedirDatosApi();
  }, []);

  const pedirDatosApi = async () => {
    const responseApi = await fetch(apiPrueba);
    const datosApi = await responseApi.json();
    setDatos(datosApi);
    // console.log(datosApi.base_experience);
    // console.log(datosApi.order);
    // console.log(datosApi)
  };

  const totalNaves = data.length;
  const navesAveriadas = datosDamage;
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
      <TableSensor data={dataFilter}></TableSensor>
    </section>
  );
};

export default Inicio;

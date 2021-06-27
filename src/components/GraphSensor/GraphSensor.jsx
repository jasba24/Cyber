import React, { useRef, useEffect } from 'react';
import '../../assets/scss/components/graphSensor/graphSensor.scss';

const GraphSensor = (navesAveriadasPorcentaje) => {
  // console.log(navesAveriadasPorcentaje.navesAveriadasPorcentaje);

  const porcentajeRef = useRef();

  let datosApi;

  useEffect(() => {
    if (
      navesAveriadasPorcentaje.navesAveriadasPorcentaje >= 0 &&
      navesAveriadasPorcentaje.navesAveriadasPorcentaje < 30
    ) {
      porcentajeRef.current.style.backgroundColor = 'green';
      console.log(`color green`);
    } else if (
      navesAveriadasPorcentaje.navesAveriadasPorcentaje >= 30 &&
      navesAveriadasPorcentaje.navesAveriadasPorcentaje < 70
    ) {
      porcentajeRef.current.style.backgroundColor = 'orange';
      console.log(`color orange`);
    } else if (
      navesAveriadasPorcentaje.navesAveriadasPorcentaje >= 30 &&
      navesAveriadasPorcentaje.navesAveriadasPorcentaje < 70
    ) {
      porcentajeRef.current.style.backgroundColor = 'red';

      console.log(`color red`);
    }
    porcentajeRef.current.style.width = `${navesAveriadasPorcentaje.navesAveriadasPorcentaje}%`;
    // }
  }, [navesAveriadasPorcentaje, datosApi]);

  return (
    <div className='sensor'>
      <div className='sensor__graph'>
        <div ref={porcentajeRef} className='sensor__graph-porcentaje'></div>
      </div>
      <span className='sensor__text'>Sensores Averiados</span>
    </div>
  );
};

export default GraphSensor;

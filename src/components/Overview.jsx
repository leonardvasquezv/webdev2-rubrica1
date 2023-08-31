import { useEffect, useState } from "react";
import { dataCards } from "../api/data";
import Card from "./Card";

const Overview = () => {

  const [tarjetasDestacadas, setTarjetasDestacadas] = useState([]);

  useEffect(() => {
    const tarjetasGuardadas = localStorage.getItem('tarjetasDestacadas');
    if (tarjetasGuardadas) {
      setTarjetasDestacadas(JSON.parse(tarjetasGuardadas));
    }
  }, []);

  const onClicEstrella = (idTarjeta) => {
    if (tarjetasDestacadas.includes(idTarjeta)) {
      const tarjetasActualizadas = tarjetasDestacadas.filter(id => id !== idTarjeta);
      setTarjetasDestacadas(tarjetasActualizadas);
      localStorage.setItem('tarjetasDestacadas', JSON.stringify(tarjetasActualizadas));
    } else {
      const tarjetasActualizadas = [...tarjetasDestacadas, idTarjeta];
      setTarjetasDestacadas(tarjetasActualizadas);
      localStorage.setItem('tarjetasDestacadas', JSON.stringify(tarjetasActualizadas));
    }
  };

  return (
    <div className="row">
      {dataCards.map((tarjeta) => {
        return (
          <Card
            key={tarjeta.id}
            titulo={tarjeta.titulo}
            imagen={tarjeta.imagen}
            cuerpo={tarjeta.cuerpo}
            isDestacada={tarjetasDestacadas.includes(tarjeta.id)}
            onClicEstrella={() => onClicEstrella(tarjeta.id)}
          />
        )
      })}
    </div>
  );
}

export default Overview
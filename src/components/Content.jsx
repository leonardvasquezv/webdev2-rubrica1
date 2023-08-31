import { useState } from "react";
import { useDeportesContext } from '../context/DeportesContext';

const Content = () => {
  const { deportes } = useDeportesContext();  
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");

  const deportesFiltrados = filtroCategoria === "Todos"
    ? deportes
    : deportes.filter(deporte => deporte.categoria === filtroCategoria);

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="filtroCategoria" className="form-label">Filtrar por Categoría:</label>
        <span>  </span>
        <select
          id="filtroCategoria"
          className="form-select form-select-lg"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Mesa">Mesa</option>
          <option value="Equipos">Equipos</option>
          <option value="Esports">Esports</option>
        </select>
      </div>

      <div className="row">
        {deportesFiltrados.map((deporte) => (
          <div className="col-md-4 mb-4" key={deporte.id}>
            <div className="card">
              <img src={deporte.imagen} alt={`Imagen de ${deporte.titulo}`} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{deporte.titulo}</h5>
                <p className="card-text">{deporte.descripcion}</p>
                <p className="card-text"><strong>Categoría:</strong> {deporte.categoria}</p>
                <p className="card-text"><strong>Equipos:</strong></p>
                <ul>
                  {deporte.equipos.map((equipo) => (
                    <li key={equipo.nombre}>
                      {equipo.nombre}:{" "}
                      <a href={equipo.urlsitio} target="_blank" rel="noopener noreferrer">
                        {equipo.urlsitio}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;

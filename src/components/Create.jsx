import { useFormik } from "formik";
import { useDeportesContext } from '../context/DeportesContext';

const Create = () => {
  const { deportes, addDeporte } = useDeportesContext();

  const formik = useFormik({
    initialValues: {
      titulo: "",
      descripcion: "",
      categoria: "",
      equipos: "",
      imagen: "",
      urlsEquipos: ["", "", ""]
    },
    onSubmit: (values) => {
      const newDeporte = {
        id: deportes.length + 1,
        ...values,
        equipos: values.equipos.split(",").map((team, index) => ({
          nombre: team.trim(),
          urlsitio: values.urlsEquipos[index]
        })),
      };

      addDeporte(newDeporte);
      formik.resetForm();
    },
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crear Nuevo Deporte</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.titulo}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.descripcion}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoria" className="form-label">Categoría</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.categoria}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="equipos" className="form-label">Equipos (separados por comas)</label>
          <input
            type="text"
            id="equipos"
            name="equipos"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.equipos}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">URL de la Foto del Deporte</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.imagen}
          />
        </div>
        {formik.values.urlsEquipos.map((url, index) => (
          <div className="mb-3" key={index}>
            <label htmlFor={`urlsEquipos.${index}`} className="form-label">URL del Equipo {index + 1}</label>
            <input
              type="text"
              id={`urlsEquipos.${index}`}
              name={`urlsEquipos.${index}`}
              className="form-control"
              onChange={formik.handleChange}
              value={url}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Agregar Deporte</button>
      </form>
    </div>
  );
}

export default Create;

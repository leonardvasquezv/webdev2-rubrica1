import PropTypes from 'prop-types';

const Card = (props) => {
  const { titulo, imagen, cuerpo, isDestacada, onClicEstrella } = props;

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 d-flex flex-column">
        <div className="card-header">
          <h2>{titulo}</h2>
        </div>
        <div className="card-body">
          <img src={imagen} className="card-img-top"/>
        </div>
        <div className="card-body">
          <p className="card-text">{cuerpo}</p>
        </div>
        <div className="card-footer mt-auto">
          <button
            onClick={onClicEstrella}
            className={`btn ${isDestacada ? 'btn-warning' : 'btn-outline-secondary'}`}
          >
            <span role="img" aria-label="Estrella">{isDestacada ? '⭐️' : '☆'}</span>{' '}
            {isDestacada ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  cuerpo: PropTypes.string.isRequired,
  isDestacada: PropTypes.bool.isRequired,
  onClicEstrella: PropTypes.func.isRequired,
};

export default Card;

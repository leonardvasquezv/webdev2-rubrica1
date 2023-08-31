import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { dataDeportes } from '../api/data';

const DeportesContext = createContext();

export function DeportesProvider({ children }) {
  const [deportes, setDeportes] = useState(dataDeportes);

  const addDeporte = (nuevoDeporte) => {
    setDeportes([...deportes, nuevoDeporte]);
  };

  const contextValue = {
    deportes,
    addDeporte,
  };

  return (
    <DeportesContext.Provider value={contextValue}>
      {children}
    </DeportesContext.Provider>
  );
}

DeportesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useDeportesContext() {
  return useContext(DeportesContext);
}

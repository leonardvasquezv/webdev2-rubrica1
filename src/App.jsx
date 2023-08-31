import './App.css'
import Contenedor from './components/Contenedor'
import { DeportesProvider } from './context/DeportesContext'

function App() {

  return (
      <div>
        <DeportesProvider>
          <Contenedor/>
        </DeportesProvider>
      </div>
  )
}

export default App

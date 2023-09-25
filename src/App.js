import freeCodeCampLogo from '../src/freecodecamp.png'
import './App.css';
import Boton from './componentes/Boton'
import Contador from './componentes/contador';
import{useState} from 'react';

function App() {

  const [numClics, setNumClics]= useState(0);
  const manejarClic = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () =>{
   setNumClics(0)
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className= 'freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt= 'Logo de freCodeCamp'
          />
      </div>
      <div className='contenedor-principal'>
           <Contador numClics = {numClics}/>
           <Boton
           texto=  'Clic'
           esBotonCeClic={true}
           manejarClic={manejarClic}/>
           <Boton
           texto=  'Reiniciar'
           esBotonCeClic={false}
           manejarClic={reiniciarContador}
           />
      </div>
     
    </div>
  );
}

export default App;

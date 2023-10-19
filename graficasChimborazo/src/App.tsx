import './App.css'
import { CardImagen } from './components/imagenes/imagen'
import { ISello, SelloList } from './constants/selloList'
import { Contador } from './components/contador/Contador'

function App() {
  return(
    <>
    <h1>Use State Hook</h1>
    <Contador/>


    {SelloList.map((sello: ISello) => (
      <CardImagen
       name={sello.name}
      descripcion={sello.descripcion}
      imgUrl={sello.imgUrl}
      id={sello.id} 
      colores={sello.colores} 
      tamano={sello.tamano}
      />
    ))}
    </>
  )
}

export default App


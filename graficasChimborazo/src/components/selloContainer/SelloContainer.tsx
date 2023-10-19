import { ISello, SelloList } from '../../constants/selloList'
import { CardImagen } from '../imagenes/imagen'
export const SelloContainer = () => {
    return (
    <div>
        <div style={{display: 'flex', flexWrap: "wrap"}}>
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
      </div>
        
    </div>
    )
}

import { ISello } from "../../constants/ProductosList"
import { DispleySellosEstilos,ImagenSellosEstilos,pSelloEstilo,h1SellosEstilos } from "./styles/sello.estilos"

export const CardImagen = ({tipo, name, descripcion,  imgUrl, id, colores, tamano, }: ISello) => {
    
    
    return (    
    <div style={{...DispleySellosEstilos, backgroundColor: colores.includes("blanco ") ? "#2F44E2" : "", }}>
        <img style = {ImagenSellosEstilos} 
        src={imgUrl}/>    
        <h1 style = {h1SellosEstilos}> {name}</h1>
        <p style={pSelloEstilo}>{descripcion}{tipo}</p>
        <p>{tamano}</p>
        <h2>{colores} </h2>
        <h4>el id es: {id}</h4>
       
    </div>
    )
}   
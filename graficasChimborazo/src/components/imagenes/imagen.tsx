import { ISello } from "../../constants/selloList"
import { DispleySellosEstilos,ImagenSellosEstilos,h1SellosEstilos } from "./styles/sello.estilos"

export const CardImagen = ({name, descripcion,  imgUrl, id, colores, tamano}: ISello) => {
    return (
        
    <div style={{...DispleySellosEstilos, backgroundColor: colores.includes("azul ") ? "white" : "", }}>
        <img style = {ImagenSellosEstilos} 
        src={imgUrl}/>    
        <h1 style = {h1SellosEstilos}> {name}</h1>
        <p>{descripcion}</p>
        <p>{tamano}</p>
        <h2>{colores} </h2>
        <h4>{id}</h4>
       
    </div>
    )
}   
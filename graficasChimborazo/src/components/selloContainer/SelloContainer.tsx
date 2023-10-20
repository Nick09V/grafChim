import { ISello, SelloList as ProductoList } from '../../constants/ProductosList'
import { CardImagen } from '../imagenes/productos'
import {ChangeEvent, useEffect, useState} from "react"

export const SelloContainer = () => {

    const [SelloList, setSelloList] = useState<ISello[]>([]);
    const [filter, Setfilter] = useState<string>("");

    const filterProductos = (tipo: string): ISello[] =>{
      if(tipo === "sellos"){
        return SelloList.filter((sellos) => sellos.tipo.includes("sello"));
      }

      return[];
    }
    console.log("filtrar productos:  " + filter);

    useEffect(() => {
    if(filter) {
      console.log("filtrar productos: ", filterProductos(filter));
      setSelloList(filterProductos(filter));
    }else {
      setSelloList(SelloList);
      } 
    }, [filter])


  useEffect( () => {
    console.log("la lista cambio");
    setSelloList(ProductoList);
  }, [SelloList])
    return (
    <div>
      <input
      style={{padding: '10px', fontSize: '40px'}}
       type="text" placeholder='Buscar producto' 
       onChange={(e: ChangeEvent<HTMLInputElement>) => {
        Setfilter(e.target.value)
        
       }}
       />
        <div style={{display: 'flex', flexWrap: "wrap"}}>
    {SelloList.map((sello: ISello) => (
      <CardImagen
        name={sello.name}
        descripcion={sello.descripcion}
        imgUrl={sello.imgUrl}
        id={sello.id}
        colores={sello.colores}
        tamano={sello.tamano} tipo={''}      />
    ))}
      </div>
        
    </div>
    )
}
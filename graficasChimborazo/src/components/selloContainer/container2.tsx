import { ISello, SelloList as ProductoList } from '../../constants/ProductosList'
import { CardImagen } from '../imagenes/productos'
import { ChangeEvent, useEffect, useState } from "react"

export const Container2 = () => {
 // const [SelloList, setSelloList] = useState<ISello[]>([]);
  const [filter, Setfilter] = useState<string>("");
  const [filteredSelloList, setFilteredSelloList] = useState<ISello[]>([]);

  const filterProductos = (tipo: string): void => {
    if (tipo === "sellos") {
      const filtered = ProductoList.filter((sellos) => sellos.tipo.includes("sello"));
      setFilteredSelloList(filtered);
    } else if (tipo === "facturas") {
      const filtered = ProductoList.filter((sellos) => sellos.tipo.includes("factura"));
      setFilteredSelloList(filtered);
    } else {
      setFilteredSelloList([]);
    }
  }

  useEffect(() => {
    if (filter) {
      filterProductos(filter);
    } else {
      setFilteredSelloList(ProductoList);
    }
  }, [filter]);

  useEffect(() => {
    // Este efecto se ejecutará cada vez que cambie ProductoList
  //  setSelloList(ProductoList);
  }, [ProductoList]);

  return (
    <div>
      <input
        style={{ padding: '10px', fontSize: '40px' }}
        type="text"
        placeholder='Buscar producto'
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          Setfilter(e.target.value)
        }}
      />
      <div style={{ display: 'flex', flexWrap: "wrap" }}>
        {filteredSelloList.map((sello: ISello) => (
          <CardImagen
            name={sello.name}
            descripcion={sello.descripcion}
            imgUrl={sello.imgUrl}
            id={sello.id}
            colores={sello.colores}
            tamano={sello.tamano} tipo={''}
          />
        ))}
      </div>
    </div>
  )
}

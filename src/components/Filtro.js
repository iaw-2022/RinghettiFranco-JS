import React from 'react'
import { useGlobalContext } from '../context'

const Filtro = () => {
  const { marcas, productos, formatos, setFilterType, setFilterTerm } = useGlobalContext()

  return (
    <section className="section search">
      <form className="search-form">
        <label htmlFor="marca">Marca</label>
        <select id="marca">
          <option value="0" disabled selected> Ninguna</option>
          {marcas.map((item) => {
            return <option value={item.id}> {item.nombre} </option>
          })}
        </select>
        
        <label htmlFor="producto">Producto</label>
        <select id="producto">
          <option value="0" disabled selected> Ninguno</option>
          {productos.map((item) => {
            return <option value={item.id}> {item.nombre} </option>
          })}
        </select>
        
        <label htmlFor="formato">Formato</label>
        <select id="formato">
          <option value="0" disabled selected> Ninguno</option>
          {formatos.map((item) => {
            return <option value={item.id}> {item.descripcion} {item.cantidad} {item.medidas} </option>
          })}
        </select>
      </form>
    </section>
  )
}

export default Filtro

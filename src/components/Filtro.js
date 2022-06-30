import React from 'react'
import { useGlobalContext } from '../context'

const Filtro = () => {
  const { marcas, productos, formatos, setFilterType, setFilterTerm } = useGlobalContext()

  const handleChange = (e) => {
    setFilterTerm(e.target.value)
  }

  return (
    <section className="section search">
      <form className="search-form">
        <label htmlFor="marca">Marca</label>
        <select id="marca" onChange={(e) => handleChange(e)}>
          <option value="0" disabled selected> Ninguna</option>
          {marcas.map((item) => {
            return <option value={item.id}> {item.nombre} </option>
          })}
        </select>
      </form>
    </section>
  )
}

export default Filtro

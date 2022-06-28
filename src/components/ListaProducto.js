import React from 'react'
import Presentacion from './Presentacion'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const ListaProducto = () => {
  const { presentaciones, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (presentaciones.length < 1) {
    return (
      <h3 className="section-title">
        No hay productos disponibles.
      </h3>
    )
  }

  return (
    <section className="section">
      <h2 className="section-title">Productos</h2>
      <div className="presentacions-center">
        {presentaciones.map((item) => {
            return <Presentacion key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default ListaProducto

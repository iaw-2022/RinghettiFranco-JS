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
    <div>
      <h2>componente lista de productos</h2>
    </div>
  )
}

export default ListaProducto

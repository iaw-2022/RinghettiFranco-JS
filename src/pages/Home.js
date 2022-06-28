import React from 'react'
import ListaProducto from '../components/ListaProducto'
import Filtro from '../components/Filtro'

const Home = () => {
  return (
    <main>
      <Filtro/>
      <ListaProducto/>
    </main>
  )
}

export default Home

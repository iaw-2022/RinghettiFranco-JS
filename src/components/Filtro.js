import React from 'react'
import { useGlobalContext } from '../context'

const Filtro = () => {
  const { marcas, productos, formatos, setFilterType, setFilterTerm } = useGlobalContext()
  console.log(formatos)
  return (
    <div>
      <h2>search form component</h2>
    </div>
  )
}

export default Filtro

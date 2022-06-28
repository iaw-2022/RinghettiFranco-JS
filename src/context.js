import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const URL_PRESENTACIONES = 'http://prlvl-distribuidora.herokuapp.com/api/presentaciones'
const URL_MARCAS = 'http://prlvl-distribuidora.herokuapp.com/api/marcas'
const URL_FORMATOS = 'http://prlvl-distribuidora.herokuapp.com/api/formatos'
const URL_PRODUCTOS = 'http://prlvl-distribuidora.herokuapp.com/api/productos'
const SIN_FILTRO = 0
const MARCA_FILTRO = 1
const PRODUCTO_FILTRO = 2
const FORMATO_FILTRO = 3

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState(0)
  const [filterTerm, setFilterTerm] = useState(0)
  const [presentaciones, setPresentaciones] = useState([])
  const [marcas, setMarcas] = useState([])
  const [formatos, setFormatos] = useState([])
  const [productos, setProductos] = useState([])

  const fetchMarcas = async () => {
    try {
      setLoading(true)
      const response = await fetch(URL_MARCAS)
      const data = await response.json()
      setMarcas(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchMarcas()
  }, [filterTerm])

  const fetchFormatos = async () => {
    try {
      setLoading(true)
      const response = await fetch(URL_FORMATOS)
      const data = await response.json()
      const {datos} = data
      if(datos){
        const nuevosFormatos = datos.map((item) => {
          const {descripcion, unidades, cantidad} = item;
          return {formato: descripcion + ' ' + cantidad + unidades}
        })
        setFormatos(nuevosFormatos)
      }else{
        setFormatos([])
      }
      setFormatos(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchFormatos()
  }, [filterTerm])

  const fetchProductos = async () => {
    try {
      const response = await fetch(URL_PRODUCTOS)
      const data = await response.json()
      setProductos(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProductos()
  }, [filterTerm])

  const fetchPresentaciones = async () => {
    try {
      const response = await fetch(URL_PRODUCTOS)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return <AppContext.Provider value={{
    loading,
    presentaciones,
    marcas,
    formatos,
    productos,
    setFilterType,
    setFilterTerm
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

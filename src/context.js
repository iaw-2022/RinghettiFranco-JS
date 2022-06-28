import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import formatosPre from './datos/formatosPre.js'
import marcasPre from './datos/marcasPre.js'
import productosPre from './datos/productosPre.js'
import presentacionesPre from './datos/presentacionesPre.js'

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
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState(0)
  const [filterTerm, setFilterTerm] = useState(0)
  const [presentaciones, setPresentaciones] = useState(presentacionesPre)
  const [marcas, setMarcas] = useState(marcasPre)
  const [formatos, setFormatos] = useState(formatosPre)
  const [productos, setProductos] = useState(productosPre)

  /**
  const fetchMarcas = fetch(URL_MARCAS);
  fetchMarcas.then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    setMarcas(data);
  });

  const fetchFormatos = fetch(URL_FORMATOS);
  fetchFormatos.then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    setMarcas(data);
  });

  const fetchProductos = fetch(URL_PRODUCTOS);
  fetchProductos.then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    setMarcas(data);
  });
  **/

  return <AppContext.Provider value={{
    loading,
    presentaciones,
    marcas,
    formatos,
    productos,
    setFilterType,
    setFilterTerm,
    setMarcas,
    setFormatos,
    setProductos
  }}>{children}</AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

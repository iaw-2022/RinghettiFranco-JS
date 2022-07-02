import React, { useState, useContext, useEffect } from 'react'

const URL_PRESENTACIONES = 'http://prlvl-distribuidora.herokuapp.com/api/presentaciones'
const URL_MARCAS = 'http://prlvl-distribuidora.herokuapp.com/api/marcas'
const URL_FORMATOS = 'http://prlvl-distribuidora.herokuapp.com/api/formatos'
const URL_PRODUCTOS = 'http://prlvl-distribuidora.herokuapp.com/api/productos'
const SIN_FILTRO = 0
const MARCA_FILTRO = 1
const PRODUCTO_FILTRO = 2
const FORMATO_FILTRO = 3

const AppContext = React.createContext()

const initialCart = {
  cart:[],
  total:0,
  amount:0
}

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState(0)
  const [presentaciones, setPresentaciones] = useState([])
  const [marcas, setMarcas] = useState([])
  //const [formatos, setFormatos] = useState([])
  //const [productos, setProductos] = useState([])

  function obtener(url, filtro) {
    setLoading(true)
    let resultado
    if (filtro) {
      url = url + '/' + filtro
    }
    const busqueda = fetch(url);
    busqueda.then(response => {
      return response.json();
    }).then(data => {
      switch (url) {
        case URL_MARCAS:
          resultado = data.marcas
          setMarcas(resultado)
          break
        /*case URL_FORMATOS:
          resultado = data.formatos
          setFormatos(resultado)
          break
        case URL_PRODUCTOS:
          resultado = data.productos
          setProductos(resultado)
          break*/
        default:
          resultado = data.presentaciones
          setPresentaciones(resultado)
          break
      }
    });
    setLoading(false)
  }

  useEffect(() => {
    obtener(URL_MARCAS, '')
    //obtener(URL_FORMATOS, '')
    //obtener(URL_PRODUCTOS, '')
    obtener(URL_PRESENTACIONES, '')
  }, [])

  useEffect(() => {
    if (filterTerm !== 'Ninguna') {
      obtener(URL_MARCAS, filterTerm)
    } else {
      obtener(URL_PRESENTACIONES, '')
    }
  }, [filterTerm])

  return <AppContext.Provider value={{
    loading,
    presentaciones,
    marcas,
    setFilterTerm,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

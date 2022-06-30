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

  useEffect(() => {
    const fetchMarcas = fetch(URL_MARCAS);
    fetchMarcas.then(response => {
      return response.json();
    }).then(data => {
      const marcasActuales = data.marcas;
      setMarcas(marcasActuales);
    });

    const fetchFormatos = fetch(URL_FORMATOS);
    fetchFormatos.then(response => {
      return response.json();
    }).then(data => {
      const formatosActuales = data.formatos;
      setFormatos(formatosActuales);
    });

    const fetchProductos = fetch(URL_PRODUCTOS);
    fetchProductos.then(response => {
      return response.json();
    }).then(data => {
      const productosActuales = data.productos;
      setProductos(productosActuales);
    });

    const fetchPresentaciones = fetch(URL_PRESENTACIONES);
    fetchPresentaciones.then(response => {
      return response.json();
    }).then(data => {
      const presentacionesActuales = data.presentaciones;
      setPresentaciones(presentacionesActuales);
    });

    setLoading(false);
  }, [])

  useEffect(() => {
    setLoading(true);
    //SOLO MARCAS POR AHORA
    if(filterTerm !== 0){
      const fetchPresentacionesFiltradas = fetch(URL_MARCAS+'/'+filterTerm);
      fetchPresentacionesFiltradas.then(response => {
        return response.json();
      }).then(data => {
        const presentacionesFiltradas = data.presentaciones;
        setPresentaciones(presentacionesFiltradas);
      });
    }

    setLoading(false);
  },[filterTerm])

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

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

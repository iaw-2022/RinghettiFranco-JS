import React, { useState, useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'
import reducer from './reducer'

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
  const [filterType, setFilterType] = useState(0)
  const [filterTerm, setFilterTerm] = useState(0)
  const [presentaciones, setPresentaciones] = useState([])
  const [marcas, setMarcas] = useState([])
  const [formatos, setFormatos] = useState([])
  const [productos, setProductos] = useState([])
  const [state, dispatch] = useReducer(reducer, initialCart)

  function obtener(url, filtro) {
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
        case URL_FORMATOS:
          resultado = data.formatos
          setFormatos(resultado)
          break
        case URL_PRODUCTOS:
          resultado = data.productos
          setProductos(resultado)
          break
        default:
          resultado = data.presentaciones
          setPresentaciones(resultado)
          break
      }
    });
  }

  useEffect(() => {
    obtener(URL_MARCAS, '')
    obtener(URL_FORMATOS, '')
    obtener(URL_PRODUCTOS, '')
    obtener(URL_PRESENTACIONES, '')
  }, [])

  useEffect(() => {
    setLoading(true);
    //SOLO MARCAS POR AHORA
    if (filterTerm !== 99) {
      obtener(URL_MARCAS, filterTerm)
    } else {
      console.log('llego')
      obtener(URL_PRESENTACIONES, '')
    }

    setLoading(false);
  }, [filterTerm])

  const clearCart = () => {
    dispatch({type:'CLEAR_CART'})
  } 

  const removeItem = (id) => {
    dispatch({type:'REMOVE_ITEM', payload:id})
  }

  const increaseItem = (id) => {
    dispatch({type:'INCREASE_ITEM', payload:{id,cantidad}})
  }

  const decreaseItem = (id) => {
    dispatch({type:'DECREASE_ITEM', payload:id})
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS'})
  }, [state.cart])

  return <AppContext.Provider value={{
    loading,
    presentaciones,
    marcas,
    ...state,
    setFilterTerm,
    clearCart,
    removeItem,
    increaseItem,
    decreaseItem,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

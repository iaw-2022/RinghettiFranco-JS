import React from 'react'
import { useGlobalContext } from '../context.js'
import { FaCartPlus } from "react-icons/fa";

const Presentacion = ({id, precio, formato_descripcion, formato_medidas, marca_nombre, producto_tipo}) => {
  const { addItem } = useGlobalContext()

  const agregarAlCarrito = () => {
    let item = {id: id, precio: precio, formato_descripcion: formato_descripcion, formato_medidas: formato_medidas, marca_nombre:marca_nombre, producto_tipo: producto_tipo}
    addItem(item)
  }

  return (
    <article className="presentacion">
      <div className="presentacion-footer">
        <h3>{producto_tipo}</h3>
        <h3>{marca_nombre}</h3>
        <h4>{formato_descripcion + " " + formato_medidas}</h4>
        <h5>${precio}</h5>
        <button className='btn-primary' onClick={agregarAlCarrito}>
          <FaCartPlus/>
        </button>
      </div>
    </article>
  )
}

export default Presentacion

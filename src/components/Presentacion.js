import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";

const Presentacion = ({ id, stock, precio, formato_descripcion, formato_medidas, marca_nombre, producto_tipo }) => {
  const [cantidad, setCantidad] = useState(0);

  const agregarAlCarrito = () => {
    let item = { id: id, precio: precio, formato_descripcion: formato_descripcion, formato_medidas: formato_medidas, marca_nombre: marca_nombre, producto_tipo: producto_tipo }
  }

  const handleChange = (e) => {
    const cant = e.target.value
    setCantidad(cant)
  }

  const handleSubmit = (e) => {
    if (cantidad === 0) return true;
    if (cantidad > stock) {
      alert('Lo sentimos, solo poseemos en stock ' + stock + ' ' + producto_tipo + ' ' + marca_nombre)
      return true;
    }
    alert('Comprará ' + cantidad + ' ' + producto_tipo + ' ' + marca_nombre)
  }

  return (
    <article className="presentacion">
      <div className="presentacion-footer">
        <h3>{producto_tipo}</h3>
        <h3>{marca_nombre}</h3>
        <h4>{formato_descripcion + " " + formato_medidas}</h4>
        <h5>${precio}</h5>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="number" id="number" min="0" defaultValue={cantidad} onChange={(e) => handleChange(e)} />
          <button className='btn-primary' onClick={agregarAlCarrito}>
            <FaCartPlus />
          </button>
        </form>
      </div>
    </article>
  )
}

export default Presentacion

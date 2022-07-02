import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";

const Presentacion = ({ id, stock, precio, formato_descripcion, formato_medidas, marca_nombre, producto_tipo }) => {
  const [cantidad, setCantidad] = useState(0);

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
          <button className='btn-primary'>
            <FaCartPlus />
          </button>
        </form>
      </div>
    </article>
  )
}

export default Presentacion

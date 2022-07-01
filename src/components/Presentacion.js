import React from 'react'

const Presentacion = ({id, stock, precio, formato_descripcion, formato_medidas, marca_nombre, producto_tipo}) => {
  return (
    <article className="presentacion">
      <div className="presentacion-footer">
        <h3>{producto_tipo}</h3>
        <h3>{marca_nombre}</h3>
        <h4>{formato_descripcion + " " + formato_medidas}</h4>
        <h5>${precio}</h5>
      </div>
    </article>
  )
}

export default Presentacion

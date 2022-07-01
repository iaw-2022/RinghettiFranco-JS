import React from 'react'
import { useGlobalContext } from '../context.js'

const CartItem = ({ id, precio, formato_descripcion, formato_medidas, marca_nombre, producto_tipo, cantidad }) => {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext()
  return (
    <article className='cart-item'>
      <div>
        <h4>{producto_tipo + ' ' + marca_nombre}</h4>
        <h4>{formato_descripcion + ' ' + formato_medidas}</h4>
        <h4 className='item-price'>${precio}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <form>
        <input type="number" id="number" defaultValue={cantidad} />
        <div className="value-button" id="increase" onClick={increaseItem(id)}>+</div>
      </form>
    </article>
  )
}

//<div className="value-button" id="decrease" onClick={decreaseItem(id)}>-</div>

export default CartItem
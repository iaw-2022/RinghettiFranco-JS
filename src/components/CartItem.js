import React from 'react'
import { useGlobalContext } from '../context.js'

const CartItem = ({ id, stock, precio, formato_descripcion, formato_medidas, marca_nombre, producto_tipo, cantidad }) => {
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
        <div class="value-button" id="decrease" onclick={decreaseItem(id)} value="Decrease Value">-</div>
        <input type="number" id="number" value={cantidad} />
        <div class="value-button" id="increase" onclick={increaseItem(id)} value="Increase Value">+</div>
      </form>
    </article>
  )
}

export default CartItem
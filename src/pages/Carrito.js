import React from 'react'
import CartItem from '../components/CartItem'
import { useGlobalContext } from '../context.js'

const Carrito = () => {
  const { cart, total, clearCart } = useGlobalContext()

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>Tus compras</h2>
          <h4 className='empty-cart'>No hay nada en tu carrito</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      { /*cart header*/}
      <header>
        <h2>Tus compras</h2>
      </header>
      { /*cart items*/}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      { /*cart footer*/}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default Carrito
const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE_ITEM') {
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
    }
    if (action.type === 'INCREASE_ITEM') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === 'DECREASE_ITEM') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount <= 0)
        return { ...state, cart: tempCart }
    }
    if (action.type === 'ADD_ITEM') {
        let item = {
            id: action.payload.id,
            precio: action.payload.precio,
            formato_descripcion: action.payload.formato_descripcion,
            formato_medidas: action.payload.formato_medidas,
            marca_nombre: action.payload.marca_nombre,
            producto_tipo: action.payload.producto_tipo,
            cantidad: 0
        }
        
        let tempCart = state.cart
        if(!tempCart.find(encargado => encargado.id === item.id)){
            tempCart.push(item)
        }

        return { ...state, cart: tempCart }
    }
    return state
}

export default reducer
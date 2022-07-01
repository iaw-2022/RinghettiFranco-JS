const reducer = (state,action) => {
    if(action.type === 'CLEAR_CART'){
        return {...state, cart:[]}
    }
    if(action.type === 'REMOVE_ITEM'){
        return {...state,cart:state.cart.filter((cartItem) => cartItem.id !== action.payload)}
    }
    if(action.type === 'INCREASE_ITEM'){
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem
        })
        return {...state, cart:tempCart}
    }
    if(action.type === 'DECREASE_ITEM'){
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return {...cartItem, amount: cartItem.amount - 1}
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount <= 0)
        return {...state, cart:tempCart}
    }
    if(action.type === 'GET_TOTALS'){
        const total = state.cart.reduce((cartTotal, cartItem) => {
            const {precio, cantidad} = cartItem

            return cartTotal            
        },{
            total:0
        })
        return{...state,total}
    }
    return state
}

export default reducer
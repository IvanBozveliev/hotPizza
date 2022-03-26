export function AddCart(product){
    
    return {
        type:'ADD_TO_CART',
        payload: product
    }
}

export function getAllCartProducts(product){
    
    return {
        type:'GET_FROM_CART',
        payload: product
    }
}

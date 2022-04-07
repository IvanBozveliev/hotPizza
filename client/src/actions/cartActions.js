export function addCart(product) {

    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}


export function increaseQty(product) {
    return {
        type: "INCREASE_QTY",
        payload: product
    }
}

export function decreaseQty(product) {
    return {
        type: "DECREASE_QTY",
        payload: product
    }
}

export function deleteCart(productId) {
    return {
        type: "DELETE_CART",
        id: productId
    }
}

export function deleteAllCartProducts() {
    return {
        type: "DELETE_ALL_CART"
    }
}


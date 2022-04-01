import * as storageService from '../services/storageService';
import { api } from '../services/api';

export const buyProducts = (products) => {
    const userData = storageService.getLocalStorage()

    return async (dispatch) => {


        const user = await api.get(`/users/${userData.id}`);
        user.orders.push(...products)
        await api.put(`/users/${user._id}`, user)
        dispatch(addOrders(products))
        // .then(user => {

        //     user.orders.push(...products)
        //     api.put(`/users/${user._id}`, user)
        //         .then(() => {
        //             dispatch(addOrders(products))
        //         })
        // })
    }
}

export const deleteOrders = () => {

}

export function addCart(product) {

    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export function getAllCartProducts(product) {

    return {
        type: 'GET_FROM_CART',
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

function addOrders(products) {
    return {
        type: "ADD_TO_ORDERS",
        payload: products
    }
}
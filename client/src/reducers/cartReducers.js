let initialState = {
    cart: {
        data: [],
        counter: 0
    },
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            if (state.cart.length === 0) {
                let product = {
                    _id: action.payload._id,
                    quantity: 1,
                    title: action.payload.title,
                    imageUrl: action.payload.imageUrl,
                    price: action.payload.price,
                    description: action.payload.description,
                    creator: action.payload.creator,
                    isReady: action.payload.isReady
                }

                state.cart.data.push(product)
                state.cart.counter++;
            } else {
                let check = false;

                state.cart.data.map((currentProduct, key) => {
                    if (currentProduct._id === action.payload._id) {
                        state.cart.data[key].quantity++;
                        state.cart.counter++;
                        check = true
                    }
                });

                if (!check) {

                    let prod = {
                        _id: action.payload._id,
                        quantity: 1,
                        title: action.payload.title,
                        imageUrl: action.payload.imageUrl,
                        price: action.payload.price,
                        description: action.payload.description,
                        creator: action.payload.creator,
                        isReady: action.payload.isReady
                    }

                    state.cart.data.push(prod);
                    state.cart.counter++;
                }
            }
            return {
                ...state,
                cart: {
                    data: [...state.cart.data],
                    counter: state.cart.counter
                }
            }
        // case "GET_FROM_CART":
        //     return {
        //         ...state,
        //     }
        case "INCREASE_QTY":

            state.cart.data.map((currentProduct, key) => {
                if (currentProduct._id === action.payload._id) {
                    state.cart.data[key].quantity++;
                    state.cart.counter++;
                }
            });

            return {
                ...state,
                cart: {
                    data: [...state.cart.data],
                    counter: state.cart.counter
                }
            }
        case "DECREASE_QTY":
            state.cart.data.map((currentProduct, key) => {
                if (currentProduct._id === action.payload._id && currentProduct.quantity > 1) {
                    state.cart.data[key].quantity--;
                    state.cart.counter--;
                }
            });
            return {
                ...state,
                cart: {
                    data: [...state.cart.data],
                    counter: state.cart.counter
                }
            }
        case "DELETE_CART":
            let product = state.cart.data.find(prod => prod._id == action.id);

            return {
                ...state,
                cart: {
                    data: state.cart.data.filter(prod => prod._id !== action.id),
                    counter: state.cart.counter - product.quantity,
                }
            }
        case "DELETE_ALL_CART":
            return {
                ...state,
                cart: {
                    data: [],
                    counter: 0
                }
            }
        default:
            return state;
    }
}


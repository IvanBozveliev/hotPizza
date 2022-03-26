let initialState = {
    cart: {
        data: [],
        counter: 0
    }
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            if (state.cart.length === 0) {
                let product = {
                    _id: action.payload._id,
                    quantitiy: 1,
                    title: action.payload.title,
                    imageUrl: action.payload.imageUrl,
                    price: action.payload.price,
                    description: action.payload.description
                }

                state.cart.data.push(product)
                state.cart.counter++;
            } else {
                let check = false;

                state.cart.data.map((currentProduct, key) => {
                    if (currentProduct._id === action.payload._id) {
                        state.cart.data[key].quantitiy++;
                        state.cart.counter++;
                        check = true
                    }
                });

                if (!check) {

                    let prod = {
                        _id: action.payload._id,
                        quantitiy: 1,
                        title: action.payload.title,
                        imageUrl: action.payload.imageUrl,
                        price: action.payload.price,
                        description: action.payload.description
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
        case "GET_FROM_CART":
            return{
                ...state,
            }
        default:
            return state;
    }
}


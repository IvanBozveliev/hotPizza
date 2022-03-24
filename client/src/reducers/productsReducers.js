let initialState = {
    products: {
        isLoading: false,
        error: null || "",
        data: []
    },
    cart: {
        data: [],
    }
}

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return action.payload;
        case "FETCH_PRODUCTS_ERROR":
            return action.error;
        default:
            return state;
    }
}
let initialState = {
    products: {
        isLoading: false,
        error: null || "",
        data: []
    }
}

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: {
                    data: action.payload
                }
            }
        case "FETCH_PRODUCTS_ERROR":
            return action.error;
        default:
            return state;
    }
}
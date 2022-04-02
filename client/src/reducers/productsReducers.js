let initialState = {

    isLoading: false,
    error: null || "",
    data: []

}

export const productReducers = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_PRODUCTS_LOADING":
            return {
                ...state,
                isLoading: true,
                error: null,
                data: []
            }

        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case "FETCH_PRODUCTS_ERROR":
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        case "UPDATE_PRODUCT":
            const product = action.payload
            const newData = state.data.map(item => item._id === product._id ? product : item)
            return {
                ...state,
                data: newData
            }
        case "DELETE_PRODUCT":
            return {
                ...state,
                data: state.data.filter(item => item._id !== action.payload)
            }
        case "CREATE_PRODUCT":
            return {
                ...state,
                data: [...state.data, action.payload],
                error: null
            }
        default:
            return state;
    }
}
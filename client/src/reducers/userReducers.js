let initialState = {
    isLoading: false,
    data: [],
    error: ''
};

export const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                data: action.payload
            };
        case "FETCH_USERS_ERRORS":
            return {
               ...state,
               error: action.error
            };
        case "DELETE_USER":
            let userId = action.id;
            let users = state.data.filter(user => user._id !== userId)
            return {
              ...state,
              data: users
            }
        default: return state
    }
}
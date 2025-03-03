// userReducer.js
const initialState = {
    loading: false,
    user: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_START':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case 'FETCH_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

            // userReducer.js
        case 'CREATE_USER_START':
            return { ...state, loading: true };
        case 'CREATE_USER_SUCCESS':
            return { ...state, loading: false, user: action.payload };
        case 'CREATE_USER_FAILURE':
            return { ...state, loading: false, error: action.payload };

                default:
                    return state;
    }
};

export default userReducer;

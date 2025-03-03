// userActions.js
import axios from 'axios';

export const fetchUserStart = () => {
    return { type: 'FETCH_USER_START' };
};

export const fetchUserSuccess = (user) => {
    return { type: 'FETCH_USER_SUCCESS', payload: user };
};

export const fetchUserFailure = (error) => {
    return { type: 'FETCH_USER_FAILURE', payload: error };
};

// userActions.js
export const createUserStart = () => ({ type: 'CREATE_USER_START' });
export const createUserSuccess = (user) => ({ type: 'CREATE_USER_SUCCESS', payload: user });
export const createUserFailure = (error) => ({ type: 'CREATE_USER_FAILURE', payload: error });

// Define the createUserThunk
export const createUserThunk = (userData) => {
    return async (dispatch) => {
        dispatch(createUserStart());
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
            dispatch(createUserSuccess(response.data));
        } catch (error) {
            dispatch(createUserFailure(error.message));
        }
    };
};


export const fetchUserThunk = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_USER_START' });
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
        }
    };
};

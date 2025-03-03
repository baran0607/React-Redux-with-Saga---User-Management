// userSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {fetchUserSuccess, fetchUserFailure, createUserSuccess, createUserFailure } from '../actions/userActions';

// Worker saga: Will be fired on FETCH_USER_REQUESTED actions
function* fetchUserSaga(action) {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users/1');
        yield put(fetchUserSuccess(response.data));  // Dispatch success action
    } catch (error) {
        yield put(fetchUserFailure(error.message)); // Dispatch failure action
    }
}

// userSaga.js
function* createUserSaga(action) {
    try {
        const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/users', action.payload);
        yield put(createUserSuccess(response.data));
    } catch (error) {
        yield put(createUserFailure(error.message));
    }
}


// Watcher saga: watches for FETCH_USER_REQUESTED actions
function* rootSaga() {
    yield takeLatest('FETCH_USER_START', fetchUserSaga);
    yield takeLatest('CREATE_USER_THUNK',createUserSaga)
}

export default rootSaga;

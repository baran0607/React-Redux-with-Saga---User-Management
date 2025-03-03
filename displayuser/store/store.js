import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from '../reducers/userReducer';
import rootSaga from '../sagas/userSaga';
import { thunk } from 'redux-thunk';  // Correctly importing 'thunk' as named export

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store
const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware, thunk),  // Adding thunk to the middleware chain
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;

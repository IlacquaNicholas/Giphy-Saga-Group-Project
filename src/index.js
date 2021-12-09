import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const searchReducer = (state = [], action)=>{
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload;
        default:
            return state;
}
};

function* getSearch(action){
    try{
        console.log('getSearch action.payload:', action.payload);
        const response = yield axios({
            method: 'POST',
            url: '/api/search',
            data: {search: action.payload}
        })
        yield put({
            type: 'SET_SEARCH',
            payload: response.data.data
        })
    }catch(err){
        console.error(err);
    };
};





const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    //saga listeners go here.
    yield takeEvery('GET_SEARCH', getSearch);
};

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        //reducers go here
        searchReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));

// STEP 1
// now import the redux-thunk
// call the default property on it to create your instance of thunkMiddleware
// import axios to use it..
/*
To use Redux Thunk 2.x in CommonJS environment, don’t forget to add .default to your import:
since the new redux thunk is following es6 format to export default module.
*/
const redux = require("redux");
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading : false,
    users : [],
    error : ''
}

const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_ERROR = 'GET_USERS_ERROR';

const getUsersRequest = () => {
    return {
        type : GET_USERS_REQUEST
    }
}
const getUserSuccess = (users) => {
    return {
        type : GET_USERS_SUCCESS,
        payload : users
    }
}
const getUserError = (error) => {
    return {
        type : GET_USERS_ERROR,
        payload : error
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS_REQUEST: return{
            ...state,
            loading : true
        }

        case GET_USERS_SUCCESS: return{
            ...state,
            loading : false,
            users : action.payload,
            error : ''
        }

        case GET_USERS_ERROR: return{
            ...state,
            loading : false,
            users : [],
            error : action.payload
        }
    }
}

// STEP 3
// thunk's action creator can return a function that is not pure
// because it causes side effects to make api calls
const getUsers = () => {
    return function(dispatch){
        dispatch(getUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/uses')
        .then( respose => {
            dispatch(getUserSuccess(respose.data))
           // console.log(respose.data);
        }).catch( error => {
            // dispatch(getUserError(error.response.status))
            dispatch(getUserError(error.response.statusText))
            // console.log("Error : ", error);
        })
    }
}

// STEP 2
// add and apply middle ware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe( ()=> { console.log( store.getState() )});
store.dispatch(getUsers());
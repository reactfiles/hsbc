// done in step 5
const redux = require("redux");
const createStore = redux.legacy_createStore;

// STEP 1
// lets create a store's initial value
const initialState = {
    loading : false,
    users : [],
    error : ''
}

// STEP 2
// lets create actions
const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_ERROR = 'GET_USERS_ERROR';

// STEP 3
// lets create actionCreators
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


// STEP 4
// lets define reducer now

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

// STEP 5
// create redux store
// import redux in the top 
// call the createStore of the redux and store it in a variable
// create a store passing reducer to it..
const store = createStore(reducer);
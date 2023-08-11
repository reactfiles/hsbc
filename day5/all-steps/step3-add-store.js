const redux = require('redux');
const createStore = redux.legacy_createStore;


const ADD_HERO = "ADD_HERO";

// set up an action
function addHero(){
    return {
        type : ADD_HERO,
        info : "First Redux Action"
    }
}

// default state object
const initialState = {
    numOfHeroes : 0
}

// reducer that take a default state for initial run
// if the action type is ADD_HERO then it returns 
// numOfHeroes along with remaning properties of the state
// if the action do not match then we shall return the existing state 
const reducer = (state = initialState, action) => {
    switch( action.type){
        case ADD_HERO : return {
            ...state,
            numOfHeroes : state.numOfHeroes + 1
        }
        default : return state
    }
}
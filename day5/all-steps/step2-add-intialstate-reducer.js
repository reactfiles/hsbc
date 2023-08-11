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

// REDUCER
// reducer is a function that takes state and action as arguments and returns next state of the application
// reducers decide how the app's state change/behave in response to the action that is passed to the store
// reducer take a default state for initial run
// if the action type is ADD_HERO then it returns 
// numOfHeroes along with remaning properties of the state if you needed to change them
// 
// if the action do not match then we shall return the existing state 
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch( action.type){
        case ADD_HERO : return {
            ...state,
            numOfHeroes : state.numOfHeroes + 1
        }
        default : return state
    }
}
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
    heroes : 0
}

// reducer that take a default state for initial run
// if the action type is ADD_HERO then it returns 
// heroes along with remaning properties of the state
// if the action do not match then we shall return the existing state 

/*
let reducer = (state = initialState, action) => {
    if(action.type === ADD_HERO){
        return { 
            ...state,
            heroes : state.heroes + 5
        }
    }else{
        return state
    }
}
*/
let reducer = (state = initialState, action) => {
    switch( action.type ){
        case ADD_HERO : return { 
            ...state,
            heroes : state.heroes + 1
        }
        default : return state
    }
}

// the createStore recieves a parameter which is the reducer
// the reducer has the initial state of the application
// which is required by the store to make state transition based on the actions recieved

const store = createStore( reducer );

console.log(store.getState());

const unsubscribe = store.subscribe( () => {
    console.log("state updated", store.getState() )
});
store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(addHero());

unsubscribe();
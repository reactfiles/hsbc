const redux = require('redux');
const createStore = redux.legacy_createStore;

const ADD_HERO = "ADD_HERO";
const ADD_MOVIE = "ADD_MOVIE";

function addHero(){
    return {
        type : ADD_HERO,
        info : "First Redux Action"
    }
}
function addMovie(){
    return {
        type : ADD_MOVIE,
        info : "Second Redux Action"
    }
}

const initialState = {
    heroes : 0,
    movies : 0
}
// to add another data you need to add another reducer

let reducer = (state = initialState, action) => {
    switch( action.type ){
        case ADD_HERO : return { 
            ...state,
            heroes : state.heroes + 1
        }
        case ADD_MOVIE : return { 
            ...state,
            movies : state.movies + 1
        }
        default : return state
    }
}

const store = createStore( reducer );
// the initial run
console.log("state initialized ",store.getState());

const unsubscribe = store.subscribe( () => {
    console.log("state updated", store.getState() )
});
store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(addHero());
//------------------------
store.dispatch(addMovie());
store.dispatch(addMovie());
store.dispatch(addMovie());

unsubscribe();
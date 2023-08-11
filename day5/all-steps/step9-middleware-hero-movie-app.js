const redux = require('redux');
const reduxLogger = require("redux-logger");

const createStore = redux.legacy_createStore;
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;

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

const initialHeroState = {
    heroes : 0
}
const initialMovieState = {
    movies : 0
}
// to add another data you need to add another reducer

let heroReducer = (state = initialHeroState, action) => {
    switch( action.type ){
        case ADD_HERO : return { 
            ...state,
            heroes : state.heroes + 1
        }
        default : return state
    }
}
let movieReducer = (state = initialMovieState, action) => {
    switch( action.type ){
        case ADD_MOVIE : return { 
            ...state,
            movies : state.movies + 1
        }
        default : return state
    }
}

// by convention its called rootReducer
// the combineReducer accepts an object
// that has key and value pairs
// key is name and value is a reducer

const rootReducer = redux.combineReducers({
    hero : heroReducer,
    movies : movieReducer
})

// const store = createStore( rootReducer );
const store = createStore( rootReducer, applyMiddleWare(logger) );
// the initial run
// console.log("state initialized ",store.getState());

const unsubscribe = store.subscribe( () => {});

store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(addHero());
//------------------------
store.dispatch(addMovie());
store.dispatch(addMovie());
store.dispatch(addMovie());

unsubscribe();
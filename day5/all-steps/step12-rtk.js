const store = require("./app/store");
const heroActions = require("./features/hero/hero.slice").heroActions;
const movieActions = require("./features/movie/movie.slice").movieActions;

// console.log("Start State", store.getState());

// const unsubscribe = store.subscribe(() => console.log("Updated state ", store.getState()));
const unsubscribe = store.subscribe(() => {});

store.dispatch( heroActions.addHero() )
store.dispatch( heroActions.addHero() )
store.dispatch( heroActions.addHero() )
store.dispatch( heroActions.addHero() )
store.dispatch( heroActions.removeHero() )
store.dispatch( heroActions.resetHero(10) )
console.log("++++++++++++++++++++++++++++++++")
store.dispatch( movieActions.addMovie() )
store.dispatch( movieActions.addMovie() )
store.dispatch( movieActions.addMovie() )
store.dispatch( movieActions.addMovie() )
store.dispatch( movieActions.removeMovie() )
store.dispatch( movieActions.resetMovie(10) )
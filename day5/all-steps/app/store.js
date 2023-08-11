const configureStore = require("@reduxjs/toolkit").configureStore;
const heroReducer = require("../features/hero/hero.slice");
const movieReducer = require("../features/movie/movie.slice");
const reduxLogger = require("redux-logger");

// adding logger middleware
const logger = reduxLogger.createLogger();
// also does the job of combine reducers
const store = configureStore({
    reducer : {
        hero : heroReducer,
        movie : movieReducer
    },
    // this function recieves a function implicitly know as getDefaultMiddleware which returns an array
    // so we use the concat a method of array to add the middleware to exiting list of middlewares
    // configureStore by default includes few internal middlewares so we append our middlewares to it via concat
    middleware : ( getDefaultMiddleware ) => getDefaultMiddleware().concat(logger)
})

module.exports = store ;
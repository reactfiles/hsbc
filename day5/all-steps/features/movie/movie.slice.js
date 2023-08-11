const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    numOfMovies : 0
};

// RTK will generate action types based on slice name and reducer name
// movie/addMovie movie/removeMovie and movie/resetMovie in this case

const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers : {
        // these can not be an arrow function without braces.
        addMovie : (state) => {state.numOfMovies++},
        removeMovie : (state) => {state.numOfMovies--},
        resetMovie : (state, action) => {state.numOfMovies = action.payload}
    }
});

// default export 
module.exports = movieSlice.reducer;
// named export 
module.exports.movieActions = movieSlice.actions;
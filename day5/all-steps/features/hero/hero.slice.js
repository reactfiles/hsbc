const createSlice = require("@reduxjs/toolkit").createSlice;
const movieActions = require("../movie/movie.slice");

/* 
createSlice takes 3 configurations  
1. name
2. intialState 
3. reducers
*/

const initialState = {
    numOfHeroes : 0
};

// RTK will generate action types based on slice name and reducer name
// hero/addHero hero/removeHero and hero/resetHero in this case

const heroSlice = createSlice({
    name : "hero",
    initialState,
     // these can not be an arrow function without braces.
    reducers : {
        addHero : (state) => {
            state.numOfHeroes++
        },
        removeHero : (state) => {
            state.numOfHeroes--
        },
        resetHero : (state, action) => {
            state.numOfHeroes = action.payload;
        }
    },
    /* 
    extraReducers : {
        ['movie/addMovie'] : (state) => {
            state.numOfHeroes++;
        }
    } 
    */
    /*    
    */
    extraReducers : (builder) => {
        builder.addCase(movieActions.addMovie, (state) => {
            state.numOfHeroes++;
        })
    } 
}); 

// default export 
module.exports = heroSlice.reducer;
// named export 
module.exports.heroActions = heroSlice.actions;
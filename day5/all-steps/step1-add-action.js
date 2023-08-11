// STEP 1

// const ADD_HERO = "ADD_HERO";

// other than type you can add any property you need
// type is the only property needed in action
// action only tell what should happen and do not specify how it happens (thats the job of a reducer)
// this is the action, an action is a object with property "type" in it.
// we can create an action creator which can create this action
// we can wrap it in a function that returns this action
// {
//     type : ADD_HERO,
//     info : "First Redux Action"
// }

// ======================================
// STEP 2

const ADD_HERO = "ADD_HERO";

// set up an action creator
// creators are a better aproach since 
// you can make changes to the function if you want to add another action
// else if you pass the object itself you will have to update in every 
// dispatcher where you are using this action

function addHero(){
    return {
        type : ADD_HERO,
        info : "First Redux Action"
    }
}

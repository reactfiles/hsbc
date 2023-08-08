var hero = {
    title : "Ironman",
    power : 7
};
var hero1 = {
    title : "Hulk",
    power : 8
};

function changeTitle(){
    if(hero.power > 5){
        let tempTitle = hero.title;
        hero.title = tempTitle+" is strong";
    }
};

// changeTitle();

// console.log(hero.title);



/* 
module.exports.hero = hero;
module.exports.hero1 = hero1; 
*/

/* 
module.exports = {
    hero : hero,
    hero1 : hero1
} 
*/

module.exports = { hero, hero1 } 
// Write your solution in this file!

//global variables
const burgers = ["Hamburger" , "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

//function scope
function addBurger(){
    const newBurger = "Flatburger";
    burgers.push(newBurger);
    if(true){
        const anotherNewBurger = "Maple Bacon Burger";
        burgers.push(anotherNewBurger);
    }
}

//Block scope
function changeFeaturedDrink(){
    featuredDrink = "The Javashake";
}


//Create a function

// let globalSomething =  0;
// let damageVal = 0;
//
// boxMaker("Luke"," is cool");
// boxMaker("Bob"," is cool");
// boxMaker("Jerry"," is cool");
// boxMaker("Sheila"," is cool");
//
// function boxMaker(mess,phrase) {
//     let ele=document.createElement("div"); //create an element
//     let nameEle = document.createElement("h1");  //create another element
//
//     nameEle.innerHTML=mess+phrase; //writing a variable inside element nameEle
//     ele.appendChild(nameEle); //appending nameEle as a child of ele
//     document.body.appendChild(ele); //printing the element of ele to the document body
// }
//
// let button = document.createElement("button"); //making a new element
// button.innerHTML="Click me please. Button Pressed: " + globalSomething; //writing a phrase inside of element button
//
// button.addEventListener("click", function()){
//   // boxMaker("Function made", " is really cool");
//     globalSomething = globalSomething+1;
//     button.innerHTML="Click me please. Button Pressed: " + globalSomething; //re-writing
// })
// //
// // document.body.appendChild(button); //printing to document body
//
let damageVal = 0;
let damageTotal = 0;
let wonGame = false;
let button = document.createElement("div");

let buttonFire = document.createElement("button");
let buttonIce = document.createElement("button");
let buttonPoison = document.createElement("button");

buttonFire.innerHTML="Click to attack with Fire!";
buttonIce.innerHTML="Click to attack with Ice!";
buttonPoison.innerHTML="Click to attack with Poison!";

button.appendChild(buttonFire);
button.appendChild(buttonIce);
button.appendChild(buttonPoison);

buttonFire.addEventListener("click",function(){
    attack(3,"fire")
    buttonFire.innerHTML="Click to attack with Fire!";
})
buttonIce.addEventListener("click",function(){
    attack(1,"ice")
})
buttonPoison.addEventListener("click",function(){
    attack(4,"poison")
})
document.body.appendChild(button);

function attack(damage, attackType) {
    if (attackType === "fire" || attackType === "Fire") {
        damageVal = damage - 1;
    }
    else if (attackType === "ice" || attackType === "Ice") {
        damageVal = damage + 1;
    }
    else {
        damageVal = damage; //adding this in case attack is not fire or ice
    }
    damageTotal = damageTotal + damageVal;
    let ele=document.createElement("div"); //create an element

    if (damageTotal >= 10 && wonGame === false) {
        ele.innerHTML="YOU HAVE WON THE GAME! Total damage dealt to the dragon: "+damageTotal+". Refresh to play again.";
        wonGame = true;
    }
    else if (damageTotal < 10) {
        ele.innerHTML="Total damage dealt to the dragon: "+damageTotal;
    }

    document.body.appendChild(ele);


}


// Homework
// Create a function that has damage and attack type as parameters.
//     The damage value is dealt to the dragon.
//     If the attack type is fire, it deals 1 less damage.
//     If the attack type is ice, it deals 1 additional damage.
//     Make sure the dragon's damage is visible for the user

// Attach this function to 3 separate buttons.
//     One button is fire and deals 3 damage.
//     One button is ice and deals 1 damage
//     One button is poison and deals 4 damage.
//     When the Dragon's damage is 10 or more, the user wins and should be notified.
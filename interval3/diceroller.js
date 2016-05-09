var rollDice = document.getElementById("rollDice")
var resetForm = document.getElementById("resetForm")
var Side = document.getElementById("side")
// var Dice = document.getElementById("dice")

var rollDice = document.getElementById("rollDice")
var resetForm = document.getElementById("resetForm")
    var Side = document.getElementById("side")
// var Dice = document.getElementById("dice")

//Saves Element by Id from the html than it bring it to the javascript and it switches to a variable
var die1display = document.getElementById("die1display");
var die2display = document.getElementById("die2display");
var die3display = document.getElementById("die3display");
var die4display = document.getElementById("die4display");
var die5display = document.getElementById("die5display");
var die6display = document.getElementById("die6display");

rollDice.addEventListener("click", function(event){
  
    // var numDice = parseInt(Dice.value) 
    
    
  // This get the actuall value of the dice side  
     var numSide = parseInt(Side.value)
    
//This code works by giving a random number side
    var diceRoll1 = Math.floor(Math.random() * numSide) + 1  
    var  diceRoll2 = Math.floor(Math.random() * numSide) + 1
    var diceRoll3 = Math.floor(Math.random() * numSide) + 1
    var diceRoll4 = Math.floor(Math.random() * numSide) + 1
    var diceRoll5 = Math.floor(Math.random() * numSide) + 1
    var diceRoll6 = Math.floor(Math.random() * numSide) + 1
    
    
    //This shows the stuff it will show up
    die1display.innerHTML = diceRoll1;
    die2display.innerHTML = diceRoll2;
    die3display.innerHTML = diceRoll3;
    die4display.innerHTML = diceRoll4;
    die5display.innerHTML = diceRoll5;
    die6display.innerHTML = diceRoll6;


    

})

//This resets the game so they could roll the dice again
resetForm.addEventListener("click", function(event){

die1display.innerHTML = "";
die2display.innerHTML = "";
die3display.innerHTML = "";
die4display.innerHTML = "";
die5display.innerHTML = "";
die6display.innerHTML = "";
    
})

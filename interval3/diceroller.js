var rollDice = document.getElementById("rollDice")
var resetForm = document.getElementById("resetForm")
var Side = document.getElementById("side")
var Dice = document.getElementById("dice")

var rollDice = document.getElementById("rollDice")
var resetForm = document.getElementById("resetForm")
    var Side = document.getElementById("side")
var Dice = document.getElementById("dice")



rollDice.addEventListener("click", function(event){
    var numDice = parseInt(Dice.value) 
    
    
    
     var numSide = parseInt(Side.value)
    
    
    
    var diceRoll1 = Math.floor(Math.random() * numSide) + 1  
    
    var  diceRoll2 = Math.floor(Math.random() * numSide) + 1
    
    var diceRoll3 = Math.floor(Math.random() * numSide) + 1
    
    var diceRoller4 = Math.floor(Math.random() * numSide) + 1

    var diceRoller5 = Math.floor(Math.random() * numSide) + 1

    var diceRoller6 = Math.floor(Math.random() * numSide) + 1

    
    
    
    
    
    
    
})


resetForm.addEventListener("click", function(event){


    
})

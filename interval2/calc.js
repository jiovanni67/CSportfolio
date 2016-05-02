var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    var num1 = parseInt(input1.value);
    var num2 = parseInt(input2.value);
    var operator = dropdown.value;
    
    
    // use this one as an example for the other 5 operations
    if  (operator == "+"){
        answer = num1 + num2;
        display.innerHTML = answer;
    }
    
    
    
}
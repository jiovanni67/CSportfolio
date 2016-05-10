// This part is for the button to work
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

//This part function the math problem
function doMath() {
    //This part parasent inputs the values
    var num1 = parseInt(input1.value);
    var num2 = parseInt(input2.value);
    var operator = dropdown.value;
    
    
    // use this one as an example for the other 5 operations
   
   //This is for the addition to show up in the button and to answer the equation.
    if  (operator == "+"){
        answer = num1 + num2;
        display.innerHTML = answer;
    }
    
    //This is for the subtract to show up in the button and to answer the equation.
    if (operator == "-"){
        answer = num1 - num2;
        display.innerHTML = answer;
    }
    
    //This is for the multiplication to show up in the button and to answer the equation.
    if (operator == "x"){
        answer = num1 * num2;
        display.innerHTML = answer;
    }
    
    //This is for the division to show up in the button and to answer the equation.
    if (operator == "/"){
        answer = num1 / num2;
        display.innerHTML = answer;
    }
    
    //This is for answering the problem and its going to appear in the button
       if (operator == "%"){
            answer = num1 % num2;
            display.innerHTML = answer;
           
       }
}
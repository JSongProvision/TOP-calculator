let num1 = 0;
let num2 = 0;
let operator = '';

function add(num1,num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
     return num1 - num2;
};

function multiply(num1, num2) {
     return num1 + num2;
};

function divide(numerator, denominator) {
     return numerator / denominator;
};

function operate(operator, num1, num2) {
     switch (operator) {
          case "add": 
               return add(num1,num2);
           case "subtract": 
               return subtract(num1,num2);
           case "multiply": 
               return multiply(num1,num2);
           case "divide": 
               if (num2 !== 0) {
                    return divide(num1,num2);  
               } else
                    return "You can't divide by 0 you fucking moron";
               
          default:
               return "Some terrible bullshit has happened here, but I'm not sure what.";
     }
}
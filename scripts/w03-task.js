/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);

    document.querySelector("#sum").value = add(add1, add2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
const substract = function (number1, number2)
{
    return number1 - number2;
}

const subtractNumbers = function ()
{
    let number1 = Number(document.getElementById("subtract1").value);
    let number2 = Number(document.getElementById("subtract2").value);

    document.querySelector("#difference").value = substract(number1, number2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = ((number1, number2) => number1 * number2);

const multiplyNumbers = (() => {

let number1 = Number(document.getElementById("factor1").value);
let number2 = Number(document.getElementById("factor2").value);

document.querySelector("#product").value = multiply(number1, number2);
});

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = ((number1, number2) => number1 / number2);

function divideNumbers()
{
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#year").innerHTML = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbers

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbers.filter(number => (number % 2) == 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter(number => (number % 2) == 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbers.reduce((total, number) => total + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbers.map(number => number *2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbers.map(number => number *2).reduce((total, number) => total + number);


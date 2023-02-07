// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = 2, num2 = 3;
var result = num1 + num2;

document.write("<h2>Sum of "+num1+ " and "+ num2+ " is "+ result + "</h3>"+"<br>")


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var subrtact = num1 + num2;
var prduct = num1 * num2;
var modulas = num1 % num2;
var division = num1 / num2;

document.write("<h2>Subtraction of "+num1+ " and "+ num2+ " is "+ subrtact + "</h3>"+"<br>")
document.write("<h2> Product of "+num1+ " and "+ num2+ " is "+ prduct + "</h3>"+"<br>")
document.write("<h2> modulas of "+num1+ " and "+ num2+ " is "+ modulas + "</h3>"+"<br>")
document.write("<h2> Division of "+num1+ " and "+ num2+ " is "+ division + "</h3>"+"<br>")


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

var myNum ;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("Value after variable declaration is: "+myNum+"<br>")
// c. Initialize the variable with some number.
myNum = 5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("Initial Value : "+myNum+"<br>")
// e. Increment the variable.
myNum++
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("Value after variable after increment is: "+myNum+"<br>")
// g. Add 7 to the variable.
myNum + 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after variable after addition is: "+myNum+"<br>")
// i. Decrement the variable.
myNum--
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after variable Decrement is: "+myNum+"<br>")
// k. Show the remainder after dividing the variable’s value by 3.
division = myNum/3;
document.write("Value after variable increment is: "+division+"<br>")
// l. Output : “The remainder is : 0”.
document.write("the reminder is : 0 "+"<br>")

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie.

var ticketPrice = 600;
document.write("Total Cost of 5 tickets to the Movie is: "+ticketPrice*5+"PKR"+"<br>")

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// var tableNum = prompt("enter table number");
var tableNum = form.tableValue.va
var reasult;
document.write("Table of "+tableNum+"<br>")

for(x = 0 ; x <= 10 ; x++){
    var tableValue = tableNum * x;
    document.write(tableNum+" X " + x + " = "+ tableValue+ " <br>")
}


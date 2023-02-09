// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var istQuestion = document.getElementById("istQuestion");
var city = prompt("please enter name of city")
if (city == "Karachi") {
    istQuestion.innerHTML += "Welcome to city of lights" + "<br>"
}
else {
    alert("Karachi chal karachi chal")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var secQuestion = document.getElementById("secQuestion");
var gender = prompt("what is your gender")
if (gender == "male") {
    secQuestion.innerHTML += "Good Morning Sir" + "<br>"
}
else if (gender == "female") {
    secQuestion.innerHTML += "Good Morning Sir" + "<br>"
}
else {
    alert("Out Of Scope");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
var thirdQuestion = document.getElementById("thirdQuestion");
var light = prompt("What is the color of traffic light, RED , ORANGE or GREEN?");
if (light == "red") {
    thirdQuestion.innerHTML += "STOP ! let Others Go" + "<br>"
}
else if (light == "orange") {
    thirdQuestion.innerHTML += "GET READY ! Your Turn next" + "<br>"
}
else if (light == "Green") {
    thirdQuestion.innerHTML += "Go Go Go  ! The wait s over" + "<br>"
}

else {
    alert("something went Wrong, Please Try Again")
}


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fourthQuestion = document.getElementById("fourthQuestion");
var Petrol = prompt("How much foel is left in the car?");
 if (Petrol <= 0.25) {
    fourthQuestion.innerHTML += "Please refill the fuel in your car" + "<br>"
}

else {
    alert("Keep Going")
}



 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}


if("car" < "cat"){
alert("car is smaller than cat");
}

// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:



var Computer = prompt("Enter Marks Obtained In Computer science");
var Biology = prompt("Enter Marks Obtained In Biology");
var Chemistry = prompt("Enter Marks Obtained In Chemistry");
var totalMarks = 300;
var ObtainedMarks = parseInt( Computer) + parseInt(Biology)  + parseInt(Chemistry);
var TotalPtage = (totalMarks/ObtainedMarks) * 100;
var grade = true;
var remarks = true;
var fifthQuestion = document.getElementById("fifthQuestion");
if(TotalPtage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if(TotalPtage >= 70  && TotalPtage <80){
    grade = "A";
    remarks = "Good";
}
else if(TotalPtage >= 60  && TotalPtage <70){
    grade = "B";
    remarks = "You Need To Improve";
}
else if(TotalPtage < 60 ){
    grade = "Fail";
    remarks = "You Need To Improve";
}
else{
alert("Incorrect Inputs")
}







fifthQuestion.innerHTML += "Total Marks: "+ totalMarks+"<br>"+
                            "Marks Obtained: "+ ObtainedMarks+"<br>"+
                            "Percentage: "+TotalPtage+"%"+"<br>"+
                            "Grade: "+grade+"<br>"+
                            "Remarks: "+remarks+"<br>"


//                     7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var SecretNumber = 6;
var guessNumber  = prompt("Guess the number");
var sixthQuestion = document.getElementById("sixthQuestion");

if(SecretNumber === guessNumber){
sixthQuestion.innerHTML += "Bingo! Correct answer"+"<br>"
}
else if (guessNumber == secQuestion+1 || guessNumber == secQuestion+1){
    sixthQuestion.innerHTML += "Close enough to the correct answer"+"<br>"
}
else{
    sixthQuestion.innerHTML += "Incorrect answer"+"<br>"
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var seventhQuestion = document.getElementById("seventhQuestion");
var inputNumber = prompt("enter number to check divisible by 3");

if(inputNumber%3==0){
    seventhQuestion.innerHTML += inputNumber +" is divible by 3"+"<br>"
}
else{
    seventhQuestion.innerHTML += inputNumber +" is Not divible by 3"+"<br>"
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var eightQuestion = document.getElementById("eightQuestion");
var checkNumber = prompt("Input Number to check Even or Odd")


if(checkNumber%2 == 0){
    eightQuestion.innerHTML  += checkNumber + " is an even number"
}
else if (checkNumber%2 !== 0){
    eightQuestion.innerHTML  += checkNumber + " is an Odd number"
}
else{
    alert("Please enter a valid number")
}

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

const firstNumber = parseFloat(prompt("Enter first number: "));
const secondNumber = parseFloat(prompt("Enter second number: "));
const operations = prompt("Enter operation (+, -, *, /, %): ");
var ninthQuestion = document.getElementById("ninthQuestion");

if (operations === '+') {

  ninthQuestion.innerHTML += "Result: "+parseFloat(firstNumber + secondNumber)  + "<br>"
} else if (operations === '-') {

  ninthQuestion.innerHTML += "Result: "+parseFloat(firstNumber - secondNumber)  + "<br>"
} else if (operations === '*') {

  ninthQuestion.innerHTML += "Result: "+parseFloat(firstNumber * secondNumber ) + "<br>"
} else if (operations === '/') {
 
  ninthQuestion.innerHTML += "Result: "+ parseFloat(firstNumber / secondNumber)  + "<br>"
} else if (operations === '%') {

  ninthQuestion.innerHTML += "Result: "+ parseFloat( firstNumber % secondNumber) + "<br>"
} else {
    ninthQuestion.innerHTML += "Invalid operator";

}


// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var Question1 = document.getElementById("Question1");
var cherec = prompt("enter one cherecter a number , symbol or a string");
var characCode = [];

for (let x = 0; x < cherec.length ; x++ )
{
    characCode.push(cherec.charCodeAt(x));
}
Question1.innerHTML += characCode+"<br>"

if ()



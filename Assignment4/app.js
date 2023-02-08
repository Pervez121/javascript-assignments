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



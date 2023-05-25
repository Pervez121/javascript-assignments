// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.



function fullName() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var answerOne = document.getElementById("answer1");
    console.log(firstName, lastName, answerOne);
    answerOne.innerHTML = firstName + " " + lastName;
}


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

function mobileName(){
    var mobileModel = document.getElementById("mobilePhone").value;
    var answerTwo = document.getElementById("answer2");
    console.log(mobileModel)
    answerTwo.innerHTML ="my favorite phone is " + mobileModel + " " + "<br>"+"The length is: "+mobileModel.length;
}

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var word = prompt("enter a word to find inder of any number");
var latter = prompt("enter the latter to find its index");
var latterIndex = word.indexOf(latter);
var answerThree = document.getElementById("answer3");
answerThree.innerHTML = "String : "+latter + "<br> index of "+ latter + "= "+latterIndex;

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word = "Hello World";
var letter =  "l"
var lastIndex = word.lastIndexOf(letter);
var answerFour = document.getElementById("answer4");
answerFour.innerHTML = "String : "+letter + "<br>last index of "+ letter + "= "+lastIndex;

// 6. Repeat Q1 using string concat() method.

let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);


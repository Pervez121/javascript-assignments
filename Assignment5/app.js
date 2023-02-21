// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

// var students = [];
// console.log(students);

// // 2. Declare an empty array using JS object notation to store
// // student names in future.

// const OBstudents = new Array();

// // OBstudents[0] = "pervez";
// // OBstudents[1] = "Iqbal";
// // OBstudents[2] = "Shah";
// // OBstudents[3] = "Hunzai";

// // 3. Declare and initialize a strings array.
// var strings = ["orange", "Banna", "grapes"]

// // 4. Declare and initialize a numbers array.
// var booleanArray  =[ true , false , false , true]

// // 6. Declare and initialize a mixed array.

// var mixedArray = [true , 1 , "hello"]

// // Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser

// var education = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
// console.log(education)
// var answerSeven = document.getElementById("answerSeven");
// answerSeven.innerHTML += "<h2> Qualifications</h3>" +"<br>"
// for(x=0; x<education.length; x++  ){
//     answerSeven.innerHTML += x + ") " + education[x] +  "<br>"
// }


// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// var answerEight = document.getElementById("answerEight");
// students = ["pervez" , "Iqbal" , "Shah"];
// var score = ["320" , "230" , "480"]

// answerEight.innerHTML+= "Score of "+students[0]+ " is " + score[0]+ "percentage: " + ((score[0]/500)*100)+"%"+ "<br>"+
//                         "Score of "+students[1]+ " is " + score[1]+ "percentage: " + ((score[1]/500)*100)+"%"+ "<br>"+
//                         "Score of "+students[2]+ " is " + score[2]+ "percentage: " + ((score[2]/500)*100)+"%"+ "<br>"

//                         console.log(students , score)


// // 9. Initialize an array with color names. Display the array elements in your browser.
// // a. Ask the user what color he/she wants to add to the beginning & add that color to the
// //    beginning of the array. Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end & add that color to the end of
// //    the array. Display the updated array in your browser.
// // c. Add two more color to the beginning of the array. Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated array in your browser.
// // e. Delete the last color in the array. Display the updated array in your browser.
// // f. Ask the user at which index he/she wants to add a color  & color name. Then add the
// //    color to desired position/index. Display the updated array in your browser.
// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she
// //    wants to delete. Then remove the same number of color(s) from user-defined
// //    position/index. . Display the updated array in your browser.

// var colors = ["yellow" , "red" , "green" , "blue" , "brown" , "gray"]

// var answerNine = document.getElementById("answerNine");
// answerNine.innerHTML += colors + "<br>"

// var addColor = prompt("enter the name of color that you want to enter");

// colors.push(addColor);
// answerNine.innerHTML += colors + "<br>"

// addColor = prompt("add colors at the begning of array")
// colors.unshift(addColor)
// answerNine.innerHTML += colors + "<br>"



// delColor = prompt("do you want to delete the color from the start");
// delColor = "yes"?  colors.shift(addColor) : console.log("no color deleted")
// answerNine.innerHTML += colors + "<br>"

// alert("now deleteing last item");

// colors.pop();
// answerNine.innerHTML += colors + "<br>"
// var insertColor = prompt("at which would you like to add color from 0 to the end of array");
// var addColor = prompt("enter the name of color ")

// colors.splice(insertColor , 0, addColor);
// console.log(addColor , insertColor , colors)

// answerNine.innerHTML += colors + "<br>"

// var colorIndex = prompt("From which would you like to remove color from 0 to the end of array")
//     delColor = prompt("how many colors would you like to delete")
// colors.splice(colorIndex, delColor )

// answerNine.innerHTML += colors + "<br>"

// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.
// var answerTen = document.getElementById("answerTen");

// score = ["320" , "230" , "480" , "120"]


// answerTen.innerHTML += "Score Of Students: "+ score +"<br>"+"ordered scores of students: "+score.sort()+"<br>"

// // 11. Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities
// // array.

// var answerEleven = document.getElementById("answerEleven");
// var cities = ["islamabad" , "karachi" , "Lahore", "Rawalpindi" , "peshawar"]
// var selectedCities = cities.slice(0, 2)
// answerEleven.innerHTML += selectedCities + "<br>"
// console.log(selectedCities);


// // 12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)

// var answerTwelve = document.getElementById("answerTwelve");
// var arr = ["This ", " is ", " my " , "cat"];
// answerTwelve.innerHTML +=  (arr.join()) + "<br>"
// answerTwelve.innerHTML +=  (arr.join(" "))

// // 13. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// var answerThirteen = document.getElementById("answerThirteen");
// var computer = ["cpu" , "moniter" , "keyboard" , "mouse"]
// answerThirteen.innerHTML += "<h2>Out</h2> <br>" + (computer.shift()) + "<br>"
// answerThirteen.innerHTML += "<h2>Out</h2> <br>" + (computer.shift()) + "<br>"
// answerThirteen.innerHTML += "<h2>Out</h2> <br>" + (computer.shift()) + "<br>"
// answerThirteen.innerHTML += "<h2>Out</h2> <br>" + (computer.shift()) + "<br>"

// // Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last In-
// // First Out)

// var answerFourteen = document.getElementById("answerFourteen");
// var Pens = []
// Pens.push("black Pen");
// Pens.push("red Pen ");
// Pens.push("Blue pen");
// Pens.push("Green Pen");


// var arr = ["apple" , "ball" , "cat"]
// var newArr = arr;
// newArr.push("dog")
// console.log(arr)
// console.log(newArr) 

// function getData (){
//     var name = document.getElementById('name').value
//     var para = document.getElementById('data')
//     reverseString = name.split('').reverse().join('')
//     if(name===reverseString){
//          para.innerHTML = "Its Palindrome"
//     }
//     else{
//         para.innerHTML = "Its not Palindrome"
//     }


// }

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var multiArr = [["apple", "banana"], ["carrot", "tomatto"]]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

var answerFourteen = document.getElementById("answerFourteen");
answerFourteen.innerHTML += matrix[0] + "<br>" + matrix[1] + "<br>" + matrix[2]
console.log(matrix[0], matrix[1], matrix[2])


// 3. Write a program to print numeric counting from 1 to 10.

var answerFifteen = document.getElementById("answerFifteen");
for (var a = 1; a <= 15; a++) {
    answerFifteen.innerHTML += a + "<br>";
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
function PrintTable() {
    var input1 = parseInt(document.getElementById("tableNumber").value);
    var input2 = parseInt(document.getElementById("tableLength").value);

    var tableNumber = parseInt(input1);
    var tableLength = parseInt(input2);

    var answerSixteen = document.getElementById("answerSixteen");
    if (!isNaN(tableLength) && !isNaN(tableNumber)) {
        for (var num = 0; num <= tableLength; num++) {
            answerSixteen.innerHTML += tableNumber + " * " + num + " = " + tableNumber * num + "<br>"
            console.log("done 0")
        }


    }
    else {
        console.log("please inter corrrect numbers")
    }
}


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var answerSeventeen = document.getElementById("answerSeventeen");
for (x = 0; x <= fruits.length - 1; x++) {
    answerSeventeen.innerHTML += fruits[x] + "<br>"
}
answerSeventeen.innerHTML += "Element At Index 0 is " + fruits[0] + "<br>" +
    "Element At Index 1 is " + fruits[1] + "<br>" +
    "Element At Index 2 is " + fruits[2] + "<br>" +
    "Element At Index 3 is " + fruits[3] + "<br>";

// 6. Generate the following series in your browser. See                             
//example output.
//      a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//      b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//      c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//      d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//      e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var labelOne = document.getElementById("labelOne");
var quesOne = document.getElementById("quesOne");
labelOne.innerHTML += "A. Counting"
for (count = 0; count <= 15; count++) {
    quesOne.innerHTML += count+","
    console.log(count)
}
var labeltwo = document.getElementById("labeltwo");
var questwo = document.getElementById("questwo");
labeltwo.innerHTML += "B. Reverse counting"
for (count = 10; count >= 0; count--) {
    questwo.innerHTML += count+","
    console.log(count)
}
var labelthree = document.getElementById("labelthree");
var questhree = document.getElementById("questhree");
labelthree.innerHTML += "C. Even"
for( count = 0 ; count <= 20 ; count+=2){
    questhree.innerHTML += count+","
    console.log(count)
}

var labelfour = document.getElementById("labelfour");
var quesfour = document.getElementById("quesfour");
labelfour.innerHTML += "D. odd"
for( count = 1 ; count <= 20 ; count+=2){
    quesfour.innerHTML += count+","
    console.log(count)
}

var labelfive = document.getElementById("labelfive");
var quesfive = document.getElementById("quesfive");
labelfive.innerHTML += "E. Series"
for( count = 0 ; count <= 20 ; count= count+2){
    quesfive.innerHTML += count+"k"+","
    console.log(count)
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var Bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
function searchWord(){
  var search = document.getElementById("search").value;
  var available = false;
  for(a = 0 ; a < Bakery.length ; a++){
  if(search == Bakery[a]){
    available = true;
    break;
  }
  else{
    available;
  }
}
  available == true? alert(search + " Available at shelve no "+ [a]  ): alert( search + " Not Available")
}

// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var numbers = [24, 53, 78, 91, 12];

var largest = numbers[0]
var smallest =numbers[numbers.length-1]

for(count = 0 ; count < numbers.length ; count++){
    if(numbers[count] > largest){
        largest = numbers[count]
    }
    else if (numbers[count] < smallest){
        smallest = numbers[count]
    }
}
console.log("largest number: "+ largest)
console.log("Smallest number: "+ smallest)


// 10. Write a program to print multiples of 5 ranging 1 to 100.


// var fiveMultifles;
// for(mult = 0 ; mult <= 100 ; mult++){
//     fiveMultifles = num % 
// }









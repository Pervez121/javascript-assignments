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

function getData (){
    var name = document.getElementById('name').value
    var para = document.getElementById('data')
    reverseString = name.split('').reverse().join('')
    if(name===reverseString){
         para.innerHTML = "Its Palindrome"
    }
    else{
        para.innerHTML = "Its not Palindrome"
    }

    
}





























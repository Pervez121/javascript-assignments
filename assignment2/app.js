// 1. Declare a variable called username.
var  username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

var myName = "Pervez Iqbal";
document.write(myName);

// Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;
message = "hello world";
alert (message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.


var sName = "pervez Iqbal";
var sAge = 27;
var sQulaification = "BS";
alert("name of student is "+sName+" he is "+sAge+" years old "+" and his Qualification is "+sQulaification);

// 5. Write a script to display the following alert using one JS variable

var pizza = "pizza\npizz\npiz\npi\np"
alert(pizza);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "frontend921@gmail.com";
alert("my email address is "+ email)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
alert(book);

// 8. Write a script to display this in browser through JS

document.write("yeah! I can write HTML content throught Javascript" +"<br>")

// CHAPTER 4

// 1. Declare 3 variables in one statement.

var hi = 1 , hello = 2, howdy = 3;

// 2. Declare 5 legal & 5 illegal variable names.
// var my veriable = 10;
// var my%veriable = 10;
// var alert = 10;
// var 123 = "my name";
// var @name = "name";

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable

var rule1 = ("letters");
var rule2 = ("numbers");
var rule3 = ("dollar signs");
var rule4 = ("underscores.");

var name1 = " - ", name2 = " $ ", name3=" numbers ";
var camelCase = "Camel Case";
var keywords = "KeyWords"


document.write(rule1 +"<br>"+ rule2 +"<br>"+ rule3 +"<br>"+ rule4)
document.write("<h1>Rules for naming JS variables</h1>"+"<br>"+" <li> A: Variable names can only contain "+rule1+" "+rule2+" "+rule3+" and "+rule4+"</li><br>")
document.write("<li>B: Variables must begin with "+name1+", "+name2+" and "+name3+", For example $name, _name or name"+"</li><br>")
document.write("<li>C: Variables names are "+camelCase+"</li><br>")
document.write("<li>C: Variables names Should not be JS "+keywords+"</li><br>")







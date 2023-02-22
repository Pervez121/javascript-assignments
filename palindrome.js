var input = prompt("enter a palindrome word");
 input.split("").reverse().join("") === input ? alert("true") : alert("false");

var input = prompt("enter a palindrome word");
var ulta = "";

for(var a = input.length-1 ; a >= 0 ; a--)
{
    ulta = ulta+input[a] 
}
if(input === ulta){
    alert("this is a palindrome");
}
else{
    alert("this is not a Palindrome")
}
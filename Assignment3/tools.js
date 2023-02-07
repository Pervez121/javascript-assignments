function calculateCelsius(event) {
    event.preventDefault();
    var Fahrenhiet = document.getElementById("Fahrenhiet-input").value;
    var FahrenhietValue = parseFloat(Fahrenhiet);
    var CelciusResultDiv = document.getElementById("celciusResult");
    if (!isNaN(FahrenhietValue)) {
        var toCelsius = ((FahrenhietValue - 32) * 5 / 9)
        CelciusResultDiv.innerHTML += toCelsius;
    }
    else {
        alert("please enter a numeric value")
    }
}
function calculateFahrenheit(event) {
    event.preventDefault();
    var celsius = document.getElementById("celsius-input").value;
    var celsiusValue = parseFloat(celsius);
    var fahrenhietResultDiv = document.getElementById("fahrenheitResult");
    if (!isNaN(celsiusValue)) {
        var toFahrenhiet = ((celsiusValue * 9 / 5) + 32);
        fahrenhietResultDiv.innerHTML += toFahrenhiet;
    }
    else {
        alert("please enter a numeric value")
    }
}

function calculatehpAmount(event){
    event.preventDefault();
    var hpAmount  =  parseInt(document.getElementById("hpAmount").value);
    var envyAmount  = parseInt( document.getElementById("envyAmount").value);
    var toshibaAmount  = parseInt( document.getElementById("toshibaAmount").value);
    var numOfProducts = parseInt(document.getElementById("quantity").value)
    var amountDiv = document.getElementById("amount")
    if (!isNaN(hpAmount) && !isNaN(numOfProducts)) {
        console.log(hpAmount , numOfProducts)
      var  totalAmount = hpAmount * numOfProducts
        amountDiv.innerHTML += "Total Cost Of Your Order Is: " + totalAmount;    

    }
    else
    {
        alert("enter valid values")
    }




}



let totalMarks = 980;
let obtainedMarks = 804;
let percentage = (obtainedMarks/totalMarks)*100;

let marksBox = document.getElementById("marks");

marksBox.innerHTML += "Total Marks: "+totalMarks+"<br>"+"Obtained Marks: "+obtainedMarks+"<br>"+"Percantage: "+percentage+"%"




let usDollers = 10;
let saudiRiyal = 25;

let pkr = (usDollers * 275) + (saudiRiyal * 73.34)

let currency = document.getElementById("currency");
currency.innerHTML += "Total Currency in PKR: "+pkr;



let currentYear = new Date().getFullYear();
let dob = 1996;

const age = currentYear - dob;
let ageBox =  document.getElementById("ageBox");
ageBox.innerHTML += "Current Year: "+currentYear+"<br>"+"Birth Year: "+dob+"<br>"+"You Age is: "+age;




let radius = 20;
let circumferance = 2*3.14*radius;
let areaOfCircle = 3.14*(radius*radius);

let geomatizerBox =  document.getElementById("geomatizerBox");
geomatizerBox.innerHTML += "Radius Of Circle: "+radius+"<br>"+"The Circumferance of Circle: "+circumferance+"<br>"+"The Area Of Circle is : "+areaOfCircle;


let favoriteSnack = "Pizza";
let currentAge = 26;
let maximuxAge = 90;
let pizzaPerMonth = 2;
let lifeTimePizza = ((maximuxAge - currentAge)*12 ) * 2;
let supplyCalculator = document.getElementById("supplyCalculator")
supplyCalculator.innerHTML +="Favorite Fast Food: "+favoriteSnack+"<br>"+"Current Age: "+currentAge+"<br>"+"Estimated Maximum Age: "+maximuxAge+"<br>"+"Amount Of Snacks Per Month: "+pizzaPerMonth+"<br>"+ "“You will need "+lifeTimePizza+ " to last you until the ripe old age of "+maximuxAge;
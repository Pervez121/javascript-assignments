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
        totalAmount = hpAmount * numOfProducts
        amountDiv.innerHTML += "Total Cost Of Your Order Is: " + totalAmount;    

    }
    else
    {
        alert("enter valid values")
    }




}


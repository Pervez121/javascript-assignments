function calculate(event) {
    event.preventDefault();
    var input1 = document.getElementById("Table-value").value;
    var input2 = document.getElementById("Range-value").value;
    var tableNum = parseInt(input1);
    var tableRange = parseInt(input2);
    var resultDiv = document.getElementById("result");

    if (!isNaN(tableNum) && !isNaN(tableRange)) {
        resultDiv.innerHTML = "Table of " + tableNum + "<br>";
        for (x = 0; x <= tableRange; x++) {
            var result = tableNum * x;
            resultDiv.innerHTML += tableNum + " X " + x + " = " + result + " <br>";
        }
    } else {
        alert("Please enter table number and Range");
    }
}
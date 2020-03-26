let resultConversion = document.getElementById("resultConversion");


function convertIntoMiles() {
     let kmInput = parseInt(document.getElementById("km").value);
     let convertedMiles = kmInput * 0.62;

     resultConversion.textContent = kmInput + " km" + " are " + convertedMiles + " miles.";
}

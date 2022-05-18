// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";





var pw = "";




function generatePassword() {
  var passwordLength = prompt("Please enter a number: ", "0");
  var pLength = parseInt(passwordLength);
  for (let index = 0; index <= (pLength - 1); index++) {
    var randomNumber = Math.floor(Math.random()*characters.length)
    pw += characters.substring(randomNumber,randomNumber + 1)
    console.log(pw);
    
  }
}




// Write password to the #password input
function writePassword() {
  var pw = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

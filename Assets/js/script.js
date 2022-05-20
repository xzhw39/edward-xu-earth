// Global variable assignment

var generateBtn = document.querySelector("#generate");
var numericCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";

// Prompts for user's choice of password length

function userPasswordLength(){
  var passwordLength = prompt("Length of your password (no more than 128 characters): ", "");
  var lengthInt = parseInt(passwordLength);
  return lengthInt;
}

// Prompts for user's choice of password characters used

function userPasswordBank(){
  var lowercaseChosen = window.confirm("Click OK if your would like your password to contain lowercase characters.");
  var uppercaseChosen = window.confirm("Click OK if your would like your password to contain uppercase characters.");
  var numericChosen = window.confirm("Click OK if your would like your password to contain numeric characters.");
  var specialChosen = window.confirm("Click OK if your would like your password to contain special characters.");

// Combine password to form a single string (password bank) based on user's choice

  if (lowercaseChosen && uppercaseChosen && numericChosen && specialChosen) {
    passwordBank = lowercaseCharacters + uppercaseCharacters + numericCharacters + specialCharacters;
  }
  else if (lowercaseChosen && uppercaseChosen && numericChosen) {
    passwordBank = lowercaseCharacters + uppercaseCharacters + numericCharacters;
  }
  else if (lowercaseChosen && uppercaseChosen && specialChosen) {
    passwordBank = lowercaseCharacters + uppercaseCharacters + specialCharacters;
  }
  else if (lowercaseChosen && numericChosen && specialChosen) {
    passwordBank = lowercaseCharacters + numericCharacters + specialCharacters;
  }
  else if (uppercaseChosen && numericChosen && specialChosen) {
    passwordBank = uppercaseCharacters + numericCharacters + specialCharacters;
  }
  else if (lowercaseChosen && uppercaseChosen) {
    passwordBank = lowercaseCharacters + uppercaseCharacters;
  }
  else if (lowercaseChosen && numericChosen) {
    passwordBank = lowercaseCharacters + numericCharacters;
  }
  else if (lowercaseChosen && specialChosen) {
    passwordBank = lowercaseCharacters + specialCharacters;
  }
  else if (uppercaseChosen && numericChosen) {
    passwordBank = uppercaseCharacters + numericCharacters;
  }
  else if (uppercaseChosen && specialChosen) {
    passwordBank = uppercaseCharacters + specialCharacters;
  }
  else if (numericChosen && specialChosen) {
    passwordBank = numericCharacters + specialCharacters;
  }
  else if (lowercaseChosen) {
    passwordBank = lowercaseCharacters;
  }
  else if (uppercaseChosen) {
    passwordBank = uppercaseCharacters;
  }
  else if (numericChosen) {
    passwordBank = numericCharacters;
  }
  else if (specialChosen) {
    passwordBank = specialCharacters;
  }
  return passwordBank;
}

//Generate password via concatenating string through for loop

function generatePassword() {
  var length = userPasswordLength();
  if (length > 128) {
    return "Your password is too long!";
  }
  else {
    var bank = userPasswordBank();
    var passwordBankLength = bank.length;
    var passwordGenerated = "";
    for (let i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random()*passwordBankLength);
      var select = bank[randomNumber];
      passwordGenerated += select;
    }
    return passwordGenerated;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







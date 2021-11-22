// Assignment code here
// adding constant string containers for all symbols  
const specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const numbersString = "0123456789";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerString = "abcdefghijklmnopqrstuvwxyz";


var generatePassword = function(){

  // ask if yser would like to add special characters numbers or letters
  var promptChar = window.confirm("Would you like to add any special characters to your password such as " + specialCharacters + " symbols Enter 'Yes' or 'No'");
  if (promptChar === "" || promptChar === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  var promptNumb = window.prompt("Would you like to add any number to your password such as " + numbersString +" numbers Enter 'Yes' or 'No'");
  var promptUpper = window.prompt("Would you like to add any uppercase latters to your password such as " + upperString + " latters Enter 'Yes' or 'No'");
  var promptLower = window.prompt("Would you like to add any lowerercase latters to your password such as " + lowerString + " latters Enter 'Yes' or 'No'");




  return specialCharacters;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// adding constant string containers for all symbols  
const specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const numbersString = "0123456789";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerString = "abcdefghijklmnopqrstuvwxyz";

// adding content for password generator function
var generatePassword = function(){
  // each time when user will click button we need to reset passward
  var password = "";
  var passwordDemo = "";
  var criteriaCount = 0; 

  // ask for password length
  var passwordLength = window.prompt("Choose the length of password! enter length betwin 8 and 128");

  //if entered not integer
  switch(isNaN(passwordLength)){
    case true:
      window.alert("You need to provide a valid answer! Please try again.");
      generatePassword();
      break;
    case false:
      if(parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128){
        window.alert("You need to provide a valid answer! Please try again.");
        return generatePassword();
      }
      break;
  }
  
  // ask if user would like to add special characters numbers or letters
  var promptChar = window.confirm("Would you like to add any special characters to your password such as " + specialCharacters + " symbols Enter 'OK' or 'Cancel'");
  var promptNumb = window.confirm("Would you like to add any number to your password such as " + numbersString +" numbers Enter 'OK' or 'Cancel'");
  var promptUpper = window.confirm("Would you like to add any uppercase latters to your password such as " + upperString + " latters Enter 'OK' or 'Cancel'");
  var promptLower = window.confirm("Would you like to add any lowerercase latters to your password such as " + lowerString + " latters Enter 'OK' or 'Cancel'");
  
  // ask for at least one criteria
  while(promptChar === false && promptNumb === false && promptUpper === false && promptLower === false){
    window.alert("You need to accept at least one caracter");
    var promptChar = window.confirm("Would you like to add any special characters to your password such as " + specialCharacters + " symbols Enter 'OK' or 'Cancel'");
    var promptNumb = window.confirm("Would you like to add any number to your password such as " + numbersString +" numbers Enter 'OK' or 'Cancel'");
    var promptUpper = window.confirm("Would you like to add any uppercase latters to your password such as " + upperString + " latters Enter 'OK' or 'Cancel'");
    var promptLower = window.confirm("Would you like to add any lowerercase latters to your password such as " + lowerString + " latters Enter 'OK' or 'Cancel'");
  };

  // counting criterias
  if(promptChar){
    criteriaCount = criteriaCount + 1;
    passwordDemo = passwordDemo + specialCharacters;
  };
  if(promptNumb){
    criteriaCount = criteriaCount + 1;
    passwordDemo = passwordDemo + numbersString;
  };
  if(promptUpper){
    criteriaCount = criteriaCount + 1;
    passwordDemo = passwordDemo + upperString;
  };
  if(promptLower){
    criteriaCount = criteriaCount + 1;
    passwordDemo = passwordDemo + lowerString;
  };


  // for(var i = 0 ; i < parseInt(passwordLength); i++){
  //   passwordDemo[i] =  numbersString[Math.floor(Math.random()*numbersString.length + 1)];
  // }

  // for(var i = 0 ; i < parseInt(passwordLength); i++){
  //   passwordDemo[i] =  specialCharacters[Math.floor(Math.random()*specialCharacters.length + 1)];
  // }

  // generate random password by selected criteria
  for(var i = 0 ; i < parseInt(passwordLength); i++){
    var rnum = Math.floor(Math.random() * passwordDemo.length);
    password = password + passwordDemo.substring(rnum,rnum+1);
  }

  // returning generated password 
  return password;
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

// Assignment Code
var generateBtn = document.querySelector("#generate");

let pwlength = prompt("How many characters would you like in your password?")


function generatePassword(){










  
return "test";

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
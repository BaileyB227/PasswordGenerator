// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
  let pwlength = prompt("How many characters would you like in your password?");
  
  let upperC = confirm("Do you want uppercase letters?");
  
  let lowerC = confirm("Do you want lowercase letters?");
  
  let numericC = confirm("Do you want numbers?");
  
  let specialC = confirm("Do you want special characters?");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

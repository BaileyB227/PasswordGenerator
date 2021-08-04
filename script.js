// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  let pwlength = prompt("How many characters would you like in your password?");

  while (pwlength < 8 || pwlength > 128 || isNaN(pwlength)){
    alert("Length must be between 8-128 characters");
    pwlength = prompt("How many characters would you like in your password?");
  }
  
  let upperC = confirm("Do you want uppercase letters?");
  
  let lowerC = confirm("Do you want lowercase letters?");
  
  let numericC = confirm("Do you want numbers?");
  
  let specialC = confirm("Do you want special characters?");

  while (!upperC && !lowerC && !numericC && !specialC){
    alert("You must choose at least 1 criteria!");
    upperC = confirm("Do you want uppercase letters?");
    lowerC = confirm("Do you want lowercase letters?");
    numericC = confirm("Do you want numbers?");
    specialC = confirm("Do you want special characters?");
  }

  let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  let special = ["!", "#", "$", "%", "&", "*", "+", "@", "^"]

  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

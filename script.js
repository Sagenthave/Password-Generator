// Assignment code here

var length;
var confirmNumber;
var confirmCharacter;
var confirmUpperLetter;
var confirmlowerLetter;
var password = []

symbols = ["@", "!", "#", "$", "%", "^", "&", "*", " ?"];
lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numbers = ["0","1","2","3","4","5","6","7","8","9",];

function passwordOptions() { //originally has it has generate password
  length = parseInt(prompt("How long would you like your password?"));
  if (!lenght|| characterLength < 8 || characterLength > 128) {
    alert("Enter valid number!")
  } else {
  // add confirm here 4 (Tutor notes)
    confirmNumber = confirm("Would you like numbers in your password?");
    confirmCharacter = confirm("Would you like symbols in your password?");
    confirmUpperLetter = confirm("Would you like uppercase letters in your password?");
    confirmlowerLetter = confirm("Would you like lowercase letters in your password?");
  };
  if (!confirmCharacter && !confirmNumber && !confirmUpperLetter && !confirmlowerLetter &&) {
    option = alert ("Please try again")
  }
// All 4 selected
  else if (confirmCharacter && confirmNumber && confirmUpperLetter && confirmlowerLetter) {
    option = concat(symbols, lowerLetters, upperLetters, numbers);
  }
// 3/4 options selected
  else if (confirmCharacter && confirmNumber && confirmUpperLetter) {
    option = concat(symbols, numbers, upperLetters)
  }
  else if (confirmCharacter && confirmNumber && confirmlowerLetter) {
    option = concat(symbols, numbers, lowerLetters)
  }
  else if (confirmCharacter && confirmUpperLetter && confirmlowerLetter) {
    option = concat(symbols, upperLetters, lowerLetters)
  }
  else if (confirmNumber && confirmUpperLetter && confirmlowerLetter) {
    option = concat(numbers, upperLetters, lowerLetters)
  }
// 2/4 options selected
  else if (confirmCharacter && confirmNumber) {
    option = concat(symbols, numbers)
  }
  else if (confirmCharacter && confirmUpperLetter) {
    option = concat(symbols, upperLetters)
  }
  else if (confirmCharacter && confirmlowerLetter) {
    option = concat(symbols && lowerLetters)
  }
  else if (confirmNumber && confirmUpperLetter) {
    option = concat(numbers, upperLetters)
  }
  else if (confirmNumber && confirmlowerLetter) {
    option = concat(numbers, lowerLetters)
  }
  else if (confirmUpperLetter && confirmlowerLetter) {
    option = concat(upperLetters && lowerLetters)
  }
// 1/4 options selected
  else if (confirmCharacter) {
    option = symbols
  }
  else if (confirmNumber) {
    option = numbers
  }
  else if (confirmUpperLetter) {
    option = upperLetters
  }
  else if (confirmlowerLetter) {
    option = lowerLetters
  }
};

function generatePassword () {

}
//Tutor taught me this but I don't know what to do here
var option = password.join("") 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

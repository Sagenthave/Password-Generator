// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//All the arrays that the user can have access to to generate a random password
var symbols = ["@", "!", "#", "$", "%", "^", "&", "*", "?"];
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

//Created generate password function that was missing in the starter code
function generatePassword() {
  var userLength = ""; 
  var inputLength = window.prompt("What length would you like for your password? 8-128 characters.");
  Number(inputLength); //Insert a value to generate a password length
  if (inputLength < 8 || inputLength > 128) {
    alert ("Please enter a valid number from 8-128"); 
    return; // if invalid number was entered the code will not continue
  } else if (inputLength <= 128 && inputLength >= 8 ) {
    userLength=inputLength;
  } else {
    return;
  }
  var charArr = []; //array for randomized characters
  var newPassword = ""; //for the new generated password
  //four confirms 
  var confirmSymbols = window.confirm("Would you like symbols in your password?");
  var confirmNumbers = window.confirm("Would you like numbers in your password?");
  var confirmLowerLetters = window.confirm("Would you like lowercase letters in your password?");
  var confirmUpperLetters = window.confirm("Would you like uppercase letters in your password?");
  //pushing 
  if (confirmSymbols) {
    charArr.push("@", "!", "#", "$", "%", "^", "&", "*", "?"); 
  }
  if (confirmNumbers) {
    charArr.push("0","1","2","3","4","5","6","7","8","9");
  }
  if (confirmLowerLetters) {
    charArr.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }
  if (confirmUpperLetters) {
    charArr.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  } else if (!confirmSymbols && !confirmNumbers && !confirmLowerLetters && !confirmUpperLetters) {
    window.alert("Invalid Response: Please select a valid input");
  } 
//For loop will generate a random character and add it to the empty newPassword string
  for (i=0; i < userLength; i++) {
    var randomChar = charArr[Math.floor(Math.random() * charArr.length)];
    newPassword = newPassword + randomChar;
  }
  return newPassword;
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
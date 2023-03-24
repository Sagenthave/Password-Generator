// Assignment code here

//Kept these options Global so all function can access them
var confirmNumber;
var confirmSymbol;
var confirmUpperLetter;
var confirmlowerLetter;
var resultPassword = [];
var passwordOptions = [];
//All the arrays that the user can have access to to generate a random password
symbols = ["@", "!", "#", "$", "%", "^", "&", "*", " ?"];
lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numbers = ["0","1","2","3","4","5","6","7","8","9",];

//creates a random order for all the arrays together
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex];
  return randomElement
}

//Starting off with requring a certain lengthn
function getPasswordOptions() { 
  var length = parseInt(prompt("How long would you like your password? 8-128"));
  if (!length|| length < 8 || length > 128) {
    alert("Enter valid number between 8-128!")
    return null; //will not progress further without proper numerical length
  } 
  //If entered valid length confirm will ask which criteria user would like
  // add confirm here 4 (Tutor notes)
    confirmNumber = confirm("Would you like numbers in your password?");
    confirmSymbol = confirm("Would you like symbols in your password?");
    confirmUpperLetter = confirm("Would you like uppercase letters in your password?");
    confirmlowerLetter = confirm("Would you like lowercase letters in your password?");
    if (!confirmSymbol && !confirmNumber && !confirmUpperLetter && !confirmlowerLetter) {
      alert ("Please try again")
      return null; //If no criteria is selected no password will be generated
    }
    var passwordOptions = {
      length: length,
      confirmNumber: confirmNumber,
      confirmSymbol: confirmSymbol,
      confirmUpperLetter: confirmUpperLetter,
      confirmlowerLetter: confirmlowerLetter
    };
  return passwordOptions;
}

function generatePassword () {
  var options = getPasswordOptions();
  var resultPassword = [];
  var guranteedChar = [];
  var passwordCritera = [];
  if(!options) return null;
  if(options.confirmNumber){
    passwordCritera = passwordCritera.concat(numbers);
    guranteedChar.push(getRandom(numbers))
  }
  if (options.confirmSymbol){
    passwordCritera= passwordCritera.concat(symbols);
    guranteedChar.push(getRandom(symbols))
  }
  if (options.confirmUpperLetter){
    passwordCritera= passwordCritera.concat(upperLetters);
    guranteedChar.push(getRandom(upperLetters))
  }
  if (options.confirmlowerLetter){
    passwordCritera=passwordCritera.concat(lowerLetters);
    guranteedChar.push(getRandom(lowerLetters))
  }
  //If all 4 options are selected
  if (confirmSymbol && confirmNumber && confirmUpperLetter && confirmlowerLetter) {
    option = guranteedChar.push(symbols, lowerLetters, upperLetters, numbers);
  }
// 3/4 options selected
  if (confirmSymbol && confirmNumber && confirmUpperLetter) {
    options = guranteedChar.push(symbols, numbers, upperLetters)
  }
  if (confirmSymbol && confirmNumber && confirmlowerLetter) {
    options = guranteedChar.push(symbols, numbers, lowerLetters)
  }
  if (confirmSymbol && confirmUpperLetter && confirmlowerLetter) {
    options = guranteedChar.push(symbols, upperLetters, lowerLetters)
  }
  if (confirmNumber && confirmUpperLetter && confirmlowerLetter) {
    options = guranteedChar.push(numbers, upperLetters, lowerLetters)
  }
// 2/4 options selected
  if (confirmSymbol && confirmNumber) {
    options = guranteedChar.push(symbols, numbers)
  }
  if (confirmSymbol && confirmUpperLetter) {
    options = guranteedChar.push(symbols, upperLetters)
  }
  if (confirmSymbol && confirmlowerLetter) {
    options = guranteedChar.push(symbols && lowerLetters)
  }
  if (confirmNumber && confirmUpperLetter) {
    options = guranteedChar.push(numbers, upperLetters)
  }
  if (confirmNumber && confirmlowerLetter) {
    options = guranteedChar.push(numbers, lowerLetters)
  }
  if (confirmUpperLetter && confirmlowerLetter) {
    options = guranteedChar.push(upperLetters && lowerLetters)
  }
// 1/4 options selected
  if (confirmSymbol) {
    options = guranteedChar.push(symbols)
  }
  if (confirmNumber) {
    options = guranteedChar.push(numbers)
  }
  if (confirmUpperLetter) {
    options = guranteedChar.push(upperLetters)
  }
  if (confirmlowerLetter) {
    options = guranteedChar.push(lowerLetters)
  }
};
  var password = resultPassword + passwordOptions;
  for (var i = 0; i < length; i++) {
    console.log("Your random password is: " + resultPassword)
  }
  var possibleChar = ""
  for (var i =0; i < length; i++) {
    var pickvariables = option[Math.floor(Math.random() * options.length)];
    password.push(pickvariables);
    var options = password.join("");
  }

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

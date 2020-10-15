// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyPassBtn = document.querySelector("#copy");

var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var UppLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function createPassword() {
  var lengthOfPw = parseInt(prompt("How long would you like your password to be? Must be between 8 & 128 characters"));

  if (lengthOfPw === false) {
    alert("Must have a value");
  } else if (lengthOfPw < 8 || lengthOfPw > 128) {
    lengthOfPw = parseInt(prompt("Must be in the range between 8 and 128 characters"))
  }
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
// copyPassBtn.addEventListener("click", )

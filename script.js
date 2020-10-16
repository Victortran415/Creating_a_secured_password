var generateBtn = document.querySelector("#generate");
var copyPassBtn = document.querySelector("#copyPW");


// Variables for passwords
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function createPassword() {
  var lengthOfPw = parseInt(prompt("How long would you like your password to be? Must be between 8 & 128 characters"));

  if (lengthOfPw === false) { // <<< not working, need fixing
    alert("Must have a value");
  }
  if (lengthOfPw < 8 || lengthOfPw > 128 || isNaN(length)) {
    alert("Must be in the range between 8 and 128 characters")

  } else {
    var wantSymbols = confirm("Would you like SYMBOLS in your password?")
    var wantNum = confirm("Would you like NUMBERS in your password?")
    var wantUpperLet = confirm("Would you like UPPERCASE LETTER in your password?")
    var wantLowerLet = confirm("Would you like LOWERCASE LETTERS in your password?")

    // If confirmed YES/OK then push variables into Password
    var password = []
    if (wantSymbols === true) {
      password.push(symbols)
    }
    if (wantUpperLet === true) {
      password.push(uppLetter)
    }
    if (wantLowerLet === true) {
      password.push(lowLetter);
    }
    if (wantNum === true) {
      password.push(num)
    }

    
    var randomPW = ""

    while (randomPW.length < lengthOfPw) {
      for (var i = 0; i < password.length; i++) {
        if (randomPW.length < lengthOfPw) {
          var generatedPW = Math.floor(Math.random() * password[i].length);
          randomPW += password[i][generatedPW]
        }
      }
    }
    console.log(randomPW)
  }
}

// added this function to copy PW
function copyToClipboard() {
  copyPassBtn.select()
  document.execCommand("copyToClipboard")
  alert("Your password has been copied to clipboard")
}


// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
copyPassBtn.addEventListener("click", copyToClipboard);


var generateBtn = document.querySelector("#generate");
var copyPassBtn = document.querySelector("#copyPW");
var addPwIntoBox = document.querySelector("#password")


// Variables for passwords
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var emojis = ["😂", "😅", "🤣", "🤮", "🤢", "👀", "🐐", "🍆", "💩", "🥶", "🥳", "🍑", "🚮"]


function createPassword() {

  // identify how long you want the password to be.
  var lengthOfPw = parseInt(prompt("How long would you like your password to be? Must be between 8 & 128 characters"));

  if (!lengthOfPw) { // <<< not working, need fixing
    alert("Must have a value");
  } else if (lengthOfPw < 8 || lengthOfPw > 128 || isNaN(length)) {
    alert("Must be in the range between 8 and 128 characters")
  
  } else {
    // create confirm to see if you want these certain variables in your PW
    var wantSymbols = confirm("Would you like SYMBOLS in your password?")
    var wantNum = confirm("Would you like NUMBERS in your password?")
    var wantUpperLet = confirm("Would you like UPPERCASE LETTER in your password?")
    var wantLowerLet = confirm("Would you like LOWERCASE LETTERS in your password?")
    var wantEmoji = confirm("Would you like EMOJIS in your password?")

    // Must pick at least one, in order to generate password
    if (!wantSymbols && !wantNum && !wantUpperLet && !wantLowerLet && !wantEmoji) {
      alert("Must pick at least one criteria")
    }
    // If confirmed YES/OK push variable into Password, else continue to next variable
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
    if (wantEmoji === true) {
      password.push(emojis)
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
    addPwIntoBox.textContent = randomPW
  }
}

// added this function to copy PW
function copyToClipboard() { 
  addPwIntoBox.select()
  document.execCommand("Copy")
  alert("Your password has been copied to clipboard")
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
copyPassBtn.addEventListener("click", copyToClipboard);

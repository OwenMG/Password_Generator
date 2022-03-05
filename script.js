// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    // Character pool arrays
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
     'y', 'z'];

    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];

    var symbols = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',',
    '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|',
    '}', '~'];

    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
    // User input prompts
    var pwdLength = 0;
    while (pwdLength <8 || pwdLength >128){
      pwdLength = (prompt("How many characters would you like? Please enter a number between 8 and 128"));
          if (isNaN(pwdLength)) {
              while (isNaN(pwdLength)) {
              pwdLength = (prompt("Not a valid number, please enter a valid length."));
              }
          }
        }
    if (confirm("Would you like to use lower case letters?")) {
        var lowerBool = 1;
    }
    else {
        var lowerBool = 0;
    }
    if (confirm("Would you like to use upper case letters?")) {
        var upperBool = 1;
    }
    else {
        var upperBool = 0;
    }
    if (confirm("Would you like to use numbers?")) {
      var numBool = 1;
    }
    else {
      var numBool = 0;
    }
    if (confirm("Would you like to use special characters?")) {
        var symBool = 1;
    }
    else {
        var symBool = 0;
    }
    
    var pool;
    var pull;
    var pwd = '';
    // Password generation
        for (i=0; i < pwdLength; i+0) {
            pull = Math.floor(Math.random() *4)
            if (pull == 0 && lowerBool) {
                pool = Math.floor(Math.random() *26);
                pwd += lowerCase[pool];
                i++;
            }
            else if (pull == 1 && upperBool) {
                pool = Math.floor(Math.random() *26);
                pwd += upperCase[pool];
                i++;
            }
            else if (pull == 2 && symBool) {
                pool = Math.floor(Math.random() * 32);
                pwd += symbols[pool];
                i++;
            }
            else if (pull == 3 && numBool) {
              pool = Math.floor(Math.random() * 10);
                pwd += numbers[pool];
                i++;
            }
            else if (!lowerBool && !upperBool && !symBool)
                i++;
            }
            return pwd;
        }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","_","-","+", "=" ]

var confirmLegth = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confrimSymbols;

function generatePassword() {
  var confirmLegth = (prompt(
    "How many characters would you like in your password? choose between 8 and 128"
    ));
    
    if (confirmLegth < 8|| confirmLegth > 128 ){alert("need to choose between 8 and 128 charters")};
    
    
    
    var confirmLowerCase = confirm(
      "click ok if you would like to include lowercase charters"
      );
      var confirmUpperCase = confirm(
        " Click ok if you would like to include uppercase charters"
        );
        var confirmNumbers = confirm(
          " click ok if you would like to include numbers"
          );
          var confrimSymbols = confirm("click ok if you would like to include symbols");
          if  (confirmLowerCase == false && confirmUpperCase == false && confirmNumbers == false && confrimSymbols
          == false) {alert("one need to be chosen") }
          
          
          var passwordCharacters = []
          if (confirmLowerCase) {
            passwordCharacters = passwordCharacters.concat(alphaLower)
            console.log(passwordCharacters)
          }
          
          if (confirmUpperCase) {
            passwordCharacters = passwordCharacters.concat(alphaUpper)
            console.log(passwordCharacters)
          }
          if (confirmNumbers) {
            passwordCharacters = passwordCharacters.concat(numbers)
            console.log(passwordCharacters)
          }
          if (confrimSymbols) {
            passwordCharacters = passwordCharacters.concat(symbols)
            console.log(passwordCharacters)
          }
          
          
          var randomPassword = ""
          
          for (var i = 0; i < confirmLegth; i++) {
           var randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            console.log(randomPassword)
          }
          return randomPassword;
        }
        
        
        
        // Write password to the #password input
        function writePassword() {
          var password = generatePassword();
          var passwordText = document.querySelector("#password");
          
          
          passwordText.value = password;
        }
        
        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);
        
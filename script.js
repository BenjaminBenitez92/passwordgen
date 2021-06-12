// // Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var confirmLegth = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confrimSymbols;

function generatePassword() {
  var confirmLegth = (prompt(
    "How many characters would you like in your password? choose between 8 and 128"
  ));
  
  if (confirmLegth < 8 || confirmLegth > 128)
  {alert ("need to choose between 8 and 128 charters")};



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


  var passwordCharacters = []
  if (confirmLowerCase){
  passwordCharacters = passwordCharacters.concat(alphaLower)}

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }
  if (confirmNumbers){
    passwordCharacters = passwordCharacters.concat(numbers)
  }
  if (confrimSymbols){
    passwordCharacters = passwordCharacters.concat(symbols)
  }

  var randompassword= ""
  
  for ( var i =0; i < confirmLegth; i++ ){
    var randompassword = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)] ;
    console.log(randompassword)
    return randompassword;
  }
}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

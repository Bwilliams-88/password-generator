// Assignment code here
var numbers = "1234567890";
var symbols = "!@#$%^&*";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charset = ""; // Characters to include in the password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var lengthOfPassword = prompt("How many characters would you like for your password? (choose between 8 and 128 characters)");
  console.log(lengthOfPassword);
  if(lengthOfPassword > 128){
   //block
  // console.log("the number is greater than 128")
   alert("Chosen password is too long, Please try a shorter password!")
    return "Please input a shorter password"
  } else if(lengthOfPassword < 8){
    alert("Chose password is too short, Please choose a longer password!")
    return "Please input a longer password"
  }

  var wantsSymbols = confirm("Do you want symbols in your password?")
  console.log(wantsSymbols)
  if(wantsSymbols === true){
    charset += symbols;
  }

  var wantsNumbers = confirm("Do you want numbers in your password?")
  console.log(wantsNumbers)
  if(wantsNumbers === true){
    charset += numbers;
  }

  var wantsLowerCase = confirm("Do you want lower case characters in your password?")
  console.log(wantsLowerCase)
  if(wantsLowerCase === true){
    charset += lowerCase;
  }

  var wantsUpperCase = confirm("Do you want upper case characters in your password?")
  console.log(wantsUpperCase)
  if (wantsUpperCase === true){
    charset += upperCase;
  }


  var passwordLength = Number(lengthOfPassword);
  var password = "";

  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
      
  }

 return password;

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
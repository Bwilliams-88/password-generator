// Assignment code here
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","#","$","%","&"];
var lowerCase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var upperCase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"; // Characters to include in the password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var minLength = 8;
  var maxLength = 128;
  var passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
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
generateBtn.addEventListener("click", function showOptions() {
  var optionsList = document.getELementById("OptionsList");
  optionsList.style.display = "block";
})

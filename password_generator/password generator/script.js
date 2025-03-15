const passwordBox = document.getElementById("input-text");
// legnth of the password
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase=upperCase.toLowerCase();
const numbers="0123456789";
const symbols="@#$!%^&*";
const allChars = upperCase+lowerCase+numbers+symbols;

function createPassword(){

    let password="";
    password = password + upperCase[Math.floor(Math.random()*upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password = password + numbers[Math.floor(Math.random()*numbers.length)];
    password = password + symbols[Math.floor(Math.random()*symbols.length)];
    

    while(length>password.length){
        password = password + allChars[Math.floor(Math.random()*allChars.length)];
    }
    console.log(password);
    passwordBox.value=password;
}

function copyPassword(){
    // password.focus();
    passwordBox.select();

    // no longer avaliable 
    document.execCommand("copy");

}
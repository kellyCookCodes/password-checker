const inputPassword = prompt("Enter your password")
console.log(inputPassword)

function validatePassword() {
   if (inputPassword && inputPassword.length >= 8) {
    console.log("Minimum of 8 characters ☑️")
    } else {    
    console.log("Please enter a password with at least 8 characters❗")
    } 
}
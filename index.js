function validatePassword(pwd) {
    // Check: Password is empty or null
    if (!pwd) {
        console.log("Invalid password! Please enter a valid password")
        return
    }
    // Check: Minimum length should be 8 characters
    if (pwd && pwd.length >= 8) {
        console.log("Minimum of 8 characters ✅")
    } else {
        console.log("Minimum of 8 characters ⚠️")
    }

    // Check: 2. At least one lowercase character
    let hasLowercaseChar = false
    let hasUppercaseChar = false
    let hasNumber = false
    let hasSpecialChar = false
    // a. Iterate through each character of the pasword string
    for (let i = 0; i< pwd.length; i++) {
        let char = pwd[i]
        if(char >= 'a' && char <= 'z') {
            hasLowercaseChar = true
        }
        if(char >= 'A' && char <= 'Z') {
            hasUppercaseChar = true
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true
        } 
        if (char >= '!' && char <= '/' || char > ':' && char <= '@' || char > '[' && char <= '`' || char >= '{' && char <= '~') {
            hasSpecialChar = true
        } 
    }

    console.log(hasLowercaseChar ? "At least one lowercase character ✅" : "At least one lowercase character ⚠️")

    console.log(hasUppercaseChar ? "At least one Uppercase character ✅" : "At least one Uppercase character ⚠️")

    console.log(hasNumber ? "At least one number ✅" : "At least one number ⚠️")
    console.log(hasSpecialChar ? "At least one special character ✅" : "At least one special character ⚠️")
}

const inputPassword = prompt("Enter your password")
console.log(inputPassword)

validatePassword(inputPassword);


/*
     Additional Resourses:

     w3schools.com - ascii code 

    // Check: 5. At least 1 number
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // a. Iterate through each character of the password sting
    let containsDigit = false
    for (let i = 0; i < pwd.length; i++) {
        // b. Check whether the character is = any of the characters in digits
        if (digits.includes(pwd[i])) {
            console.log("At least one number ✅")
            containsDigit = true
            break
        }
    }
    if (!containsDigit){
        console.log("At least one number ⚠️")
    } 

*/
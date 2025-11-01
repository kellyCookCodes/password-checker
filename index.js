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

    // Check: 5. At least 1 number
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // a. Iterate through each character of the password sting
    for (let i = 0; i < pwd.length; i++) {
        // b. Check whether the character is = any of the characters in digits
        if (digits.includes(pwd[i])) {
            console.log("Atleast one number ✅")
        }
    }
}
const inputPassword = prompt("Enter your password")
console.log(inputPassword)

validatePassword(inputPassword);
function validatePassword(pwd) {
    // Check: Password is empty or null
    if (!pwd) {
        document.getElementById('invalid-pwd-alert').style.display = 'block'
        return
    }

    let score = 0

    // Check: 2. At least one lowercase character
    // flags
    let hasLowercaseChar = false
    let hasUppercaseChar = false
    let hasNumber = false
    let hasSpecialChar = false
    // a. Iterate through each character of the pasword string
    for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i]
        if (char >= 'a' && char <= 'z') {
            hasLowercaseChar = true
        }
        if (char >= 'A' && char <= 'Z') {
            hasUppercaseChar = true
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true
        }
        if (char >= '!' && char <= '/' || char > ':' && char <= '@' || char > '[' && char <= '`' || char >= '{' && char <= '~') {
            hasSpecialChar = true
        }
    }

    // length check
    const lengthBadge = document.getElementById('length-check')
    const lengthContainer = document.getElementById('length-check-container')
    const lengthValid = pwd.length >= 8
    lengthBadge.innerText = pwd.length >= 8 ? '✅' : '⚠️'
    lengthContainer.classList.remove('list-group-item-success', 'list-group-item-danger')
    lengthContainer.classList.add(pwd.length >= 8 ? 'list-group-item-success' : 'list-group-item-danger')
    if (lengthValid) score++

    // lowercase check
    const lowercaseBadge = document.getElementById('lowercase-check')
    const lowercaseContainer = document.getElementById('lowercase-check-container')
    lowercaseBadge.innerText = hasLowercaseChar ? '✅' : '⚠️'
    lowercaseContainer.classList.remove('list-group-item-success', 'list-group-item-danger')
    lowercaseContainer.classList.add(hasLowercaseChar ? 'list-group-item-success' : 'list-group-item-danger')
    if (hasLowercaseChar) score++

    // uppercase check
    const uppercaseBadge = document.getElementById('uppercase-check')
    const uppercaseContainer = document.getElementById('uppercase-check-container')
    uppercaseBadge.innerText = hasUppercaseChar ? '✅' : '⚠️'
    uppercaseContainer.classList.remove('list-group-item-success', 'list-group-item-danger')
    uppercaseContainer.classList.add(hasUppercaseChar ? 'list-group-item-success' : 'list-group-item-danger')
    if (hasUppercaseChar) score++

    // number check
    const numberBadge = document.getElementById('number-check')
    const numberContainer = document.getElementById('number-check-container')
    numberBadge.innerText = hasNumber ? '✅' : '⚠️'
    numberContainer.classList.remove('list-group-item-success', 'list-group-item-danger')
    numberContainer.classList.add(hasNumber ? 'list-group-item-success' : 'list-group-item-danger')
    if (hasNumber) score++

    // special char check
    const specialBadge = document.getElementById('special-char-check')
    const specialContainer = document.getElementById('special-char-check-container')
    specialBadge.innerText = hasSpecialChar ? '✅' : '⚠️'
    specialContainer.classList.remove('list-group-item-success', 'list-group-item-danger')
    specialContainer.classList.add(hasSpecialChar ? 'list-group-item-success' : 'list-group-item-danger')
    if (hasSpecialChar) score++

    // str badge show
    document.getElementById('strong-pwd').style.display =  'none'
    document.getElementById('moderate-pwd').style.display =  'none'
    document.getElementById('weak-pwd').style.display =  'none'

    if (score === 5) {
        document.getElementById('strong-pwd').style.display = 'block'
    } else if (score >= 3) {
        document.getElementById('moderate-pwd').style.display = 'block'
    } else {
        document.getElementById('weak-pwd').style.display = 'block'
    }

    console.log("Password score: ", score);

}

const inputPassword = prompt("Enter your password to check its strength:")
console.log(inputPassword)

validatePassword(inputPassword)




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
function verifyAge (age) {
    if (age >= 18) {
        return console.log('Maior de idade')
    } else if (age <= 17) {
        return console.log('Menor de idade')
    }
}

verifyAge(17);
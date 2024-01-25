function verifyName (name) {
    return 'Meu nome é ' + name;
}

function verifyAge (age) {
    if (age >= 18) {
        return console.log(verifyName('Aníbal') + ' e sou maior de idade.' )
    }
    if (age < 18) {
        return console.log(verifyName('Aníbal') + ' e sou menor de idade.')
    }
}

verifyName()
verifyAge(30);

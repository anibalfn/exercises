// Crie um programa capaz de percorrer uma lista de números e retornar apenas os números pares.

const pairNumbers = []

for (let i = 0; i < 150; i++) {
    if (i % 2 === 0) {
        pairNumbers.push(i)
    }
    
}

console.log(pairNumbers)

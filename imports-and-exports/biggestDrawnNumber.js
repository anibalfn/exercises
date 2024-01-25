/*
Uma sala contém 5 alunos e para cada aluno foi sorteado um número entre 1 e 100.
Desenvolva um programa que receba os 5 números sorteados e retorne o maior entre eles.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/

const { gets, print } = require('./auxFunctions');

const alumnQuantity = gets();
let biggestValue = 0;

for (let i = 0; i < alumnQuantity; i++) {
    const drawn = gets();
    if (drawn > biggestValue) {
        biggestValue = drawn;
    }
    
}

print (biggestValue);
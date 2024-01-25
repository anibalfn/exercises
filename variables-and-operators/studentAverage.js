/* Faça um algoritmo que dada as 3 notas tiradas por um estudante em um período, calcule e imprima a média e a sua classificação conforme tabela abaixo:

REPROVAÇÃO = Média menor que 5;
RECUPERAÇÃO = Média entre 5 e 7;
APROVAÇÃO = Média maior que 7.
*/

let first = 2;
let second = 7;
let third = 4;

const average = (first + second + third) / 3;
console.log(average)

if (average > 7) {
    console.log('APROVADO')
}
if (average < 5) {
    console.log('REPROVADO')
}
if (average >= 5 && average <= 7) {
    console.log('RECUPERAÇÃO')
}
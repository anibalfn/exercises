/* O IMC é um critério da OMS para indicar sobre a condição da massa corporal de uma pessoa adulta.

O IMC é o peso dividido pela altura ao quadrado: peso/altura^2

Elabore um algoritmo que dado o peso e a altura de um adulto, retorne a condição de acordo com a tabela abaixo:

Abaixo do peso: menor que 18,5
Peso normal: entre 18,5 e 25
Sobrepeso: entre 25 e 30
Obeso: entre 30 e 40
Obesidade grave: acima de 40
*/

const weight = 100;
const height = 1.79;

const imc = weight / (height * height);
/* const imc = weight / Math.pow(height, 2) */
console.log(imc)

if (imc < 18.5) {
    console.log('Abaixo do peso')
}
if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal')
}
if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso')
}
if (imc >= 30 && imc < 40) {
    console.log('Obeso')
}
if (imc >= 40) {
    console.log('Obesidade grave')
}

/* Math.pow(height, 2)
utilitário para potências
*/
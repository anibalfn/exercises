/* Faça um programa para calcular o valor de uma viagem. Você terá 3 variáveis, sendo elas:
            1) Preço do combustível;
            2) Gasto médio de combustível do carro por Km;
            3) Distância em Km da viagem;
*/

const fuelPrice = 5.79;
const kilometersPerLitre = 10;
const kmDistance = 100;

const fuelBurned = kmDistance / kilometersPerLitre;
const total = (fuelBurned) * fuelPrice;

console.log(total.toFixed(2));

/* O toFixed serve para indicar o número de casas decimais */
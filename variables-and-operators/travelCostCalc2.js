/* Faça um programa para calcular o valor de uma viagem. Você terá 5 variáveis, sendo elas:
            1) Preço do etanol;
            2) Preço da gasolina;
            3) Tipo de combustível disponível no carro;
            4) Gasto médio de combustível / km;
            5) Distância em km da viagem
            
    Imprima no console o resultado:
*/

const ethanolPrice = 5.79
const gasPrice = 6.66
let fuelType = 'etanol';
const kmsPerL = 10;
const travelDistance = 100;

const fuelBurned = travelDistance / kmsPerL

if (fuelType === 'etanol') {
    let preco = fuelBurned * ethanolPrice;
    console.log(preco.toFixed(2))
};
if (fuelType === 'gasolina') {
    let preco = fuelBurned * gasPrice;
    console.log(preco.toFixed(2))
}

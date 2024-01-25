/* Elabore um algoritmo que calcule o valor a ser pago por um produto, considerando o preço de etiqueta e a condição de pagamento, conforme tabela abaixo:
    Código 1 - À vista débito: 10% OFF;
    Código 2 - À vista dinheiro/Pix: 15% OFF;
    Código 3 - Em 2x, preço de etiqueta sem juros;
    Código 4 - Acima de 2x, preço de etiqueta + 10% juros;
*/

const rawProductPrice = 19.99;
const paymentMethodCode = 5;

if (paymentMethodCode === 1) {
    console.log(rawProductPrice - (rawProductPrice * 0.1))
} else if (paymentMethodCode === 2) {
    console.log(rawProductPrice - (rawProductPrice * 0.15))
} else if (paymentMethodCode === 3) {
    console.log(rawProductPrice)
} else if (paymentMethodCode === 4) {
    console.log(rawProductPrice + (rawProductPrice * 0.1))
} else {
    console.log('Código inválido')
}
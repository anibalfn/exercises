/* Elabore um algoritmo que calcule o valor a ser pago por um produto, considerando o preço de etiqueta e a condição de pagamento, conforme tabela abaixo:
    1 - À vista débito: 10% OFF;
    2 - À vista dinheiro/Pix: 15% OFF;
    3 - Em 2x, preço de etiqueta sem juros;
    4 - Acima de 2x, preço de etiqueta + 10% juros;
*/

function applyDiscount (value, discount) {
    return value - (value * (discount / 100))
};

function applyFee (value, fee) {
    return value + (value * (fee / 100))
};

console.log(applyDiscount(100, 10))
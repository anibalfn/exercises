/* Elabore um algoritmo que calcule o valor a ser pago por um produto, considerando o preço de etiqueta e a condição de pagamento, conforme tabela abaixo:
    Código 1 - À vista débito: 10% OFF;
    Código 2 - À vista dinheiro/Pix: 15% OFF;
    Código 3 - Em 2x, preço de etiqueta sem juros;
    Código 4 - Acima de 2x, preço de etiqueta + 10% juros;
*/

function fullPrice(rawValue, discountCode) {
    if (discountCode === 1) {
        return rawValue - (rawValue * 0.1)
    } else if (discountCode === 2) {
        return rawValue - (rawValue * 0.15) 
    } else if (discountCode === 3) {
        return rawValue
    } else if (discountCode === 4) {
        return (rawValue * 0.1) + rawValue
    } else {
        return 'Código Inválido'
    }
}

console.log(fullPrice(150, 2))
// Utilizing functions gets and print;

const inputs = [50, 10, 98, 23, 47, 51, 99, 25, 12, 100, 41];
// input do exercício biggestDrawnNumber
let i = 0;
// variável i é um contador;

function gets() {
    const value = inputs[i];
    i++;
    return value;

}

function print(text) {
    console.log(text);
}

module.exports = { gets, print }
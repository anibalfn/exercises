/* Crie uma classe para representar carros.
Os carros possuem marca, cor e gasto médio de combustível por km rodado.
Crie um método que dada a quantidade de kms e o preço do combustível nos dê o valor gasto em reais para realizar esse percurso.
*/

class Car {
    brand;
    color;
    averageCostPerKm;

    constructor(brand, color, averageCostPerKm) {
        this.brand = brand;
        this.color = color;
        this.averageCostPerKm = averageCostPerKm;
    }

    calculateTripCost(distance, price) {
        return console.log(`O carro ${this.brand} de cor ${this.color} vai gastar ${distance * this.averageCostPerKm * price} reais.`)
    }
}

const fiat = new Car ('Uno', 'azul', 1 / 12)
fiat.calculateTripCost(70, 5)
const volkswagen = new Car ('Fusca', 'preto', 1 / 5)
volkswagen.calculateTripCost(70, 5)
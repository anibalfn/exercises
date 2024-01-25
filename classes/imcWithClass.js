/* Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizerem o valor do seu IMC.
Instancie uma pessoa chamada José cujo peso seja de 70 kg e a altura de 1,75m e faça José dizer o valor do seu IMC.

Abaixo do peso: menor que 18,5
Peso normal: entre 18,5 e 25
Sobrepeso: entre 25 e 30
Obeso: entre 30 e 40
Obesidade grave: acima de 40
*/

class Person {
    name;
    height;
    weight;

    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    calculateIMC(height, weight) {
        return this.weight / Math.pow(this.height, 2)
    }

    
    classificateIMC() {
        const imc = this.calculateIMC();

        if (imc < 18.5) {
            return ('abaixo do peso')
        } else if (imc >= 18.5 && imc < 25) {
            return ('no peso ideal')
        } else if (imc >= 25 && imc < 30) {
            return ('sobrepeso')
        } else if (imc >= 30 && imc < 40) {
            return ('obeso')
        } else if (imc >= 40) {
            return ('com obesidade grave')
        } else {
            return ('VALOR INVÁLIDO')
        }
    }

    print() {
        return console.log(`Olá, o meu nome é ${this.name} e o meu IMC é de ${this.calculateIMC()}, portanto estou ${this.classificateIMC()}.`)
    }
}

const joao = new Person ('João', 1.75, 70);
const anibal = new Person ('Aníbal', 1.79, 100)

joao.print()
anibal.print()
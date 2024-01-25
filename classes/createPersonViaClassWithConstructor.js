/* CONSTRUCTOR: 
O que acontece quando uma pessoa é instanciada?
*/

class Person {
    name;
    age;
    bornYear;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.bornYear = 2024 - age
    }

    print() {
        console.log(`My name is ${this.name} and I am ${this.age} years old. I am alive since ${this.bornYear}`)
    }
}

const anibal = new Person('Aníbal', 30);

console.log(anibal)

anibal.print();
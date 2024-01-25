/* The objective of this exercise is demonstrate a function receiving a object */

class Person {
    name;
    age;
    bornYear;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.bornYear = 2024 - age;
    }

    print() {
        console.log(`My name is ${this.name} and I have ${this.age}. I 've been born in ${this.bornYear}`)
    }
}

function compareAge(person1, person2) {
    if (person1.age > person2.age) {
        console.log(`${person1.name} is older than ${person2.name}.`);
    }else if (person1.age < person2.age) {
        console.log(`${person2.name} is older than ${person1.name}.`);
    } else {
        console.log (`${person1.name} and ${person2.name} have both the same age.`)
    }
}

const anibal = new Person('Aníbal', 30)
const marina = new Person ('Marina', 29)

compareAge(anibal, marina);

anibal.print();
marina.print();
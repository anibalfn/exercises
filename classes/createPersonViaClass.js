class Person {
    name;
    age;

    print() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

const anibal = new Person();
anibal.name = 'Aníbal';
anibal.age = '30';

console.log(anibal)

anibal.print();
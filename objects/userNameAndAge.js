const user = {
    name: 'Aníbal',
    age: '30',
    print: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

user.print();
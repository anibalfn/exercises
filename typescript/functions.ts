// TYPESCRIPT - Functions

function addNumber(num1: number, num2: number): number {
    return num1 * num2;
}

function sayHi(name: string): string {
    return `Hi, ${name}!`
}

function makeACall(phone: number | string): number | string {
    return phone;
}

async function getDB(id: number): Promise<string> {
    return "Aníbal";
}

let multiply: number = addNumber(5, 3);
console.log(multiply)
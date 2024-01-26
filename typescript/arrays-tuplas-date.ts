// TYPESCRIPT - Arrays

let data: string[] = ["Aníbal", "Davi", "Juliana"];

let data2: Array<string> = ["Aníbal", "Davi", "Juliana"];

let informations: (string | number)[] = [123, "Aníbal"];

// TYPESCRIPT - Tuplas
// Tupla é mandatório seguir a ordem dos tipos;

let conta: [string, number, number] = ["Conta de energia", 350.25, 984354340985];

// Array methods are the same than JS

// Date

let birthday: Date = new Date("1993-11-29 14:20");
console.log(birthday.toString());
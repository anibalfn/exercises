// TYPESCRIPT - Generics

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 3], [5]);
const strArray = concatArray<string[]>(["Aníbal", "Juliana"], ["Davi"]);

console.log(numArray);
console.log(strArray);


const evaluations = []

evaluations.push(6)
evaluations.push(8)
evaluations.push(4)
evaluations.push(9)
evaluations.push(4)

console.log(evaluations)

let sum = 0;

for (let i = 0; i < evaluations.length; i++) {
    const evaluation  = evaluations[i];
    sum = sum + evaluation;
    
}

console.log(sum)

const average = sum / evaluations.length;

console.log(average)
const N = parseInt(readline());
const piArray = [];
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    piArray.push(pi);
}

const sortedPiArray = piArray.sort((a,b) => b - a);
let resultArray = [];
for (let p = 0; p < piArray.length - 1; p++) {
    let result = piArray[p] - piArray[p + 1];
    resultArray.push(result);
}

resultArray.sort((a,b) => a - b);
console.log(resultArray[0]);

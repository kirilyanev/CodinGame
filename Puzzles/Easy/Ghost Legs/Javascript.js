var inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);

let input = [];
let result = '';
const answer = {};

for (let i = 0; i < H; i++) {
    let line = readline();
    line = line.replace(/\s+/g,'').replace(/--/g, 's');
    input.push(line);
}

result = input[0].split('');

for (line of input) {
    let indices = [];
    if (line.includes('s')) {
        let index = line.indexOf('s');
        let indexCorrection = 0;

        while (index !== -1) {
            indices.push(index)
            index = line.indexOf('s', index + 1);
        }

        for (let swapIndex of indices) {
            swapIndex = swapIndex - indexCorrection;
            
            const charA = result[(swapIndex - 1)];
            const charB = result[swapIndex];

            result[swapIndex] = charA;
            result[swapIndex - 1] = charB;
            
            indexCorrection += 1;
        }
    }
}

for (let l = 0; l < result.length; l++) {
    answer[result[l]] = input[input.length - 1][l];
}

for (let char of input[0]) {
    console.log(char + answer[char])
}

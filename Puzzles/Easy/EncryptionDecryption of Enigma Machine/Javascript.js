const operation = readline();
const pseudoRandomNumber = parseInt(readline());
const MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MAP_LENGTH = MAP.length;
const ROTORS_COUNT = 3;
const rotors = [];
let answer = '';

for (let i = 0; i < ROTORS_COUNT; i++) {
    const rotor = readline();
    rotors.push(rotor);
}
const message = readline();
const N = message.length;

for (let i = 0; i < N; i++) {
    let char = message[i];
    let newIndexOfChar;
    if (operation === 'ENCODE') {
        newIndexOfChar = (MAP.indexOf(char) + pseudoRandomNumber + i) % MAP_LENGTH;
        char = MAP[newIndexOfChar];
        for (let r = 0; r < ROTORS_COUNT; r++) {
            let rotor = rotors[r];
            newIndexOfChar = MAP.indexOf(char);
            char = rotor[newIndexOfChar];
        }
        answer += char;
    } else {
        for (let r = ROTORS_COUNT - 1; r >= 0; r--) {
            let rotor = rotors[r];
            newIndexOfChar = rotor.indexOf(char);
            char = MAP[newIndexOfChar];
        }
        newIndexOfChar = (MAP.indexOf(char) - pseudoRandomNumber - i) % MAP_LENGTH;
        if (newIndexOfChar < 0) {
            newIndexOfChar = MAP_LENGTH - Math.abs(newIndexOfChar)
        };
        answer += MAP[newIndexOfChar];
    }
}

console.log(answer)

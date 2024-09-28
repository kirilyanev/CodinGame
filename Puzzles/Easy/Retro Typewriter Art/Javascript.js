const T = readline();
const chunks = T.split(' ');
let result = '';

for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    let char;
    let numbers;

    if (chunk.includes("sp")) {
        char = " ";
        numbers = getCharCount(chunk);
    } else if (chunk.includes("bS")) {
        char = "\\";
        numbers = getCharCount(chunk);
    } else if (chunk.includes("sQ")) {
        char = "'";
        numbers = getCharCount(chunk);
    } else if (chunk.includes("nl")) {
        char = "\n";
        numbers = 1;
    } else {
        char = chunk.slice(chunk.length - 1);
        numbers = Number(chunk.slice(0, chunk.length - 1));
    }

    for (let j = 0; j < numbers; j++) {
        result += char;
    }
}

function getCharCount(chunk) {
    const chunkLenght = chunk.length;
    return chunk.slice(0, chunkLenght - 2);
}

console.log(result);

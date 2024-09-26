const MESSAGE = readline();
let binaryMessage = '';
let result = '';
let lastChar = '';

for (let i = 0; i < MESSAGE.length; i++) {
    binaryMessage += MESSAGE[i].charCodeAt().toString(2).padStart(7, '0');
}

for (let c = 0; c < binaryMessage.length; c++) {
    let currentChar = binaryMessage[c];
    
    if (currentChar !== lastChar) {
        result += ' ' + `${currentChar === '1' ? '0' : '00'}` + ' ';
    }
    
    result += '0';

    lastChar = currentChar;
}

console.log(result.trim());
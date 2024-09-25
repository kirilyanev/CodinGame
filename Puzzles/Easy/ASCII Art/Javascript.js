const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
for (let i = 0; i < H; i++) {
    const ROW = readline();
    let array = [];
    let symbol;
    for (let k = 0; k < T.length; k++) {
        const letter = T[k].toUpperCase();
        if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
            symbol = (letter.charCodeAt() - 65) * L;
        } else {
            symbol = 104;
        }
        array.push(ROW.slice(symbol, symbol + L));
    }
    console.log(array.join(''))
}

const n = parseInt(readline());
var inputs = readline().split(' ');

const MAX_TEMP = 5526;
const MIN_TEMP = - 273;

let closestPositiveTemp = MAX_TEMP;
let closestNegativeTemp = MIN_TEMP;

if (n === 0) return console.log('0');

for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526

    if (n === 1) return console.log(t);

    if (t > 0 && t <= closestPositiveTemp) {
        closestPositiveTemp = t;
    }  else if (t < 0 && t >= closestNegativeTemp) {
        closestNegativeTemp = t;
    }
}

if (closestPositiveTemp <= Math.abs(closestNegativeTemp)) {
    console.log(closestPositiveTemp)
} else {
    console.log(closestNegativeTemp)
}

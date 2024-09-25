var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let currentTx = initialTx;
let currentTy = initialTy;

while (true) {
    const remainingTurns = parseInt(readline());

    let currentMove = '';

    if (currentTy > lightY) {
        currentMove += 'N';
        currentTy -= 1;
    } else if (currentTy < lightY) {
        currentMove += 'S';
        currentTy += 1;
    }

    if (currentTx > lightX) {
        currentMove += 'W';
        currentTx -= 1;
    } else if (currentTx < lightX) {
        currentMove += 'E';
        currentTx += 1;
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(currentMove);
}

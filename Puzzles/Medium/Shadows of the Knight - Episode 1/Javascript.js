var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);
let lastPosition = [X0, Y0];
let rightBorder = W;
let leftBorder = 0;
let upBorder = 0;
let downBorder = H;

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    let nextPosition;
    let newX;
    let newY;

    switch (bombDir) {
        case "U":
            newX = lastPosition[0];
            newY = lastPosition[1] - Math.ceil((lastPosition[1] - upBorder) / 2);
            downBorder = lastPosition[1];
            break;
        case "UR":
            newX = lastPosition[0] + Math.ceil((rightBorder - lastPosition[0]) / 2);
            newY = lastPosition[1] - Math.ceil((lastPosition[1] - upBorder) / 2);
            leftBorder = lastPosition[0];
            downBorder = lastPosition[1];
            break;
        case "R":
            newX = lastPosition[0] + Math.ceil((rightBorder - lastPosition[0]) / 2);
            newY = lastPosition[1];
            leftBorder = lastPosition[0];
            break;
        case "DR":
            newX = lastPosition[0] + Math.ceil((rightBorder - lastPosition[0]) / 2);
            newY = lastPosition[1] + Math.ceil((downBorder - lastPosition[1]) / 2);
            leftBorder = lastPosition[0];
            upBorder = lastPosition[1];
            break;
        case "D":
            newX = lastPosition[0];
            newY = lastPosition[1] + Math.ceil((downBorder - lastPosition[1]) / 2);
            upBorder = lastPosition[1];
            break;
        case "DL":
            newX = lastPosition[0] - Math.ceil((lastPosition[0] - leftBorder) / 2);
            newY = lastPosition[1] + Math.ceil((downBorder - lastPosition[1]) / 2);
            rightBorder = lastPosition[0];
            upBorder = lastPosition[1];
            break;
        case "L":
            newX = lastPosition[0] - Math.ceil((lastPosition[0] - leftBorder) / 2);
            newY = lastPosition[1];
            rightBorder = lastPosition[0];
            break;
        case "UL":
            newX = lastPosition[0] - Math.ceil((lastPosition[0] - leftBorder) / 2);
            newY = lastPosition[1] - Math.ceil((lastPosition[1] - upBorder) / 2);
            rightBorder = lastPosition[0];
            downBorder = lastPosition[1];
            break;
    }

    nextPosition = [newX, newY];

    // the location of the next window Batman should jump to.
    console.log(nextPosition.join(" "));

    lastPosition = nextPosition;
}

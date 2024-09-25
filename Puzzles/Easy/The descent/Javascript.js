while (true) {
    let max = 0;
    let maxi = 0;
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.

        if (mountainH > max) {
            max = mountainH;
            maxi = i;
        }
    }
    console.log(maxi);
}

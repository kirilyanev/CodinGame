const N = parseInt(readline());
const TOTAL_ROUNDS = Math.log(N) / Math.log(2);
const players = {};
let history = {};

const SIGNS = {
    C: ['P', 'L'],
    P: ['R', 'S'],
    R: ['L', 'C'],
    L: ['S', 'P'],
    S: ['C', 'R'],
}

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const NUMPLAYER = parseInt(inputs[0]);
    const SIGNPLAYER = inputs[1];
    players[i] = [NUMPLAYER, SIGNPLAYER];
}

let playersCount = N;
let remainingPlayers = JSON.parse(JSON.stringify(players));

for (let r = 0; r < TOTAL_ROUNDS; r++) {
    remainingPlayers = playBattles(playersCount, remainingPlayers);
    playersCount /= 2;
}

function playBattles(playersCount, players) {
    // CLEAN THE OBJECT, SO THAT IT CAN STORE THE NEW REMAINING PLAYERS
    let remainingPlayers = {};
    for (let b = 0; b < playersCount; b += 2) {
        let playerA = players[b];
        let playerB = players[b + 1];

        remainingPlayers[b / 2] = comparePlayers(playerA, playerB);
    }

    return remainingPlayers;
}

function comparePlayers(playerA, playerB) {
    if (!history[playerA[0]]) {
        history[playerA[0]] = [];
    }
    if (!history[playerB[0]]) {
        history[playerB[0]] = [];
    }
    history[playerA[0]].push(playerB);
    history[playerB[0]].push(playerA);

    if (playerA[1] === playerB[1]) {
        return playerA[0] < playerB[0] ? playerA : playerB;
    }

    let winningSignsA = SIGNS[playerA[1]];

    if (winningSignsA.includes(playerB[1])) {
        return playerA;
    }
    return playerB;
}

const winnerHistory = history[remainingPlayers[0][0]].map(h => h[0]).join(' ');
console.log(remainingPlayers[0][0]);
console.log(winnerHistory);

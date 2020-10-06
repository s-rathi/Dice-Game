function selectWinner(playerOne, playerTwo) {
    if (playerOne > playerTwo) {
        document.getElementById("header").innerHTML = "<h1>Player 1 is the Winner!!</h1>"
    } else if (playerOne < playerTwo) {
        document.getElementById("header").innerHTML = "<h1>Player 2 is the Winner!!</h1>"
    } else {
        document.getElementById("header").innerHTML = "<h1>It's a Tie!</h1>"
    }
}

function rollDice() {
    const playerOne = Number.parseInt(1 + (Math.random() * 6));
    const playerTwo = Number.parseInt(1 + (Math.random() * 6));

    if (playerOne == 1) {
        document.getElementById('img1').setAttribute("src", "images/dice1.png");
    } else if (playerOne == 2) {
        document.getElementById('img1').setAttribute("src", "images/dice2.png");
    } else if (playerOne == 3) {
        document.getElementById('img1').setAttribute("src", "images/dice3.png");
    } else if (playerOne == 4) {
        document.getElementById('img1').setAttribute("src", "images/dice4.png");
    } else if (playerOne == 5) {
        document.getElementById('img1').setAttribute("src", "images/dice5.png");
    } else {
        document.getElementById('img1').setAttribute("src", "images/dice6.png");
    }

    if (playerTwo == 1) {
        document.getElementById('img2').setAttribute("src", "images/dice1.png");
    } else if (playerTwo == 2) {
        document.getElementById('img2').setAttribute("src", "images/dice2.png");
    } else if (playerTwo == 3) {
        document.getElementById('img2').setAttribute("src", "images/dice3.png");
    } else if (playerTwo == 4) {
        document.getElementById('img2').setAttribute("src", "images/dice4.png");
    } else if (playerTwo == 5) {
        document.getElementById('img2').setAttribute("src", "images/dice5.png");
    } else {
        document.getElementById('img2').setAttribute("src", "images/dice6.png");
    }
    selectWinner(playerOne, playerTwo)
}

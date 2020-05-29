var playerOne = Number.parseInt(1 + (Math.random() * 6));

if (playerOne == 1) {
    document.getElementById('img1').setAttribute("src", "images/dice1.png");
}
if (playerOne == 2) {
    document.getElementById('img1').setAttribute("src", "images/dice2.png");
}
if (playerOne == 3) {
    document.getElementById('img1').setAttribute("src", "images/dice3.png");
}
if (playerOne == 4) {
    document.getElementById('img1').setAttribute("src", "images/dice4.png");
}
if (playerOne == 5) {
    document.getElementById('img1').setAttribute("src", "images/dice5.png");
}
if (playerOne == 6) {
    document.getElementById('img1').setAttribute("src", "images/dice6.png");
}

var playerTwo = Number.parseInt(1 + (Math.random() * 6));

if (playerTwo == 1) {
    document.getElementById('img2').setAttribute("src", "images/dice1.png");
}
if (playerTwo == 2) {
    document.getElementById('img2').setAttribute("src", "images/dice2.png");
}
if (playerTwo == 3) {
    document.getElementById('img2').setAttribute("src", "images/dice3.png");
}
if (playerTwo == 4) {
    document.getElementById('img2').setAttribute("src", "images/dice4.png");
}
if (playerTwo == 5) {
    document.getElementById('img2').setAttribute("src", "images/dice5.png");
}
if (playerTwo == 6) {
    document.getElementById('img2').setAttribute("src", "images/dice6.png");
}

if (playerOne > playerTwo) {
    document.getElementById("header").innerHTML = "<h1>Player 1 is the Winner!!</h1>"
}
if (playerOne < playerTwo) {
    document.getElementById("header").innerHTML = "<h1>Player 2 is the Winner!!</h1>"
}
if (playerOne == playerTwo) {
    document.getElementById("header").innerHTML = "<h1>It's a Tie!</h1>"
}
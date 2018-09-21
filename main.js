let points = [0,0];
let player = 'WINNER!';
let currentPlayer = 0; // 0 = player1 | 1 = player2

const score = document.getElementById("score");
const img = document.getElementById("img");
const button = document.getElementById("button");
const reset = document.getElementById("reset");
const decide = document.getElementById("wilo");

button.style.visibility = 'visible'

const decideWinner = () => {
    if ( points[0] >= 20 || points[1] >= 20) {
        console.log(player);
        decide.textContent = player;
        button.style.visibility = "hidden";
        currentPlayer = 0;
    }
    else{
        changePlayer();
    }
}

button.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 6) +1;
    console.log(randomNum);
    img.style.display = 'block';
    img.src = `img/dice${randomNum}.png`;
    

    if (randomNum == 1) {
        points[currentPlayer] = 0;
        changePlayer();
    } 
    else {
        points[currentPlayer] += randomNum;
        decideWinner();
    }

    score.textContent = `Player 1: ${points[0]}  Player 2: ${points[1]}`;
});

reset.addEventListener("click", () => {
    score.textContent = `Player 1: 0  Player 2: 0`;
    img.style.display = 'hidden';
    decide.textContent = "-";
    button.style.visibility = "visible";
    points = [0,0];
})

decide.textContent = "-";

const changePlayer = () => {
    if (currentPlayer == 0) {
            currentPlayer = 1;
    } 
    else if (currentPlayer == 1) {
            currentPlayer = 0;
    }
} 
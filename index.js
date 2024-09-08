let board = ['','','','','','','','',''];
let currentPlayer = 'X';
let isGameActive = true;

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

function makemove(index) {
    if (board[index] === '' && isGameActive){
            board[index] = currentPlayer;
            document.querySelectorAll('.cell')[index].innerText = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}


function checkWinner() {
    for (let i = 0; i < winningConditions.length; i++){
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('message').innerText = `${board[a]} wins! ✔`;
            isGameActive = false;
            return;
        }
    }
    if (!board.includes('')) {
       document.getElementById('message').innerText = "una no Gree win 😂";
       isGameActive = false; 
    }
}


const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById('guess-input').value);
    attempts++;
    if (guess === randomNumber) {
        document.getElementById('guess-result').innerText = `Correct! You guessed it in ${attempts} attempts.`;
    } else if ( guess < randomNumber) {
        document.getElementById('guess-result').innerText = 'Too Low! Try again.';    
    } else if ( guess > randomNumber) {
        document.getElementById('guess-result').innerText = 'Too high! Try again.';    
    }
}
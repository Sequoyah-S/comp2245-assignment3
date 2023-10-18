document.addEventListener("DOMContentLoaded", function () {
    // Get the game board container
    const board = document.getElementById("board");
  
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      board.appendChild(square);
    }
  
  });
  document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll('#board > div');
    const status = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');
    const gameBoard = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameWon = false;
  
    // Function to handle a player's move
    function handleMove(index) {
      if (!gameBoard[index] && !gameWon) {
        gameBoard[index] = currentPlayer;
        squares[index].textContent = currentPlayer;
        squares[index].classList.add(currentPlayer);
        if (checkForWin()) {
          gameWon = true;
          status.classList.add('you-won');
          status.textContent = `Player ${currentPlayer} wins!`;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          status.textContent = `Player ${currentPlayer}'s turn`;
        }
      }
    }
  
    // Function to check for a win
    function checkForWin() {
      // Implement your win condition checks here
    }
  
    // Event listener for square clicks
    squares.forEach((square, index) => {
      square.addEventListener('click', () => {
        if (square.textContent === "") {
          handleMove(index);
        }
      });
  
      square.addEventListener('mouseover', () => {
        if (!square.classList.contains('X') && !square.classList.contains('O') && !gameWon) {
          square.classList.add('hover', currentPlayer);
        }
      });
  
      square.addEventListener('mouseout', () => {
        square.classList.remove('hover', 'X', 'O');
      });
    });
  
    // Event listener for the New Game button
    newGameButton.addEventListener('click', () => {
      gameBoard.fill(''); // Reset the game board
      gameWon = false;
      squares.forEach(square => {
        square.textContent = '';
        square.classList.remove('X', 'O', 'hover');
      });
      currentPlayer = 'X';
      status.textContent = `Player X's turn`;
      //status.classList.remove('you-won');
    });
  });
// Function to check for a win and update the status
function checkForWin() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
        gameWon = true;
        status.classList.add('you-won');
        status.textContent = `Congratulations! ${gameBoard[a]} is the Winner!`;
        return true;
      }
    }
    if (!gameBoard.includes('')) {
        gameWon = true;
        //status.textContent = "It's a draw!";
       // return true;
      }
    
      return false;
    }

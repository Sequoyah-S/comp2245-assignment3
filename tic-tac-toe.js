//const board = document.querySelector("#board")
//const status = document.querySelector("#status")

document.addEventListener("DOMContentLoaded", function () {
    // Get the game board container
    const board = document.getElementById("board");
  
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      board.appendChild(square);
    }
  
  });
  
  
  
  
  
  
// Player Factory Function
let createPlayer = () => {

    // Loop through 2 times to capture players name and auto assign their number
    for (let i = 0; i < 4; i++) {

        if (gameBoardModule.playerArray.length >= 6) {
            gameBoardModule.makePlayerMove();
            break;

        } else if (gameBoardModule.playerArray.length == 0 ) {
            let playerName = prompt("What is your name?");

            if (playerName == "" || playerName == null) {
                alert("Sorry, a name is required!");
                continue;
            }

            let playerNumber = 1;
            let assignedXO = "X";
            alert("You are player 1, thus you will use X!");
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            console.log("Show me the contents of the playerArray..", gameBoardModule.playerArray);
            // return {playerName, playerNumber, assignedXO};

        } else if (gameBoardModule.playerArray.length !== 0) {
            let playerName = prompt("And what is your name?");

            if (playerName == "" || playerName == null) {
                alert("Sorry, we need a name!")
                continue;
            }

            let playerNumber = 2;
            let assignedXO = "O";
            alert("You are player 2, thus you will use O!")
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            console.log("Show me the contents of the playerArray..", gameBoardModule.playerArray);
            // return {playerName, playerNumber, assignedXO};
        }
    }

    // let getPlayerName = () => { playerName;
    // console.log("The name of player " + playerNumber + "is " + playerName); }
    // return {playerName, playerNumber, assignedXO};
};

// Game Board Module
let gameBoardModule = (function() {
    let gameBoard = [];
    let playerArray = [];

    // Publicly exposed function to envoke player move
    let makePlayerMove = () => {

        // Checks for 2 player submission and gameBoard array doesn't spill over gridBoxes
        if (playerArray.length == 6 && gameBoard.length < 9) {

            // Controls for player moves
            if (gameBoard.length == 0) {
                alert("Player 1, your turn!");
                gameBoard.push(playerArray[2]);
                console.log("Show me the current gameBoard Array..", gameBoard);

            } else if (gameBoard[gameBoard.length - 1] == "X") {
                alert("Player 2, your turn!");
                gameBoard.push(playerArray[5]);
                console.log("Show me the current gameBoard Array..", gameBoard);

            } else if (gameBoard[gameBoard.length -1] == "O") {
                alert("Player 1, your turn!");
                gameBoard.push(playerArray[2]);
                console.log("Show me the current gameBoard Array..", gameBoard);
            }
        };
    }
    return {gameBoard, playerArray, makePlayerMove};
})();

// Display Controller Module to render array to DOM
let displayControllerModule = (function() {
    const makeMove = document.querySelectorAll(".game-board-button");

    // Indexing and looping through each button node
    let index = 0;
    makeMove.forEach(makeMoves => {
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArrayToScreen);

        function renderArrayToScreen() {
            const gridBoxes = document.querySelectorAll(".grid-box");

            // Indexing and looping through each grid box node
            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                // Render play on grid box and display on DOM
                if (gridBox.getAttribute("data-linked-button") == makeMoves.getAttribute("data-linked-button")) {
                    gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
                    console.log("show me my makeMoves linked button value...", makeMoves.dataset.linkedButton);
                    console.log("show me my gridBox linked button value...", gridBox.dataset.linkedButton);
                }

            index++;
            })
        
        gameBoardModule.makePlayerMove();
        }

    index++;
    })

    // Listen for click to start the game
    const startGameButton = document.querySelector(".start-game-button");
    startGameButton.addEventListener("click", createPlayer);

    //  // Test private function *Remove if not needed*
    // let testF = () => {console.log("tesing private function call inside of a module object.....")};
    return {};
})();
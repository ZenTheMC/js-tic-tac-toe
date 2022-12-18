// Game Board Module
let gameBoardModule = (function() {
    let gameBoard = ["X"];
    return {gameBoard};
})();

// Display Controller Module for turns
let displayControllerModule = (function() {
    let testF = () => {console.log("testing private function call inside of a module object")};
    return {testF};
})();

// Player Factory Function
let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
    console.log("The name of player " + playerNumber + "is " + playerName); }
    return {getPlayerName, playerName, playerNumber, assignedXO};
};

// Render Module for Array Display to Game Board
let renderArrayToScreenModule = (function() {

    // To-do : Refactor this part, no queryselector, use click event instead
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes[0].textContent = gameBoardModule.gameBoard;
    console.log("show me the array as seen inside of renderArrayToScreenModule...", gameBoardModule.gameBoard);
    console.log("show me the node list of the gridBoxes as seen inside of renderArrayToScreenModule...", gridBoxes);
    return {};
})();

// To-do : Inputs for name + assignedXO - asking for preference - pop up?
// To-do : Player numbers to assign? Maybe

let Zen = createPlayer("Zen", 1, "X");
let Amaar = createPlayer("Amaar", 2, "O");
renderArrayToScreenModule;
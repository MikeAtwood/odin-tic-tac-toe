// Module to setup GameBoard
const gameBoardModule = (function () {
    // Factory Function to create PlayerOne
    const createPlayer = (name, symbol, ai, turn) => {
        return { name, symbol, ai, turn }
    };

    const player1 = createPlayer("PlayerOne", "X", false, true)
    const player2 = createPlayer("PlayerTwo", "O", false, false)
    console.log(player1, player2)

    let gameBoard = []


// Function for making a move
const playerTurn = (function () {
    const box = document.querySelectorAll(".cell")
    box.forEach(box => {
        box.addEventListener('click', e => {
            if (player1.turn === true && e.target.textContent == '') {
                gameBoard[e.target.id] = player1.symbol;
                box.textContent = player1.symbol;
                box.style.color = '#EE6C4D'
                player1.turn = false;
                player2.turn = true;
            } else if (player2.turn == true && e.target.textContent == '' && player2.ai == false) {
                gameBoard[e.target.id] = player2.symbol;
                box.textContent = player2.symbol;
                box.style.color = '#98C1D9'
                player1.turn = true;
                player2.turn = false;

                console.log(gameBoard)
            } else {
                return;
            }
        });
    })

})();
    return { playerTurn }
})();

const renderArrayToScreen = (() => {
    const cellBox = document.querySelectorAll(".cell");
    cellBox[0].textContent = gameBoardModule.gameBoard;
    return {}
})();




// // Creates Computer Opponent
// const createComputerPlayer = (() => {
//     function create(symbol = 'O') {
//     return {
//         name: "ComputerPlayer",
//         symbol: symbol
//     };
// }
//     return {
//         create: create
//     };
// })();



// let ComputerPlayer = createComputerPlayer.create()
// console.log(ComputerPlayer)
renderArrayToScreen;
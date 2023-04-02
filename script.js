// Module to setup GameBoard
const gameBoardModule = (function () {
    // Factory Function to create PlayerOne
    const createPlayer = (name, symbol, ai, turn) => {
        return { name, symbol, ai, turn }
    };

    const player1 = createPlayer("PlayerOne", "X", false, true)
    const player2 = createPlayer("PlayerTwo", "O", false, false)
    console.log(player1, player2)

    let gameBoard = ['', '', '', '', '', '', '', '', '']

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];

    function checkForWinner(symbol) {
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (gameBoard[a] === symbol && gameBoard[b] === symbol && gameBoard[c] === symbol) {
                return true
            }
        }
        return false
    }

    function makeMove(index, symbol) {
        gameBoard[index] = symbol;
    }


    // Function for making a move
    const playerTurn = (function () {
        const box = document.querySelectorAll(".cell")
        box.forEach(box => {
            box.addEventListener('click', e => {
                if (player1.turn && e.target.textContent == '') {
                    makeMove(e.target.id, player1.symbol);
                    box.textContent = player1.symbol;
                    box.style.color = '#EE6C4D'
                    player1.turn = false;
                    player2.turn = true;
                    if (checkForWinner(player1.symbol)) {
                        console.log(player1.name + " wins!")
                    }
                } else if (player2.turn && e.target.textContent == '' && player2.ai == false) {
                    makeMove(e.target.id, player2.symbol);
                    box.textContent = player2.symbol;
                    box.style.color = '#98C1D9'
                    player1.turn = true;
                    player2.turn = false;
                    if (checkForWinner(player2.symbol)) {
                        console.log(player2.name + " wins!")
                    }
                } else {
                    return;
                }
            });
        })

    })();
    return { makeMove, checkForWinner, playerTurn, player1, player2 }
})();

// const renderArrayToScreen = (() => {
//     const cellBox = document.querySelectorAll(".cell");
//     cellBox[0].textContent = gameBoardModule.gameBoard;
//     return {}
// })();




// // // Creates Computer Opponent
// // const createComputerPlayer = (() => {
// //     function create(symbol = 'O') {
// //     return {
// //         name: "ComputerPlayer",
// //         symbol: symbol
// //     };
// // }
// //     return {
// //         create: create
// //     };
// // })();



// // let ComputerPlayer = createComputerPlayer.create()
// // console.log(ComputerPlayer)
// renderArrayToScreen;
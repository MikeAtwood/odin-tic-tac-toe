// Module to setup GameBoard
const gameBoardModule = (function() {
    let gameBoard = [];
    return {}
})();

const displayControllerModule = (function() {
    let testFunction = () => console.log("testing private function call inside of a module obj...")
    return {testFunction}
})();

// Factory Function to create PlayerOne
const createPlayer = (name, symbol = 'X') => {
    return {
        name: name,
        symbol: symbol
    }
}

const Me = createPlayer("PlayerOne")
console.log(Me)

// Creates Computer Opponent
const createComputerPlayer = (function() {
    function create(symbol = 'O') {
    return {
        name: "ComputerPlayer",
        symbol: symbol
    };
}
    return {
        create: create
    };
})();



let ComputerPlayer = createComputerPlayer.create()
console.log(ComputerPlayer)
let GameBoard = [];

const Player = (name, symbol = 'X') => {
    return {
        name: name,
        symbol: symbol
    }
}

const Me = Player("Mike")
console.log(Me.symbol)

const createComputerPlayer = (symbol = 'O') => {
    return {
        symbol: symbol
    }
}
let ComputerPlayer = createComputerPlayer()
console.log(ComputerPlayer.symbol)
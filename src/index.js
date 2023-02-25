const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const DOMBoard = document.querySelectorAll(".cell");
    return { board, DOMBoard };
})();
const player = (name, color) => {
    const claimCell = (e, color) => {
        e.target.setAttribute("style", `background-color: ${color}`);
    };
    return { name, color, claimCell };
};
const player1 = player("Player 1", "green");
const player2 = player("Player 2", "red");
const findWinner = (board) => {
    if ((board[0] === board[3] &&
        board[3] === board[6] &&
        board[0] === player1.color) ||
        (board[1] === board[4] &&
            board[4] === board[7] &&
            board[1] === player1.color) ||
        (board[2] === board[5] &&
            board[5] === board[8] &&
            board[2] === player1.color) ||
        (board[0] === board[1] &&
            board[1] === board[2] &&
            board[0] === player1.color) ||
        (board[3] === board[4] &&
            board[4] === board[5] &&
            board[3] === player1.color) ||
        (board[6] === board[7] &&
            board[7] === board[8] &&
            board[6] === player1.color) ||
        (board[0] === board[4] &&
            board[4] === board[8] &&
            board[0] === player1.color)) {
        return "Player 1 wins.";
    }
    else if ((board[0] === board[3] &&
        board[3] === board[6] &&
        board[0] === player2.color) ||
        (board[1] === board[4] &&
            board[4] === board[7] &&
            board[1] === player2.color) ||
        (board[2] === board[5] &&
            board[5] === board[8] &&
            board[2] === player2.color) ||
        (board[0] === board[1] &&
            board[1] === board[2] &&
            board[0] === player2.color) ||
        (board[3] === board[4] &&
            board[4] === board[5] &&
            board[3] === player2.color) ||
        (board[6] === board[7] &&
            board[7] === board[8] &&
            board[6] === player2.color)) {
        return "Player 2 wins.";
    }
};
function checkArrayFullness(array) {
    let taken = 0;
    for (let item of array) {
        if (item) {
            taken += 1;
        }
        else {
            return false;
        }
    }
    if (taken === array.length) {
        return true;
    }
}
function playGame() {
    let currentPlayer = player1;
    const UIBoard = gameBoard.DOMBoard;
    UIBoard.forEach((cell) => {
        cell.addEventListener("mousedown", (e) => {
            currentPlayer.claimCell(e, currentPlayer.color);
            gameBoard.board[Array.from(UIBoard).indexOf(cell)] = currentPlayer.color;
            cell.removeEventListener("mousedown", onmousemove);
            if (findWinner(gameBoard.board)) {
                alert(findWinner(gameBoard.board));
            }
            console.log(gameBoard.board);
            if (currentPlayer === player1) {
                currentPlayer = player2;
            }
            else {
                currentPlayer = player1;
            }
        });
    });
}
playGame();

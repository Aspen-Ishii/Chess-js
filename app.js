const gameBoard = document.querySelector("#gameboard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");

/// Array of pieces
const width = 8;
const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
];

function createBoard() {
    startPieces.forEach((piece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = piece;
        square.setAttribute('square-id', i);
        //square.classList.add('beige')
        //Alt tile color
        const row = Math.floor ((63 - i) / 8) + 1
        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "beige" : "brown");
        } else {
            square.classList.add(i % 2 === 0 ?  "brown" : "beige");
        }

        if (piece !== '') {
            const pieceElement = square.querySelector('svg');
            if (pieceElement) {
                if (i <= 15) {
                    pieceElement.classList.add("black");
                } else if (i >= 48) {
                    pieceElement.classList.add("white");
                }
            }
        }
        gameBoard.append(square);
    })
}

createBoard();
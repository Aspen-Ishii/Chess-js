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
    const fragment = document.createDocumentFragment();

    startPieces.forEach((piece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = piece;
        square.setAttribute('square-id', i);

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
                pieceElement.setAttribute('draggable', true);
                square.appendChild(pieceElement);
            }
        }
        fragment.appendChild(square);
    });
    gameBoard.appendChild(fragment);
}

// Select all squares and add drag event listeners after the board is created
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.closest('.square').getAttribute('square-id'));
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const startPositionId = e.dataTransfer.getData('text/plain');
    const targetSquareId = e.target.closest('.square').getAttribute('square-id');
}

/*
const allSquares = document.querySelectorAll("#gameboard .square");
console.log(allSquares);

allSquares.forEach(square => {
    square.addEventListener ('dragstart', dragStart);
});

let startPositionId
let draggedElement
function dragStart (eventHandler) {
    startPositionId = eventHandler.target.parentNode.getAttribute('square-id');
    draggedElement = eventHandler.target
}
*/
// Add event listeners for drag-and-drop functionality
gameBoard.addEventListener('dragover', allowDrop);
gameBoard.addEventListener('drop', drop);

createBoard();
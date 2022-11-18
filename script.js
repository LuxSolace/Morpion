"use strict";

const displayElement = (() => {

    const form = document.getElementById("form");
    const boardContainer = document.getElementById("board-container");

    const renderBoard = () => {
        let gameBoardHtml = ``;
        gameBoard.board.forEach(element => {
            gameBoardHtml += `<div class="square">${element}</div>`
        });
        boardContainer.innerHTML = gameBoardHtml;
    };

    return {form, boardContainer, renderBoard}
    
})();

const gameBoard = (() => {

    let board = [
        "0", "0", "X", 
        "0", "X", "0",
        "X", "0", "0"
    ];

    const winningCombo = [
        [
            1, 1, 1,
            0, 0, 0,
            0, 0, 0,
        ], 
        [
            0, 0, 0,
            1, 1, 1,
            0, 0, 0,
        ], 
        [
            0, 0, 0,
            0, 0, 0,
            1, 1, 1,
        ],
        [
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
        ],
        [
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ],
        [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ],
        [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ],
        [
            0, 0, 1,
            0, 1, 0,
            1, 0, 0,
        ]
    ];

    return {board, winningCombo}

})();

displayElement.renderBoard();
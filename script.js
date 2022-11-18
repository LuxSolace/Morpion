"use strict";

const Player = (name, marker, isTheirTurn) => {
    let score = 0;
    let board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];

    return {name, marker, isTheirTurn, score, board}
}

const gameController = (() => {
    const startGame = (formData) => {
        console.log(formData.get("FirstPlayerName"));
    }
    return {startGame}
})();

const displayElement = (() => {
    const form = document.getElementById("form");
    const boardContainer = document.getElementById("board-container");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        gameController.startGame(formData);
    })

    const renderBoard = () => {
        let gameBoardHtml = ``;
        gameBoard.board.forEach((item, index) => {
            gameBoardHtml += `<div 
            data-array-index="${index}"
            >${item}</div>`
        });
        boardContainer.innerHTML = gameBoardHtml;
    };

    return {form, boardContainer, renderBoard}
})();

const gameBoard = (() => {
    let board = [
        "", "", "", 
        "", "", "",
        "", "", ""
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